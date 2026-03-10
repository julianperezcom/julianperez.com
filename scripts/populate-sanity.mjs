import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'esbhlkf9',
  dataset: 'production',
  apiVersion: '2026-03-08',
  token: process.env.SANITY_TOKEN,
  useCdn: false,
})

// ── MUSIC SETS ──────────────────────────────────────────────────────────────
const sets = [
  {
    _type: 'musicSet',
    title: 'Julian Perez — SUPERSONICOS 31.MAR.2023',
    venue: 'Ibiza Sonica',
    date: '2023-03-31',
    soundcloudUrl: 'https://soundcloud.com/julianperez/supersonicos-31-mar-2023',
    duration: '59:21',
    order: 1,
  },
  {
    _type: 'musicSet',
    title: 'FUTURΣWAVES 09 — Julian Perez',
    venue: 'Dubby · Downtempo · Trip-hop',
    soundcloudUrl: 'https://soundcloud.com/julianperez/futurewaves-09',
    duration: '1:25:27',
    order: 2,
  },
  {
    _type: 'musicSet',
    title: '#138 | Julian Perez (ES)',
    venue: 'Fathers & Sons · Girada Unlimited',
    soundcloudUrl: 'https://soundcloud.com/julianperez/138-julian-perez-es',
    duration: '1:01:01',
    order: 3,
  },
  {
    _type: 'musicSet',
    title: 'S*A*S*H Cast 050 — Julian Perez',
    venue: 'Live at The Terrace',
    date: '2019-01-01',
    soundcloudUrl: 'https://soundcloud.com/julianperez/sash-cast-050',
    duration: '1:48:46',
    order: 4,
  },
  {
    _type: 'musicSet',
    title: '#119 — Julian Perez',
    venue: 'Electronic',
    soundcloudUrl: 'https://soundcloud.com/julianperez/119-julian-perez',
    duration: '58:36',
    order: 5,
  },
]

