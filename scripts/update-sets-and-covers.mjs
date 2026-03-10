import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'esbhlkf9',
  dataset: 'production',
  apiVersion: '2026-03-08',
  token: process.env.SANITY_TOKEN,
  useCdn: false,
})

const sleep = ms => new Promise(r => setTimeout(r, ms))

// ── SOUNDCLOUD SETS (from playlist sets-podcasts) ─────────────────────────────
// 16 sets total — 5 fully parsed from mockup HTML.
// The other 11 require JS rendering; using available data from mockup + known URLs.
const scSets = [
  {
    title: 'Julian Perez — SUPERSONICOS 31.MAR.2023',
    venue: 'Ibiza Sonica',
    date: '2023-03-31',
    soundcloudUrl: 'https://soundcloud.com/ibizasonica/julian-perez-supersonicos-31mar2023',
    duration: '59:21',
    order: 1,
  },
  {
    title: 'FUTURΣWAVES 09 — Julian Perez',
    venue: 'Meoko',
    soundcloudUrl: 'https://soundcloud.com/meoko/futurwaves-09-julian-perez',
    duration: '1:25:27',
    order: 2,
  },
  {
    title: '#138 | Julian Perez (ES)',
    venue: 'Recorder',
    soundcloudUrl: 'https://soundcloud.com/recorder-13/138-julian-perez-es',
    duration: '1:01:01',
    order: 3,
  },
  {
    title: 'S*A*S*H Cast 050 — Julian Perez',
    venue: 'Live at The Terrace',
    date: '2019-01-01',
    soundcloudUrl: 'https://soundcloud.com/s-a-s-h-sundays/sash-cast-050-julian-perez',
    duration: '1:48:46',
    order: 4,
  },
  {
    title: '#119 — Julian Perez',
    venue: 'Sonder London',
    soundcloudUrl: 'https://soundcloud.com/sonderlondon/119-julian-perez',
    duration: '58:36',
    order: 5,
  },
]

// ── YOUTUBE SETS (from playlist PLLRxDKy3npviQXeQI5fRtp0FGNKJIfYNN) ───────────
const ytSets = [
  { title: 'Julian Perez x FUSE London NYD @ Village Underground London (1.1.2013)',  youtubeUrl: 'https://www.youtube.com/watch?v=CRdO8A5r_hE', order: 101 },
  { title: 'Julian Perez x HAZE at Gazgolder, Moscow (10.02.2018)',                   youtubeUrl: 'https://www.youtube.com/watch?v=T2mneD-ylOI', order: 102 },
  { title: 'Subwax Distribution Podcast 01 — Julian Perez (03.2017)',                 youtubeUrl: 'https://www.youtube.com/watch?v=MxwsJZWS8UY', order: 103 },
  { title: 'The Bandwagon 112: Julian Perez Live @ Halcyon The Shop, Brooklyn (2013)',youtubeUrl: 'https://www.youtube.com/watch?v=zPHT7Fi9cYQ', order: 104 },
  { title: 'Julian Perez x IbzaVice Miami at The Catalina Hotel WMC \'08',            youtubeUrl: 'https://www.youtube.com/watch?v=1LlOHwTIIJM', order: 105 },
  { title: 'Julian Perez @ Le Journal de la Musique LIVE Stream (19.02.2017)',        youtubeUrl: 'https://www.youtube.com/watch?v=yNguNIfdpGU', order: 106 },
  { title: 'Julian Perez x Reverb Times at Grial Ibiza, August 2008',                youtubeUrl: 'https://www.youtube.com/watch?v=z9kJoWuob8A', order: 107 },
  { title: 'Julian Perez @ Stay, NYC (08.04.2010)',                                  youtubeUrl: 'https://www.youtube.com/watch?v=c_dENuG9etA', order: 108 },
  { title: 'Full 1h Julian Perez @ Circus Company, Ushuaia Ibiza (12.06.2011)',       youtubeUrl: 'https://www.youtube.com/watch?v=9DInFJN871M', order: 109 },
  { title: 'Julian Perez x Park & Ride at Blu, Ibiza (15.06.2010)',                  youtubeUrl: 'https://www.youtube.com/watch?v=2v1dHFLe-uw', order: 110 },
  { title: 'Julian Perez — Basix and Chill Podcast (20.05.2020)',                    youtubeUrl: 'https://www.youtube.com/watch?v=QAPHMdfRhDg', order: 111 },
  { title: 'Julian Perez Live at Sunwaves Festival SW19 (29.04.2016)',                youtubeUrl: 'https://www.youtube.com/watch?v=1fbR-RRqtHU', order: 112 },
  { title: 'Julian Perez x Atipic, Bucharest (13.10.2018)',                          youtubeUrl: 'https://www.youtube.com/watch?v=lnKZSWt_m9g', order: 113 },
  { title: 'Julian Perez @ Sunwaves Festival SW26 (20.08.2019)',                     youtubeUrl: 'https://www.youtube.com/watch?v=ZEHFpkPi5jU', order: 114 },
  { title: 'Meoko 157 | Julian Perez (26.08.2014)',                                  youtubeUrl: 'https://www.youtube.com/watch?v=cv_ml9LEkuY', order: 115 },
  { title: 'Julian Perez Podcast For People Like US (30.03.2015)',                   youtubeUrl: 'https://www.youtube.com/watch?v=q3ktMjshZIo', order: 116 },
  { title: 'Julian Perez at Hypnotic School, Barcelona (01.09.2018)',                youtubeUrl: 'https://www.youtube.com/watch?v=DUZ-AzPNA7Q', order: 117 },
  { title: 'Julian Perez b2b Robert Dietz @ GOSU in store session',                  youtubeUrl: 'https://www.youtube.com/watch?v=Vi1hy5WKCww', order: 118 },
  { title: 'Julian Perez podcast for "DEJA-WU" — REX CLUB (9.05.2014)',             youtubeUrl: 'https://www.youtube.com/watch?v=Mof_qOJbU6k', order: 119 },
]

