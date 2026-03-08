import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'esbhlkf9',
  dataset: 'production',
  apiVersion: '2026-03-08',
  token: process.env.SANITY_TOKEN,
  useCdn: false,
})

// YouTube Music playlists scraped from @julianperezcom/releases
const albums = [
  { title: 'State Of Euphobia',              youtubePlaylistId: 'OLAK5uy_meIrsrpC4ykbBdA0rB0rqIVbJvvPyw5yc', videoCount: 4,  thumbnail: 'https://i.ytimg.com/vi/eHTdVhzOj2M/hqdefault.jpg', order: 1  },
  { title: 'A Journey Through The Beatscape',youtubePlaylistId: 'OLAK5uy_kvrruM1usKxfYVsZM9QPSg360cX7EpvJA', videoCount: 7,  thumbnail: 'https://i.ytimg.com/vi/QnyIfM_-zxc/hqdefault.jpg', order: 2  },
  { title: 'Break-Even',                     youtubePlaylistId: 'OLAK5uy_mYbCvO1z53vhRrBrSqjDBYM8h4b5qtiRE', videoCount: 9,  thumbnail: 'https://i.ytimg.com/vi/LSLL-nfsr9M/hqdefault.jpg', order: 3  },
  { title: 'Solemnity',                      youtubePlaylistId: 'OLAK5uy_m_fD5NXsbHvaDrhBpNj5dM-2B_pOCTLP8', videoCount: 11, thumbnail: 'https://i.ytimg.com/vi/Uprmljzg58g/hqdefault.jpg', order: 4  },
  { title: 'Deep Craziness',                 youtubePlaylistId: 'OLAK5uy_lX3bTk3oJ81kiE5t6YHrLLtbVN6DBlrco', videoCount: 5,  thumbnail: 'https://i.ytimg.com/vi/1x9w5ivTTnM/hqdefault.jpg', order: 5  },
  { title: 'FAS014',                         youtubePlaylistId: 'OLAK5uy_lTCK9nWIDjz93MFuFGWfFt1z29i15d1D4', videoCount: 4,  thumbnail: 'https://i.ytimg.com/vi/1uyT8sbLBBc/hqdefault.jpg', order: 6  },
  { title: 'Command Station',                youtubePlaylistId: 'OLAK5uy_mE-b1eubaxpokzGqbdwKv99iAubfPcUVM', videoCount: 4,  thumbnail: 'https://i.ytimg.com/vi/4E9nDetk02g/hqdefault.jpg', order: 7  },
  { title: 'Tales From The Parking Lot',     youtubePlaylistId: 'OLAK5uy_ndp_aQ4Z4aa4cmP5e0lwT6Jav2_9pzwa0', videoCount: 4,  thumbnail: 'https://i.ytimg.com/vi/20df2eihsZU/hqdefault.jpg', order: 8  },
  { title: 'A Raw Belief',                   youtubePlaylistId: 'OLAK5uy_nSAv__lEsAnJB08t2LFEkWsGC3UyjcIx4', videoCount: 4,  thumbnail: 'https://i.ytimg.com/vi/8ZNmlIkvJaM/hqdefault.jpg', order: 9  },
  { title: 'Girada Max',                     youtubePlaylistId: 'OLAK5uy_mxUXYgSG2kIayjJxiPVutvGV7EoY5xrQU', videoCount: 4,  thumbnail: 'https://i.ytimg.com/vi/sAt2B5bW7F8/hqdefault.jpg', order: 10 },
  { title: 'The Corridor',                   youtubePlaylistId: 'OLAK5uy_k2_Yh3e2tGdxBYBFvppTyR_o9_VX74uXg', videoCount: 4,  thumbnail: 'https://i.ytimg.com/vi/AZ0NT0JgENo/hqdefault.jpg', order: 11 },
  { title: 'Nelipot',                        youtubePlaylistId: 'OLAK5uy_mKbIGXSJNoM4rqnaAvT65eT45xe8iWzWA', videoCount: 4,  thumbnail: 'https://i.ytimg.com/vi/B1BvoonORK0/hqdefault.jpg', order: 12 },
  { title: 'FAS012+1',                       youtubePlaylistId: 'OLAK5uy_kI9IggGWM2NIJ5QpmTtee3LdyrSVEqfY8', videoCount: 3,  thumbnail: 'https://i.ytimg.com/vi/Z8H9vT83p-I/hqdefault.jpg', order: 13 },
  { title: 'Intravenous',                    youtubePlaylistId: 'OLAK5uy_nFIRaJSXTgFZByU3FSxSJY8rDNmHggVRs', videoCount: 1,  thumbnail: 'https://i.ytimg.com/vi/5XGoOWycEZU/hqdefault.jpg', order: 14 },
  { title: 'SxLow',                          youtubePlaylistId: 'OLAK5uy_mveJ-XeFlBd32AyFQp0aEI8SD--00JkrE', videoCount: 1,  thumbnail: 'https://i.ytimg.com/vi/ZYyAlwbNkd0/hqdefault.jpg', order: 15 },
  { title: 'Slowmotiv',                      youtubePlaylistId: 'OLAK5uy_kqx1PkK8v5ZpJJ49bvEdw2gfvP-ax5s9g', videoCount: 1,  thumbnail: 'https://i.ytimg.com/vi/pjP59PAJdBY/hqdefault.jpg', order: 16 },
  { title: 'Subwax Bcn 1205',               youtubePlaylistId: 'OLAK5uy_mTuCSOd6jDVbYGUWmBWFSo21bJaaRtcmY', videoCount: 3,  thumbnail: 'https://i.ytimg.com/vi/hpXDGRrxgtw/hqdefault.jpg', order: 17 },
  { title: '3 Days (feat. Franco Cinelli)',  youtubePlaylistId: 'OLAK5uy_npRrDrOuzBhQKMPWjVvxk_W11yPrFUfRg', videoCount: 2,  thumbnail: 'https://i.ytimg.com/vi/aUcBz1GGWtM/hqdefault.jpg', order: 18 },
  { title: 'Camina O Revienta',              youtubePlaylistId: 'OLAK5uy_nzihJOrAjXy7LPXuqzFmI5ZbKs-fojgVo', videoCount: 3,  thumbnail: 'https://i.ytimg.com/vi/a79TKz4iicM/hqdefault.jpg', order: 19 },
  { title: 'Now, After',                     youtubePlaylistId: 'OLAK5uy_muCKGyGXzavo03W3ifDHD16fOUB5MfN_4', videoCount: 2,  thumbnail: 'https://i.ytimg.com/vi/MXNguZpzG-c/hqdefault.jpg', order: 20 },
  { title: 'FAS010',                         youtubePlaylistId: 'OLAK5uy_kLtPYhiDBM8SBaAeoozosobI5ZERxuk54', videoCount: 3,  thumbnail: 'https://i.ytimg.com/vi/W5AZhx88S24/hqdefault.jpg', order: 21 },
  { title: 'Unknown Source',                 youtubePlaylistId: 'OLAK5uy_khf45j9PkVOH_Quov_vwjaS-WZH5ledJo', videoCount: 3,  thumbnail: 'https://i.ytimg.com/vi/laNmJeDjjFk/hqdefault.jpg', order: 22 },
  { title: 'FAS007.2',                       youtubePlaylistId: 'OLAK5uy_nvU5sl9YbV4RX8NdJn4ZucJjyatyqcBvw', videoCount: 2,  thumbnail: 'https://i.ytimg.com/vi/LOPWXRre9Wg/hqdefault.jpg', order: 23 },
  { title: 'FAS007.1',                       youtubePlaylistId: 'OLAK5uy_lvfHyf7IAnqWCmL9oSzPalA_o_XXJlSVA', videoCount: 2,  thumbnail: 'https://i.ytimg.com/vi/fRdpirHI7Iw/hqdefault.jpg', order: 24 },
  { title: 'Royal Token',                    youtubePlaylistId: 'OLAK5uy_m4Y9XIQk3fQZ9_D22nIj9AW4TFyOeudfk', videoCount: 2,  thumbnail: 'https://i.ytimg.com/vi/X4FEpVHjPYE/hqdefault.jpg', order: 25 },
  { title: 'YMM Is Knocking',               youtubePlaylistId: 'OLAK5uy_mvM-RlePZqOGoSTRj-UVBoIQLs4BpSJjU', videoCount: 1,  thumbnail: 'https://i.ytimg.com/vi/EEOBKmAxXv4/hqdefault.jpg', order: 26 },
  { title: 'Road to Dub (Dub)',             youtubePlaylistId: 'OLAK5uy_m36fUYW7x8YaKV62jr4ZvEJj5tMl5p_ho', videoCount: 1,  thumbnail: 'https://i.ytimg.com/vi/D8ab8t-qulc/hqdefault.jpg', order: 27 },
  { title: 'Canal Cruise',                   youtubePlaylistId: 'OLAK5uy_m-TpjiPgX9ycb2FmH55xTi4lIV9UyB9p8', videoCount: 1,  thumbnail: 'https://i.ytimg.com/vi/dcSg7f5XtgE/hqdefault.jpg', order: 28 },
]

async function run() {
  console.log('Deleting existing track docs...')
  const existing = await client.fetch(`*[_type == "track"]{ _id }`)
  for (const doc of existing) await client.delete(doc._id)
  console.log(`  Deleted ${existing.length} docs.\n`)

  console.log(`Creating ${albums.length} album/playlist docs...`)
  for (const a of albums) {
    await client.create({
      _type: 'track',
      title: a.title,
      youtubePlaylistId: a.youtubePlaylistId,
      youtubeUrl: `https://music.youtube.com/playlist?list=${a.youtubePlaylistId}`,
      thumbnail: a.thumbnail,
      videoCount: a.videoCount,
      order: a.order,
    })
    console.log(`  ✓ ${a.title} (${a.videoCount} tracks)`)
  }
  console.log('\nDone!')
}

run().catch(err => { console.error('Error:', err.message); process.exit(1) })