// ── PRESS REFERENCES ─────────────────────────────────────────────────────────
const pressRefs = [
  // Media
  { title: 'DJ Mag ES Weekly: 024', source: 'DJ Mag ES', url: 'https://issuu.com/djmages/docs/djmages_weekly_024', category: 'Media' },
  { title: 'Julian Perez Interview for Day&Night Magazine', source: 'Day&Night Magazine', date: '2009-06-01', url: 'http://julianperez.com/wp-content/uploads/2022/08/JulianPerezDN_Junio09.jpg', category: 'Media' },
  { title: 'Vicious Magazine Nº216', source: 'Vicious Magazine', url: 'http://julianperez.com/wp-content/uploads/2022/08/VICIOUS_No216-scaled.jpg', category: 'Media' },
  { title: 'Hip & Hyper', source: 'Hip & Hyper', url: 'http://julianperez.com/wp-content/uploads/2022/08/HipHyper.png', category: 'Media' },
  { title: 'Fathers & Sons for Ibiza Style Magazine', source: 'Ibiza Style Magazine', url: 'http://julianperez.com/wp-content/uploads/2022/08/971610_517454835007845_1239476180_n.jpg', category: 'Media' },
  { title: 'Vicious Magazine Nº33: Julian Perez — Idoneidad Emprendedora', source: 'Vicious Magazine', url: 'http://julianperez.com/wp-content/uploads/2022/08/VICIOUS-MAGAZINE-No-33-IN-FACT-2_2-2.jpg', category: 'Media' },
  { title: 'The House Academy: Vinyl of the week', source: 'The House Academy', date: '2013-09-01', url: 'http://julianperez.com/wp-content/uploads/2022/08/2013.09.01-The-House-Academy-Vinyl-of-the-week.jpg', category: 'Media' },
  { title: 'Julian Perez: Cards On The Tables', source: 'Ibiza Voice Magazine', url: 'http://julianperez.com/wp-content/uploads/2022/08/Cards-On-The-Tables-Julian-Perez-Ibiza-Voice.png', category: 'Media' },
  { title: 'Julian Perez: DJMag ES 050', source: 'DJ Mag ES', url: 'http://julianperez.com/wp-content/uploads/2022/08/DJMag-ES-050_page_10-11.png', category: 'Media' },
  { title: 'Interview for Reckon: Guest of the House', source: 'Reckon Music & Events', url: 'https://whatwereckon.com', category: 'Media' },
  { title: 'Rhythmatic talks to Julian Perez', source: 'Rhythmatic', date: '2013-07-16', url: 'http://julianperez.com/wp-content/uploads/2022/08/2013.07.16-Rhythmatic-talks-to-Julian-Perez.png', category: 'Media' },
  { title: 'A Day In The Life: Julian Perez', source: 'Trommel Music', url: 'https://trommelmusic.com/featured/a-day-in-the-life-julian-perez', category: 'Media' },
  { title: 'Vivimos una fiebre del vinilo — VOS Argentina', source: 'La Voz', date: '2015-09-16', url: 'http://julianperez.com/wp-content/uploads/2022/08/2015.09.16-VOS-Argentina.png', category: 'Media' },
  { title: 'Prefiero una batea a un disco duro', source: 'Buenos Aliens', date: '2015-09-11', url: 'http://julianperez.com/wp-content/uploads/2022/08/2015.09.11-BuenosAliens.png', category: 'Media' },
  { title: 'Entrevista a Julian Perez', source: 'Midi Perú', date: '2016-08-18', url: 'http://julianperez.com/wp-content/uploads/2022/08/2016.08.18-midi.pe_.png', category: 'Media' },
  { title: 'No DJ Wants To Sound Boring When Playing Long Sets', source: 'Pulse Radio', date: '2016-06-10', url: 'http://julianperez.com/wp-content/uploads/2022/08/2016.06.10-Pulseradio-Asia.png', category: 'Media' },
  // Podcasts & Mixes
  { title: 'Julian Perez Releases Debut LP, Closes Fathers & Sons Productions', source: 'Resident Advisor', url: 'https://ra.co/news/36928', category: 'Podcasts & Mixes' },
  { title: 'Stream Snippets of Julian Perez\'s Debut Album — SOLEMNITY', source: 'XLR8R', url: 'https://xlr8r.com/news/stream-snippets-of-julian-perezs-debut-album/', category: 'Podcasts & Mixes' },
  { title: 'Meoko: Julian Perez – SOLEMNITY Review', source: 'Meoko', date: '2016-10-20', url: 'http://julianperez.com/wp-content/uploads/2022/08/2016.10.20-Meoko-Solemnity-review.png', category: 'Podcasts & Mixes' },
  { title: 'Review: Julian Perez – Break-Even LP [GIRADA010]', source: 'Trommel Music', url: 'https://trommelmusic.com/music/reviews/review-julian-perez-break-even-lp-girada010/', category: 'Podcasts & Mixes' },
  { title: 'Julian Perez – Now, After', source: 'Resident Advisor', url: 'https://ra.co/reviews/18750', category: 'Podcasts & Mixes' },
  { title: 'Julian Perez – A Raw Belief EP', source: 'Trommel Music', url: 'https://trommelmusic.com/music/julian-perez-a-raw-belief-ep/', category: 'Podcasts & Mixes' },
  { title: 'Premiere: A1 – Julian Perez – Crack a Joke, Have a Smoke [GIRADA05]', source: 'Trommel Music', url: 'https://trommelmusic.com/music/premiere-a1-julian-perez-crack-a-joke-have-a-smoke-girada05/', category: 'Podcasts & Mixes' },
  { title: 'Premiere B1 – Julian Perez & Franco Cinelli – Beyond 1214 [GIRADA06]', source: 'Trommel Music', url: 'https://trommelmusic.com/music/premiere-b1-julian-perez-and-franco-cinelli-beyond-1214-girada06/', category: 'Podcasts & Mixes' },
  { title: 'Premiere A1 – Julian Perez – Overdubbing Theory [GIRADA11]', source: 'Trommel Music', url: 'https://trommelmusic.com/music/premiere/premiere-a1-julian-perez-overdubbing-theory-girada11/', category: 'Podcasts & Mixes' },
  { title: 'Mysterious Project Girada Unlimited Unleash CURE MUSIC 7/x', source: 'Trommel Music', url: 'https://trommelmusic.com/news/mysterious-project-girada-unlimited-unleash-cure-music-7-x/', category: 'Podcasts & Mixes' },
  { title: 'Premiere: Hear Girada Unlimited\'s Cure Music Debut — A Ricardo Villalobos Favourite', source: 'XLR8R', url: 'https://xlr8r.com/news/premiere-hear-girada-unlimiteds-cure-music-debut/', category: 'Podcasts & Mixes' },
  { title: 'Various – Cocoon Compilation N Review', source: 'Resident Advisor', url: 'https://ra.co/reviews/15770', category: 'Podcasts & Mixes' },
  { title: 'Chris Tietjen Preps Mix Compilation for Cocoon', source: 'Resident Advisor', url: 'https://ra.co/news/28075', category: 'Podcasts & Mixes' },
  { title: 'Cocoon Compiles N', source: 'Resident Advisor', url: 'https://ra.co/news/25431', category: 'Podcasts & Mixes' },
  { title: 'Livio & Roby Announce New Album, Phantom Circle', source: 'Resident Advisor', url: 'https://ra.co/news/36507', category: 'Podcasts & Mixes' },
  // Más
  { title: 'Moscow\'s Outline Festival Announces 2016 Lineup', source: 'Resident Advisor', url: 'https://ra.co/news/35024', category: 'Más' },
  { title: 'Sunwaves Unleash Final Monster Line-Up For Their Summer Session', source: 'Trommel Music', url: 'https://trommelmusic.com/news/sunwaves-unleash-final-monster-line-up-for-their-summer-session/', category: 'Más' },
  { title: 'Epizode Festival Launches in Vietnam', source: 'XLR8R', url: 'https://xlr8r.com/news/epizode-festival-launches-in-vietnam/', category: 'Más' },
  { title: 'Julian Perez (ES) — Amsterdam Dance Event', source: 'ADE', url: 'https://www.amsterdam-dance-event.nl/en/artists-speakers/julian-perez/4659/', category: 'Más' },
  { title: 'BPM Festival: Apollonia', source: 'Resident Advisor', url: 'https://ra.co/events/547880', category: 'Más' },
  { title: 'BPM Festival: tINI & The Gang', source: 'Resident Advisor', url: 'https://ra.co/events/547990', category: 'Más' },
  { title: 'tINI and The Gang Announces Five Ibiza Dates for 2016', source: 'Resident Advisor', url: 'https://ra.co/news/34774', category: 'Más' },
  { title: 'RA Ibiza Weekly: ENTER., Fuse', source: 'Resident Advisor', url: 'https://ra.co/news/17467', category: 'Más' },
  { title: 'RA Ibiza Weekly: Closing Parties, Part I', source: 'Resident Advisor', url: 'https://ra.co/news/21321', category: 'Más' },
  { title: 'RA Ibiza Weekly: Julian Perez, The Zoo Project', source: 'Resident Advisor', url: 'https://ra.co/news/26382', category: 'Más' },
  { title: 'Guti Starts People Like Us in Ibiza', source: 'Resident Advisor', url: 'https://ra.co/news/29911', category: 'Más' },
  { title: 'Rhadoo, Binh Play Unusual Suspects at Sankeys Ibiza in 2016', source: 'Resident Advisor', url: 'https://ra.co/news/34408', category: 'Más' },
  { title: 'RA Ibiza Weekly: Free Parties', source: 'Resident Advisor', url: 'https://ra.co/dj/julianperez/news', category: 'Más' },
  // Awards
  { title: 'Vicious Music Awards — Nominación Best Artist 2012', source: '20 Minutos', date: '2012-01-01', url: 'https://www.20minutos.es/noticia/1639126/0/premios-nacionales-electronica/vicious-musica-awards/juan-magan/', category: 'Más' },
  { title: 'Vicious Music Awards — Nominación 2013', source: 'Vicious Magazine', date: '2013-01-01', url: 'http://web.archive.org/web/20140209212223/http://www.viciousmagazine.com:80/viciousmusicawards/nominaciones.php?', category: 'Más' },
  { title: 'DJ Awards — Best Newcomer Nomination 2016', source: 'DJ Awards', date: '2016-01-01', url: 'https://djawards.com/editions/2016-19th-edition/', category: 'Más' },
]

async function run() {
  console.log('Uploading to Sanity project esbhlkf9...\n')

  // Music Sets
  console.log(`Creating ${sets.length} music sets...`)
  for (const set of sets) {
    const doc = await client.create(set)
    console.log(`  ✓ ${set.title}`)
  }

  // Press References
  console.log(`\nCreating ${pressRefs.length} press references...`)
  for (const ref of pressRefs) {
    await client.create({ _type: 'pressReference', ...ref })
    console.log(`  ✓ ${ref.title}`)
  }

  console.log('\nDone! All content uploaded to Sanity.')
}

run().catch(err => {
  console.error('Error:', err.message)
  process.exit(1)
})
