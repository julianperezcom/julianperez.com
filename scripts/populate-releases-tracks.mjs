import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'esbhlkf9',
  dataset: 'production',
  apiVersion: '2026-03-08',
  token: process.env.SANITY_TOKEN,
  useCdn: false,
})

// Helper: determine releaseType from Discogs format string
function getReleaseType(format, title) {
  if (!format) return 'EP'
  const f = format.toLowerCase()
  if (f.includes('2xlp') || f.includes('album') || f.includes('cass')) return 'LP'
  if (f.includes('lp')) return 'LP'
  if (f.includes('ep')) return 'EP'
  if (f.includes('12"') || f.includes('12\\"')) return 'EP'
  return 'EP'
}

// ── RELEASES (from Discogs) ───────────────────────────────────────────────────
const releases = [
  { title: 'Nelipot EP',                     year: 2010, label: 'Recycle Records',           format: 'EP',     discogsId: 2546933 },
  { title: 'Lights Down EP',                  year: 2010, label: 'Lowpitch',                  format: 'EP',     discogsId: 5961500 },
  { title: 'Troops In The Hood',              year: 2011, label: 'Lowpitch',                  format: 'EP',     discogsId: 2934245 },
  { title: 'Deep Craziness EP',               year: 2012, label: 'Recycle Records',           format: 'EP',     discogsId: 3430375 },
  { title: 'Prominently EP',                  year: 2012, label: 'VIVa MUSiC Limited',        format: 'EP',     discogsId: 3689965 },
  { title: 'FAS003',                          year: 2012, label: 'Fathers & Sons Productions',format: 'EP',     discogsId: 3888076 },
  { title: 'Royal Token EP',                  year: 2013, label: 'Recycle Records',           format: 'EP',     discogsId: 4808651 },
  { title: 'The Corridor EP',                 year: 2013, label: 'Act Natural Records',       format: 'EP',     discogsId: 4879951 },
  { title: 'FAS007.1',                        year: 2013, label: 'Fathers & Sons Productions',format: 'EP',     discogsId: null, isMaster: true, masterId: 1496006 },
  { title: 'Unknown Source',                  year: 2014, label: 'Drumma',                    format: 'EP',     discogsId: 6074391 },
  { title: 'FAS007.2',                        year: 2014, label: 'Fathers & Sons Productions',format: 'EP',     discogsId: null, isMaster: true, masterId: 1496004 },
  { title: 'FAS010',                          year: 2015, label: 'Fathers & Sons Productions',format: 'EP',     discogsId: 7571264 },
  { title: 'Now, After',                      year: 2016, label: 'Raum...musik',              format: 'EP',     discogsId: 8210859 },
  { title: 'Solemnity',                       year: 2016, label: 'Fathers & Sons Productions',format: 'LP',     discogsId: 9511601 },
  { title: 'Sputnik EP',                      year: 2016, label: 'Girada Unlimited',          format: 'EP',     discogsId: null, isMaster: true, masterId: 986764 },
  { title: 'A Raw Belief',                    year: 2017, label: 'Girada Unlimited',          format: 'EP',     discogsId: 11245450 },
  { title: 'Girada Max',                      year: 2017, label: 'Girada Unlimited',          format: 'EP',     discogsId: null, isMaster: true, masterId: 1254736 },
  { title: 'Camina O Revienta',               year: 2018, label: 'Girada Unlimited',          format: 'EP',     discogsId: null, isMaster: true, masterId: 1572742 },
  { title: 'Off The Beaten Tracks',           year: 2019, label: 'Rawax',                     format: 'EP',     discogsId: 13358484 },
  { title: '3 Days',                          year: 2019, label: 'Girada Unlimited',          format: 'EP',     discogsId: null, isMaster: true, masterId: 1572746 },
  { title: 'Tales From The Parking Lot',      year: 2019, label: 'Girada Unlimited',          format: 'EP',     discogsId: null, isMaster: true, masterId: 1639307 },
  { title: 'Break-Even',                      year: 2021, label: 'Girada Unlimited',          format: 'LP',     discogsId: 20760967 },
  { title: 'Command Station',                 year: 2023, label: 'Girada Unlimited',          format: 'EP',     discogsId: 26177825 },
  { title: 'FAS012+1',                        year: 2023, label: 'Fathers & Sons Productions',format: 'EP',     discogsId: null, isMaster: true, masterId: 3734382 },
  { title: 'A Journey Through The Beatscape', year: 2024, label: 'Girada Unlimited',          format: 'LP',     discogsId: 30001963 },
  { title: 'State Of Euphobia',               year: 2025, label: 'Girada Unlimited',          format: 'EP',     discogsId: 33175857 },
  { title: 'FAS014',                          year: 2025, label: 'Fathers & Sons Productions',format: 'EP',     discogsId: null, isMaster: true, masterId: 3734394 },
]

