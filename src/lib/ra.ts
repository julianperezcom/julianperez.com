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

function readRAData(): Record<string, RAEvent[]> {
  const filePath = join(process.cwd(), 'public', 'data', 'ra-events.json')
  const raw = readFileSync(filePath, 'utf-8')
  return JSON.parse(raw)
}

export async function getRAEventsByYear(year: number): Promise<RAEvent[]> {
  const data = readRAData()
  return data[String(year)] ?? []
}

export async function getAllRAEvents(): Promise<Record<string, RAEvent[]>> {
  return readRAData()
}
