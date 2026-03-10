# julianperez.com — Guía completa del sitio

> Migración de WordPress a Astro + Sanity + Vercel
> Última actualización: marzo 2026

---

## 1. Contexto: de WordPress a Astro

El sitio anterior era un WordPress autohospedado en `julianperez.com`. Se migró a una arquitectura moderna con estas ventajas:

- **Sin servidor** — el sitio se genera como HTML estático y se sirve desde la CDN de Vercel (carga instantánea).
- **Sin base de datos** — el contenido vive en Sanity CMS (plataforma gestionada en la nube).
- **Actualizaciones automáticas** — se reconstruye solo cada día a las 4:00 AM UTC para recoger nuevos eventos, lanzamientos, etc.
- **Cero mantenimiento** de plugins, actualizaciones de WordPress, o servidores.

---

## 2. Stack tecnológico

| Capa | Tecnología | Versión |
|------|-----------|---------|
| Framework web | [Astro](https://astro.build) | 5.x |
| CMS (contenido) | [Sanity](https://sanity.io) | v3 |
| Estilos | Tailwind CSS | 4.x |
| Hosting / Deploy | [Vercel](https://vercel.com) | — |
| Código fuente | [GitHub](https://github.com) | — |
| Runtime local | Node.js | 20+ |

---

## 3. Servicios conectados

### 3.1 Sanity CMS
- **URL Studio**: `https://www.sanity.io/manage/project/esbhlkf9` (panel web) o local con `npm run studio`
- **Project ID**: `esbhlkf9`
- **Dataset**: `production`
- **Organización**: `o8e9s5YyJ`
- **Qué gestiona**: Bio, Releases, Tracks, DJ Sets, Press References, Press Assets

### 3.2 Vercel
- **URL proyecto**: `https://vercel.com/julianperezcom-4438s/julianperez-com`
- **Project ID**: `prj_SICukTvFr85JtpYAZtA69S6QRcm3`
- **URL temporal**: `julianperez.vercel.app`
- **URL definitiva**: `julianperez.com` (pendiente de apuntar DNS)
- **Región build**: Washington D.C. (iad1)

### 3.3 GitHub
- **Repo**: `https://github.com/julianperezcom/julianperez.com`
- **Repo ID**: `1176072755`
- **Rama principal**: `main`
- **Visibilidad**: Público

### 3.4 Fuentes de datos externas (solo lectura)

| Servicio | Uso | Identificador |
|---------|-----|--------------|
| **Bandsintown** | Próximos eventos (fetch en cliente) | Account `1290950`, app_id `016523740f876056f578583f5fdb51d5` |
| **Resident Advisor** | Eventos pasados (GraphQL en build) | Artista slug `julianperez` |
| **Discogs** | Carátulas de releases | Artista ID `54394` |
| **SoundCloud** | DJ Sets (playlist embed) | `soundcloud.com/julianperez/sets/sets-podcasts` |
| **YouTube Sets** | Playlist de sets grabados | `youtube.com/playlist?list=PLLRxDKy3npviQXeQI5fRtp0FGNKJIfYNN` |
| **YouTube Tracks** | Canal de lanzamientos | `youtube.com/@julianperezcom/releases` |
| **Bandcamp** | Tienda (scrape HTML) | `julianperez.bandcamp.com`, `giradaunlimited.bandcamp.com`, `fathersandsonsproductions.bandcamp.com` |

---

## 4. Arquitectura y flujo de datos

```
                        ┌─────────────────┐
                        │   Sanity CMS    │ ← editas aquí el contenido
                        │  (esbhlkf9)     │
                        └────────┬────────┘
                                 │ GROQ queries
                                 ↓
┌──────────┐   git push   ┌─────────────────┐   build   ┌──────────────┐
│  GitHub  │ ──────────── │   Vercel CI/CD  │ ────────→ │  HTML/CSS/JS │
│   main   │              │  (npm run build)│           │  estático    │
└──────────┘              └────────┬────────┘           └──────┬───────┘
                                   │ cron 4:00 AM UTC          │
                                   │ (rebuild diario)          │
                                   ↓                           ↓
                        ┌─────────────────────────────────────────────┐
                        │              Vercel CDN                     │
                        │    julianperez.vercel.app / julianperez.com │
                        └─────────────────────────────────────────────┘
                                           ↑ fetch (cliente)
                        ┌─────────────────────────────────────────────┐
                        │  Bandsintown API  │  Bandcamp scraper       │
                        └─────────────────────────────────────────────┘
```

**Build time** (cuando Vercel construye):
- Lee Bio, Releases, Sets, Tracks, Press de Sanity
- Llama al GraphQL de Resident Advisor para eventos pasados
- Genera todas las páginas como HTML estático

**Run time** (cuando el usuario visita):
- Carga próximos eventos de Bandsintown (JavaScript en el navegador)
- Carga productos de Bandcamp (JavaScript en el navegador)

---

## 5. Estructura del proyecto

```
julianperez.com_astro/
├── src/
│   ├── components/
│   │   ├── layout/          # Header, MobileNav, Footer
│   │   ├── sections/        # HeroSection, MusicSection, DiscographySection,
│   │   │                    # EventsSection, GallerySection, StoreSection,
│   │   │                    # LinksSection, PressSection, BookingSection
│   │   └── ui/              # Chatbot
│   ├── layouts/
│   │   └── BaseLayout.astro # SEO, OG, JSON-LD, favicons
│   ├── lib/
│   │   ├── sanity.ts        # Cliente Sanity + queries GROQ
│   │   ├── bandsintown.ts   # Fetch de eventos próximos
│   │   ├── ra.ts            # GraphQL Resident Advisor
│   │   └── bandcamp.ts      # Scraper HTML Bandcamp
│   ├── pages/
│   │   ├── index.astro      # Página principal (todo en one-pager)
│   │   └── api/
│   │       └── revalidate.ts # Endpoint del cron (dispara rebuild)
│   ├── scripts/             # JS del cliente (nav, hero, chatbot)
│   └── styles/
│       └── global.css       # Tailwind v4 + variables de diseño
├── sanity/
│   └── schemas/             # Esquemas de datos: bio, release, track,
│                            # musicSet, pressReference, pressAsset
├── scripts/                 # Scripts de población inicial de Sanity
│   ├── populate-sanity.mjs  # Bio + Press References
│   ├── populate-releases-tracks.mjs
│   └── update-sets-and-covers.mjs
├── public/
│   └── data/
│       └── ra-events.json   # Caché de 300 eventos RA (2013–2024)
├── docs/
│   └── site-guide.md        # Este documento
├── astro.config.mjs
├── sanity.config.ts
├── vercel.json              # Cron configurado aquí
└── package.json
```

---

## 6. Variables de entorno en Vercel

Configuradas en Vercel → Settings → Environment Variables:

| Variable | Valor | Para qué |
|---------|-------|---------|
| `SANITY_PROJECT_ID` | `esbhlkf9` | ID del proyecto Sanity |
| `SANITY_DATASET` | `production` | Dataset de Sanity |
| `VERCEL_DEPLOY_HOOK` | `https://api.vercel.com/v1/integrations/deploy/prj_SICukTvFr85JtpYAZtA69S6QRcm3/gCF8ZFl2aF` | URL que el cron llama para rebuild diario |

> **Nota**: `SANITY_PROJECT_ID` y `SANITY_DATASET` están también hardcodeados en `src/lib/sanity.ts` como fallback.

---

## 7. Rebuild automático (cron)

El sitio se reconstruye solo cada día a las **4:00 AM UTC** (6:00 AM España en verano, 5:00 AM en invierno).

**Cómo funciona:**
1. Vercel llama a `/api/revalidate` según `vercel.json`
2. Ese endpoint llama a `VERCEL_DEPLOY_HOOK`
3. Vercel lanza un nuevo build completo desde GitHub
4. El nuevo HTML incluye eventos actualizados de Bandsintown, nuevos lanzamientos, etc.

**Para forzar un rebuild manual:**
```bash
curl -X POST https://api.vercel.com/v1/integrations/deploy/prj_SICukTvFr85JtpYAZtA69S6QRcm3/gCF8ZFl2aF
```

---

## 8. Cómo actualizar el contenido

### Actualizar Bio
1. Abre Sanity Studio: `npm run studio` (en la carpeta del proyecto) → `localhost:3333`
2. Sección **Bio** → edita el texto HTML
3. Al guardar, el cambio se aplica en el próximo rebuild automático (o fuerza uno manual)

### Añadir/editar Releases
1. Studio → **Release** → New
2. Campos: título, año, sello, tipo (EP/LP/Single), URL de Discogs, URL de portada (Bandcamp o Discogs)
3. Para actualizarlos desde Discogs en bulk: `SANITY_TOKEN=xxx node scripts/update-sets-and-covers.mjs`

### Añadir DJ Sets
1. Studio → **Music Set** → New
2. Campos: título, venue, fecha, URL de SoundCloud o YouTube, duración, orden

### Añadir/editar eventos pasados
- Los eventos de Resident Advisor se cachean en `public/data/ra-events.json`
- Para actualizar: ejecuta el script de fetch de RA y reemplaza el archivo

### Actualizar Press References
1. Studio → **Press Reference** → New
2. Campos: título, fuente, fecha, URL, categoría (Media / Podcasts & Mixes / Más)

### Añadir Press Assets
1. Studio → **Press Asset** → New
2. Tipos: foto de prensa, bio PDF, rider técnico, logo

---

## 9. Cómo hacer cambios en el código

### Setup local
```bash
cd /ruta/al/proyecto
npm install
npm run dev       # Servidor de desarrollo en localhost:4321
npm run studio    # Sanity Studio en localhost:3333
```

### Publicar cambios
```bash
git add .
git commit -m "descripción del cambio"
git push origin main
```
Vercel detecta el push a `main` y hace el deploy automáticamente (~2 minutos).

### Credenciales necesarias para scripts
```bash
export SANITY_TOKEN=skcztNhpOl2Dqsh0NvAHfxghhnTLgNCwFNTdhGysYahHR6a7FKRcnGsq0VRHzY5OVNeVacySj9wk0zPmBCpPlyMNCl2E5JHHQ9MDCSrdfkIrQgafGtGuw4TV52gvdj5gZopI4Yy7Hjd70MW14Fm2fpN3Z1o4qP6BY2ftRxwIowqwGflKbOmY
```

---

## 10. Conectar el dominio julianperez.com

Cuando el sitio esté 100% listo:

**Paso 1** — Vercel Dashboard → proyecto → Settings → Domains → Add `julianperez.com`

**Paso 2** — Vercel te dará dos DNS records. En tu registrar (donde compraste el dominio):

| Tipo | Nombre | Valor |
|------|--------|-------|
| `A` | `@` | `76.76.21.21` |
| `CNAME` | `www` | `cname.vercel-dns.com` |

**Paso 3** — Esperar propagación DNS (5 min – 48 h). Vercel añade HTTPS automáticamente.

---

## 11. Contenido pendiente

- [ ] **Portada de *A Journey Through The Beatscape*** — añadir `coverUrl` en Studio (Discogs no tenía imagen)
- [ ] **Press Assets** — subir foto de prensa, bio PDF, rider técnico, logo en Studio
- [ ] **Set nº 16 de SoundCloud** — falta 1 set de la playlist `sets-podcasts` (requiere JS para renderizar)
- [ ] **Apuntar dominio** `julianperez.com` a Vercel

---

## 12. Accesos y contraseñas

| Servicio | Acceso |
|---------|--------|
| Vercel | vercel.com → cuenta `julianperezcom-4438s` |
| Sanity | sanity.io → proyecto `esbhlkf9` |
| GitHub | github.com/julianperezcom/julianperez.com |
| GitHub token | Guardado en lugar seguro (no incluir aquí) |
| Sanity write token | Guardado en variable de entorno `SANITY_TOKEN` (ver sección 9) |
| Vercel API token | Guardado en lugar seguro (no incluir aquí) |
