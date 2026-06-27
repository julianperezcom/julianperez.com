export interface PressArticle {
  slug: string
  title: string
  publication: string
  date: string
  dateISO: string
  category: 'interview' | 'feature' | 'review' | 'premiere' | 'news'
  excerpt: string
  image?: string
  imageAlt?: string
  sourceUrl?: string
  sourceNote?: string
  content: string // HTML
}

export const pressArticles: PressArticle[] = [
  {
    slug: 'meoko-2014-i-need-that-moment',
    title: '"I Need That Moment to Unplug Myself to The Music"',
    publication: 'MEOKO',
    date: 'August 29, 2014',
    dateISO: '2014-08-29',
    category: 'interview',
    excerpt: 'MEOKO speaks to Julian Perez about his Cocoon Recordings debut, the Fuse movement, Robert Johnson, and why he never carries music on his phone.',
    image: '/press/meoko-2014.png',
    imageAlt: 'MEOKO interview with Julian Perez, August 2014',
    sourceNote: 'Original no longer online. Archived locally.',
    content: `
<p>We spoke to the elusive Julian Perez off the refreshing all vinyl label Fathers and Sons Productions — another sophisticated talent from Spain who has turned the heads of many in recent years. His cutting edge and elegant production is a fresh approach to house music with a clear knowledge of structuring 4/4 sounds with a rugged undertone.</p>

<h3>You have a new release on Cocoon Recordings — a huge accomplishment. What else can we expect production wise from you this year?</h3>
<p>That Cocoon vinyl box compilation — indeed it's an accomplishment to be in there with such established artists who released on the previous editions along these years. This is another personal goal I'm very happy about. Papa Sven's record label!</p>
<p>In September is coming a 12" on Felipe Venegas's imprint "Drumma Records". That's probably the most experimental original track I ever decided to put out. I feel that now I can show that my point of view when I work on tracks very much depends on my mood and inspiration in the moment, and it's pretty open in styles. The two versions of it by Mark Ambrose makes it a very interesting record. I'm currently working on a few more tracks by myself and also on interesting collaborations, but no rush to release for the moment at all.</p>

<h3>To anyone unfamiliar with your productions or mixes, how would you describe your sound?</h3>
<blockquote>"I'd just describe it as my sound. It's an extensive mix of influences I have from over the years and that made me build it. That's why I do tracks from deep house to dub techno. In my mixes I can't be focused in one particular style, the development of every set always goes in a different direction as expected, always with a sound in common on the full journey."</blockquote>

<h3>You have been playing with the FUSE guys a lot this past year. How do you find the FUSE movement? And how did you first cross paths with those guys?</h3>
<p>I met those guys back in 2011 when I played for a Cerca Trova party, a well known warehouse rave in London. Daniel and Rossko who were the promoters and DJs also that night, they brought me to Fuse on Sunday straight from our after party.</p>
<p>It was a great and unexpected thing for me — a party going on Sundays in London. A very deep and serious music in the early evening, a vibe I never saw before in London with a proper sound and good looking people chillin' and not getting too excited as a Friday or Saturday. The only thing I didn't like was when they shut it down at 12am, I wanted some more of that! From that time we were in touch, and now I'm proud to say that I'm one of the frequent names of the not too many guests they invite besides their residents.</p>
<blockquote>"FUSE is one of the parties I like to hang in, and I cannot say this about many others lately. These guys — Tony Canatella and Enzo Siragusa — are able to do a party with their residents and get the same good vibe and amount of crowd as when they invite guests. They built it with a solid base and people love the quality concept of good sound system and proper music every rave. That's the FUSE concept, that's a real movement."</blockquote>

<h3>You have played some amazing venues around the world. Highlight of this year? And are there any you haven't yet played that you would love to perform in?</h3>
<blockquote>"This year the goal was to play at Robert Johnson — my idea of 'a club'. The sound, the booth, the perfect size. It was without a doubt the highlight of this year. If you ask, I'd like to play just to feel the history of them at least once in clubs such as Panorama Bar or Fabric London (Room 1)."</blockquote>

<h3>When not mixing yourself, who would we find you listening to in your spare time and when travelling in between bookings?</h3>
<p>I like always to get early in the club before my set to listen to at least 1 hour of the warm-up of a random DJ, which is very surprising sometimes. Spending time in Club der Visionaere in Berlin or in Underground Ibiza, and listening to new people for me on extended sets, it's very enjoyable and makes you open your ears and mind with new styles which makes you develop as an artist.</p>
<blockquote>"When travelling I like mostly to enjoy the silence. I don't have any music on my phone either — I need that moment to unplug myself to the music before or after the gig. At home after the weekend, I listen to ambient techno records lately, it's inspiring."</blockquote>

<h3>If we sat in the studio with you for a day, what kind of equipment would we find you producing with?</h3>
<p>You'll find it very easy to jam in my studio. If you like to work fully analog you could sequence all with an Akai MPC3000 and then jamming with a few drum machines — Jomox Xbase999, MFB 522, Tempest. Synths: Korg MS2000, Roland SH101, and more stuff borrowed from my studio-mate next door — Roland TR-909, TB-303, TB-626, Avalon Compressor, Eventide H3000, a few guitar delays, and my Midas 24 channels. Besides all of this: Ableton Live, Logic and a bunch of VSTs.</p>

<h3>Are there any avenues you would like to experiment with or explore that you haven't as of yet?</h3>
<p>I'm thinking about working on a liveset. I will have to find the time to get it ready — it could be an interesting next step.</p>

<h3>If you were not a producer/DJ, would you still like to be involved in the music industry?</h3>
<p>I don't know if I'd be involved in the music industry if I wasn't a DJ/producer because I'm not a musician and I come from another business world — also creative, but not linked with electronic music at all: advertising. With my label I like to discover and support talented people who work hard and need a platform to express themselves, and this is something I could still do even besides DJing/producing.</p>

<h3>What do you see changing in electronic music in the next 10 years?</h3>
<p>The development of the technology is going crazy fast and non-stop growing. There will always be people who refuse to get updated, and others who will use the new technology to improve — even combining with the old gear. Of course everything will come easier to make music with less investment in the future. The key is to use what makes you feel better and more productive when you get the sound you're looking for in your own style.</p>

<h3>If you were to play at a location that wasn't a club, festival, or usual party location, where would it be and why?</h3>
<p>"There's nowhere like home!"</p>
`,
  },
  {
    slug: 'meoko-2017-face-behind-girada-unlimited',
    title: 'MEOKO Exclusive: The Face Behind Girada Unlimited',
    publication: 'MEOKO',
    date: 'August 23, 2017',
    dateISO: '2017-08-23',
    category: 'feature',
    excerpt: 'MEOKO reveals that Julian Perez is the mastermind behind the mysterious Girada Unlimited label, whose debut "Girada Max EP" sold out before release day.',
    image: '/press/meoko-2017.png',
    imageAlt: 'MEOKO exclusive: The face behind Girada Unlimited — Julian Perez, August 2017',
    sourceNote: 'Original no longer online. Archived locally.',
    content: `
<p>Early August saw the birth and debut release from Spain-based label Girada Unlimited. A mysterious and imaginative vinyl only outlet, that in a short space of time has gained attention from high calibre artists across the board. The 'Girada Max EP' was practically sold out before the day of release, leaving the remaining copies like gold dust for crate diggers and record lovers to hunt down. Meanwhile, everyone was scratching their heads wondering who is the mastermind behind the label. Who could possibly put together such an outstanding first release, crammed with house and techno dance floor flavours, by a handful of carefully selected unknown artists? The answer everyone was looking for is Julian Perez. And it all makes sense now.</p>

<p>Perez has been at the forefront of the underground scene for many years now. Rated highly by many for his impeccable taste in records, and his keen ear for fresh production talents amongst the scene. Always pushing forward exciting new ideas and sounds.</p>

<p>The concept behind the unknown artist releases allows the listener to gain full focus in the heart of the sound. Without knowing the artists, or seeing a given name for each track, it allows the listener's mind to remain as open as possible — creating their own interpretation without any influences, no limits, and no boundaries. The body and soul of the sound is painted by imagination.</p>

<p>The only details of the first release the listener is given is the name of the EP — <em>Girada Max</em>. Immediately you know where you are at with A1, a slick rolling groove, waiting to be shown a club dancefloor, something you would certainly expect to hear from Perez himself. A2 is much more grounded, stripped back and laced with dreamy percussions. Straight back to it in B1 for some cosmic boogie, a real sense of 90's influences, the break especially. Certainly one for the collectors and selectors, looking for the outer space journey. Rounding things off perfectly, B2 has an after party atmosphere swaying the dance floor with steady breaks rhythms, a distinctive smooth groove. A perfect weight within four tracks.</p>

<p>After the ending of Perez's much loved label Fathers &amp; Sons Productions last year — one of the most influential labels of the past decade — it is great to see the Spanish artist begin a fresh and inspiring new project. However, let us be honest, we all knew it would not be long before we heard that name again.</p>

<p><em>Words by Zac More, MEOKO</em></p>
`,
  },
  {
    slug: 'rhythmatic-2013-interview',
    title: 'Rhythmatic Talks to Julian Perez',
    publication: 'Rhythmatic',
    date: 'July 16, 2013',
    dateISO: '2013-07-16',
    category: 'interview',
    excerpt: 'Ahead of the Fathers & Sons 1st Anniversary party at Rhythmatic London, Julian Perez discusses his DJ setup, vinyl philosophy, studio gear, musical influences and what DC10 means to him.',
    image: '/press/rhythmatic-2013.png',
    imageAlt: 'Rhythmatic interview with Julian Perez, July 2013',
    sourceNote: 'Original no longer online. Archived locally.',
    content: `
<p>Welcome to Rhythmatic, we are very glad to have you host the 1st Anniversary of Fathers and Sons with us. We have a selection of questions for you with regards to yourself as an artist and your label Fathers and Sons.</p>

<h3>When you play — do you DJ, play LIVE or both?</h3>
<p>I'm currently just DJing. However I am also thinking about doing live sets in the near future, so I've started to think about what I would play in my set. If I do it, I don't want to just mix my own tracks, I'd like to do a proper live set.</p>

<h3>What's your ideal DJ setup?</h3>
<p>One good quality analog mixer, 2 turntables and 1 or 2 CD players. I could live without the CD players but not without turntables.</p>

<h3>There continues to be an endless dispute between vinyl DJs and sync DJs. What is your opinion on the Vinyl vs Sync debate?</h3>
<blockquote>"For me the first and most important thing when I'm playing is having fun, then to make the crowd have fun too. I could play the same music with a laptop and sync and perhaps the crowd would enjoy it just as much, but I'd get bored after dropping the first track."</blockquote>

<h3>What does your studio consist of?</h3>
<p>My studio now consists of 3 analog drum machines: Jomox 999, MFB-522 and Tempest — the last one is a synth too. I don't have external effects. Ableton Live and Logic to sequence, and a 24 channel analog mixer for an external mixdown.</p>

<h3>Do you use much analog gear?</h3>
<p>The neighbours in the studios next to me have a lot of old gear so I'm borrowing and trying it out all the time on my tracks. In the end, the most important thing is to know what works better for your sound and to learn 100% how to use each machine or instrument.</p>

<h3>When it comes to making a track, do you manage to finish it in a relatively short time, or can you work on it for years?</h3>
<p>My best tracks can be done in one evening or they can be made in a whole day. When a track takes so much time it isn't usually one of my favourites.</p>

<h3>Have you ever done any sound engineering courses, or are you a self-taught producer?</h3>
<p>Self-taught producer. It started in 2010 — I had the structures of the tracks in my head and the sounds were very familiar to me because I started playing from an early age. I was also reading a lot, getting some advice and with clear ideas about what I wanted, the rest of the time was spent focusing on it.</p>

<h3>Are you a musician too? Do you play any instruments?</h3>
<p>No, I'm not a musician and I don't play instruments. I'm just a DJ who loves to make music.</p>

<h3>Were you influenced by music that your parents or siblings would listen to growing up?</h3>
<blockquote>"I grew up living with a cousin who was like my big brother; he was listening to Depeche Mode, Michael Jackson, Queen, Pink Floyd — all day long. I had this music at home after school all the time, so they were probably my strongest influences as a kid. This was before I started with Dance & Techno just a few years later. My parents still don't get why I liked that 'noise'."</blockquote>

<h3>What do you think will be the next cool trend to dominate the music scene?</h3>
<p>There are always people who follow different kinds of trends — clothing, music, dancing, even drugs. After a while a new one comes out and followers jump from one to another. There will always be new music trends but as with fashion, this is about looking at the past to take something which worked back in the day and make it "cool". Only you can choose to follow your thoughts or to be a follower.</p>

<h3>Living and working from Ibiza — what are the advantages?</h3>
<blockquote>"To spend the summer season in Ibiza is great as you are in touch with a lot of artists you know, who are always going there to play, meeting new ones all the time, sharing studio sessions with them, getting ideas when partying and enjoying long private after hours sets if you're lucky. It's my place to be, to enjoy and to keep learning."</blockquote>

<h3>Which club in Ibiza would you call your favourite?</h3>
<p>I have amazing memories on the Space terrace when it was uncovered, I loved the long nights at Underground which hosted closed-door after parties, but the club where I had the most fun back in the day would be DC10.</p>

<h3>This year you celebrate the 1st anniversary of Fathers & Sons Productions. What are you looking forward to the most?</h3>
<p>I'm getting exactly what I expected. I'm having artists I admire professionally and personally, and I've seen that they feel and support the sound, label and concept of it. To see how the F&S artists and residents of the clubs are having the chance to be involved in this project, expressing themselves and learning from the guests, makes me feel that it's worth it. It's a big way of communication, sharing and respect.</p>

<h3>What should people expect from the Rhythmatic night in London?</h3>
<p>People in London know Rhythmatic and their parties very well. They've had huge line-ups over the last years and now they are having us for a label night with Sebo K (Mobilee) and Martinez (Cocoon) as guests, plus myself and Rhythmatic residents in one of the best underground venues in town. London people are very musically educated — we'll give our best to have a big party.</p>

<h3>What's the next release we can look forward to from Fathers & Sons?</h3>
<p>We are already on it. Every release is not revealed until the day we announce it. However I can advance that FAS006 will be a project with various artists. This one brings old school sounds back to the label — it's a deep and groovy release, 100% Fathers and Sons sound.</p>
`,
  },
  {
    slug: 'buenos-aliens-2015-prefiero-una-batea',
    title: '"Prefiero una batea a un disco duro"',
    publication: 'Buenos Aliens',
    date: 'September 10, 2015',
    dateISO: '2015-09-10',
    category: 'interview',
    excerpt: 'Ahead of his Argentina tour (Córdoba, Mendoza, Buenos Aires), Julian Perez speaks to Buenos Aliens about Fathers & Sons Productions, the vinyl-only philosophy, his studio evolution and what Argentina means to him.',
    image: '/press/buenos-aliens-2015.png',
    imageAlt: 'Buenos Aliens interview with Julian Perez, September 2015',
    sourceNote: 'Original no longer online. Archived locally.',
    content: `
<p><em>Entrevista por Damián Levensohn. A días de encarar una intensa gira por Argentina, que lo llevaría a Córdoba, Mendoza y finalizaría en la fiesta Flora & Fauna en el Hipódromo de Buenos Aires, nos encontramos con el ascendente artista español Julian Perez.</em></p>

<h3>¿Cuál es la actualidad de Fathers & Sons Productions?</h3>
<p>Podemos decir que Fathers & Sons, por mucho que se haya expandido y dado a conocer en los últimos años, es un sello que sigue siendo fiel a sí mismo. Nació con una idea particular y clara, un sonido personal que no se iba a ver afectado por las modas y no se iba a corromper. Está concebido para aportar algo diferente a la escena y para hacerlo con nuestras reglas, plazos y desde nuestro punto de vista, por supuesto muy subjetivo.</p>
<p>Seguimos ampliando nuestro catálogo con cada nueva referencia a través de los diferentes estilos que tienen cabida en Fathers & Sons. Artistas nuevos, frecuentes, algunos desconocidos y proyectos donde en un principio no se conoce el artista hasta que no se lee en el crédito del disco — es lo que viene próximamente junto a más cosas que se nos irán ocurriendo. Queremos ofrecer música basándonos principalmente en la calidad de ésta. Pagar artistas caros famosos o invertir en promoción y marketing siguen sin ser nuestros recursos principales a la hora de publicar.</p>

<h3>¿Por qué decidiste que sea un sello estrictamente vinyl only?</h3>
<blockquote>"Fuimos de aquellos que decidieron que el vinilo debía volver para quedarse y apostamos por ello. Nos gusta más tener discos en la estantería que tener música en el disco duro. Como artista que estaba empezando a tener producciones para publicar, realmente quería que mi música saliese en vinilo y pocos sellos se querían arriesgar con esto. Era la época en que era muy económico y rentable un sello digital y todo el mundo podía tener uno. Para mí no era nada especial el tener un sello digital entre millones."</blockquote>

<h3>¿En qué parte del proceso de aprendizaje te sentís hoy en cuanto al estudio?</h3>
<p>Empecé en el 2010 yo solo y aprendiendo día a día — fue una etapa muy importante y emocionante en mi carrera. Lo que más me motiva es el aprendizaje, crear todo el tiempo y probar hacer diferentes estilos y llegar a ver los trabajos terminados. Ha llegado un punto en el que voy conociendo mejor mis herramientas; aun así no dejo de aprender cosas y experimentar. Últimamente estoy dedicando mucho tiempo a aprender de mezcla y hacer que mis tracks suenen lo mejor posible a mi gusto.</p>

<h3>¿Cuáles fueron los highlights del verano europeo?</h3>
<p>Ha sido un verano divertido. He estado dos veces en Norte América, Canadá, México y muchos gigs en Europa. Puede que Chicago, Cocoon Formentera y ENTER (en Space Ibiza) hayan sido los más remarcables del verano.</p>

<h3>¿Cuál es el contexto que preferís a la hora de desarrollar un DJ set?</h3>
<p>Me gusta llevar un poco de todo en la maleta, no suelo hacer una sesión "dura" aunque solamente tenga dos horas de set. Me gusta ir subiendo y bajando el ritmo e ir jugando con la pista. La idea es poder hacer entender a la gente que no es necesario tenerlo siempre arriba para divertirse. Para eso, claro, hay que ganarse su confianza.</p>

<h3>¿Planes para lo que resta del año?</h3>
<p>Va a ser un buen invierno — seguir viajando los fines de semana y sobre todo trabajando mucho en el estudio. Tengo muchos proyectos que voy a ir acabando durante el invierno: trabajos propios y colaboraciones. Hay mucho que terminar y por supuesto centrarme en muchos proyectos que van a empezar antes de final de año.</p>

<h3>¿Cuáles son las expectativas para la gira argentina?</h3>
<p>Tengo muchas ganas. Llego el viernes 11 a Córdoba para tocar con mi buen amigo Guti en un gran evento en Espacio Quality, donde también estarán Dokser y Knowbru. El jueves 16 vuelvo a Córdoba para una noche más íntima en Blacksheep. El 17 en Black Jagger, Mendoza, y el 19 en Flora y Fauna, en el Hipódromo de Buenos Aires. Va a ser un tour intenso, compartiendo con buenos amigos, y estoy seguro de que la gente se va a divertir.</p>

<h3>¿Qué recordás de tus anteriores experiencias en Argentina?</h3>
<blockquote>"La última vez estuve en febrero y fue increíble. Fueron tres gigs en tres días muy intensos. ¡Ah, la gente lo vive de verdad!"</blockquote>
`,
  },
  {
    slug: 'pulseradio-2016-no-dj-wants-to-sound-boring',
    title: '"No DJ Wants to Sound Boring When Playing Long Sets"',
    publication: 'Pulse Radio Asia',
    date: 'June 10, 2016',
    dateISO: '2016-06-10',
    category: 'interview',
    excerpt: 'Ahead of his South East Asian debut at Glow Club Bangkok, Julian Perez speaks to Pulse Radio Asia about long sets, the vinyl revival, crate digging and why he never pre-plans his sets.',
    image: '/press/buenos-aliens-2015.png',
    imageAlt: 'Pulse Radio Asia interview with Julian Perez, June 2016',
    sourceNote: 'Original no longer online. Archived locally.',
    content: `
<p><em>By Marlina Azmi — June 10, 2016</em></p>
<p>Ibiza-based DJ and producer Julian Perez has garnered a stellar reputation for himself for his unique and diverse, cutting-edge sound that takes his audience on an exciting ride, from rolling deep house to stripped-down dub techno. After releasing an abundance of tracks on a handful of the hottest labels, Perez launched his own strictly vinyl-only label Fathers & Sons Productions — quickly earning support from some of the most respected artists in the scene.</p>

<h3>For someone as experienced as yourself, how do you keep from being jaded?</h3>
<blockquote>"By staying true to myself. Otherwise I wouldn't be here."</blockquote>

<h3>What excites you about playing at unfamiliar territories, and how do you prepare for gigs like your first trip to Israel or your upcoming gig at Glow in Bangkok?</h3>
<p>It's challenging to bring my sound to a new crowd, who are not just expected to dance, but to also experience a musical journey through their ears and minds by a DJ who they might not have heard about. You don't know how many actually come to see you until you arrive and interact with them. That give and take process while feeling their reaction is what it's all about.</p>
<blockquote>"I don't prepare my sets. Not even the music for any particular gigs on a tour like this one — that would be stressful and it wouldn't work for me. I can't think about what would work and suit in each one of the clubs, so I am here to give them a good surprise. That's the idea."</blockquote>
<p>It's always about choosing the freshest and most interesting records that I'm hooked on at the moment — regardless of how old the tracks are. I like to play a bit of everything that will work in clubs, including my own unreleased tracks. That has worked out great for me until today, and I won't have it any other way.</p>

<h3>Long sets are always fun for the DJ, but you've also got to keep the crowd engaged for a long time. What are your tips?</h3>
<blockquote>"No DJ wants to sound boring when playing long sets but trust me, it's not easy to get the crowd engaged for many hours — I can personally count the number of people who can do it successfully with all my fingers in one hand. It is a big advantage when you have a musically educated and respectful crowd in front of you during long sets."</blockquote>
<p>From my experience: try to not sound repetitive by not playing tracks of the same genre one after the other. You need to be versatile on the track selection and keep a steady flow. You have to keep people engaged and anticipate the next record you're going to play through feeling their vibe. Long sets give you the chance to showcase a proper history of your personality through music — then you're able to show who you really are as an artist.</p>

<h3>Vinyl revenues surpassed free streaming last year. Has there been an increase in sales for Fathers & Sons?</h3>
<p>We've been forced to increase the amount of pressed copies with our latest releases due to the growing demand from shops worldwide. When we started, the market was slumping and we wanted to entice the interest of DJs and collectors — this was before the hype of vinyl began.</p>
<blockquote>"However, we're not yet re-pressing records. We don't believe in continuously re-pressing new releases to make more money. DJs who follow us and have stayed tuned — or even the ones who have discovered us recently — appreciate the fact the record they've just got won't always be available."</blockquote>

<h3>Do you think the vinyl revival is a passing trend?</h3>
<p>It is a trend, but I personally dig it over others because it is keeping vinyl records alive. Buying records makes your selection way more personal. The second-hand market is moving fast — the 'followers' will stop feeling the trend at some point, but others will stick to it for longer because it has become more of a lifestyle.</p>

<h3>Where are some of your favourite crate digging spots?</h3>
<p>Technique in Tokyo, Gramaphone Records in Chicago, Spacehall in Berlin, Vinyl Pimp in London, A-1 in New York, Subwax and Discos Paradiso in Barcelona — to name a few.</p>
`,
  },
  {
    slug: 'reckon-2016-guest-of-the-house',
    title: 'Julian Perez: Guest of the House',
    publication: 'Reckon Music & Events',
    date: 'January 28, 2016',
    dateISO: '2016-01-28',
    category: 'interview',
    excerpt: 'Reckon Music sits down with Julian Perez ahead of his Barcelona headline to discuss independence as an artist, the philosophy behind Fathers & Sons, and why he will never belong to any brand.',
    image: '/press/reckon-2016.png',
    imageAlt: 'Reckon Music & Events interview with Julian Perez, January 2016. Photo by Carlos Carrillo.',
    sourceNote: 'Original no longer online. Archived locally.',
    content: `
<p><em>Photo by Carlos Carrillo. Following up from one of his hottest years yet, trailblazer Julian Perez takes a step back to compare his work on wax to his infamous live sets ahead of one of what's looking to be one of his most experimental years yet.</em></p>

<h3>You maintain you're an independent artist pioneering Fathers & Sons. Is remaining independent whilst running a label challenging?</h3>
<blockquote>"I do my own stuff, I have my own label, and I'm really happy to release on other people's labels. But at the end I consider myself independent. I don't really belong to another brand. I like to be a guest. I don't want anyone to say 'Okay, this guy is from this' — to point at me in a direction. I am just from my level. I have my own brand and myself. I am my own brand."</blockquote>

<h3>Why do you like to release music on other labels? Why not release everything on your own?</h3>
<p>I'm releasing on other labels — upcoming releases on Subwax Barcelona because I like the guys and I like the label. I could release all the stuff on my own label but I also like to share with other people, with other labels. The good thing about doing it the way I do is that I do what I want. I release when I want and nobody can tell me anything. It's freedom.</p>
<blockquote>"I like to share with other people. Also they're friends, it's good to share with them. It's not like I'm releasing on every label — there are a lot of labels asking — it's just how I'm feeling. If they are flexible, then it's gonna work. You don't wanna put restrictions on yourself."</blockquote>
<p>I don't want to feel pressure that there's a brand telling me the way I have to dress or how to play. I don't like that. I have my own personality, my own way of thinking, way to dress, way to play. I like to be myself and then, if you invite me to your party and I like it, I go and I do it. But I won't belong to your party, I won't belong to your brand.</p>

<h3>Do you think it's the duty of a good artist to bring others up with you when you're established?</h3>
<p>I think so — that's the point of the label. It started with releasing our stuff and doing things the way we wanted. But it's about supporting the other artists who really needed the support.</p>
<blockquote>"Fathers and Sons is this: the fathers supporting the sons. You become a father when you're supporting a son. Everyone who's playing our releases — Ricardo, Zip, Sonja, Margaret, Cassy, Dorian — all of these guys are giving us support playing our stuff in their sets. Ricardo is one of the people who can be considered as a father. A 'father' is who helps selflessly. A 'son' is a talent yet to be discovered. We need more fathers in the electronic music industry."</blockquote>

<h3>Is there something family-like about running Fathers & Sons?</h3>
<p>Some brands and labels want to be like "Yeah let's do this as a family" and then there's only one person telling everyone else what to do — or maybe everyone at the label is not allowed to release on other labels. That's not freedom, that's not what I want to do. I want to support the artist.</p>

<h3>You've spoken before about Ibiza as a unique ecosystem. How has it shaped you as an artist?</h3>
<p>Ibiza in the summer is like a non-stop masterclass — you are in touch with the people you respect most, in the studio during the day, on the terrace at night. The access to so many different kinds of music happening at the same time in one small island is unique. It also teaches you who you are, because the competition is high and you either find your identity or you get lost following others.</p>
`,
  },
  {
    slug: 'brag-magazine-2016-five-things',
    title: 'Five Things with Julian Perez',
    publication: 'Brag Magazine (Sydney)',
    date: 'June 2, 2016',
    dateISO: '2016-06-02',
    category: 'feature',
    excerpt: 'Brag Magazine asks Julian Perez five defining things: from childhood memories of club tapes, to inspirations Quincy Jones and Depeche Mode, to his take on the current state of the electronic music scene.',
    image: '/press/brag-sydney-2016.png',
    imageAlt: 'Five Things with Julian Perez — Brag Magazine, Sydney, June 2016',
    sourceNote: 'Original no longer online. Archived locally.',
    content: `
<p><em>Julian Perez plays S.A.S.H Queen's Birthday Long Weekend Party at Home Nightclub, Sydney, Sunday June 12, 2016.</em></p>

<h3>1. Growing Up</h3>
<blockquote>"The key childhood memory was when I was listening to electronic music at eight or nine years old back in 1991. My friends and I were waiting for our older friends, cousins, brothers and sisters to come back from the clubs every weekend. They were bringing us tapes recorded on the night. Now that's not really common but DJs in that time were recording various tapes of the sets at the same time every night. We knew all that music from that time after many listenings before we started getting into records years after."</blockquote>

<h3>2. Inspirations</h3>
<p>Quincy Jones, Herbie Hancock, Depeche Mode. I had them on repeat and still do.</p>

<h3>3. Your Crew</h3>
<p>I was getting into DJing and producing, taking it as my full-time job in the time when the scene was about talent, effort and dedication. I'm still working with my close friends who share this point — for me that's the only way to stay in this business: being happy and staying true to yourself and to the people who follow us.</p>
<blockquote>"Now working in the studio is what is really pushing me — learning every day from other people and having fun doing what I love most: leaving some music here for the future."</blockquote>

<h3>4. The Music You Make and Play</h3>
<p>The styles are a bit messed up lately when listed online. People are a bit confused with what is what and how to classify each record into styles and sub-styles. On my sets as well as on my releases you'll find a mix of house, techno, minimal, deep house, dub techno and lately even ambient. So people can expect a set quite wide in styles.</p>

<h3>5. Music, Right Here, Right Now</h3>
<blockquote>"The music scene right now is growing so fast, it has become very popular and with new artists growing up quick, it's not always just about the talent like it used to be, but about the political interests on the scene, management companies, et cetera. Luckily there is an amount of true artists out there doing a great job — and hopefully more every time. The bigger obstacles to overcome now? Our own ego."</blockquote>
`,
  },
  {
    slug: 'ibiza-voice-2018-cards-on-the-tables',
    title: 'Cards On The Tables: Julian Perez',
    publication: 'Ibiza Voice',
    date: 'February 2, 2018',
    dateISO: '2018-02-02',
    category: 'interview',
    excerpt: 'Ben Raven speaks with Julian Perez about what it\'s really like to be a DJ — record sourcing, set preparation, mental resilience, and why he never compromises his sound.',
    image: '/press/ibiza-voice-2018.png',
    imageAlt: 'Cards On The Tables: Julian Perez — Ibiza Voice, February 2018',
    sourceNote: 'Original no longer online. Archived locally.',
    content: `
<p><em>Words by Ben Raven. Photos by Eugene Onegin, Raul Torrero.</em></p>
<p>For the first in our new series of interviews where artists talk about what it's really like to be a DJ, we speak to vinyl house star Julian Perez about how he selects records, what happens when the crowd aren't happy and the challenges of staying mentally strong.</p>
<p>Julian Perez knows a thing or two about keeping your head. The Ibiza-based Spanish DJ ran one of the hottest vinyl labels, Fathers &amp; Sons Productions, in the early 2010s but right at the peak of the label's success, he decided to end on a high and made his debut album, <em>Solemnity</em>, the twelfth and final release. As a DJ, he's a renowned vinyl aficionado and a highly in-demand touring act.</p>

<h3>Where do you get your music from?</h3>
<blockquote>"I'd say I get more than 70% of the stuff on Discogs. It's more expensive this way but it's hard to find the stuff I'm looking for by checking only new records at online stores. Plus, to seek and find un-hyped gems, Discogs is the place."</blockquote>
<p>Spending hours digging and getting lost in local stores around the globe is way more fun than digging on a computer. The list is endless but some of my favourites are: Technique in Tokyo, Gramaphone Records in Chicago, Subwax BCN in Barcelona, GOSU in Frankfurt, Disk Union Shibuya in Tokyo, Rush Hour Records in Amsterdam, Palma39 in Madrid, The Thing in Brooklyn, A-1 Record Shop in New York and The Ghost in Berlin.</p>

<h3>You said you don't prepare your sets, but what are you doing in the lead up to a gig?</h3>
<p>I find it stressful to prepare a set when you are never sure how the party/crowd is going to be. When I'm playing gigs very often and having short periods of time between tours, I make a pile with the latest purchases I'm looking forward to playing. Then, I go through my collection and find some records I haven't played lately but I know I haven't heard them around for a while, and I put them to one side.</p>
<p>Next, I open my bag with the music from the last gig and I go through all the records in there, at the same time thinking about the parties I'm playing next and visualizing what their vibe will be. After that, I just need to leave out the ones I feel I've been playing too much lately, and leave space for the other two little piles to join the bag. Sorted!</p>

<h3>Do you ever mix at home?</h3>
<p>I'm not really mixing at home these days. I do have a setup and I can record some podcast from time to time but it's mostly for friends or at after parties. There's a turntable in the studio where I listen to my records but I leave the mixing for the gigs. I've never practiced combinations to play them in a club in the same order. Would DJing be exciting if I did so?</p>

<h3>What important lessons have you learned over time that have made you a better DJ?</h3>
<p>An important lesson is to overcome your ego. Satisfying yourself or certain people you want to impress is indulging your ego.</p>
<p>These days DJs experience a lot of criticism when performing in front of others. There's a lot of judging going on that can easily make you pay less attention to the public in front of you — the people who came to listen to you and are whom this is all about. They are open to what you have chosen in that moment, so it's important to play in a way that lets you take them along on the story you're telling.</p>

<h3>Do you prepare your music differently for different times of night or crowds?</h3>
<p>How I'm feeling the dancefloor is more important than what slot I'm in. My mood will also play an important role in how I develop my set. I'm not a fan of a steady, fixed sound in sets. I keep driving them up and down to keep the vibe and having enough versatility to avoid being predictable.</p>
<p>If I need to play a harder set for a bigger event, it'll still be my sound, but just harder than usual. The key is to keep the flow with your signature style either for a small club with 100 people or for an open air with 3,000 people.</p>

<h3>How do you deal with the pressure of defining your sound?</h3>
<blockquote>"My sound is a combination of my roots and all the influences I'm discovering along this journey. It keeps building, developing and refining. I truly never think about it as an issue. If you were to ask me to describe it in words, I wouldn't be able to. It's a combination of different styles that gives personality to my sound."</blockquote>

<h3>Would you describe yourself as confident or an over-thinker?</h3>
<p>Over the years I've become confident enough and I'm rarely letting the little imperfections in my DJ sets get me. Come on, we are not synchronized machines! I always take DJing very seriously and give my best, trying to improve, challenge and surpass myself without being too critical.</p>
<blockquote>"I'm from the side of the fence that would rather work hard on improving my flaws than moaning the day after the gig."</blockquote>

<h3>If you find yourself booked to play the wrong kind of crowd, do you compromise or go down in flames?</h3>
<p>If you get booked for a party with the wrong crowd, no matter if it's the promoter's or your agent's fault, your task is to make that crowd have a great experience without compromising your sound. That's when your experience and ability as a DJ comes to the fore and you must do the magic.</p>
<blockquote>"You go and work your ass off to take them on a music trip. It's not the set you had in mind, it's a difficult crowd but you have the skills to go through your music and build a set for them by reading their faces but also showing them your identity. There's no time for excuses."</blockquote>
<p>It's like, when there aren't many people at your gig, but there are some people there for you — they deserve to hear you give your best. You have to show respect to those people and play like you have a full house.</p>

<h3>How do you handle things when something goes wrong in the middle of a set?</h3>
<p>Problems with sound systems and setups still bother me most these days. Bad quality monitoring, incorrectly set up DJ booths on top of the subs or tables that aren't stable enough for spinning records are the most common problems.</p>
`,
  },
]
