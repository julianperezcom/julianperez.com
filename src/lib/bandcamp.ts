export interface BCItem {
  title: string
  artist: string
  url: string
  imageUrl: string
  images: string[]
  type: string
}

function decodeHtml(s: string): string {
  return s
    .replace(/&quot;/g, '"')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&#39;/g, "'")
    .replace(/&#x27;/g, "'")
    .replace(/<[^>]+>/g, '')
    .trim()
}

function cleanTitle(raw: string): string {
  let t = decodeHtml(raw)
  // Strip format suffixes like " (Vinyl, 12")" "(LP)" "(EP)" etc.
  t = t.replace(/\s*\([^)]*(?:[Vv]inyl|LP|EP|CD|12["\u201d]|7["\u201d]|cassette)[^)]*\)/g, '').trim()
  return t
}

async function fetchAlbumImages(url: string): Promise<string[]> {
  try {
    const res = await fetch(url, { headers: { 'User-Agent': 'Mozilla/5.0' } })
    const html = await res.text()
    const images: string[] = []
    // Extract all <a class="popupImage"> hrefs (Bandcamp lightbox links)
    const aTagRe = /<a[^>]*class="[^"]*popupImage[^"]*"[^>]*>/g
    let m
    while ((m = aTagRe.exec(html)) !== null) {
      const hrefM = m[0].match(/href="([^"]+)"/)
      if (hrefM) images.push(hrefM[1].replace(/_\d+\.jpg/, '_10.jpg'))
    }
    if (images.length === 0) {
      // Fallback: main tralbum-art img
      const m2 = html.match(/id="tralbum-art"[\s\S]{0,600}?<img[^>]+src="([^"]+)"/)
      if (m2) images.push(m2[1].replace(/_\d+\.jpg/, '_10.jpg'))
    }
    return images
  } catch {
    return []
  }
}

const ACCOUNTS = {
  jp:     'https://julianperez.bandcamp.com',
  girada: 'https://giradaunlimited.bandcamp.com',
  fas:    'https://fathersandsonsproductions.bandcamp.com',
} as const

export async function fetchBandcampItems(account: keyof typeof ACCOUNTS): Promise<BCItem[]> {
  try {
    const base = ACCOUNTS[account]
    const res = await fetch(`${base}/music`, { headers: { 'User-Agent': 'Mozilla/5.0' } })
    const html = await res.text()
    const items: BCItem[] = []

    // Match each <li class="music-grid-item ...">...</li>
    const liRe = /<li[^>]*class="[^"]*music-grid-item[^"]*"[^>]*>[\s\S]*?<\/li>/g
    let li
    while ((li = liRe.exec(html)) !== null) {
      const block = li[0]
      const hrefM = block.match(/<a[^>]+href="([^"]+)"/)
      // Prefer data-original (lazy-loaded) over src (may be 0.gif placeholder)
      const dataOrigM = block.match(/data-original="([^"]+\.(?:jpg|png|webp)[^"]*)"/)
      const srcM = block.match(/<img[^>]+src="([^"]+\.(?:jpg|png|webp)[^"]*)"/)
      const titleM = block.match(/<p[^>]*class="[^"]*title[^"]*"[^>]*>([\s\S]*?)<\/p>/)
      if (!hrefM || !titleM) continue

      const href = hrefM[1]
      const rawImg = dataOrigM ? dataOrigM[1] : (srcM ? srcM[1] : '')
      const url = href.startsWith('http') ? href : `${base}${href}`
      const imageUrl = rawImg ? rawImg.replace(/_\d+\.jpg/, '_10.jpg') : ''
      const title = cleanTitle(titleM[1])
      const artist = account === 'jp' ? 'Julian Perez' : account === 'girada' ? 'Girada Unlimited' : 'Fathers & Sons'

      items.push({ title, artist, url, imageUrl, images: [], type: 'release' })
    }

    // Fetch per-album images in parallel
    await Promise.all(items.map(async item => {
      item.images = await fetchAlbumImages(item.url)
      if (!item.imageUrl && item.images[0]) item.imageUrl = item.images[0]
    }))

    return items
  } catch {
    return []
  }
}
