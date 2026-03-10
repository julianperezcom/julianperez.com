import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'esbhlkf9',
  dataset: 'production',
  apiVersion: '2026-03-08',
  token: process.env.SANITY_TOKEN,
  useCdn: false,
})

// Correct ID→title pairs scraped directly from playlist page
const liveVideos = [
  { id: 'qLrssPZSOeg', title: 'Julian Perez | Hypnotic School | Barcelona (Spain)' },
  { id: 'Vi1hy5WKCww', title: 'Julian Perez b2b Robert Dietz @ GOSU in store session' },
  { id: 'IPmK5W0cv-I', title: "Those mornings at S.A.S.H playing b2b with my bud Arapu are like.." },
  { id: 'qJ-b_7BlfMg', title: 'Julian Perez - ENTER Ibiza Week 3 @ Space, Ibiza 17.07.2014' },
  { id: 'MzkaIvF9_cQ', title: 'Julian Perez @ tINI & The Gang Lima, Peru 07.02.2015' },
  { id: 'yNguNIfdpGU', title: 'Julian Perez @ Le Journal de la Musique LIVE Stream (19.02.2017)' },
  { id: 'jggaCy8Cnwc', title: 'Julian Perez @ Sunwaves Festival SW26. 18.08.2019' },
  { id: '2l6JG24hbow', title: 'Julian Perez @ MOTUS, Liverpool. UK 26.02.2022' },
  { id: 'Ll3TRnYPjSM', title: 'Julian Perez x Roots @ X Private Club, Madrid 11.01.2020' },
  { id: 'iadYcYxlbNc', title: 'Julian Perez at Ibiza Underground 28.09.2019' },
  { id: 'cZLJIgBwDq0', title: 'Julian Perez x Berg Audio: Watermelon at Cafe Del Mar Off Week 15.06.2019' },
  { id: 'fWlUOGnI9nY', title: 'Julian Perez x Censored at Veo Veo. Santo Domingo, Dominican Republic' },
  { id: '3zLJEBLf7Fo', title: 'Julian Perez x Berg Audio: Watermelon at Cafe Del Mar Off Week (alt)' },
  { id: 'Lk4FK3hUWmg', title: 'Julian Perez ▼ Alandala Rooftop Closing Party 08.09.2018' },
  { id: 'RBz-PyQR-d4', title: 'ROSS 248 aka John Dimas b2b Julian Perez @ Picnic London After Party' },
  { id: 'vpIu6rlIczY', title: 'Julian Perez x Shout @ The BIG Club Turin, Italy 20.01.2018' },
  { id: 'aDkfaL2nkX0', title: 'Julian Perez b2b Franco Cinelli x MYBEAT @ Crobar Buenos Aires 23.03.2018' },
  { id: 'oDJvVYZnV6M', title: 'Julian Perez x MYBEAT @ Crobar Buenos Aires 23.03.2018' },
  { id: 'QrYYcUwzzXo', title: 'Julian Perez @ Music Inside Festival 2016. MIF Rimini, Italy 06.05.2017' },
  { id: '1DUZzT7qvnE', title: 'Julian Perez @ Tenax, Florence 18.09.2016' },
  { id: 'UfRlH9y6aKs', title: 'Julian Perez @ Clique. Brescia, IT. 08.10.2016 (1/2)' },
  { id: 'yLziCCL26Yc', title: 'Julian Perez @ Clique. Brescia, IT. 08.10.2016 (2/2)' },
  { id: '4SCr_V-cYkY', title: 'Julian Perez @ Robert Johnson, Offenbach 18.06.2014' },
  { id: 'XLA_eLMnheM', title: 'Julian Perez closing track at Underground Ibiza pre-opening party. April 2016' },
  { id: 'cxpc0rVoi3g', title: 'Julian Perez @ Alandala Panorama Cluj Napoca, Romania 18.06.2016' },
  { id: 'p_h9tT4-udA', title: 'Julian Perez @ Sunwaves Festival SW19, 29.04.2016' },
  { id: 'yfAemqyocF8', title: 'Julian Perez @ FUSE London at Village Underground 7.2.2016' },
  { id: '8jl_9QQP7OI', title: 'Julian Perez, Enzo Siragusa & Rossko at the London FUSE Studios' },
  { id: 'zIMZseCyfSE', title: 'Julian Perez @ Kristal Glam, Bucharest, Romania 09.01.2016' },
  { id: 'WP6PwNrDRxM', title: 'Julian Perez @ Rashomon Club, Rome 26.12.2014' },
  { id: 'N7V1M4xN5qc', title: 'Julian Perez @ Minù, Circolo Degli Illuminati, Rome 26.12.2015 at 5AM' },
  { id: 'AefpixXQU-0', title: 'Julian Perez @ HUND, LIV. Bassano del Grappa, Italy 25.12.2015' },
  { id: 'sx3S_X2tXww', title: 'Julian Perez @ Outcast, Supermarket. Turin, Italy 11.12.2015' },
  { id: 'cE7jgz4muzE', title: 'Guti B2B Julian Perez @ BNP, Espacio Quality. Córdoba, Argentina 11.09.2015' },
  { id: 'VsTVH28s5zU', title: 'Julian Perez @ BNP, Espacio Quality. Córdoba, Argentina 11.09.2015' },
  { id: 'rgktEb_9VJk', title: 'Julian Perez @ Outcast, Supermarket. Turin, Italy 30.04.2015' },
  { id: 'ikJVdeMGxKQ', title: 'Julian Perez @ REIBU. La Fabbrica del Vapore, Milan 03.05.2015' },
  { id: 'bpPOm6zlGCQ', title: 'Julian Perez @ Crobar Buenos Aires, Argentina 13.02.2015' },
  { id: 'WwJJLj-Ehdk', title: 'Julian Perez @ Verboten, Brooklyn NYC 24.01.2015' },
  { id: '5OehTRgH_nw', title: 'Julian Perez @ FUSE London at Village Underground 14.12.2014' },
  { id: 'KRV7z5VcHzk', title: 'Julian Perez @ Main Sounds, Casa Presei Libere. Bucharest 20.12.2014' },
  { id: 'JvD8TR0QoRw', title: 'Julian Perez @ Deep Revolution, Upset Club. Bergamo, Italy 13.12.2014' },
  { id: 'JXCt1e2j5vo', title: 'Julian Perez @ ENTER. Week 3. Space Ibiza 17.07.2014' },
  { id: 'xZwVSdVTlZc', title: 'Julian Perez @ RETURN. Justwax / Offwax Off Sonar 2014. Barcelona' },
  { id: 'DUZ-AzPNA7Q', title: 'Julian Perez at Hypnotic School, Barcelona 01.09.2018' },
  { id: '1pKZQxXNN2Q', title: 'Julian Perez b2b Rossko @ FUSE Ibiza Opening Party 17.05.2014' },
  { id: '8T-PC4G3vUs', title: 'Julian Perez @ FUSE London at Village Underground. Bank Holiday Rave 04.05.2014' },
  { id: 'DTiLse012A4', title: 'Julian Perez @ Fathers & Sons, Treehouse Miami WMC 2014' },
  { id: '66b11wS1uk8', title: 'Julian Perez @ Sunday Breakfast, Glass Raum closing party, Zurich 29.12.2013' },
  { id: 'ZT4u7kKA69E', title: 'Julian Perez @ Supermarket, Zurich 06.04.2013' },
  { id: 'FWSQNqFLLO4', title: 'Julian Perez @ Nordstern, Basel 30.03.2013' },
  { id: 'y-8P5hCZPUU', title: 'Julian Perez @ FUSE London NYD Rave 01.01.2013' },
  { id: 'gI0csMeUWTA', title: 'Julian Perez @ VIVa MUSiC Party, Mac Arena Mar. Sonar OFF 2012' },
  { id: 'vQG8EFFAWBk', title: 'Full 1h Julian Perez @ Circus Company, Ushuaia Ibiza 12.06.2011' },
  { id: 'b3ZgsO3j2So', title: 'Julian Perez @ Circus Company, Ushuaia Ibiza 12.06.2011 (cam 2)' },
  { id: 'BtnsSNS5omA', title: 'Julian Perez @ Cerca Trova Harehouse Party, London 07.05.2011' },
  { id: 'woN6FpS6BI4', title: 'Julian Perez - Stand Up 800 @ ToroMar Ibiza NYE 01.01.2011' },
  { id: 'wNSI5Erknbo', title: 'Julian Perez @ Kinder Garden GC 03.07.2010 (2/2)' },
  { id: 'p2w8bLvU3io', title: 'Julian Perez x Motion at Escape Garden. Transylvania 08.04.2023' },
  { id: '9DInFJN871M', title: 'Full 1h Julian Perez @ Circus Company, Ushuaia Ibiza (12.06.2011)' },
  { id: 'SuM5V2S-ou0', title: 'Julian Perez @ Big Club [Shout!]' },
  { id: 'EfewBINfYkk', title: 'Julian Perez @ Fathers & Sons, Treehouse Miami WMC 2014 (alt)' },
  { id: 'AT1IiegQF0E', title: 'Julian Perez @ Supermarket [Outcast] - Part 2' },
]

async function run() {
  console.log('Deleting existing live video docs...')
  const existing = await client.fetch(`*[_type == "musicSet" && category == "live"]{ _id }`)
  for (const doc of existing) await client.delete(doc._id)
  console.log(`  Deleted ${existing.length} docs.\n`)

  console.log(`Creating ${liveVideos.length} live video docs with correct titles...`)
  for (let i = 0; i < liveVideos.length; i++) {
    const v = liveVideos[i]
    await client.create({
      _type: 'musicSet',
      category: 'live',
      title: v.title,
      youtubeUrl: `https://www.youtube.com/watch?v=${v.id}`,
      order: i + 1,
    })
    console.log(`  ✓ ${v.id}  ${v.title.slice(0, 65)}`)
  }
  console.log('\nDone!')
}

run().catch(err => { console.error('Error:', err.message); process.exit(1) })
