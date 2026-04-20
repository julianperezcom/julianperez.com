# Julian Perez - Artist Website

## Stack
- **Astro 5** with SSR via `@astrojs/vercel`
- **Tailwind CSS 4** (Vite plugin)
- **Sanity CMS** for content (bio, events, press, discography)
- **Bandcamp API** for music embeds
- **Bandsintown API** for events
- **Web3Forms** for booking contact form
- **PDFKit** for bio PDF generation (`/api/bio-pdf`)
- Deployed on **Vercel**

## Project Structure
```
src/
  pages/          # index.astro (single-page), privacy.astro, 404.astro
  pages/api/      # bio-pdf.ts, revalidate.ts
  layouts/        # BaseLayout.astro
  components/
    layout/       # Header, MobileNav, Footer
    sections/     # Hero, Music, Discography, Events, Gallery, Store, Links, Press, Booking
    ui/           # Chatbot, CookieBanner
  scripts/        # nav.ts, hero.ts, chatbot.ts
  lib/            # sanity.ts, bandcamp.ts, bandsintown.ts, ra.ts, bio.ts
  styles/         # global.css (main stylesheet)
public/           # Static assets, gallery images
```

## Commands
- `npm run dev` — local dev server
- `npm run build` — production build
- `npm run preview` — preview build locally

## Notes
- Single-page site with section-based navigation
- Content fetched from Sanity at build/request time
- Gallery images served from `public/gallery/`
