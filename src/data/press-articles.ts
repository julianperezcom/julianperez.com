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
    image: '/press/meoko-2014.jpg',
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
    image: '/press/meoko-2017.jpg',
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
    image: '/press/rhythmatic-2013.jpg',
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
    image: '/press/buenos-aliens-2015.jpg',
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
    image: '/press/pulseradio-2016.jpg',
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
    image: '/press/reckon-2016.jpg',
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
    image: '/press/brag-sydney-2016.jpg',
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
    slug: 'mixmag-2014-breakout-djs-ibiza',
    title: 'After the Island: The Breakout DJs of Ibiza 2014',
    publication: 'Mixmag',
    date: 'October 17, 2014',
    dateISO: '2014-10-17',
    category: 'feature',
    excerpt: 'Mixmag names Julian Perez among the breakout DJs of the Ibiza 2014 season, spotlighting his residency at ENTER. (Space Ibiza) alongside Ricardo Villalobos and his vinyl-only label Fathers & Sons Productions.',
    image: '/press/mixmag-2014.jpg',
    imageAlt: 'Mixmag — The breakout DJs of Ibiza 2014, featuring Julian Perez',
    sourceNote: 'Original article archived locally. Mixmag.com/blog.',
    content: `
<p>Mixmag identified Julian Perez as one of the standout DJs to emerge from the Ibiza 2014 season in their end-of-summer feature <em>After the Island: The Breakout DJs of Ibiza 2014</em>.</p>

<p>The feature highlighted his appearances at ENTER. — Ricardo Villalobos's landmark weekly at Space Ibiza — as one of the key moments that pushed him to wider international attention. His sets at ENTER. drew comparisons to the Romanian and German minimal traditions, while retaining a distinctly personal groove that audiences and fellow DJs responded to.</p>

<p>The article also referenced his work with <strong>Fathers & Sons Productions</strong>, his strictly vinyl-only label founded in 2012 in Valencia, Spain, which had by that point established itself as one of the more respected underground imprints of its generation — with support from Ricardo Villalobos, Zip, Sonja Moonear, Margaret Dygas and Cassy.</p>

<p>Perez's inclusion in the Mixmag feature cemented his transition from respected underground figure to internationally recognised artist, following a summer that included residency appearances, festival bookings across Europe, and the continued growth of Fathers & Sons into its third year of releases.</p>
`,
  },
  {
    slug: 'midi-peru-2016-entrevista',
    title: 'Entrevista a Julian Perez',
    publication: 'MIDI (Perú)',
    date: 'August 18, 2016',
    dateISO: '2016-08-18',
    category: 'interview',
    excerpt: 'Ahead of his appearance at Backyard Project in Lima, Julian Perez speaks to MIDI Perú about his connection with the Peruvian audience, the Ibiza scene, artistic independence and his production process.',
    image: '/press/midi-peru-2016.jpg',
    imageAlt: 'MIDI Perú — Entrevista a Julian Perez, agosto 2016',
    sourceNote: 'Original no longer online. Archived locally.',
    content: `
<p><em>Nuevamente contaremos con la visita de Julián Pérez en Lima, quien vive apasionado por la música desde principios de los años 90 con influencias de Detroit, Chicago e Inglaterra. Este sábado 20 de agosto regresa para Backyard Project en Cieneguilla.</em></p>

<h3>Lima siempre ha estado agradecida de tenerte. ¿Cómo han sido tus experiencias en la capital? ¿Crees que el público limeño es exigente en cuanto a la música?</h3>
<blockquote>"El público limeño y yo nos entendemos mejor que bien después de todos estos años en muchas buenas fiestas. Sean eventos de día o noche siempre hay buen ambiente y mucho buen rollo. Me he encontrado gente peruana en fiestas y festivales de todo el mundo. Saben lo que quieren escuchar, son exigentes y a la hora de festejar no tienen fin."</blockquote>
<p>Estoy muy agradecido por todas las experiencias que me ha aportado el Perú y todas las amistades que he ido haciendo a lo largo de este tiempo. Me encanta la cultura andina y he tenido la suerte de poder visitar lugares increíbles en ese país que me atrapó desde la primera vez que fui. El que tenga para mi gusto la mejor cocina del mundo también tiene mucho que ver.</p>

<h3>Ibiza sigue siendo un referente en fiestas de vanguardia. ¿Qué nos puedes contar sobre la escena actual?</h3>
<p>Es cierto que Ibiza siempre ha sido un referente donde todo se ha exportado al extranjero y donde muchos grandes DJs de hoy en día han afianzado sus carreras. Sin embargo, en estos momentos no es todo Ibiza. Ahora hay infinidad de festivales durante el verano, la gente que realmente le gusta seleccionar ya no queda solo en la isla. Cada año entran nuevas fiestas y otras que se van, tienes infinidad de estilos musicales para escuchar. Eso sí, si buscas algo poco comercial durante la temporada no lo tendrás fácil — está en peligro de extinción.</p>

<h3>Eres de origen español y hay varios representantes de tu país sobresaliendo en la escena electrónica mundial. ¿Cómo has llegado a estar dentro de los principales line-ups?</h3>
<blockquote>"Para mí es un privilegio estar donde estoy ahora mismo — puedo decir que no ha sido un camino fácil. Cuando nadie te regala nada, el único camino es el del trabajo, la dedicación y la pasión por tu proyecto personal, que eres tú mismo. El poco o mucho talento, sin todo eso anterior, no te servirá demasiado."</blockquote>
<p>Cuando estás creyendo en ti mismo y en lo que haces, tienes mucho ganado y ves que las cosas se van poniendo más de tu lado — aunque no te puedes relajar. Muchas cosas te van a venir en contra pero tienes que seguir adelante con más fuerza y confianza aún, aprendiendo de tus errores. Ser creativo, arriesgar, iniciar tu propio camino aprendiendo e intentando mejorar cada día. Sin darte apenas cuenta estás empezando a ver tu nombre en esos line-ups donde antes comprabas la entrada anticipada para ir. El ansiar subir más alto cada vez puede llegar a hacer que te olvides del presente — me lo recuerdo a mí mismo cada día.</p>

<h3>Recientemente has sacado material para Subwax BCN. ¿De qué trata este nuevo material?</h3>
<p>Subwax es un gran sello y un grupo al que admiro. Durante los últimos dos años he estado experimentando con otros estilos, con sonidos inspirados en dub y techno de mi época y anterior. He salido a grabar ambientes, he estado implementando nuevos efectos y sintetizadores en el estudio y aprendiendo nuevas técnicas. Al innovar con el equipo y con la forma de trabajar, el sonido evoluciona y se abren otras puertas que pueden resultar interesantes para evolucionar como productor. En mi caso, ha sido desarrollar un lado más techno y Subwax ha sido una buena plataforma para mostrarlo.</p>

<h3>¿Cuál es tu proceso de creación en el estudio?</h3>
<p>Tengo mi método de trabajo pero me adapto a lo que tengo en el momento. Cajas de ritmos, samplers, sintetizadores, efectos — lo pongo todo a sonar a la vez y voy programando las secuencias y grabando lo que más me gusta para luego ir montando el track.</p>
<blockquote>"También es muy divertido cuando estás colaborando con alguien más y cada uno está haciendo sonar algo diferente, pulsas REC y vais tocando y grabando todo al vuelo, desarrollando el track de principio a fin sobre la marcha. Es el método clásico."</blockquote>

<h3>¿Cómo ves el surgimiento del talento electrónico en Latinoamérica? ¿Qué recomendarías a los nuevos talentos?</h3>
<p>Tengo buenos amigos latinoamericanos con los que tengo el gusto de compartir cabina cada vez que estoy por sus países de origen. Hay mucho talento y muchas ganas de hacer las cosas bien pero a veces las fronteras limitan sus carreras como artistas. Me alegra ver a muchos de ellos por el otro lado del charco llevando y compartiendo su música con ilusión.</p>
<blockquote>"A los que aún no se han decidido a hacerlo, siempre les animo a que vivan la experiencia y salgan a luchar por lo que creen. Aprender y compartir viajando es un privilegio."</blockquote>
`,
  },
  {
    slug: 'vos-argentina-2015-fiebre-del-vinilo',
    title: '"Vivimos una fiebre del vinilo"',
    publication: 'VOS / La Voz (Argentina)',
    date: 'September 16, 2015',
    dateISO: '2015-09-16',
    category: 'interview',
    excerpt: 'Germán Arrascaeta interviews Julian Perez for La Voz\'s VOS supplement ahead of his Córdoba BlackSheep show — covering vinyl fever, the curation of Fathers & Sons Productions and what "old school" really means.',
    image: '/press/vos-argentina-2015.jpg',
    imageAlt: 'VOS Argentina — Julian Perez: Vivimos una fiebre del vinilo, septiembre 2015',
    sourceNote: 'Original no longer online. Archived locally.',
    content: `
<p><em>Por Germán Arrascaeta. El español Julian Perez es otro de los dee jays más relevantes de la electrónica actual que suele "aquerenciarse" en Córdoba. En esta oportunidad, pasó de tocar en el Quality (junto a Guti) a un espacio minúsculo como BlackSheep.</em></p>

<blockquote>"Me da mucha vida el combinar entre eventos grandes y pequeños. Si sólo tocase en grandes, me acabaría aburriendo mucho. La sesión de esta noche va a distar mucho de lo que puse el pasado viernes. Voy a poder experimentar mucho más y al tener más horas con la gente tan cerca, se va a hacer más íntimo y con mayor conexión."</blockquote>

<h3>¿Adherís a la idea de que tu estilo es "vieja escuela"?</h3>
<blockquote>"Mi estilo tiene mucho de 'vieja escuela'. Empecé bastante joven y siempre combino discos antiguos con nuevos en mis sets. Ese sonido tiene un carácter con el que también se me identifica a la hora de producir. Soy un gran admirador de los verdaderos jefes 'vieja escuela' de la electrónica. Todo está inventado y por muchos nuevos estilos que vayan saliendo, siempre volveremos al inicio. Yo de manera natural tengo esas influencias y me quedo cerca de ese origen, y Fathers & Sons Productions tiene mucho de esa esencia."</blockquote>

<h3>Fathers & Sons sólo produce en vinilo. ¿Es una reivindicación del formato?</h3>
<p>No lo considero especialmente una restricción. Es un sello que no se creó para expandirse de una forma tan rápida y fácil como un sello digital o uno que pretenda vender millones de copias. Obviamente, es menos accesible, pero es más interesante para los que llegan a él.</p>
<blockquote>"Respecto al vinilo: como pasa con todo, se ha convertido en una moda en Europa en los últimos años. Ahora los productores sienten la presión de publicar su música en vinilo para que los consideren serios. Hemos pasado de intentar rescatar el vinilo a saturar el mercado igual que estaba saturado el digital antes de esta nueva moda. Es la fiebre del vinilo."</blockquote>

<h3>¿Cómo llevás adelante la curaduría de tu sello?</h3>
<p>Siempre hemos estado abiertos a artistas que comparten nuestra filosofía y que nos aportan algo más que música. Todos nos hemos ido haciendo amigos con el paso del tiempo y vamos creciendo juntos haciendo camino. Los artistas de F&S tienen sus proyectos paralelos pero siempre esos tienen algo en común con nosotros.</p>
<blockquote>"No todos los seguidores de F&S conocen personalmente a cada uno de los artistas, pero escuchando todas las referencias te puedes dar cuenta de que hay algo que siempre se relaciona entre sí. Como he dicho antes, todo vuelve al origen."</blockquote>
`,
  },
  {
    slug: 'trommel-2018-a-day-in-the-life',
    title: 'A Day in the Life: Julian Perez',
    publication: 'Trommel Music',
    date: 'July 12, 2018',
    dateISO: '2018-07-12',
    category: 'feature',
    excerpt: 'Trommel Music follows Julian Perez during a weekend visit to Rotterdam — factory tours, a historic record shop, a Void soundsystem, and a four-hour set at BAR.',
    image: '/press/trommel-2018-day-in-the-life.jpg',
    imageAlt: 'A Day in the Life: Julian Perez — Trommel Music, July 2018',
    sourceUrl: 'https://trommelmusic.com/featured/a-day-in-the-life-julian-perez',
    content: `
<p>Trommel Music followed Julian Perez during a weekend visit to Rotterdam, Netherlands — a city with a complex relationship with electronic music, having been the birthplace of gabber-house and hardcore in the early 90s, yet historically less supportive of club culture than Amsterdam.</p>

<p>The feature documents his itinerary: a gym session, a tour of M4H — a repurposed industrial factory space at the forefront of Rotterdam's new cultural development — and a visit to a landmark record shop owned by Michel Steinbach, a key figure from the city's formative rave era. The piece contrasts the city's industrial past with its present resurgence as a hub for electronic music.</p>

<p>Perez was in Rotterdam for a four-hour set at BAR, known for its intimate atmosphere and Void soundsystem. The format suited his approach to long sets: building a full narrative arc across genres, from rolling deep house through to late-night dub techno, never locking into a single tempo or mood.</p>

<p>The article presented Perez as an artist who carefully selects his performances, remaining studio-focused between bookings and avoiding the saturation trap that affects many touring DJs. His labels — <strong>Fathers & Sons Productions</strong> and the newer <strong>Girada Unlimited</strong> — were highlighted as expressions of that same discipline: releasing only when something is genuinely ready, never to fill a schedule.</p>

<p>Rotterdam's promoters noted that "their city was not to be underestimated" — a sentiment that resonated with Perez's own approach to discovering new audiences: arriving without assumptions, reading the room from the first record.</p>
`,
  },
  {
    slug: 'trommel-2021-break-even-lp-review',
    title: 'Review: Julian Perez – Break-Even LP [GIRADA010]',
    publication: 'Trommel Music',
    date: 'May 17, 2021',
    dateISO: '2021-05-17',
    category: 'review',
    excerpt: 'Trommel Music reviews the Break-Even LP — Julian Perez\'s double 12" on Girada Unlimited, spanning cosmic breaks, deep house, peak-time techno and dream house across four sides of vinyl.',
    image: '/press/trommel-2021-break-even-review.jpg',
    imageAlt: 'Trommel Music — Review: Julian Perez – Break-Even LP [GIRADA010], May 2021',
    sourceUrl: 'https://trommelmusic.com/music/reviews/review-julian-perez-break-even-lp-girada010/',
    content: `
<p>For Julian Perez's imprint Girada's tenth release he has cooked up something rather special. His label has always stood for originality and diversity and as well as his own unique productions having a respected platform from which to propel him, he has also given sanctuary to other like-minded artists such as D&S, Franco Cinelli and Caim. It is however Julian that has taken the reins for GIRADA010.</p>

<p>Spread over 2×12", <em>Break-Even</em> is an impressive body of work that spans a broad range of styles as followers of Perez's work will have come to expect. The double 12" kicks off Side A with the spacey breaks of 'Sweentro', closely followed by the lushness of 'Facts' and brooding 'Revelation'. With three tracks on Side A it is to be expected that one of these will be a tad shorter than the others.</p>

<p>Flipping over, Side B treads more towards peak time vibes with 'Eveileb'. The pumping kick drum and menacing synth lines encounter a sweet contrast by way of the retro synth pads. The pressure drops somewhat to deep house territory on 'Versatile' and remains there come the start of Side C with 'Energy Fever'. The low-slung conga-laden groover is a sublime piece of dream house more than capable of entrancing a dancefloor.</p>

<p>Closing out Side C is 'CSO All The Way', a shimmering piece of cosmic breaks — and the theme creeps over onto the sublime D1 banger 'Beyond Existence'. Rounding out the landmark GIRADA010 is the stunning 'Drowned In Faith (Love & Light)' — and the title could not be more fitting.</p>
`,
  },
  {
    slug: 'trommel-2023-overdubbing-theory-girada11',
    title: 'Premiere: A1 – Julian Perez – Overdubbing Theory [GIRADA11]',
    publication: 'Trommel Music',
    date: 'March 2, 2023',
    dateISO: '2023-03-02',
    category: 'premiere',
    excerpt: 'Trommel Music premieres the lead track from Julian Perez\'s return EP on Girada Unlimited — a four-track release crossing bouncy techno, dub-influenced textures, deep house and electro.',
    image: '/press/trommel-2023-overdubbing-theory.jpg',
    imageAlt: 'GIRADA11 Command Station EP — Julian Perez on Girada Unlimited, 2023',
    sourceUrl: 'https://trommelmusic.com/music/premiere/premiere-a1-julian-perez-overdubbing-theory-girada11/',
    content: `
<p>Spanish DJ and producer Julian Perez returned from a hiatus with a new EP on his Girada Unlimited imprint. The label has established itself as a platform for innovative electronic music, supporting artists including Amsterdam's Caim, Argentina's Franco Cinelli, and Dutch producers D&S.</p>

<h3>Track by Track</h3>

<p><strong>A1 — 'Overdubbing Theory'</strong> opens the record with Perez's recognizable production style, combining bouncy kicks, snare drums and puzzling synths. The composition starts with ethereal textures and atmospheric elements layered over driving percussion, building toward an intense peak-time moment suitable for DJ sets.</p>

<p><strong>A2 — 'Mean Anomaly'</strong> adopts a slower tempo with dub-influenced aesthetics, gradually introducing playful rhythmic elements and crisp drum patterns as it develops.</p>

<p><strong>B1 — 'Kinetic Phatt'</strong> shifts toward house music territory, featuring deep bass movements, vocal elements and luminous pad textures creating a groovy foundation.</p>

<p><strong>B2 — 'A Different D'</strong> concludes the release by exploring electro directions with syncopated breakbeats and atmospheric vocals.</p>

<p>The EP demonstrates Perez's versatility across multiple electronic music styles. Available for pre-order through Yoyaku, deejay.de and HHV Records.</p>
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
    image: '/press/ibiza-voice-2018.jpg',
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
  {
    slug: 'clubber-confession-2017-from-advertising-to-djing',
    title: 'From Advertising Work in Office to DJing All Over the World',
    publication: 'Clubber Confession',
    date: 'May 19, 2017',
    dateISO: '2017-05-19',
    category: 'interview',
    excerpt: 'Julian Perez speaks with Italian music outlet Clubber Confession about leaving a career in advertising in Alicante to pursue music in Ibiza, founding Fathers & Sons in 2013, and the real value of studio work.',
    image: '/press/clubber-confession-2017.jpg',
    imageAlt: 'Clubber Confession interview with Julian Perez, May 2017',
    sourceNote: 'Original no longer online. Archived locally.',
    content: `
<p><em>By Federico Brunelli — Clubber Confession, Italy. May 19, 2017.</em></p>
<p>Last Saturday, May 6 at the MIF in Rimini I had the pleasure to meet Julian Perez, with him I spent a good hour talking about his life explaining how he changed from Alicante to Ibiza, from office world to dancefloor and clubbing scene.</p>

<h3>Hi Julian, tell us your beginnings</h3>
<p>Before doing the DJ I was working in advertising, like graphic designers and web designers in Alicante (Spain). I worked in this field for a few years from 2000 to 2005, worked a lot and at some point I was fed up with the routine I was following; to wake up every day and go to work for a boss, to satisfy the customers with their many requests, I was little more than 20 years old and that life made me feel old.</p>
<p>At that time I went on vacation in Ibiza, and I loved the vibe there, so decided to move there. I had no idea what I would have done but I certainly would not have done that life anymore. Once I moved, I started doing various works and helped a friend of mine in a construction company.</p>
<p>In Ibiza I went out a lot, so in the meantime I began to be called to play in after parties, parties in the villa and small clubs, at that time it was a good way to show that I was able to mix good music, it worked and slowly put me in. Then I came to a point where I told myself: "Ok if I really want to do this and have a chance I need to work hard, stop with everything else and create my own sound."</p>
<p>In summer I was in Ibiza, I liked the energy and have party there, while in winter I was traveling a lot and started working hard in the studio. I watched YouTube tutorials to learn, I asked my friends to teach me how to use the gear, I decided that I wanted to do it, and make productions that I could be proud of.</p>
<p>I spent a lot of time in the studio, in 2010 I made my first releases, and I do not know how in the years to come, at some point the wheel started to turn in the right direction and started to get the first gigs, paid and enough to live from this. Although the period between 2010 and 2012 was a bit tough, spending so much time in the studio I had to do several jobs to survive.</p>
<p>In 2013 everything started to go well, I founded Fathers &amp; Sons that was a great step for my career, especially to impose my style. The fact that others wanted to publish my music was cool, but I didn't have the control of my music and its diffusion. With the first releases of the label my records began to be played, even by big names, and people started to get to know me more than for my DJ set.</p>

<h3>So do you think that producing your own music is still important?</h3>
<p>You know, at times it was very different, but it still remains very important. Someone will start playing your records and you'll start to be known.</p>
<p>For example, when I was playing in the clubs the resident might tell me "ah you're the one who made that record, I play your tracks". With productions, you can make your own style, and people already know something about you, so you may be a bad DJ, but if you produce good music you will be recognized for that.</p>

<h3>What would you recommend to those who want to make it into the music business?</h3>
<p>Well, now it's almost the same as when I started, there are a lot of DJs and lots of producers, even more, but when you do your music, you have your style and people know you about it and it's good for you. If I had not done the job I did in the studio, I would definitely not be where I am now.</p>
<p>You know, there are some DJs that have important gigs even without producing but it's a lot more difficult these days, even more. You have to be very busy in the round, know the right people, maybe be resident and still need a long time. For me to produce counts 50% of my relationship with music, I really like it, as to make a DJ set.</p>

<h3>What is your set-up in the studio?</h3>
<p>I use drum machines, pianos, keys, sequencers, synths etc. but I'm not a musician, I do not play drums or other instruments, but I have ear; which for me is enough. I know how to put things together and to use my instrumentation to create a track that is ok for me.</p>
<p>Now I use a lot of analog gear, at the beginnings I did not have enough money so I was lending machines from friends or using software, getting inspired by others trying to learn how to create my style and my workflow, to do this I tried so many instruments. Then depending on what I want to create, instrumentation changes — for a house, techno or tech-house track I use different gear.</p>

<h3>Are you thinking of a new album or some new release?</h3>
<p>The album was a last-minute thing, I found myself with 4–5 tracks and I thought: "I could make a double disc album", so I produced other tracks coming at around 11–12.</p>
<p>For me the album made sense to do it because I wanted to close the label at a certain point, so it was a special thing for the latest release of Fathers &amp; Sons. The scope of this label for me was about releasing my music and that of my friends, we reached it and felt the need to close this project. I'm going to go back to the studio in the coming months and start with a new project, but I still have nothing in my mind.</p>

<h3>What do you like more and less of your work?</h3>
<p>I like to play around, I like the connection with the dancefloor, meet new people, traveling, visiting new places — it's something that I wouldn't be able to stop doing.</p>
<p>Things I don't like instead are spending a lot of time alone between trips, sleeping less or nothing, at some point it is heavy, maybe you want to have a healthy routine, do some sport, eat at right times, but sometimes it is not possible and sometimes I do not like it. But for me the game is worth the candle, good things compensate for bad things. When I get booked somewhere for an event I like taking a few extra days to visit the places where I go.</p>
`,
  },
  {
    slug: 'techno-cz-2014-nechci-byt-zaujaty',
    title: '"I Don\'t Want to Be Biased by Myself" — Interview',
    publication: 'Techno.cz',
    date: 'April 14, 2014',
    dateISO: '2014-04-14',
    category: 'interview',
    excerpt: 'Ahead of his first-ever Prague appearance, Julian Perez discusses his studio setup, vinyl philosophy, working with tINI, the Ibiza underground, and why he never prepares sets for new cities.',
    image: '/press/techno-cz-2014.jpg',
    imageAlt: 'Techno.cz interview with Julian Perez, April 2014',
    sourceNote: 'Original no longer online. Archived locally.',
    content: `
<p><em>Interview by adlet, March 2014. Translated from Czech for international readers.</em></p>
<p>In just three weeks, Spanish DJ and producer Julian Perez — a representative of Fathers &amp; Sons Production and close collaborator of tINI — will appear in Prague for the very first time. This young talented DJ from Ibiza has made a name for himself with original tracks and high-quality dance sets at events like WMC Miami, playing alongside names such as tINI and Steve Lawler.</p>

<h3>How are you at the beginning of spring? Are you busy?</h3>
<p>The beginning of spring is being great. I'm still in Miami after WMC, so I'm having a good one, chilling before going back to Europe next week. Yeah, always busy — loads of new projects and stuff to do, which is a good thing. Trying to organize myself to make them all on time.</p>

<h3>It's your first time in Prague. Have you heard about the Czech electronic scene?</h3>
<p>I haven't heard so much about it, so I'm looking forward to checking it out by myself in May. Curious to be in one of the most beautiful cities in the world — I've just read it in a ranking. I'll fly early in the morning so I'll have time to see around.</p>

<h3>As a Spanish DJ, how did you get the attention of a Berlin agency?</h3>
<p>It's a mix of everything. It's a very exclusive agency and yeah, I think I'm the only Spanish artist in there. I needed a proper agency and it showed up at the right time. It was more than my relation to records that got their attention. To be the kind of artist they were looking for makes me work even harder, because the level is high. It's a good challenge.</p>

<h3>How did you start collaborating with tINI?</h3>
<p>She is such a cool girl! I don't really remember where and when we met for the first time but it worked well between us from the start. She is always playing and supporting my music and the releases on Fathers &amp; Sons, she really digs it. I love her energy and taste when playing — she is without doubt one of the new most talented DJ women out there. We'll be playing together a few shows this year.</p>

<h3>How long did it take you to produce your first track? Was it hard to get it released?</h3>
<p>When you are a DJ trying to start producing, releasing the first track is something you really want badly. You can't wait to hear feedback from other DJs after many attempts to do something decent. The first track I released was my project Nº19. It took a couple of days to create the idea, and another couple to try to get the best sound from my inexperience. It was released 5 months after the first trial. I think I never sent anyone my first 18 attempts. It's important to be patient, even if that's not one of my virtues. After some time you become more selective.</p>

<h3>You have a classic analog sound. What are your studio favourites?</h3>
<p>What you feel in my production is more about the character of the track than the equipment used to make it. It's a touch of the '90s, because that's the sound I grew up with, and logically all its influences are present in my production — which is why I use a lot of classic samples. My studio favourites are Roland TR-909, TR-606 and TB-303 (belonging to my neighbour), Jomox XBASE 999, MFB 522, Tempest and Korg MS2000 for vintage synth. Then I use an MPC3000, an analog 24-channel mixer and external effects.</p>

<h3>Your own label releases only on vinyl. What's the main reason?</h3>
<p>The reason is sharing a piece of music — something you can collect the same way we used to. Music that was created to be pressed on a record and listened to in that format. It keeps it close to people who truly appreciate it.</p>
<p>It's great that everyone can enjoy music digitally too, but if you have a label that pursues that format for production and sales, you can't control how widely the track spreads. Then everyone can play it, so it's far too easy to get and it won't get the attention from DJs like me. Also, producing tracks for vinyl matters — if a track is produced and mastered fully digitally, it will still sound digital in analog format. In such cases I'd rather buy the digital version than the vinyl.</p>

<h3>What's it like when DJs like Loco Dice or Ricardo Villalobos play your music?</h3>
<p>Those are the things that make you feel great and fired up to keep working. Who wouldn't imagine their favourite DJ playing your latest freshly-made track with the crowd going crazy? That's the classic dream.</p>

<h3>How do you start sets in cities where you've never played before?</h3>
<p>I never arrive with a plan of what I'll play in a city I haven't been to. I come to the club fairly early to listen to the resident DJs and then start my set in my own way, feeling it as I go and watching the reactions. When people are open to diving into it, it always works.</p>

<h3>Can you tell us something about the scene in Ibiza? Underground or commercial?</h3>
<p>Ibiza itself is commercial — truthfully there is no underground scene there. But if you're talking about a classic party with normal prices, where promoters aren't only thinking about making money and people come who simply want to enjoy the music rather than watch famous DJs they don't even know — you can find those. But not on billboards or flyers. Those are definitely not underground.</p>
`,
  },
  {
    slug: 'muno-pl-2019-wywiad',
    title: '"Fake It Till You Make It" Is Unfortunately Everywhere Now — Interview',
    publication: 'muno.pl',
    date: 'May 16, 2019',
    dateISO: '2019-05-16',
    category: 'interview',
    excerpt: 'Polish music outlet muno.pl interviews Julian Perez ahead of his Poznań appearance at Projekt LAB. He discusses inspiration from Detroit and Chicago labels, closing Fathers & Sons, Girada Unlimited, and the creeping commercialisation of electronic music culture.',
    image: '/press/muno-pl-2019.jpg',
    imageAlt: 'muno.pl interview with Julian Perez, May 2019',
    sourceNote: 'Original in Polish. Published on muno.pl, May 16, 2019. No longer online.',
    content: `
<p><em>Interview by Karolina Jakubowska. Published in Polish on muno.pl, May 16, 2019, ahead of Julian Perez's appearance at Karawana, Projekt LAB, Poznań.</em></p>
<p><em>We speak with Julian Perez, head of the legendary Fathers &amp; Sons label, before his appearance at Poznań's Projekt LAB club.</em></p>

<h3>Your biography mentions that at the beginning of your musical journey you were inspired by sounds from the UK and USA. Which artists and labels did you particularly admire?</h3>
<p>Mainly it was Detroit — Derrick May, Carl Craig, Juan Atkins, Kevin Saunderson and their labels: Transmat, Planet E, KMS, Metroplex. I was also inspired by labels from Chicago: Relief Records, Cajual, Guidance from Spencer Kincy / Green Velvet, Derrick Carter. From the UK: Peacefrog, Ferox, Force Inc were my thing. At the time there were also many great labels in Europe, but somehow at the very beginning I was much more interested in the ones I mentioned first.</p>

<h3>Many artists talk about their studio rituals. What are yours?</h3>
<p>I agree that the room must be clean and tidy, but I don't really sit in an atmosphere of incense and rituals. When inspiration appears, it's better to be in the studio, ready to record. I'm definitely more productive when I'm completely rested, from morning to late evening. But it can happen that many hours pass before you create something interesting — then you have no choice but to sit there until it sounds the way it should. Going to sleep would mean losing the flow. What definitely helps me is natural light in the studio.</p>

<h3>Apart from releases on other labels, you have been totally dedicated to your two own — Fathers &amp; Sons Productions, which you closed with your album, and now Girada Unlimited. What chapter did you close and what lies ahead for your new label?</h3>
<p>I believe that life consists of chapters, periods, stages — whatever you prefer. I believe that certain things need to be concluded so that you can enter something new with fresh energy. I'm very satisfied and proud of every stage of this journey. The new chapter has no defined path yet, its story is still being written. Girada Unlimited is still developing its sound, which is very broad these days. What comes next? That is always unknown and unlimited.</p>

<h3>In one interview you mentioned that you don't prepare sets when you play somewhere for the first time. Where during your debuts did you experience the most satisfying reception from the audience?</h3>
<p>If you're playing somewhere for the first time, trying to prepare a set seems quite stressful. One such event was my debut in Córdoba, Argentina. It was one of the stops on my tour through several countries and I couldn't really fill my bag with that specific gig in mind. Interestingly, the music I had with me turned out to be perfect. The approach and vibe of the people was something from another planet.</p>
<p>The same thing happened when I first played in Romania and that feeling stays with me to this day when I play in that country. It's simply a different level — a well-informed audience that makes you feel confident and relaxed, and as a result you play better and it becomes a great experience for everyone.</p>

<h3>Apart from your vast experience in electronic music, you once worked in advertising. How did you jump from one to the other?</h3>
<p>Advertising has always excited me, and its creative part has application in what I do now. It was about chasing my dream, which had been my hobby since I was a teenager — so when it came to the point where I had to decide which field to commit to one hundred percent, I chose music.</p>

<h3>Advertising also plays a big role in electronic music, especially now in the social media era. People say that when a culture becomes a business, an industry, it ceases to be culture. What is your view on this?</h3>
<p>It's undeniable that strategy is important today and everyone plays by their own rules. I don't believe popularity always means success. There are those who believe it and will continue to believe it as long as they can live from this new business — which is far from what we call culture. The "ends justify the means" approach or "fake it till you make it" are unfortunately omnipresent today. Whatever works, right? Culture will always remain culture and remain where it is. If you dig deep enough, you'll find it.</p>

<h3>Will we hear your live set soon?</h3>
<p>It has always interested me, but at the same time I love playing from records — the diversity it gives depending on your mood, the audience and so on. A live set has to be more or less planned, and several events with a live performance means producing a large amount of music to keep the performance and material fresh. Actually, working on a live performance with another artist seems more interesting and satisfying. Why not?</p>
`,
  },
  {
    slug: 'pulse-radio-2012-pulse-loves-julian-perez',
    title: 'Pulse Loves… Julian Perez',
    publication: 'Pulse Radio',
    date: 'September 24, 2012',
    dateISO: '2012-09-24',
    category: 'interview',
    excerpt: 'One of Spain\'s hardest working DJs, Julian Perez talks about playing records at home, his eclectic set approach, VIVa Warriors, Fathers & Sons Productions, and his love of travel. Includes an exclusive mix.',
    sourceNote: 'Original no longer online. Archived locally.',
    content: `
<p>Julian Perez is one of Spain's hardest working DJs and has earned himself a place amongst the rising elite of the global house music scene. With tracks on VIVa, Leftroom, 1Trax and his own vinyl imprint Fathers &amp; Sons, Julian has earned his place as a figure to keep firmly focused on. Playing gigs for VIVa Warriors at Sankeys Ibiza, and many more, Julian's 2012 has been the stuff of legend as he looks towards another storming 12 months. For our 'Pulse Loves…' feature today, we explore the different aspects and elements of the Spaniard, championing his love for a house party, eclectic DJing style and what he gets up to when he's not immersed in dance music culture.</p>

<h3>Pulse loves: DJs that come from the grassroots level. Do you often find yourself playing at home?</h3>
<p>Years ago, I was playing records nearly every day, buying as much music as I could and looking forward to the weekend to buy and try the newly purchased. I'm still keeping that feeling. I'm always excited when I get some new vinyls and head straight on my decks to listen to those little pieces. With digital files it's not that exciting, so now I'm trying to spend most of the time working in the studio making music. I feel very comfortable now on it, so it's time to create and leave the DJing for the gigs.</p>
<p>By the way, if you join me at my house we can arrange a party. Last week we made one with a few friends — The Martinez Bros, Jamie, Seth, Dan, Shonky and René were all hanging out with us. So much fun!</p>

<h3>Pulse loves: eclecticism in sets. What are your surprise tunes in your set?</h3>
<p>My sets are very like that — you have only one hour to write your own story with not many tracks. Personally I like to play all the styles I love in the set, starting from very soft tunes to warm up, going more groovy showing up a bit of party, and going a little bit more down to finish. I don't like very linear sets; I need to make my story with the mood I have. The surprise tunes in my set are the unreleased tracks from me, from people on my label, from friends, and very occasionally some old stuff.</p>

<h3>Pulse loves: varied music style and a variety of outlets. What are the benefits of releasing across different labels?</h3>
<p>My sound is very open and depends on many things. My sound is always changing and going between house and tech house — all my tracks sound like me in a different way. So when I have some new tracks and a label is interested, it's another good and fun part, because you go with your sound into a new label which has its own artists and personal sound, and now your tracks are bringing a new and different touch. I don't make specific music for any label; I just make the music I feel in every moment, and then the right label is always there in the right place.</p>

<h3>Pulse loves: other things than dance music. What are your hobbies?</h3>
<p>The last two years were a little crazy and I didn't do much of what I really love — travelling. For me that means going with my best friends to new countries with a backpack, no plans, no return date, no responsibilities, seeing what's out there, listening to other kinds of music, meeting new people and learning all the time from others. For me this is the most awesome thing in life. I do less of this now because I'm more busy touring (which is also travelling, but in a very different way), but I hope to combine it more in the future.</p>

<h3>Pulse loves: those finding new ways to share music. Tell us about Fathers &amp; Sons Productions.</h3>
<p>Fathers &amp; Sons is a vinyl-only imprint I run with my friends out of Ibiza. Everything is limited edition and strictly vinyl. The idea is to build a catalogue that means something — not just releases, but a story. So far we've had very positive reactions from DJs and press, and every record has sold out. That response means a lot and gives us motivation to keep going the right way.</p>
<p>We're not in a rush. We take our time to choose artists and tracks carefully. What we care about is the music and nothing else.</p>
`,
  },
  {
    slug: 'djmag-latinoamerica-2013-entrevista-exclusiva',
    title: 'Entrevista Exclusiva: Julián Pérez',
    publication: 'DJ Mag Latinoamérica',
    date: 'March 25, 2013',
    dateISO: '2013-03-25',
    category: 'interview',
    excerpt: 'DJ Mag Latinoamérica speaks to Julián Pérez about his breakthrough summer of 2012, the story behind VIVa Warriors, growing up listening to Valencia\'s electronic music scene, and the philosophy behind Fathers & Sons Productions.',
    sourceNote: 'Original no longer online. Archived locally.',
    content: `
<p><em>"Todo se ha dado en el momento que tenía que surgir, eligiendo el camino difícil en lugar de contar sólo con la suerte o la ayuda."</em></p>

<p>El boom de Julián Pérez se dio el pasado verano europeo cuando su remix de "The Night Train" pegó fuerte en todos los clubes de Ibiza. Hoy, cosechando sus esfuerzos, charló en exclusiva con DJ Mag Latinoamérica acerca del camino que lo llevó hacia donde está, su presente y los proyectos que tiene con su propio sello "Fathers &amp; Sons".</p>

<h3>¿Cuándo empezaste con la música electrónica?</h3>
<p>Con la música electrónica empecé desde muy niño. No es lo normal pero donde yo vivía, entrando los 90's, había un movimiento fuerte de electrónica y, al ser un grupo grande de amigos de diferentes edades, los mayores siempre influían en nosotros y todos nos copiaban cintas que les grababan en los clubs y se difundían entre los amigos casi tanto como ahora un mp3. Empezaba a escucharse mucho dance europeo y, conforme iban entrando los 90's, llegaba el techno de Detroit y house. Mucho house americano y soul. Creo que, en cuanto a electrónica se refiere, tengo influencias de muchos estilos. Algo que se puede, a veces, ver reflejado en mis sesiones y producciones.</p>

<h3>¿Cómo se dio tu llegada a Ibiza alrededor del año 2006?</h3>
<p>La primera vez que pisé Ibiza fue en 2003. Estaba de vacaciones y, desde entonces, nunca estuve conforme con la vida que llevaba. Me di cuenta que me estaba perdiendo algo y, aunque tardé en decidirme, sentí que debía dejarlo todo y empezar de nuevo con base en la isla. Me alegro mucho de haber tomado esa decisión porque me cambió la forma de ver las cosas y, gracias a eso, he evolucionado en lo que realmente me gusta.</p>

<h3>¿Cómo llegaste a VIVa Music? ¿Por qué crees que te convertiste en un "Warrior"?</h3>
<p>Llegué como suele pasar todo en la vida... En el momento menos esperado se dieron varias circunstancias al mismo tiempo. Entrando en Sankeys Ibiza, cruzando la sala principal de camino a la sala donde debía tocar a los pocos minutos, escuché uno de mis tracks. Vi a lo lejos a Steve Lawler pinchándolo con la sala a reventar. Era el cierre de verano 2012. Me acerqué a saludar a Steve, presentarme y a darle las gracias por pincharlo. Me dijo que quería firmarlo para VIVa pero era tarde — había sido editado poco antes por Leftroom.</p>
<p>Cuando Steve acabó de tocar en su sala vino donde yo estaba tocando y se quedó durante todo mi set. A los pocos días me llamó por teléfono para invitarme a un VIVa Music showcase en Ámsterdam para el ADE (Amsterdam Dance Event). Él estaba empezando a darle forma al concepto de Warriors con artistas emergentes y artistas invitados más conocidos y, en cuanto me propuso la idea de entrar en su proyecto, me convenció rápido.</p>

<h3>¿Qué significa ser un VIVa Warrior?</h3>
<p>Significa formar parte de un grupo que se ha seleccionado a base de grandes productores y DJs ya consagrados como son Steve Lawler, Onur Özer, Sascha Dive, Mandy, Derrick Carter, Kevin Saunderson, Steve Bug... Referentes para mí durante años, que siempre he visto muy de lejos y con los que ahora estoy involucrado y compartiendo cabina en diferentes shows por todo el mundo. Es algo grande para mí y me motiva cada día para estar a la altura.</p>

<h3>¿Cuéntanos sobre Fathers &amp; Sons Productions?</h3>
<p>Fathers &amp; Sons Productions nació con la primera referencia en el mes de abril de 2012, junto con mis dos amigos. Hemos creado algo increíble que está teniendo más repercusión de la esperada. El concepto es sencillo: sello en vinilo, música que nos gusta a nosotros, sin prisas, sin modas. Lo que salga de aquí tiene que tener un sentido y una calidad.</p>

<h3>Sobre tu verano de 2012 y el remix de "The Night Train"...</h3>
<p>Este verano han surgido muchas cosas a la vez que me han hecho dar un gran cambio, sobre todo personal. Me he dado cuenta de que todo el trabajo de estos dos últimos años ha tenido un sentido y ahora es cuando lo estoy viendo y disfrutando. Algunos de los tracks, remixes y colaboraciones que hice ese verano también lograron que mi nombre sonara más que anteriormente. Todo se dio en el momento que tenía que surgir, eligiendo el camino difícil en lugar de contar sólo con la suerte o la ayuda. Es el trabajo constante lo que al final da resultados.</p>
`,
  },
  {
    slug: 'vicious-magazine-2013-no33-idoneidad-emprendedora',
    title: 'Julián Pérez — Idoneidad Emprendedora',
    publication: 'Vicious Magazine Nº33',
    date: 'May 23, 2013',
    dateISO: '2013-05-23',
    category: 'interview',
    excerpt: 'Vicious Magazine profiles Julián Pérez on his love of vinyl, the story of The Night Train remix, Loco Dice playing it live in Amnesia Ibiza, his Berlin period, and the philosophy behind Fathers & Sons Productions.',
    sourceNote: 'Printed in Vicious Magazine Nº33, May 2013. Archived locally.',
    content: `
<p>Julián Pérez habla con Vicious Magazine sobre sus influencias, su amor por el vinilo, el nacimiento de Fathers &amp; Sons Productions, y el momento que lo cambió todo: el verano de 2012 en Ibiza.</p>

<h3>Todo el mundo habla en sus biografías de Detroit o Chicago. ¿Qué destacarías de cada una de estas ciudades?</h3>
<p>La gente de mi generación y algo mayor, relacionada con la electrónica underground de principios de los 80 y 90's, probablemente habrán tenido influencias de estas dos ciudades. El Chicago de los 80 tuvo su momento con gente como Frankie Knuckles, Ron Hardy, que entre Chicago y Nueva York comenzaron con un sonido independiente. Introdujeron las cajas de ritmos Roland TR-808, TR-909 y demás — en mi opinión marcan un antes y un después del house, de hecho hoy en día las seguimos utilizando. Surgieron sellos como Trax Records, Epic, House Jam, International House, Emotive, House Nation... Aún sigo comprando discos de ese house siempre que tengo oportunidad. Todd Terry, Marshall Jefferson, DJ Pierre — hay muchas influencias ahí.</p>
<p>Siempre me he considerado más de house que de techno de Detroit, cuando empiezo a hablar de ello me viene a la cabeza gente como Derrick May, Kevin Saunderson, Juan Atkins, Carl Craig... Sellos como Metroplex, KMS, etc. Ellos empezaron esto y crearon un movimiento también social antes de llegar Jeff Mills, Robert Hood y Mike Banks con Underground Resistance y su revolución. Hawtin y Acquaviva llegaron algo más tarde con sus sellos e innovando hacia algo más minimalista.</p>

<h3>¿Qué es eso de "Fathers &amp; Sons"?</h3>
<p>Fathers &amp; Sons es un sello discográfico con un sonido que abarca varios géneros. Intentamos con él transmitir un poco de nosotros además de música; poco a poco se está creando algo mucho más grande que un simple sello discográfico, y no me refiero a en sentido comercial. Esto no va de ventas.</p>
<p>Desde house, deep house, tech house, hasta techno... Hay solamente cinco referencias en el mercado y cada una de ellas se diferencia en estilo con las demás, teniendo "algo" en común. La música que editamos es desde un punto de vista muy personal y subjetivo en cada momento.</p>

<h3>¿Cuándo decidiste que querías remezclar un track tan particular como el viejo himno "The Night Train"?</h3>
<blockquote>"Realmente no me costó mucho decidirme. Estaba escuchando tracks antiguos para buscar algo en lo que inspirarme esa tarde y en cuanto empecé a escucharlo ya me imaginé mi versión y lo visualicé en la pista, concretamente en la pista de Amnesia Ibiza. Cuando trabajo en un track de pista me resulta útil imaginarlo sonando en uno de los clubs o fiestas donde pienso que encajaría. Esta vez fue real, ya que a las pocas horas de meterlo en el sampler y trabajar un poco con él, Loco Dice lo estaba pinchando en Amnesia Ibiza. Así que la intuición fue correcta."</blockquote>

<h3>¿Y tu música en general?</h3>
<p>Mi música va cambiando constantemente a un ritmo que no puedo controlar. A principios de año, viviendo en Berlín, he estado trabajando en algo muy diferente y nuevo para mí. Cada cambio en mi vida me influye mucho a la hora de evolucionar el sonido y llevarlo por un lado u otro.</p>

<h3>¿A qué le llamarías "buena música"?</h3>
<p>No voy a decir lo típico de que no hay música buena o mala, que depende de cuando la escuches y de gustos. Para mí la música tiene que ser "musical", tiene que tener un sentido, transmitir emociones, hacerte sentir placer, viajar, hacerte bailar, ponerte los pelos de punta. Tiene que darse al menos un par de esas condiciones para que yo la considere buena música.</p>
`,
  },
  {
    slug: 'meoko-2016-solemnity-review',
    title: 'Julian Perez — SOLEMNITY (Review)',
    publication: 'MEOKO',
    date: 'October 20, 2016',
    dateISO: '2016-10-20',
    category: 'review',
    excerpt: 'MEOKO reviews Julian Perez\'s debut album Solemnity — the twelfth and final release on Fathers & Sons Productions — calling it a testament to his deep-rooted talent and years of dedication.',
    sourceNote: 'Original no longer online. Archived locally.',
    content: `
<p>Founded in 2012, Ibiza-based imprint Fathers &amp; Sons has always been a label that takes time, care and attention to release quality music. Never rushing a release, Fathers &amp; Sons play by their own rules and have produced a catalogue which echoes the label's vision to release music from the heart. The label's message is clear: "that we are in all this together, that we can learn and care from the fathers to the sons and vice versa" — an ethos which is hard to find amongst other labels within the electronic music scene.</p>

<p>This is why it is with great sadness that <em>Solemnity</em> (FAS012), from founder Julian Perez, will be the label's final release. Having decided that the project's creative journey must now come to an end, the Fathers &amp; Sons label boss has chosen to close this chapter and move onto projects new in order to stay true to the ever-growing ideas which have developed since starting the label four years ago.</p>

<p>After what will now be the twelfth release on the imprint — which represents creativity and freedom of musical expression — <em>Solemnity</em> perfectly signifies the label's final chapter. The two-part vinyl release marks Julian Perez's debut album on his Fathers and Sons imprint.</p>

<p><em>Solemnity</em> communicates Perez's signature sound and showcases his more experimental side through a track list that represents total musical expression. Tracks such as "Ain't That The Truth", "Interfluide" and "Peace In The Darkness" are glorious soundscapes of beautifully produced sound, which take the listener on an ambient journey. To juxtapose this, Perez delivers "The Unspoken Thing", "Unusual Sense" and "Alog" — upbeat driving tracks that you can expect to hear on the dance floor.</p>

<p>The release itself communicates Perez's years of dedication and skilful artistry, and in essence showcases the purpose of the Fathers and Sons project. <em>Solemnity</em> should be listened to completely from start to finish, as words cannot do it enough justice.</p>

<p>Although this marks the end of an era for the Fathers and Sons label, it does in fact act as a reminder of Perez's deep-rooted talent and how much more the Spanish producer has to give.</p>
`,
  },
  {
    slug: 'crazyjack-2017-solemnity-lp-review',
    title: 'Julian Perez — Solemnity LP',
    publication: 'CrazyJack',
    date: 'January 18, 2017',
    dateISO: '2017-01-18',
    category: 'review',
    excerpt: 'French music site CrazyJack reviews Julian Perez\'s debut LP Solemnity on Fathers and Sons Productions, praising its ambient depth, groovy micro-house and club weapons across eleven tracks on four sides of vinyl.',
    sourceNote: 'Original published on crazyjack.fr, January 2017.',
    content: `
<p><em>Label: Fathers and Sons · Format: Vinyle · Cat: FAS012</em></p>

<p>Julian Perez régale les oreilles sur son label Fathers and Sons. Anatomie d'un chef-d'œuvre.</p>

<p>Tout en douceur, le premier track "Ain't That The Truth" nous fait d'emblée plonger dans l'atmosphère ambient et légèrement dub de l'artiste. "Xless" monte en régime avec une rythmique plus sèche et relevée : la micro-house si puissante de Julian se dévoile. "The Unspoken Thing" est un hymne de groove que l'on a déjà entendu maintes fois en club. Un pur régal, le track met tout le monde d'accord.</p>

<p>Face B, "Unusual Sense" se déploie en nappes mystiques pour un résultat cosmique tandis que "That Stuck TDK", plus métallique, joue la prise de risque. Pour clore la face, une vague ambient d'une justesse absolue se déploie avec "Interfluide".</p>

<p>Groove épais, rythmique micro et synthés envoûtants — "Alog" montre encore que Julian est le meilleur à ce jeu-là, tandis que "War Melody Dreamer" est davantage acidulé mais toujours aussi ciselé. Doté d'une basse lourde et puissante, "Sending Forth" se construit pas à pas, note à note, dans une perfection qui doit plus à l'épuration qu'à la complexité. Dans un registre plus déstructuré, "Recognition!" sème le trouble chez l'auditeur perdu entre des mesures atypiques. Enfin, "Peace In The Darkness" clôt l'album comme il avait commencé : dans un calme maîtrisé avec brio, enveloppé dans une atmosphère dont notre artiste a bien le secret.</p>
`,
  },
  {
    slug: 'mixmag-io-2016-ya-veryu-v-nastoyashchikh',
    title: '"I Believe in Real and Sincere People" — Interview',
    publication: 'Mixmag Russia (mixmag.io)',
    date: 'March 31, 2016',
    dateISO: '2016-03-31',
    category: 'interview',
    excerpt: 'Russian edition of Mixmag interviews Julian Perez from Lima, Peru, ahead of his Moscow appearance. He discusses the Spanish electronic scene, Fathers & Sons vinyl philosophy, label curation, avoiding burnout, and his admiration for DJs who stay true to themselves.',
    image: '/press/mixmag-io-2016.jpg',
    imageAlt: 'Mixmag Russia interview with Julian Perez, March 2016',
    sourceNote: 'Original in Russian. Published on mixmag.io, March 31, 2016. No longer online.',
    content: `
<p><em>Interview by Ilya Voronin. Published in Russian on mixmag.io, March 31, 2016. Julian Perez was in Lima, Peru on a South American tour at the time of the interview, ahead of his Moscow appearance at club Konstruktor on April 2.</em></p>

<h3>Is there a developed house scene in Spain? Is there something that distinguishes it from others?</h3>
<p>Compared to any other European techno and house scene, the modern Spanish scene is very small. Of course I'm not counting Ibiza, because that's a completely different story. In fact I would even talk about an audience rather than a "movement" as it was in the past. Although we still have really good DJs and producers active on this scene over the past two decades, plus new talents constantly emerging, everyone knows that the Spanish market alone is not enough to launch an artist's career. 95% of everything that happens in the world of techno and house happens outside the country.</p>

<h3>You launched Fathers &amp; Sons Production in 2012. Can you tell us more about the label, its goals, and why music on it is released exclusively on vinyl?</h3>
<p>That's right. The label was launched in 2012 focusing on DJs and lovers of electronic music. By that point the digital music market had already developed greatly and become ubiquitous. It had become too easy to share music and you could get music without much effort. The digital music market quickly became flat and boring.</p>
<p>We believed in our taste and wanted to do things the way we thought was right and necessary — and we wanted our music on vinyl. At the start we had to invest ourselves and print releases in small runs, but the process began. Today we continue this work with the same pride and enthusiasm.</p>

<h3>What are your criteria for selecting tracks for a release?</h3>
<p>Believe it or not, there's no special process. Regardless of who the artist is or what type of tracks they are — if we like the idea, if we feel something — we sign it. We don't follow any strict stylistic line. We're interested in various genres. With the label we try to create a kind of story, showing through the records what we love — the most varied dance music that we love to listen to and play. Moving this way we will never get bored, and boredom is immediately the end for the label.</p>
<p>Every day people send us their music; some even send to all the labels they like, hoping to get released on at least one of them. Others work on a specific sound to get onto a particular label, which sometimes works — but it can also happen that at that moment the label has already changed its direction. Personally I think that music should be made relying exclusively on your own feelings, not thinking in terms of labels, and only then looking at a specific one.</p>

<h3>Are there any places that inspire you to create music?</h3>
<p>Spain is full of notable places, but there are no specific places after visiting which I would get inspiration. I draw from my everyday emotions, feelings and moods. I truly value and love the moments of silence I arrange for myself for a few hours a day — only then can I gather my thoughts, and in such moments I manage to find new ideas for my future tracks.</p>

<h3>How do you protect yourself from emotional burnout?</h3>
<p>Everyone who performs and goes on tour knows that DJ life is an emotional rollercoaster. Often things don't go as planned, not everything depends on us, and success is not an easy thing — but that's life, right? Such experience is worth living for.</p>
<p>In my opinion, the main thing is to enjoy what you do, to stay true to yourself, and not to lose the desire to keep moving. I don't believe in the "get there at any cost" approach. Respect can be earned through hard work, by trying to make those around you happy. For me personally, dedication, patience, accuracy and enjoying every second are important. If I burn out recklessly, the fun won't last long.</p>

<h3>Are there DJs who serve as examples for you?</h3>
<p>Of course I have DJs and people I respect, who I admire — but it would be unfair to name only some of them. For me, good examples are DJs who go their own way, who don't put on airs, who don't rely forever on PR, who don't always expect help, who learn from those they admire. Those I look up to have individuality, they always maintain an element of surprise — people never know what to expect from them. Those who dedicate themselves entirely to music, ignoring all the outside nonsense.</p>
<blockquote>"I respect DJs who do this not for money, or not out of a desire to avoid a boring job they don't like. They do it because they can't do it any other way. I'm talking about those who don't need to use people, who don't need to constantly put themselves above others, diminishing others' achievements and using someone to secretly do all the work for them, spreading lies about their fans and colleagues just to stay 'there' at any cost. I admire those who work like crazy to achieve their goals. I believe in real and sincere people — they are my examples."</blockquote>

<h3>When did you last dance on the dancefloor?</h3>
<p>Actually last weekend in Lima, the capital of Peru. I'm not a big fan of standing in the DJ booth when I'm not playing, so you can easily find me on the dancefloor.</p>

<h3>Five records without which life would be boring?</h3>
<p>Oh, there are so many! Let me try five different records for different moments: Michael Jackson — Thriller (1982), Aretha Franklin — Amazing Grace (1972), John Coltrane — A Love Supreme (1965), The Cure — Disintegration (1989), Derrick May — Strings of Life (1987).</p>
`,
  },
]
