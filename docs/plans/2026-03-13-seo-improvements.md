# SEO Improvements Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Improve search engine visibility for "Julian Perez DJ" name searches by enriching structured data, fixing semantic HTML, correcting meta language, and creating a missing privacy page.

**Architecture:** All changes are isolated edits — BaseLayout.astro for meta/JSON-LD, section .astro files for heading tags, and a new privacy.astro page. No new dependencies. No JS changes.

**Tech Stack:** Astro 5, TypeScript, static HTML output

---

### Task 1: Enrich JSON-LD + fix meta description + add twitter:creator

**Files:**
- Modify: `src/layouts/BaseLayout.astro` (lines 8–56)

**Context:**
The current JSON-LD `MusicGroup` schema only has 4 `sameAs` links and is missing `image`, `foundingLocation`, and `description` in English. The meta description (line 9) is in Spanish while the page title is in English — inconsistent for Google. Twitter card (lines 37–40) is missing `twitter:creator`.

Twitter handle: `@julianperezcom`

**Step 1: Replace the default description (line 9) with English text**

Change:
```
description = 'Julian Perez, DJ y productor de música electrónica afincado en España. Residente en Underground Ibiza. Fundador de Girada Unlimited y Fathers & Sons.',
```
To:
```
description = 'Julian Perez, DJ and electronic music producer based in Spain. Resident at Underground Ibiza. Founder of Girada Unlimited and Fathers & Sons.',
```

**Step 2: Add `twitter:creator` after the existing twitter:image meta tag (line 40)**

Add this line after `<meta name="twitter:image" .../>`:
```html
<meta name="twitter:creator" content="@julianperezcom" />
```

**Step 3: Replace the entire JSON-LD script block (lines 43–56) with enriched schema**

```html
<!-- Structured data -->
<script type="application/ld+json" set:html={JSON.stringify({
  "@context": "https://schema.org",
  "@type": "MusicGroup",
  "name": "Julian Perez",
  "url": "https://julianperez.com",
  "image": "https://julianperez.com/og-image.jpg",
  "description": "DJ and electronic music producer based in Spain. Resident at Underground Ibiza. Founder of Girada Unlimited and Fathers & Sons Productions.",
  "genre": ["Electronic", "Techno", "House", "Minimal"],
  "foundingLocation": {
    "@type": "Place",
    "name": "Spain"
  },
  "sameAs": [
    "https://ra.co/dj/julianperez",
    "https://www.instagram.com/julianperez",
    "https://soundcloud.com/julianperez",
    "https://julianperez.bandcamp.com",
    "https://open.spotify.com/artist/2pMZw333AGGowD4t65HmuC",
    "https://music.apple.com/artist/julian-perez/1458131437",
    "https://www.youtube.com/@julianperezcom",
    "https://www.facebook.com/JulianPerezOfficial",
    "https://x.com/julianperezcom",
    "https://www.discogs.com/artist/54394"
  ]
})} />
```

**Step 4: Build and verify no errors**

```bash
cd /Users/mb7/Documents/Claude/julianperez.com_astro
npm run build 2>&1 | tail -10
```
Expected: `[build] Complete!`

**Step 5: Commit**

```bash
git add src/layouts/BaseLayout.astro
git commit -m "seo: enrich JSON-LD schema, fix meta description language, add twitter:creator"
```

---

### Task 2: Add semantic H1 + change section titles to H2

**Files:**
- Modify: `src/components/sections/HeroSection.astro`
- Modify: `src/components/sections/MusicSection.astro`
- Modify: `src/components/sections/DiscographySection.astro`
- Modify: `src/components/sections/EventsSection.astro`
- Modify: `src/components/sections/GallerySection.astro`
- Modify: `src/components/sections/StoreSection.astro`
- Modify: `src/components/sections/LinksSection.astro`
- Modify: `src/components/sections/PressSection.astro`
- Modify: `src/components/sections/BookingSection.astro`

**Context:**
The page has zero `<h1>` tags and all section titles use `<div class="section-title">`. Google needs a heading hierarchy to understand page structure. The section-title CSS class already handles all visual styling — just changing the HTML tag is enough, no CSS changes needed.

**Step 1: Add visually hidden H1 to HeroSection.astro**

In `src/components/sections/HeroSection.astro`, add this as the first child inside `<div class="hero" id="hero">` (before the `<video>` tag):

```html
<h1 style="position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border:0;">Julian Perez — DJ &amp; Producer</h1>
```

