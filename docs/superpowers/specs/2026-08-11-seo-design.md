# SEO Enhancement — Design Spec
**Date:** 2026-08-11
**Approach:** B — New standalone pages + technical improvements

---

## Context

Current state (Google Search Console):
- 15 clicks / 2,100 impressions (impressions declining 15%)
- Main query "julian perez" — 3 clicks; "julian perez football" appearing (footballer disambiguation problem)
- Traffic: Spain 33%, USA 20%, Netherlands 13%, Switzerland 7%, Chile 7%
- Site is a single-page app (SPA) — all sections hidden/shown via JS on `/`
- Press section already has individual URLs (`/press/[slug]`) ✓

Existing SEO assets (good baseline):
- Meta tags: title, description, canonical, robots ✓
- OG + Twitter cards ✓
- JSON-LD schemas: Person, MusicGroup, FAQPage, Press mentions ✓
- sitemap.xml via @astrojs/sitemap ✓
- robots.txt with AI crawlers explicitly allowed ✓

---

## Part 1 — New Pages

### `/booking` (new static page)

**Purpose:** Dedicated landing page for promoters/bookers. Indexable separately from SPA.

**Target keywords:** "Julian Perez DJ booking", "techno DJ Spain", "Ibiza DJ for hire", "minimal techno DJ booking"

**Content structure:**
1. Hero headline: "Julian Perez — DJ & Producer available for bookings worldwide"
2. Full bio (from `bio 2026.rtf` — see Appendix A)
3. Key highlights: 50+ countries, 150+ cities, notable festivals and clubs
4. Booking inquiry form (same Web3Forms endpoint as current BookingSection)
5. Contact info / agency details if applicable

**Schemas to add:**
- `ContactPage` type
- `Person` with `hasOfferCatalog` listing DJ performance service

**Implementation notes:**
- New file: `src/pages/booking.astro`
- Shares `BaseLayout.astro` with specific title/description meta
- Title: `"Book Julian Perez — DJ & Producer | Booking Inquiries"`
- Description: `"Book Julian Perez for your event. Techno, House and Minimal DJ based in Spain, resident at Underground Ibiza. Performed in 50+ countries. Send your booking inquiry."`
- The existing BookingSection form stays in the SPA for UX; this page is an additional entry point

---

### `/discography` (new dynamic page)

**Purpose:** Full discography listing, indexable per release name.

**Target keywords:** "Julian Perez discography", "Solemnity album Julian Perez", "Break-Even Julian Perez", release names on Cocoon/Raum..Musik/Subwax Bcn

**Content structure:**
1. Page header: "Discography"
2. Albums section: Solemnity (2016), Break-Even (2021) — with cover, tracklist, description, buy links
3. EPs & Singles: grouped by label or year, pulled from Sanity CMS
4. Label section: Fathers & Sons Productions, Girada Unlimited

**Schemas to add:**
- `MusicGroup` with detailed `album` array including `MusicAlbum` and `MusicRecording` entries
- Each album: name, datePublished, recordLabel, numTracks, url (Bandcamp/Spotify)

**Implementation notes:**
- New file: `src/pages/discography.astro`
- Data from Sanity CMS (same `lib/sanity.ts` fetches used by DiscographySection)
- Title: `"Julian Perez — Discography | Albums, EPs & Singles"`
- Description: `"Full discography of Julian Perez. Albums: Solemnity (2016) and Break-Even (2021). Releases on Fathers & Sons Productions, Girada Unlimited, Cocoon Recordings, Raum..Musik, and Subwax Bcn."`

---

### `/bio` (new static page)

**Purpose:** HTML-indexable bio page. Currently only `/api/bio-pdf` exists (already getting 1 click in GSC).

**Content:** Full bio text (see Appendix A) + download link to PDF bio.

**Implementation notes:**
- New file: `src/pages/bio.astro`
- Title: `"Julian Perez — Biography | DJ & Producer"`
- Link to `/api/bio-pdf?lang=en` and `/api/bio-pdf?lang=es`
- Schema: `Person` with full description

---

## Part 2 — Technical SEO Improvements

### New JSON-LD schemas

#### `MusicEvent` for upcoming gigs
- Pull from Bandsintown API (already used by EventsSection)
- Render 1 `MusicEvent` schema per upcoming event in BaseLayout `<head>`
- Fields: name, startDate, location (Place with address), performer (Person), url
- Helps appear in Google's event rich results

#### `Book` schema for INTERFASE
```json
{
  "@type": "Book",
  "name": "INTERFASE: The Infinite Set",
  "alternativeHeadline": "INTERFASE: La sesión infinita",
  "author": { "@type": "Person", "name": "Julian Perez" },
  "datePublished": "2026",
  "inLanguage": ["en", "es"],
  "description": "Debut book by Julian Perez expanding on the ideas and experiences that shaped his path, offering an unfiltered view into his creative process."
}
```

#### `WebSite` with SearchAction
```json
{
  "@type": "WebSite",
  "name": "Julian Perez",
  "url": "https://julianperez.com",
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://julianperez.com/?q={search_term_string}",
    "query-input": "required name=search_term_string"
  }
}
```

#### `disambiguatingDescription` in Person schema
Add field to existing Person schema:
```json
"disambiguatingDescription": "Electronic music DJ and record producer from Spain, active since the 1990s. Not to be confused with any athlete of the same name."
```

---

### hreflang EN / ES

