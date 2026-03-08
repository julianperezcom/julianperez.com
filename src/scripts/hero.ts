// src/scripts/hero.ts

const HERO_VIDEOS = [
  { src: '/videos/clip1_barcelona.mp4',         caption: 'Hypnotic School — Barcelona' },
  { src: '/videos/clip2_lima.mp4',              caption: 'tINI & The Gang — Lima, Peru' },
  { src: '/videos/clip3_madrid.mp4',            caption: 'Roots — X Private Club, Madrid' },
  { src: '/videos/clip4_ibiza.mp4',             caption: 'ENTER — Space, Ibiza' },
  { src: '/videos/clip5_cluj.mp4',              caption: 'Alandala Panorama — Cluj Napoca' },
  { src: '/videos/clip6_ibiza_underground.mp4', caption: 'Underground — Ibiza' },
  { src: '/videos/clip7_barcelona2.mp4',        caption: 'Hypnotic School — Barcelona' },
]

// Fisher-Yates shuffle (in-place, matches mockup)
function shuffle<T>(arr: T[]): T[] {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

let playlist: typeof HERO_VIDEOS = []
let hCur = 0

function goToVideo(n: number) {
  const heroVid = document.getElementById('heroVideo') as HTMLVideoElement | null
  const capEl   = document.getElementById('videoCaption')
  const dotsEl  = document.getElementById('heroDots')

  if (!heroVid) return

  // Update dot active state (same pattern as mockup)
  if (dotsEl) {
    const dots = dotsEl.querySelectorAll('.dot')
    dots[hCur]?.classList.remove('active')
    hCur = n
    dots[hCur]?.classList.add('active')
  } else {
    hCur = n
  }

  heroVid.src = playlist[hCur].src
  heroVid.play().catch(() => {})
  if (capEl) capEl.textContent = playlist[hCur].caption
}

function toggleMute() {
  const heroVid    = document.getElementById('heroVideo') as HTMLVideoElement | null
  const unmuteLabel = document.getElementById('unmuteLabel')
  const wave1      = document.getElementById('wave1')
  const wave2      = document.getElementById('wave2')
  const muteX1     = document.getElementById('muteX1')
  const muteX2     = document.getElementById('muteX2')

  if (!heroVid) return

  heroVid.muted = !heroVid.muted
  if (heroVid.muted) {
    if (unmuteLabel) unmuteLabel.textContent = 'Activar sonido'
    if (wave1) (wave1 as HTMLElement).style.display = ''
    if (wave2) (wave2 as HTMLElement).style.display = ''
    if (muteX1) (muteX1 as HTMLElement).style.display = 'none'
    if (muteX2) (muteX2 as HTMLElement).style.display = 'none'
  } else {
    if (unmuteLabel) unmuteLabel.textContent = 'Silenciar'
    if (wave1) (wave1 as HTMLElement).style.display = 'none'
    if (wave2) (wave2 as HTMLElement).style.display = 'none'
    if (muteX1) (muteX1 as HTMLElement).style.display = ''
    if (muteX2) (muteX2 as HTMLElement).style.display = ''
  }
}

export function initHero() {
  playlist = shuffle(HERO_VIDEOS)

  const heroVid = document.getElementById('heroVideo') as HTMLVideoElement | null
  if (!heroVid) return

  const dotsEl = document.getElementById('heroDots')

  // Build dots
  if (dotsEl) {
    playlist.forEach((_, i) => {
      const d = document.createElement('div')
      d.className = 'dot' + (i === 0 ? ' active' : '')
      d.addEventListener('click', () => goToVideo(i))
      dotsEl.appendChild(d)
    })
  }

  // Initial video
  goToVideo(0)

  // Auto-advance on end
  heroVid.addEventListener('ended', () => {
    goToVideo((hCur + 1) % playlist.length)
  })

  // Unmute button
  const unmuteBtn = document.getElementById('heroUnmute')
  if (unmuteBtn) {
    unmuteBtn.addEventListener('click', toggleMute)
  }

  // Click on video also toggles mute (matches mockup)
  heroVid.addEventListener('click', toggleMute)
}