**Step 2: Change `<div class="section-title">` to `<h2 class="section-title">` in each section**

In each of these files, find every `<div class="section-title"` and replace with `<h2 class="section-title"` (closing `</div>` → `</h2>`).

Files and current lines to change:

`MusicSection.astro` — find:
```html
<div class="section-title" style="color:#C8C7C3;" data-i18n="music.eyebrow">Music</div>
```
Replace with:
```html
<h2 class="section-title" style="color:#C8C7C3;" data-i18n="music.eyebrow">Music</h2>
```

`DiscographySection.astro` — same pattern, text "Discography"

`EventsSection.astro` — same pattern, text "Dates"

`GallerySection.astro` — same pattern, text "Photos"

`StoreSection.astro` — same pattern, text "Shop"

`LinksSection.astro` — same pattern, text "Links"

`PressSection.astro` — two section-titles: "Bio" and "Press Kit" (both already have `style="margin-bottom:24px;color:#C8C7C3;"`)

`BookingSection.astro` — same pattern

**Important:** The `section-title` class CSS styles divs. Verify it also applies to h2 by checking `src/styles/global.css` for `.section-title` — if it's a tag-specific selector (e.g. `div.section-title`) change to `.section-title`. If it's already `.section-title { ... }` (class only), no CSS change needed.

**Step 3: Build and verify**

```bash
npm run build 2>&1 | tail -10
```
Expected: `[build] Complete!`

**Step 4: Verify heading structure in output HTML**

```bash
grep -n "<h1\|<h2" dist/client/index.html | head -20
```
Expected: one `<h1>` and multiple `<h2>` tags visible.

**Step 5: Commit**

```bash
git add src/components/sections/
git commit -m "seo: add H1 to hero, convert section-title divs to H2 elements"
```

---

### Task 3: Create privacy page

**Files:**
- Create: `src/pages/privacy.astro`

**Context:**
`/privacy` is linked from the cookie banner and both booking forms. Currently returns 404. This is a broken link in every page load for new visitors. The page needs to exist and match site design. Content should be bilingual (EN/ES via `data-show-lang`).

**Step 1: Create `src/pages/privacy.astro`**

