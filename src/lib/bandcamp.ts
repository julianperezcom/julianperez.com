export interface BCItem {
  title: string
  artist: string
  url: string
  imageUrl: string
  type: string
}

const ACCOUNTS = {
  jp:     'https://julianperez.bandcamp.com/music',
  girada: 'https://giradaunlimited.bandcamp.com/music',
  fas:    'https://fathersandsonsproductions.bandcamp.com/music',
} as const

export async function fetchBandcampItems(account: keyof typeof ACCOUNTS): Promise<BCItem[]> {
  try {
    const url = ACCOUNTS[account]
    const res = await fetch(url, { headers: { 'User-Agent': 'Mozilla/5.0' } })
    const html = await res.text()
    const items: BCItem[] = []
    const regex = /<li[^>]*class="[^"]*music-grid-item[^"]*"[^>]*>[\s\S]*?<a href="([^"]+)"[\s\S]*?<img[^>]+src="([^"]+)"[\s\S]*?<p[^>]*class="[^"]*title[^"]*"[^>]*>([\s\S]*?)<\/p>/g
    let match
    while ((match = regex.exec(html)) !== null) {
      const [, href, img, title] = match
      const artistName = account === 'jp' ? 'Julian Perez' : account === 'girada' ? 'Girada Unlimited' : 'Fathers & Sons'
      items.push({
        title: title.trim(),
        artist: artistName,
        url: href.startsWith('http') ? href : `https://${new URL(ACCOUNTS[account]).host}${href}`,
        imageUrl: img.replace(/_\d+\.jpg/, '_10.jpg'),
        type: 'release',
      })
    }
    return items
  } catch {
    return []
  }
}
