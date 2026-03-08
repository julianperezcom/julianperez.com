// src/scripts/nav.ts
const SECTIONS = ['discography','music','events','gallery','store','links','press','booking'] as const
type Section = typeof SECTIONS[number] | 'home'

function muteHero() {
  const v = document.getElementById('heroVideo') as HTMLVideoElement | null
  if (v && !v.muted) {
    v.muted = true
    const btn = document.getElementById('unmuteBtn')
    if (btn) btn.textContent = 'Activar sonido'
  }
}

export function showSection(id: Section) {
  const hero = document.getElementById('hero')
  const footer = document.getElementById('site-footer')

  if (id !== 'home') muteHero()

  if (hero) hero.style.display = 'none'
  if (footer) footer.style.display = 'none'

  SECTIONS.forEach(s => {
    const el = document.getElementById(s)
    if (el) el.style.display = 'none'
  })

  document.querySelectorAll('[data-s]').forEach(a => a.classList.remove('nav-active'))

  if (id === 'home') {
    if (hero) hero.style.display = 'block'
  } else {
    const el = document.getElementById(id)
    if (el) el.style.display = 'block'
    if (footer) footer.style.display = 'grid'
    document.querySelectorAll(`[data-s="${id}"]`).forEach(a => a.classList.add('nav-active'))
  }

  window.scrollTo({ top: 0, behavior: 'instant' })
  history.pushState({ section: id }, '', '#' + id)
}

export function toggleNav() {
  const overlay = document.getElementById('nav-overlay')
  const hbg = document.getElementById('hamburger')
  if (!overlay || !hbg) return
  overlay.classList.toggle('open')
  hbg.classList.toggle('open')
  document.body.style.overflow = overlay.classList.contains('open') ? 'hidden' : ''
}

export function initNav() {
  // All nav link clicks (desktop + mobile overlay)
  document.querySelectorAll('nav a[data-s], .nav-overlay a[data-s]').forEach(a => {
    a.addEventListener('click', (e) => {
      e.preventDefault()
      const id = (a as HTMLElement).dataset.s as Section
      const overlay = document.getElementById('nav-overlay')
      if (overlay?.classList.contains('open')) toggleNav()
      showSection(id)
    })
  })

  // Logo → home
  document.getElementById('logo')?.addEventListener('click', () => showSection('home'))

  // Hamburger button
  document.getElementById('hamburger')?.addEventListener('click', toggleNav)

  // Browser back/forward
  window.addEventListener('popstate', (e) => {
    const id = ((e.state?.section) ?? 'home') as Section
    showSection(id)
  })

  // Initial load: check hash
  const hash = location.hash.replace('#', '') as Section
  if (hash && (SECTIONS.includes(hash as any) || hash === 'home')) {
    showSection(hash)
  }
}