// ── RELEASE DISCOGS IDs (id → discogsType) ───────────────────────────────────
const discogsMap = [
  { title: 'Nelipot EP',                     id: 2546933,  type: 'release' },
  { title: 'Lights Down EP',                  id: 5961500,  type: 'release' },
  { title: 'Troops In The Hood',              id: 2934245,  type: 'release' },
  { title: 'Deep Craziness EP',               id: 3430375,  type: 'release' },
  { title: 'Prominently EP',                  id: 3689965,  type: 'release' },
  { title: 'FAS003',                          id: 3888076,  type: 'release' },
  { title: 'Royal Token EP',                  id: 4808651,  type: 'release' },
  { title: 'The Corridor EP',                 id: 4879951,  type: 'release' },
  { title: 'FAS007.1',                        id: 1496006,  type: 'master'  },
  { title: 'Unknown Source',                  id: 6074391,  type: 'release' },
  { title: 'FAS007.2',                        id: 1496004,  type: 'master'  },
  { title: 'FAS010',                          id: 7571264,  type: 'release' },
  { title: 'Now, After',                      id: 8210859,  type: 'release' },
  { title: 'Solemnity',                       id: 9511601,  type: 'release' },
  { title: 'Sputnik EP',                      id: 986764,   type: 'master'  },
  { title: 'A Raw Belief',                    id: 11245450, type: 'release' },
  { title: 'Girada Max',                      id: 1254736,  type: 'master'  },
  { title: 'Camina O Revienta',               id: 1572742,  type: 'master'  },
  { title: 'Off The Beaten Tracks',           id: 13358484, type: 'release' },
  { title: '3 Days',                          id: 1572746,  type: 'master'  },
  { title: 'Tales From The Parking Lot',      id: 1639307,  type: 'master'  },
  { title: 'Break-Even',                      id: 20760967, type: 'release' },
  { title: 'Command Station',                 id: 26177825, type: 'release' },
  { title: 'FAS012+1',                        id: 3734382,  type: 'master'  },
  { title: 'A Journey Through The Beatscape', id: 30001963, type: 'release' },
  { title: 'State Of Euphobia',               id: 33175857, type: 'release' },
  { title: 'FAS014',                          id: 3734394,  type: 'master'  },
]

async function fetchDiscogsCover(discogsId, type) {
  const url = type === 'master'
    ? `https://api.discogs.com/masters/${discogsId}`
    : `https://api.discogs.com/releases/${discogsId}`
  try {
    const res = await fetch(url, {
      headers: { 'User-Agent': 'julianperez-website/1.0 +https://julianperez.com' }
    })
    if (!res.ok) return null
    const data = await res.json()
    const images = data.images ?? []
    const primary = images.find(i => i.type === 'primary') ?? images[0]
    return primary?.uri ?? null
  } catch {
    return null
  }
}

async function run() {
  // ── 1. Delete all existing musicSet documents ─────────────────────────────
  console.log('Deleting existing musicSet documents...')
  const existing = await client.fetch(`*[_type == "musicSet"]{ _id }`)
  for (const doc of existing) {
    await client.delete(doc._id)
  }
  console.log(`  Deleted ${existing.length} documents.\n`)

  // ── 2. Create SoundCloud sets ─────────────────────────────────────────────
  console.log(`Creating ${scSets.length} SoundCloud sets...`)
  for (const set of scSets) {
    await client.create({ _type: 'musicSet', ...set })
    console.log(`  ✓ SC: ${set.title}`)
  }

  // ── 3. Create YouTube sets ────────────────────────────────────────────────
  console.log(`\nCreating ${ytSets.length} YouTube sets...`)
  for (const set of ytSets) {
    await client.create({ _type: 'musicSet', ...set })
    console.log(`  ✓ YT: ${set.title}`)
  }

  // ── 4. Fetch Discogs covers and patch releases ────────────────────────────
  console.log('\nFetching Discogs cover images...')
  const releases = await client.fetch(`*[_type == "release"]{ _id, title }`)

  for (const entry of discogsMap) {
    const sanityDoc = releases.find(r => r.title === entry.title)
    if (!sanityDoc) {
      console.log(`  ⚠ Not found in Sanity: ${entry.title}`)
      continue
    }

    await sleep(2500) // Discogs rate limit: 25 req/min unauthenticated
    const coverUrl = await fetchDiscogsCover(entry.id, entry.type)

    if (coverUrl) {
      await client.patch(sanityDoc._id).set({ coverUrl }).commit()
      console.log(`  ✓ ${entry.title} → cover found`)
    } else {
      console.log(`  – ${entry.title} → no cover available`)
    }
  }

  console.log('\nAll done!')
}

run().catch(err => {
  console.error('Error:', err.message)
  process.exit(1)
})
