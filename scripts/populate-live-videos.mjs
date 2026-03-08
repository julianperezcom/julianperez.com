import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'esbhlkf9',
  dataset: 'production',
  apiVersion: '2026-03-08',
  token: process.env.SANITY_TOKEN,
  useCdn: false,
})

const liveVideos = [
  { title: 'Julian Perez | Hypnotic School | Barcelona (Spain)',                              youtubeUrl: 'https://www.youtube.com/watch?v=qLrssPZSOeg', order: 1  },
  { title: 'Those mornings at S.A.S.H playing b2b with Arapu',                               youtubeUrl: 'https://www.youtube.com/watch?v=Vi1hy5WKCww', order: 2  },
  { title: 'Julian Perez - ENTER Ibiza Week 3 @ Space, Ibiza 17.07.2014',                   youtubeUrl: 'https://www.youtube.com/watch?v=IPmK5W0cv-I', order: 3  },
  { title: 'Julian Perez @ tINI & The Gang Lima, Peru 07.02.2015',                          youtubeUrl: 'https://www.youtube.com/watch?v=qJ-b_7BlfMg', order: 4  },
  { title: 'Julian Perez @ Le Journal de la Musique LIVE Stream (19.02.2017)',               youtubeUrl: 'https://www.youtube.com/watch?v=MzkaIvF9_cQ', order: 5  },
  { title: 'Julian Perez @ Sunwaves Festival SW26 18.08.2019',                               youtubeUrl: 'https://www.youtube.com/watch?v=yNguNIfdpGU', order: 6  },
  { title: 'Julian Perez @ MOTUS, Liverpool UK 26.02.2022',                                  youtubeUrl: 'https://www.youtube.com/watch?v=jggaCy8Cnwc', order: 7  },
  { title: 'Julian Perez x Roots @ X Private Club, Madrid 11.01.2020',                      youtubeUrl: 'https://www.youtube.com/watch?v=2l6JG24hbow', order: 8  },
  { title: 'Julian Perez at Ibiza Underground 28.09.2019',                                   youtubeUrl: 'https://www.youtube.com/watch?v=Ll3TRnYPjSM', order: 9  },
  { title: 'Julian Perez x Berg Audio: Watermelon at Cafe Del Mar Off Week 15.06.2019',     youtubeUrl: 'https://www.youtube.com/watch?v=iadYcYxlbNc', order: 10 },
  { title: 'Julian Perez x Censored at Veo Veo. Santo Domingo, Dominican Republic',         youtubeUrl: 'https://www.youtube.com/watch?v=cZLJIgBwDq0', order: 11 },
  { title: 'Julian Perez ▼ Alandala Rooftop Closing Party 08.09.2018',                      youtubeUrl: 'https://www.youtube.com/watch?v=3zLJEBLf7Fo', order: 12 },
  { title: 'ROSS 248 aka John Dimas b2b Julian Perez @ Picnic London After Party',           youtubeUrl: 'https://www.youtube.com/watch?v=Lk4FK3hUWmg', order: 13 },
  { title: 'Julian Perez x Shout @ The BIG Club Turin, Italy 20.01.2018',                   youtubeUrl: 'https://www.youtube.com/watch?v=RBz-PyQR-d4', order: 14 },
  { title: 'Julian Perez b2b Franco Cinelli x MYBEAT @ Crobar Buenos Aires 23.03.2018',     youtubeUrl: 'https://www.youtube.com/watch?v=vpIu6rlIczY', order: 15 },
  { title: 'Julian Perez x MYBEAT @ Crobar Buenos Aires 23.03.2018',                        youtubeUrl: 'https://www.youtube.com/watch?v=aDkfaL2nkX0', order: 16 },
  { title: 'Julian Perez @ Music Inside Festival 2016. MIF Rimini, Italy 06.05.2017',       youtubeUrl: 'https://www.youtube.com/watch?v=oDJvVYZnV6M', order: 17 },
  { title: 'Julian Perez @ Tenax, Florence 18.09.2016',                                     youtubeUrl: 'https://www.youtube.com/watch?v=QrYYcUwzzXo', order: 18 },
  { title: 'Julian Perez @ Clique. Brescia, IT. 08.10.2016 (1/2)',                          youtubeUrl: 'https://www.youtube.com/watch?v=1DUZzT7qvnE', order: 19 },
  { title: 'Julian Perez @ Clique. Brescia, IT. 08.10.2016 (2/2)',                          youtubeUrl: 'https://www.youtube.com/watch?v=UfRlH9y6aKs', order: 20 },
  { title: 'Julian Perez @ Robert Johnson, Offenbach 18.06.2014',                           youtubeUrl: 'https://www.youtube.com/watch?v=yLziCCL26Yc', order: 21 },
  { title: 'Julian Perez @ Alandala Panorama Cluj Napoca, Romania 18.06.2016',              youtubeUrl: 'https://www.youtube.com/watch?v=XLA_eLMnheM', order: 22 },
  { title: 'Julian Perez @ Sunwaves Festival SW19 29.04.2016',                              youtubeUrl: 'https://www.youtube.com/watch?v=cxpc0rVoi3g', order: 23 },
  { title: 'Julian Perez @ FUSE London at Village Underground 7.2.2016',                    youtubeUrl: 'https://www.youtube.com/watch?v=p_h9tT4-udA', order: 24 },
  { title: 'Julian Perez, Enzo Siragusa & Rossko at FUSE London Studios',                   youtubeUrl: 'https://www.youtube.com/watch?v=yfAemqyocF8', order: 25 },
  { title: 'Julian Perez @ Kristal Glam, Bucharest, Romania 09.01.2016',                    youtubeUrl: 'https://www.youtube.com/watch?v=8jl_9QQP7OI', order: 26 },
  { title: 'Julian Perez @ Rashomon Club, Rome 26.12.2014',                                 youtubeUrl: 'https://www.youtube.com/watch?v=zIMZseCyfSE', order: 27 },
  { title: 'Julian Perez @ Minù, Circolo Degli Illuminati, Rome 26.12.2015 at 5AM',        youtubeUrl: 'https://www.youtube.com/watch?v=WP6PwNrDRxM', order: 28 },
  { title: 'Julian Perez @ HUND, LIV. Bassano del Grappa, Italy 25.12.2015',               youtubeUrl: 'https://www.youtube.com/watch?v=N7V1M4xN5qc', order: 29 },
  { title: 'Julian Perez @ Outcast, Supermarket. Turin, Italy 11.12.2015',                  youtubeUrl: 'https://www.youtube.com/watch?v=AefpixXQU-0', order: 30 },
  { title: 'Guti B2B Julian Perez @ BNP, Espacio Quality. Córdoba, Argentina 11.09.2015',  youtubeUrl: 'https://www.youtube.com/watch?v=sx3S_X2tXww', order: 31 },
  { title: 'Julian Perez @ BNP, Espacio Quality. Córdoba, Argentina 11.09.2015',            youtubeUrl: 'https://www.youtube.com/watch?v=cE7jgz4muzE', order: 32 },
  { title: 'Julian Perez @ Outcast, Supermarket. Turin, Italy 30.04.2015',                  youtubeUrl: 'https://www.youtube.com/watch?v=VsTVH28s5zU', order: 33 },
  { title: 'Julian Perez @ REIBU. La Fabbrica del Vapore, Milan 03.05.2015',               youtubeUrl: 'https://www.youtube.com/watch?v=rgktEb_9VJk', order: 34 },
  { title: 'Julian Perez @ Crobar Buenos Aires, Argentina 13.02.2015',                      youtubeUrl: 'https://www.youtube.com/watch?v=ikJVdeMGxKQ', order: 35 },
  { title: 'Julian Perez @ Verboten, Brooklyn NYC 24.01.2015',                              youtubeUrl: 'https://www.youtube.com/watch?v=bpPOm6zlGCQ', order: 36 },
  { title: 'Julian Perez @ FUSE London at Village Underground 14.12.2014',                  youtubeUrl: 'https://www.youtube.com/watch?v=WwJJLj-Ehdk', order: 37 },
  { title: 'Julian Perez @ Main Sounds, Casa Presei Libere. Bucharest 20.12.2014',          youtubeUrl: 'https://www.youtube.com/watch?v=5OehTRgH_nw', order: 38 },
]

