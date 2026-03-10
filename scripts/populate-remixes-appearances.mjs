import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'esbhlkf9',
  dataset: 'production',
  apiVersion: '2026-03-08',
  token: process.env.SANITY_TOKEN,
  useCdn: false,
})

const sleep = ms => new Promise(r => setTimeout(r, ms))

// ── REMIXES ───────────────────────────────────────────────────────────────────
const remixes = [
  { title: 'Unplait',               year: 2021, label: 'Recycle Records', releaseType: 'Remix', discogsId: 18914872, discogsType: 'release' },
  { title: 'Here And There',        year: 2018, label: 'Berg Audio',       releaseType: 'Remix', discogsId: 12183781, discogsType: 'release' },
  { title: 'Vagabundos 2013 Part 2',year: 2013, label: 'Cadenza',          releaseType: 'Remix', discogsId: 4491947,  discogsType: 'release' },
  { title: 'Vagabundos 2013',       year: 2013, label: 'Cadenza',          releaseType: 'Remix', discogsId: 672272,   discogsType: 'master'  },
  { title: 'Dance Me',              year: 2011, label: 'Microtech Records', releaseType: 'Remix', discogsId: 26161862, discogsType: 'release' },
]

// ── APPEARANCES ───────────────────────────────────────────────────────────────
// Deduplicated by Discogs ID, excluding podcast/radio entries
const appearances = [
  { title: 'Bleeding Star',                year: 2024, label: 'SharpTone',                   releaseType: 'Appearance', discogsId: 32836896, discogsType: 'release' },
  { title: 'Espectrum II, EP2',            year: 2021, label: 'AvantRoots',                   releaseType: 'Appearance', discogsId: 17207566, discogsType: 'release' },
  { title: 'Passenger',                    year: 2020, label: 'Various',                       releaseType: 'Appearance', discogsId: 1836822,  discogsType: 'master'  },
  { title: 'The Embrace Volume 1',         year: 2020, label: 'Dokutoku Records',              releaseType: 'Appearance', discogsId: 15334670, discogsType: 'release' },
  { title: 'FAS009',                       year: 2015, label: 'Fathers & Sons Productions',   releaseType: 'Appearance', discogsId: 6984066,  discogsType: 'release' },
  { title: 'Zehn',                         year: 2015, label: 'Cocoon Recordings',             releaseType: 'Appearance', discogsId: 7111908,  discogsType: 'release' },
  { title: 'FAS008',                       year: 2014, label: 'Fathers & Sons Productions',   releaseType: 'Appearance', discogsId: 6154052,  discogsType: 'release' },
  { title: 'Cocoon Compilation N',         year: 2014, label: 'Cocoon',                        releaseType: 'Appearance', discogsId: 794351,   discogsType: 'master'  },
  { title: 'FAS006',                       year: 2013, label: 'Fathers & Sons Productions',   releaseType: 'Appearance', discogsId: 4766152,  discogsType: 'release' },
  { title: 'La Familia',                   year: 2013, label: 'Viva Music',                    releaseType: 'Appearance', discogsId: 4659499,  discogsType: 'release' },
  { title: 'Delicias',                     year: 2013, label: 'Savor Music',                   releaseType: 'Appearance', discogsId: 6370355,  discogsType: 'release' },
  { title: 'Balance 023',                  year: 2013, label: 'Balance Music',                 releaseType: 'Appearance', discogsId: 1063657,  discogsType: 'master'  },
  { title: 'FAS001',                       year: 2012, label: 'Fathers & Sons Productions',   releaseType: 'Appearance', discogsId: 759929,   discogsType: 'master'  },
  { title: 'The Extended Family Part 2',   year: 2011, label: 'Leftroom',                      releaseType: 'Appearance', discogsId: 3050430,  discogsType: 'release' },
  { title: 'The Summer Soundtrack EP',     year: 2011, label: 'Leftroom',                      releaseType: 'Appearance', discogsId: 3301193,  discogsType: 'release' },
  { title: 'Tools For School 4',           year: 2011, label: 'Be As One Imprint',             releaseType: 'Appearance', discogsId: 3930684,  discogsType: 'release' },
  { title: 'Lowpitch Sampler A',           year: 2010, label: 'Lowpitch',                      releaseType: 'Appearance', discogsId: 2254206,  discogsType: 'release' },
  { title: "Left'd 003",                   year: 2010, label: "Left'd",                         releaseType: 'Appearance', discogsId: 6285825,  discogsType: 'release' },
]

async function fetchCover(discogsId, type) {
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
  const all = [...remixes, ...appearances]

  // 1. Delete existing remixes and appearances (keep originals intact)
  console.log('Deleting existing Remix and Appearance documents...')
  const existing = await client.fetch(`*[_type == "release" && releaseType in ["Remix","Appearance"]]{ _id }`)
  for (const doc of existing) await client.delete(doc._id)
  console.log(`  Deleted ${existing.length} documents.\n`)

  // 2. Upload with cover images
  console.log(`Uploading ${remixes.length} remixes + ${appearances.length} appearances...\n`)

  for (const r of all) {
    await sleep(2500) // Discogs rate limit: 25 req/min
    const coverUrl = await fetchCover(r.discogsId, r.discogsType)

    const discogsUrl = r.discogsType === 'master'
      ? `https://www.discogs.com/master/${r.discogsId}`
      : `https://www.discogs.com/release/${r.discogsId}`

    await client.create({
      _type: 'release',
      title: r.title,
      year: r.year,
      label: r.label,
      releaseType: r.releaseType,
      discogsUrl,
      ...(coverUrl ? { coverUrl } : {}),
    })

    const icon = coverUrl ? '✓' : '–'
    console.log(`  ${icon} [${r.releaseType}] ${r.year} — ${r.title}${coverUrl ? '' : ' (no cover)'}`)
  }

  console.log('\nDone!')
}

run().catch(err => {
  console.error('Error:', err.message)
  process.exit(1)
})