// ── TRACKS (YouTube releases playlist) ───────────────────────────────────────
const tracks = [
  { title: 'Julian Perez podcast for "DEJA-WU" - REX CLUB - 9.05.2014',        youtubeUrl: 'https://www.youtube.com/watch?v=Mof_qOJbU6k', order: 1  },
  { title: 'Julian Perez b2b Robert Dietz @ GOSU in store session',             youtubeUrl: 'https://www.youtube.com/watch?v=Vi1hy5WKCww', order: 2  },
  { title: 'Preview: FAS014 on @fathersandsons',                                youtubeUrl: 'https://www.youtube.com/watch?v=8JmdaaFvfy8', order: 3  },
  { title: 'Julian Perez x FUSE London NYD @ Village Underground London (1.1.2013)', youtubeUrl: 'https://www.youtube.com/watch?v=CRdO8A5r_hE', order: 4 },
  { title: 'Subwax Distribution Podcast 01 - Julian Perez (03.2017)',            youtubeUrl: 'https://www.youtube.com/watch?v=MxwsJZWS8UY', order: 5  },
  { title: 'Julian Perez at Hypnotic School, Barcelona (01.09.2018)',            youtubeUrl: 'https://www.youtube.com/watch?v=DUZ-AzPNA7Q', order: 6  },
  { title: 'Julian Perez x HAZE at Gazgolder, Moscow (10.02.2018)',              youtubeUrl: 'https://www.youtube.com/watch?v=T2mneD-ylOI', order: 7  },
  { title: 'Julian Perez Podcast For People Like US (30.03.2015)',               youtubeUrl: 'https://www.youtube.com/watch?v=q3ktMjshZIo', order: 8  },
  { title: 'Meoko 157 | Julian Perez (26.08.2014)',                              youtubeUrl: 'https://www.youtube.com/watch?v=cv_ml9LEkuY', order: 9  },
  { title: 'Julian Perez @ Sunwaves Festival SW26 (20.08.2019)',                 youtubeUrl: 'https://www.youtube.com/watch?v=ZEHFpkPi5jU', order: 10 },
  { title: 'Julian Perez x Atipic, Bucharest (13.10.2018)',                      youtubeUrl: 'https://www.youtube.com/watch?v=lnKZSWt_m9g', order: 11 },
  { title: 'Julian Perez Live at Sunwaves Festival SW19 (29.04.2016)',           youtubeUrl: 'https://www.youtube.com/watch?v=1fbR-RRqtHU', order: 12 },
  { title: 'The Bandwagon 112: Julian Perez Live @ Halcyon The Shop, Brooklyn (06.10.2013)', youtubeUrl: 'https://www.youtube.com/watch?v=zPHT7Fi9cYQ', order: 13 },
  { title: 'Julian Perez - Basix and Chill Podcast (20.05.2020)',                youtubeUrl: 'https://www.youtube.com/watch?v=QAPHMdfRhDg', order: 14 },
  { title: 'Julian Perez x Park & Ride at Blu, Ibiza (15.06.2010)',             youtubeUrl: 'https://www.youtube.com/watch?v=2v1dHFLe-uw', order: 15 },
]

async function run() {
  console.log('Uploading releases and tracks to Sanity...\n')

  // Releases
  console.log(`Creating ${releases.length} releases...`)
  for (const r of releases) {
    const discogsUrl = r.isMaster
      ? `https://www.discogs.com/master/${r.masterId}`
      : r.discogsId
        ? `https://www.discogs.com/release/${r.discogsId}`
        : null

    await client.create({
      _type: 'release',
      title: r.title,
      releaseType: r.format,
      year: r.year,
      label: r.label,
      ...(discogsUrl ? { discogsUrl } : {}),
    })
    console.log(`  ✓ ${r.year} — ${r.title} (${r.format}, ${r.label})`)
  }

  // Tracks
  console.log(`\nCreating ${tracks.length} tracks...`)
  for (const t of tracks) {
    await client.create({
      _type: 'track',
      title: t.title,
      youtubeUrl: t.youtubeUrl,
      order: t.order,
    })
    console.log(`  ✓ ${t.title}`)
  }

  console.log('\nDone!')
}

run().catch(err => {
  console.error('Error:', err.message)
  process.exit(1)
})
