import { readFileSync } from 'fs'
import { join } from 'path'

export interface RAEvent {
  id: string
  title: string
  date: string
  venue: { name: string }
  area: { name: string }
  country: { name: string }
  contentUrl: string
}

export const RA_YEARS = [2024, 2023, 2022, 2020, 2019, 2018, 2017, 2016, 2015, 2014, 2013]

const RA_GQL = 'https://ra.co/graphql'

export async function fetchRAEventsByYear(year: number): Promise<RAEvent[]> {
  const query = `{ artist(slug:"julianperez") { events(limit:50,type:ARCHIVE,year:${year}) { id title date venue { name } area { name } country { name } contentUrl } } }`
  try {
    const res = await fetch(RA_GQL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'User-Agent': 'Mozilla/5.0',
        'Referer': 'https://ra.co',
      },
      body: JSON.stringify({ query }),
    })
    const json = await res.json()
    return json.data?.artist?.events ?? []
  } catch {
    return []
  }
}

export async function fetchAllRAEvents(): Promise<Record<string, RAEvent[]>> {
  // Try live fetch first; fall back to static JSON if RA blocks the request
  const results: Record<string, RAEvent[]> = {}
  let liveSuccess = false

  try {
    const fetches = await Promise.all(
      RA_YEARS.map(async (y) => ({ year: y, events: await fetchRAEventsByYear(y) }))
    )
    for (const { year, events } of fetches) {
      results[String(year)] = events
    }
    // Check if we got any events at all
    liveSuccess = Object.values(results).some(arr => arr.length > 0)
  } catch {
    liveSuccess = false
  }

  if (!liveSuccess) {
    // Fall back to static JSON
    try {
      const filePath = join(process.cwd(), 'public', 'data', 'ra-events.json')
      const raw = readFileSync(filePath, 'utf-8')
      return JSON.parse(raw)
    } catch {
      return {}
    }
  }

  return results
}

// Keep static fallback for client-side use
export function getStaticRAEvents(): Record<string, RAEvent[]> {
  try {
    const filePath = join(process.cwd(), 'public', 'data', 'ra-events.json')
    const raw = readFileSync(filePath, 'utf-8')
    return JSON.parse(raw)
  } catch {
    return {}
  }
}