```astro
---
import BaseLayout from '../layouts/BaseLayout.astro'
import '../styles/global.css'
import Header from '../components/layout/Header.astro'
import Footer from '../components/layout/Footer.astro'
---
<BaseLayout
  title="Privacy & Cookie Policy — Julian Perez"
  description="Privacy and cookie policy for julianperez.com"
>
  <Header />
  <main style="min-height:100vh;background:#0E0E0E;padding:160px 52px 96px;max-width:800px;margin:0 auto;">

    <div data-show-lang="en">
      <h1 style="font-size:2rem;font-weight:700;color:#fff;margin-bottom:8px;">Privacy &amp; Cookie Policy</h1>
      <p style="color:#666;font-size:0.8rem;letter-spacing:0.1em;margin-bottom:48px;">Last updated: March 2026</p>

      <h2 style="font-size:1rem;font-weight:700;color:#fff;margin-bottom:12px;margin-top:40px;">1. Data Controller</h2>
      <p style="color:#aaa;font-size:0.9rem;line-height:1.8;margin-bottom:24px;">This website is operated by Julian Perez. For any privacy-related enquiries, please use the contact form in the <a href="/#booking" style="color:#fff;">Booking section</a>.</p>

      <h2 style="font-size:1rem;font-weight:700;color:#fff;margin-bottom:12px;margin-top:40px;">2. Cookies</h2>
      <p style="color:#aaa;font-size:0.9rem;line-height:1.8;margin-bottom:24px;">This site uses essential cookies to remember your language preference and cookie consent choice. No tracking or advertising cookies are used.</p>

      <h2 style="font-size:1rem;font-weight:700;color:#fff;margin-bottom:12px;margin-top:40px;">3. Analytics</h2>
      <p style="color:#aaa;font-size:0.9rem;line-height:1.8;margin-bottom:24px;">We use Vercel Analytics to measure anonymous page traffic. No personally identifiable information is collected. Data is processed by Vercel Inc. in accordance with their <a href="https://vercel.com/legal/privacy-policy" target="_blank" style="color:#fff;">Privacy Policy</a>.</p>

      <h2 style="font-size:1rem;font-weight:700;color:#fff;margin-bottom:12px;margin-top:40px;">4. Contact Forms</h2>
      <p style="color:#aaa;font-size:0.9rem;line-height:1.8;margin-bottom:24px;">Information submitted via the booking or contact forms is used solely to respond to your enquiry. It is not shared with third parties.</p>

      <h2 style="font-size:1rem;font-weight:700;color:#fff;margin-bottom:12px;margin-top:40px;">5. Your Rights</h2>
      <p style="color:#aaa;font-size:0.9rem;line-height:1.8;margin-bottom:48px;">Under GDPR you have the right to access, rectify, or delete your personal data. Contact us via the booking form to exercise these rights.</p>

      <a href="/" style="color:#fff;font-size:0.8rem;letter-spacing:0.1em;text-transform:uppercase;">← Back to site</a>
    </div>

    <div data-show-lang="es" style="display:none;">
      <h1 style="font-size:2rem;font-weight:700;color:#fff;margin-bottom:8px;">Política de Privacidad y Cookies</h1>
      <p style="color:#666;font-size:0.8rem;letter-spacing:0.1em;margin-bottom:48px;">Última actualización: marzo 2026</p>

      <h2 style="font-size:1rem;font-weight:700;color:#fff;margin-bottom:12px;margin-top:40px;">1. Responsable del tratamiento</h2>
      <p style="color:#aaa;font-size:0.9rem;line-height:1.8;margin-bottom:24px;">Este sitio web es operado por Julian Perez. Para cualquier consulta relacionada con privacidad, utiliza el formulario de contacto en la <a href="/#booking" style="color:#fff;">sección Booking</a>.</p>

      <h2 style="font-size:1rem;font-weight:700;color:#fff;margin-bottom:12px;margin-top:40px;">2. Cookies</h2>
      <p style="color:#aaa;font-size:0.9rem;line-height:1.8;margin-bottom:24px;">Este sitio utiliza cookies esenciales para recordar tu preferencia de idioma y tu elección sobre cookies. No se utilizan cookies de seguimiento ni publicidad.</p>

      <h2 style="font-size:1rem;font-weight:700;color:#fff;margin-bottom:12px;margin-top:40px;">3. Analítica</h2>
      <p style="color:#aaa;font-size:0.9rem;line-height:1.8;margin-bottom:24px;">Utilizamos Vercel Analytics para medir el tráfico de forma anónima. No se recopila información de identificación personal. Los datos son procesados por Vercel Inc. de acuerdo con su <a href="https://vercel.com/legal/privacy-policy" target="_blank" style="color:#fff;">Política de Privacidad</a>.</p>

      <h2 style="font-size:1rem;font-weight:700;color:#fff;margin-bottom:12px;margin-top:40px;">4. Formularios de contacto</h2>
      <p style="color:#aaa;font-size:0.9rem;line-height:1.8;margin-bottom:24px;">La información enviada a través de los formularios de booking o contacto se utiliza únicamente para responder a tu consulta. No se comparte con terceros.</p>

      <h2 style="font-size:1rem;font-weight:700;color:#fff;margin-bottom:12px;margin-top:40px;">5. Tus derechos</h2>
      <p style="color:#aaa;font-size:0.9rem;line-height:1.8;margin-bottom:48px;">Bajo el RGPD tienes derecho a acceder, rectificar o eliminar tus datos personales. Contáctanos mediante el formulario de booking para ejercer estos derechos.</p>

      <a href="/" style="color:#fff;font-size:0.8rem;letter-spacing:0.1em;text-transform:uppercase;">← Volver al sitio</a>
    </div>

  </main>
  <Footer />
</BaseLayout>
```

**Step 2: Build and verify**

```bash
npm run build 2>&1 | tail -10
```
Expected: `[build] Complete!` and `src/pages/privacy.astro` listed in prerendered routes.

**Step 3: Verify the page was generated**

```bash
ls dist/client/privacy/
```
Expected: `index.html`

**Step 4: Commit**

```bash
git add src/pages/privacy.astro
git commit -m "feat: add privacy & cookie policy page (EN/ES)"
```

---

### Task 4: Push and verify deployment

**Step 1: Push all commits**

```bash
git push origin master:main
```

**Step 2: Verify deployment in Vercel**

Check `https://vercel.com/julianperezcom-4438s-projects/julianperez` — wait for "Ready" status.

**Step 3: Validate structured data**

Go to `https://search.google.com/test/rich-results` and test `https://julianperez.com`. Expected: MusicGroup entity detected with all sameAs links.

**Step 4: Submit sitemap to Google Search Console**

In GSC → Sitemaps → Add `https://julianperez.com/sitemap-index.xml` → Submit.