Add to `BaseLayout.astro` `<head>`:
```html
<link rel="alternate" hreflang="en" href="https://julianperez.com/" />
<link rel="alternate" hreflang="es" href="https://julianperez.com/" />
<link rel="alternate" hreflang="x-default" href="https://julianperez.com/" />
```
Same URL for both languages (language switches client-side via JS) — valid per Google's guidelines for JS-driven i18n.

---

### Gallery lazy loading fix

**Problem:** 767 gallery images currently load eagerly (no `loading="lazy"`). This was done to fix a display bug where lazy images in `display:none` sections never triggered. This severely hurts Core Web Vitals (LCP, TBT).

**Solution:** Restore `loading="lazy"` on gallery images. Use an `IntersectionObserver` in `nav.ts` that, when `#gallery` becomes visible (`showSection('gallery')` is called), triggers a custom event or calls a function that forces the browser to re-evaluate lazy images (e.g., by briefly toggling a class or using `loading` attribute swap).

**Implementation:**
- In `GallerySection.astro`: restore `loading="lazy"` on all `<img>` tags
- In `nav.ts` `showSection()`: after setting `display:block`, dispatch a `gallery-visible` event
- Small inline script in `GallerySection.astro`: listen for `gallery-visible`, then for each image set `src` to itself to trigger load (or use `IntersectionObserver` on the now-visible container)

---

### LCP preload

Add to `BaseLayout.astro` `<head>`:
```html
<link rel="preload" as="image" href="/og-image.jpg" />
```
Ensures the hero/OG image (likely LCP candidate) loads as early as possible.

---

## Part 3 — Bio & Content

### Bio source
Full bio text from `bio 2026.rtf`:

> Julian Perez developed his connection to electronic music in the early 1990s, shaped by the House and Techno scenes emerging from the US, the UK, and Northwestern Europe. Genres such as techno, EBM, and New Beat played a key role in defining his sound, which has evolved with patience, discernment, and a deep respect for the culture. Over time, he became known as a versatile DJ whose approach favors long-term vision over immediacy.
>
> In 2010, he released his first record, marking the beginning of a steadily built career. Two years later, he founded Fathers & Sons Productions (2012), a vinyl-only label created as a platform to share his distinctive sound. Within its first year, the label hosted showcases in more than twelve countries and established a solid catalog of releases.
>
> Alongside his own imprints, Julian's music has appeared on respected labels such as Cocoon Recordings, Raum..Musik, and Subwax Bcn, further cementing his reputation as both producer and tastemaker. This diverse body of work reflects his ability to adapt across styles while maintaining a clear and consistent artistic identity.
>
> To date, every release on his labels has sold out within days, underlining his curatorial instincts and his ability to identify emerging talent. This sustained success has allowed him to remain relevant in an ever-evolving electronic music landscape without compromising quality or intent.
>
> A defining chapter of Fathers & Sons Productions closed in 2016 with the release of his solo album Solemnity, a double-vinyl work that highlighted both his attention to detail and the evolution of his sound. After a period of reflection, the label was relaunched in 2023 with renewed focus, fresh concepts, and a forward-looking vision.
>
> In parallel, Julian founded Girada Unlimited, a project that quickly resonated with crate diggers and dedicated listeners. Before his involvement was widely known, the label gained strong support within the underground scene. Its tenth release marked his second album, Break-Even (2021), following a series of well-received releases by both Julian and a carefully selected roster of artists. Today, the label continues to evolve in unexpected directions, reflecting his ongoing creative curiosity.
>
> Throughout his career, Julian has performed in more than 50 countries and over 150 cities. His appearances include major festivals such as Amsterdam Dance Event, Outline Festival, Sunwaves Festival, Epizode, and The BPM Festival. He has also hosted showcases during Sónar off week in Barcelona, Kazantip Festival, and Winter Music Conference.
>
> His club appearances span iconic venues such as Rex Club, Fabric, Womb, and Robert Johnson. In Ibiza, he is a regular presence at Underground, where he hosts his own nights during the summer season, and has frequently been invited to landmark events such as ENTER. at Space and Cocoon Ibiza.
>
> His work has been recognized with nominations for Best Artist at the Vicious Music Awards in 2012 and 2013, and Best Newcomer at the DJ Awards in 2016.
>
> Looking ahead to 2026, a new cycle of projects, releases, and performances coincides with the publication of his debut book, INTERFASE: La sesión infinita, also available in English as INTERFASE: The Infinite Set. The book expands on the ideas and experiences that have shaped his path, offering an unfiltered view into his creative process.
>
> Ultimately, the most direct way to understand Julian's artistry remains the dancefloor, where technical precision and carefully curated selections converge in real time.

### Usage
- `/booking` page: full bio as body text
- `/bio` page: full bio as body text + PDF download links
- `Person` schema `description`: condensed single-paragraph version derived from this bio (replacing current short description)

---

## Implementation Order (priority)

1. Technical fixes in BaseLayout (hreflang, disambiguatingDescription, Book schema, WebSite schema, LCP preload) — low risk, high impact
2. MusicEvent schema from Bandsintown feed
3. Gallery lazy loading fix
4. `/bio` page
5. `/booking` page
6. `/discography` page

---

## Success Metrics

- Google Search Console: impressions increase for "Julian Perez DJ", "Julian Perez booking", release names
- "Julian Perez football" disappears from top queries (disambiguation working)
- Core Web Vitals: LCP < 2.5s, no gallery-caused TBT spike
- Rich results: Events appearing in Google Search for concert dates
- Click-through rate improvement on booking-related queries
