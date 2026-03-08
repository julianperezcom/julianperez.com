const APP_ID = '016523740f876056f578583f5fdb51d5'
const ACCOUNT_ID = '1290950'

export interface BITEvent {
  id: string
  title: string
  datetime: string
  url: string
  venue: { name: string; city: string; country: string }
  offers: Array<{ type: string; url: string }>
}

export async function fetchUpcomingEvents(): Promise<BITEvent[]> {
  const res = await fetch(
    `https://rest.bandsintown.com/artists/id_${ACCOUNT_ID}/events?app_id=${APP_ID}&date=upcoming`
  )
  const data = await res.json()
  return Array.isArray(data) ? data : []
}
