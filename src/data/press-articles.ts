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