async function run() {
  // 1. Delete existing live video docs
  console.log('Deleting existing live video docs...')
  const existing = await client.fetch(`*[_type == "musicSet" && category == "live"]{ _id }`)
  for (const doc of existing) await client.delete(doc._id)
  console.log(`  Deleted ${existing.length} docs.\n`)

  // 2. Mark existing DJ sets (those with youtubeUrl but no category)
  console.log('Tagging existing DJ sets with category: dj-set...')
  const djSets = await client.fetch(`*[_type == "musicSet" && defined(youtubeUrl) && !defined(category)]{ _id }`)
  for (const doc of djSets) {
    await client.patch(doc._id).set({ category: 'dj-set' }).commit()
  }
  // Also tag SC sets
  const scSets = await client.fetch(`*[_type == "musicSet" && defined(soundcloudUrl) && !defined(category)]{ _id }`)
  for (const doc of scSets) {
    await client.patch(doc._id).set({ category: 'dj-set' }).commit()
  }
  console.log(`  Tagged ${djSets.length + scSets.length} DJ set docs.\n`)

  // 3. Create live videos
  console.log(`Creating ${liveVideos.length} live video docs...`)
  for (const v of liveVideos) {
    await client.create({ _type: 'musicSet', category: 'live', ...v })
    console.log(`  ✓ ${v.title.slice(0, 70)}`)
  }

  console.log('\nDone!')
}

run().catch(err => { console.error('Error:', err.message); process.exit(1) })
