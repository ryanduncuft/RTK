/**
 * @typedef {Object} TrackMetadata
 * @property {string} title - The title of the track.
 * @property {string} link - The relative path to the track's HTML page.
 */

/**
 * @typedef {Object} AlbumCredits
 * @property {string[]} artists - An array of artists involved in the album.
 * @property {string[]} producers - An array of producers who worked on the album.
 */

/**
 * @typedef {Object} DiscographyItem
 * @property {string} id - A unique identifier for the album or track (e.g., "healing-wounds", "scars-ft-emilyn").
 * @property {"album"|"album-track"|"single"} type - The type of discography item (album, album-track, or single).
 * @property {string} title - The full title of the album or track.
 * @property {string} artist - The main artist of the album or track.
 * @property {string} releaseDate - The release date in YYYY-MM-DD format (for sorting).
 * @property {string} displayDate - The release date in a human-readable format (e.g., "24th May 2024").
 * @property {string} image - The relative path to the album or track cover image from the project root.
 * @property {string} description - A brief text description of the album or track.
 * @property {string} listenLink - An external link to stream or listen to the album/track (e.g., DistroKid, Spotify).
 * @property {string} pageLink - The relative path to the item's dedicated HTML page.
 * @property {string} [genre] - The musical genre (for tracks).
 * @property {string} [duration] - The duration of the track in MM:SS format (for tracks).
 * @property {string} [writer] - The writer(s) of the track (for tracks).
 * @property {string} [producer] - The producer(s) of the track (for tracks). If multiple, separate with commas.
 * @property {string} [lyrics] - HTML string containing the lyrics of the track (for tracks).
 * @property {string} [descriptionHtml] - HTML string containing a more detailed description (for tracks/albums).
 * @property {TrackMetadata[]} [tracks] - An array of objects for each track in an album, including its title and link.
 * @property {AlbumCredits} [credits] - An object containing arrays of artists and producers involved in the album.
 */

/**
 * @type {DiscographyItem[]}
 */

export const releasesData = [
    ///Healing Wounds Album
    {
        id: "healing-wounds",
        type: "album",
        title: "Healing Wounds",
        artist: "Ryze Tha Kidd",
        releaseDate: "2024-05-24",
        displayDate: "24th May 2024",
        image: "Images/Discography/healing-wounds.jpg",
        description: "This is my debut album featuring deep tracks and emotional melodies. One of the highlights is 'Scars,' featuring Emilyn.",
        listenLink: "https://distrokid.com/hyperfollow/ryzethakidd1/healing-wounds-2",
        pageLink: "Discography/Albums/healing-wounds.html",
        tracks: [
            { title: "Hurt", link: "Healing Wounds/hurt.html" },
            { title: "Love Me Again", link: "Healing Wounds/love-me-again.html" },
            { title: "Save A Life", link: "Healing Wounds/save-a-life.html" },
            { title: "Scars ft. Emilyn", link: "Healing Wounds/scars-ft-emilyn.html" },
            { title: "Star Show", link: "Healing Wounds/star-show.html" },
            { title: "Stay Alive", link: "Healing Wounds/stay-alive.html" }
        ],
        credits: {
            artists: ["Ryze Tha Kidd", "Emilyn"],
            producers: ["ayoleybeats", "Jerry the producer", "PolBeats217", "RU4N", "Shrpnss", "T57thetanks", "tores", "Unlucky", "Warheart"]
        }
    },
    {
        id: "hurt",
        type: "album-track",
        title: "Hurt",
        artist: "Ryze Tha Kidd",
        releaseDate: "2024-05-24",
        displayDate: "24th May 2024",
        image: "Images/Discography/healing-wounds.jpg",
        description: "Hurt by Ryze Tha Kidd conveys feelings of pain and loneliness after a breakup, reflecting on loss and the difficulty of moving on.",
        listenLink: "https://distrokid.com/hyperfollow/ryzethakidd1/healing-wounds-2",
        pageLink: "Discography/Albums/Healing Wounds/hurt.html",
        genre: "Trap",
        duration: "3:33",
        writer: "Ryan Duncuft",
        producer: "Jerry the producer",
        lyrics: `<p class="lyrics">Baby I'm so hurt<br>Baby I'm so alone<br>You looked so good in that skirt<br>Sad of seeing your name on my phone<br>Baby I'm so hurt<br>Baby I'm so alone<br>You looked so good in that skirt<br>Sad of seeing your name on my phone<br><br>Baby I don't know what to think<br>Loving you cause I thought there was no risk<br>When you left me I felt so sick<br>Baby I was never a dick<br>In the stillness of the night<br>I hear your name<br>A love that once burned in brightness<br>Now lost in pain<br>Our dreams shattered like broken glass<br>In this lonely darkness<br>Our love could never last<br><br>Baby I'm so hurt<br>Baby I'm so alone<br>You looked so good in that skirt<br>Sad of seeing your name on my phone<br>Baby I'm so hurt<br>Baby I'm so alone<br>You looked so good in that skirt<br>Sad of seeing your name on my phone</p>`,
        descriptionHtml: `<p>“Hurt” by Ryze Tha Kidd conveys feelings of pain and loneliness after a breakup. The lyrics reflect on the loss of a cherished relationship, the lingering sadness, and the difficulty of moving on.</p>`
    },
    {
        id: "save-a-life",
        type: "album-track",
        title: "Save A Life",
        artist: "Ryze Tha Kidd",
        releaseDate: "2024-05-24",
        displayDate: "24th May 2024",
        image: "Images/Discography/healing-wounds.jpg",
        description: "Save A Life by Ryze Tha Kidd portrays a plea for support and companionship in the face of despair, revealing struggles with addiction and emotional pain.",
        listenLink: "https://distrokid.com/hyperfollow/ryzethakidd1/healing-wounds-2",
        pageLink: "Discography/Albums/Healing Wounds/save-a-life.html",
        genre: "Trap",
        duration: "3:02",
        writer: "Ryan Duncuft",
        producer: "PolBeats217",
        lyrics: `<p class="lyrics">Baby don't you know you could save a life<br>Please can you just stay the night<br>Satan's at my neck with a knife<br>I'm too weak from the drugs to fight<br>Baby don't you know you could save a life<br>Please can you just stay the night<br>Satan's at my neck with a knife<br>I'm too weak from the drugs to fight<br><br>Trying not to think about you<br>You haven't been with me for a long time<br>After a couple months your true colours really came through<br>Baby girl I'm faded all through the daytime<br>I just wanted you to stay mine<br><br>Look up to the skies, the stars aligned<br>I loved you so much, our hearts combined<br><br>Baby don't you know you could save a life<br>Please can you just stay the night<br>Satan's at my neck with a knife<br>I'm too weak from the drugs to fight<br>Baby don't you know you could save a life<br>Please can you just stay the night<br>Satan's at my neck with a knife<br>I'm too weak from the drugs to fight</p>`,
        descriptionHtml: `<p>“Save A Life” by Ryze Tha Kidd portrays a plea for support and companionship in the face of despair. The lyrics reveal struggles with addiction and emotional pain, seeking solace and rescue from a significant other.</p>`
    },
    {
        id: "star-show",
        type: "album-track",
        title: "Star Show",
        artist: "Ryze Tha Kidd",
        releaseDate: "2024-05-24",
        displayDate: "24th May 2024",
        image: "Images/Discography/healing-wounds.jpg",
        description: "Immerse yourself in the hauntingly beautiful world of Star Show, a poignant track by Ryze Tha Kidd that captures the delicate, fleeting nature of love, exploring its beauty and fragility.",
        listenLink: "https://distrokid.com/hyperfollow/ryzethakidd1/healing-wounds-2",
        pageLink: "Discography/Albums/Healing Wounds/star-show.html",
        genre: "Trap",
        duration: "1:57",
        writer: "Ryan Duncuft",
        producer: "Unlucky",
        lyrics: `<p class="lyrics">Beneath the moons glow<br>Our love starts to fade<br>Beneath the star show<br>Loves colours starts to shade<br><br>Under the moonlights blade<br>Loves promise decayed<br>Promises shattered<br>Like dreams we can’t forget<br><br>In shadows of love<br>A fading silhouette<br>Echoes of laughter<br>Now drown in tears</p>`,
        descriptionHtml: `<p>Immerse yourself in the hauntingly beautiful world of Star Show, a poignant track by Ryze Tha Kidd that captures the delicate, fleeting nature of love. Set against the backdrop of a moonlit night, the song unfolds beneath a celestial display where love's vibrant hues begin to dim. As the moonlight casts its cold, unyielding blade, promises once cherished now lie shattered, reflecting the sorrow of dreams that refuse to fade. The song paints a melancholic picture of a love that was once radiant but now struggles to hold onto its brilliance, leaving behind a trail of broken promises and forgotten laughter. With evocative lyrics and a haunting melody, Star Show explores the beauty and fragility of romance as it transitions from a dazzling spectacle to a shadowed memory, offering a moving testament to love’s impermanence.</p>`
    },
    {
        id: "love-me-again",
        type: "album-track",
        title: "Love Me Again",
        artist: "Ryze Tha Kidd",
        releaseDate: "2024-05-24",
        displayDate: "24th May 2024",
        image: "Images/Discography/healing-wounds.jpg",
        description: "Immerse yourself in the hauntingly beautiful world of Star Show, a poignant track by Ryze Tha Kidd that captures the delicate, fleeting nature of love, exploring its beauty and fragility.",
        listenLink: "https://distrokid.com/hyperfollow/ryzethakidd1/healing-wounds-2",
        pageLink: "Discography/Albums/Healing Wounds/love-me-again.html",
        genre: "Trap",
        duration: "1:50",
        writer: "Ryan Duncuft",
        producer: "RU4N x ayoleybeats",
        lyrics: `<p class="lyrics">Baby will you ever love me again<br>'Cause we are never going back to friends<br>Hope this shit never ends<br>Getting head in the back of a  benz<br>Baby will you ever love me again<br>'Cause we are never going back to friends<br>Hope this shit never ends<br>Getting head in the back of a benz<br><br>Girl could you be so stupid<br>Baby got shot by cupid<br>Could anyone love like you did<br>Perky in my throat, I'm a fucked up kid<br>Cheat on me get a .50 to the face<br>Look on the news number one murder case<br>Tell me how easy I am to replace<br>Now you're gone let me say my grace<br><br>Baby will you ever love me again<br>'Cause we are never going back to friends<br>Hope this shit never ends<br>Getting head in the back of a benz<br>Baby will you ever love me again<br>'Cause we are never going back to friends<br>Hope this shit never ends<br>Getting head in the back of a benz</p>`,
        descriptionHtml: `<p>“Love Me Again” by Ryze Tha Kidd delves into the complexities of a turbulent relationship, expressing a longing for reconciliation while grappling with  intense emotions and memories of passionate moments together.</p>`
    },
    {
        id: "scars-ft-emilyn",
        type: "album-track",
        title: "Scars ft. Emilyn",
        artist: "Ryze Tha Kidd",
        releaseDate: "2024-05-24",
        displayDate: "24th May 2024",
        image: "Images/Discography/healing-wounds.jpg",
        description: "“Scars” by Ryze Tha Kidd featuring Emilyn is a poignant exploration of a tumultuous and painful relationship. Emilyn’s hook expresses the anguish of a “broken angel” navigating a cursed existence, with love causing profound damage to both partners. The lyrics highlight the deep emotional scars left by a love that seemed hopeless from the start. Ryze’s verse acknowledges past mistakes and expresses a longing to reconcile, emphasizing the importance of love and the struggle to cope without it. The recurring theme of returning to each other despite the pain underscores the intense, yet destructive nature of their bond.",
        listenLink: "https://distrokid.com/hyperfollow/ryzethakidd1/healing-wounds-2",
        pageLink: "Discography/Albums/Healing Wounds/scars-ft-emilyn.html",
        genre: "Trap",
        duration: "3:51",
        writer: "Ryan Duncuft",
        producer: "Shrpnss",
        lyrics: "<p class=\"lyrics\">Told me that it hurt when you fell I know yeah<br>Broken angel cursed to a hell<br>You walked through fire with an icy heart<br>And no one knows of the damage done<br>To me, to you, to us oh<br>Said our hopeless love could never be (could never be)<br>Everything we swore was out of reach yeah<br>Cause deep down I know that it hurt too much<br>The pain that I feel when I think of love<br>For you, from me, with us oh (yo this is sharp as fuck) <br><br>And when I'm sad<br>I keep thinking all we had<br>Couldn't keep it were so bad<br>For each other<br>I come back I come back<br><br>And when I'm sad<br>I keep thinking all we had<br>Couldn't keep it were so bad<br>For each other<br>I come back I come back<br><br>I come back again<br><br>Baby I know that I did a million things wrong<br>And Maybe this is my apology in a song<br>But life's too short too fight<br>Please come back and let's make this right<br>When I'm without you I need the drugs<br>They help me keep fighting for us<br><br>Told me that it hurt when you fell I know yeah<br>Broken angel cursed to a hell<br>You walked through fire with an icy heart<br>And no one knows of the damage done<br>To me, to you, to us oh<br>Said our hopeless love could never be (could never be) <br>Everything we swore was out of reach yeah<br><br>Told me that it hurt when you fell I know yeah<br>Broken angel cursed to a hell</p>",
        descriptionHtml: "<p>“Scars” by Ryze Tha Kidd featuring Emilyn is a poignant exploration of a tumultuous and painful relationship. Emilyn’s hook expresses the anguish of a “broken angel” navigating a cursed existence, with love causing profound damage to both partners. The lyrics highlight the deep emotional scars left by a love that seemed hopeless from the start. Ryze’s verse acknowledges past mistakes and expresses a longing to reconcile, emphasizing the importance of love and the struggle to cope without it. The recurring theme of returning to each other despite the pain underscores the intense, yet destructive nature of their bond.</p>"
    },
    {
        id: "stay-alive",
        type: "album-track",
        title: "Stay Alive",
        artist: "Ryze Tha Kidd",
        releaseDate: "2024-05-24",
        displayDate: "24th May 2024",
        image: "Images/Discography/healing-wounds.jpg",
        description: "“Stay Alive” by Ryze Tha Kidd explores themes of love and commitment, with lyrics emphasizing the desire to avoid conflict, cherish moments together, and   prioritize a significant other over all else.",
        listenLink: "https://distrokid.com/hyperfollow/ryzethakidd1/healing-wounds-2",
        pageLink: "Discography/Albums/Healing Wounds/stay-alive.html",
        genre: "Trap",
        duration: "1:57",
        writer: "Ryan Duncuft",
        producer: "Warheart, T57thetank, TORES",
        lyrics: "<p class=\"lyrics\">Baby I'm just trynna stay alive<br>You know I don't wanna fight<br>I'm just here to stay the night<br>And maybe give you my whole life<br>Baby I'm just trynna stay alive<br>You know I don't wanna fight<br>I'm just here to stay the night<br>And maybe give you my whole life<br><br>Baby I just want you to know<br>That this sh*t ain't no joke<br>When I see your name on my phone I get stoked<br>Baby your love makes me fly so high<br>Baby f*ck them other girls it's just you and I<br><br>Baby I'm dressed in designer so fly<br>VVS's on my wrist, don't let that shine get in your eye<br>'Cause that b*tch can blind, yeah<br>Yeah that b*tch can blind<br><br>Baby I'm just trynna stay alive<br>You know I don't wanna fight<br>I'm just here to stay the night<br>And maybe give you my whole life<br>Baby I'm just trynna stay alive<br>You know I don't wanna fight<br>I'm just here to stay the night<br>And maybe give you my whole life<br></p>",
        descriptionHtml: "<p>“Stay Alive” by Ryze Tha Kidd explores themes of love and commitment, with lyrics emphasizing the desire to avoid conflict, cherish moments together, and prioritize a significant other over all else.</p>"
    },



    /// Til The End EP
    {
        id: "til-the-end",
        type: "ep",
        title: "'Til The End",
        artist: "Ryze Tha Kidd",
        releaseDate: "2024-12-13",
        displayDate: "13th December 2024",
        image: "Images/Discography/til-the-end.jpg",
        description: "This short EP is more of a Mixtape of my Rock songs. I like to experiment with my music, and I feel like I am in the phase right now where I'm just trying to find what I'm best at.",
        listenLink: "https://distrokid.com/hyperfollow/ryzethakidd1/til-the-end-4",
        pageLink: "Discography/EP's/til-the-end.html",
        tracks: [
            { title: "Collide", link: "Til The End/collide.html" },
            { title: "Die For You", link: "Til The End/die-for-you.html" },
            { title: "Reveal", link: "Til The End/reveal.html" }
        ],
        credits: {
            artists: ["Ryze Tha Kidd"],
            producers: ["taymxru", "WXRST"]
        }
    },
    {
        id: "die-for-you",
        type: "album-track",
        title: "Die For You",
        artist: "Ryze Tha Kidd",
        releaseDate: "2024-12-13",
        displayDate: "13th December 2024",
        image: "Images/Discography/til-the-end.jpg",
        description: "“Die For You” by Ryze Tha Kidd is a raw, emotional rock song that expresses an intense, unwavering devotion. The lyrics convey a willingness to give up everything for love—whether it’s the world or personal sacrifice—while pleading for the partner to stay by their side. The repeated call for love to be shown reflects the vulnerability of wanting reassurance and connection. As the song unfolds, it paints a picture of two people fighting to maintain their bond in a chaotic world, holding onto each other through the storm. With its powerful riffs and heartfelt energy, “Die For You” is a bold declaration of love and loyalty.",
        listenLink: "https://distrokid.com/hyperfollow/ryzethakidd1/til-the-end-4",
        pageLink: "Discography/EP's/Til The End/die-for-you.html",
        genre: "Trap",
        duration: "2.37",
        writer: "Ryan Duncuft",
        producer: "WXRST",
        lyrics: "Baby you just don’t understand<br>Don’t you know you take me to wonderland<br>Baby girl I’ll show you my love first hand<br>All these demon attacks that well withstand<br><br>In the darkness of light we collide<br>With the flames of desire we’re burning bright<br>In this world of chaos your my only truth<br>Together we stand invisible in our youth<br>We ride the edge on a rollercoaster high<br>Through highs and lows we’ll never say goodbye<br>Defying all odds with love as our prize<br><br>Loves like a hurricane tearing through our vines<br>Together we will conquer loves power will survive<br>Our souls unite<br>It feels so right<br><br>In the darkness of light we collide<br>With the flames of desire we’re burning bright<br>In this world of chaos your my only truth<br>Together we stand invisible in our youth<br>We ride the edge on a rollercoaster high<br>Through highs and lows we’ll never say goodbye<br>Defying all odds with love as our prize",
        descriptionHtml: "<p>“Die For You” by Ryze Tha Kidd is a raw, emotional rock song that expresses an intense, unwavering devotion. The lyrics convey a willingness to give up everything for love—whether it’s the world or personal sacrifice—while pleading for the partner to stay by their side. The repeated call for love to be shown reflects the vulnerability of wanting reassurance and connection. As the song unfolds, it paints a picture of two people fighting to maintain their bond in a chaotic world, holding onto each other through the storm. With its powerful riffs and heartfelt energy, “Die For You” is a bold declaration of love and loyalty.</p>"
    },
    {
        id: "reveal",
        type: "album-track",
        title: "Reveal",
        artist: "Ryze Tha Kidd",
        releaseDate: "2024-12-13",
        displayDate: "13th December 2024",
        image: "Images/Discography/til-the-end.jpg",
        description: "“Reveal” by Ryze Tha Kidd is a raw, high-energy rock anthem that hits with emotion, regret, and inner conflict. It’s about facing the truth, even when it hurts, and the struggle of letting go when the past keeps pulling you back.<br>The song kicks off with a hard-hitting confession—“I never loved you from the start, I just didn’t wanna get my heart torn apart.” There’s a mix of guilt and pain in those words, like trying to convince yourself that the feelings were never real, yet still being haunted by memories. The verses paint a picture of someone lost in their own thoughts, chasing something that’s already gone but unable to escape it.<br>The chorus explodes with urgency: “I need you more than ever, baby just count to three and come with me.” It’s that moment of desperation, a plea to hold onto something slipping away. The imagery of “running through the darkness, chasing shadows in the rain” gives the song a restless, almost dreamlike quality—like no matter how far you run, you always end up back where it all fell apart.<br>With heavy guitars, an anthemic chorus, and emotionally charged lyrics, “Reveal” is a song that captures the chaos of love, regret, and the search for closure. It’s loud, it’s honest, and it leaves you feeling every bit of the storm Ryze Tha Kidd is caught in.",
        listenLink: "https://distrokid.com/hyperfollow/ryzethakidd1/til-the-end-4",
        pageLink: "Discography/EP's/Til The End/reveal.html",
        genre: "Rock",
        duration: "4.05",
        writer: "Ryan Duncuft",
        producer: "saint mike",
        lyrics: "Here comes my big reveal<br>I never loved you from the start<br>I just didn't wanna get my heart torn apart<br>I hear your voice in the silence<br>Like a ghost that won't move on from the past<br>I never thought we'd move on so fast<br>Now I'm sat here reflecting on the past<br>Now, or never, baby I need you next to me<br>Please don't argue, just tell me that you agree<br><br>Baby 'cause I need you now<br><br>I need you more than ever<br>Baby just count to three<br>And come with me<br>I've been running through the darkness<br>Chasing shadows in the rain<br>Every road I take just circles back<br>To the places where I lost my name<br><br>Echoes of your laughter haunt the space<br>In my mind<br>I keep searching for the pieces of the love<br>I'll never find<br>I watch the sun fade into the night<br>Just for me and you to fight<br>I need you more than ever<br>Baby just count to three<br>And come with me<br>I've been running through the darkness<br>Chasing shadows in the rain<br>Every road I take just circles back<br>To the places where I lost my name",
        descriptionHtml: "<p>“Reveal” by Ryze Tha Kidd is a raw, high-energy rock anthem that hits with emotion, regret, and inner conflict. It’s about facing the truth, even when it hurts, and the struggle of letting go when the past keeps pulling you back.<br>The song kicks off with a hard-hitting confession—“I never loved you from the start, I just didn’t wanna get my heart torn apart.” There’s a mix of guilt and pain in those words, like trying to convince yourself that the feelings were never real, yet still being haunted by memories. The verses paint a picture of someone lost in their own thoughts, chasing something that’s already gone but unable to escape it.<br>The chorus explodes with urgency: “I need you more than ever, baby just count to three and come with me.” It’s that moment of desperation, a plea to hold onto something slipping away. The imagery of “running through the darkness, chasing shadows in the rain” gives the song a restless, almost dreamlike quality—like no matter how far you run, you always end up back where it all fell apart.<br>With heavy guitars, an anthemic chorus, and emotionally charged lyrics, “Reveal” is a song that captures the chaos of love, regret, and the search for closure. It’s loud, it’s honest, and it leaves you feeling every bit of the storm Ryze Tha Kidd is caught in.</p>"
    },



    /// Is This A Dream EP
    {
        id: "is-this-a-dream",
        type: "ep",
        title: "Is This A Dream? (Deluxe Edition)",
        artist: "Ryze Tha Kidd",
        releaseDate: "2024-09-29",
        displayDate: "29th September 2024",
        image: "Images/Discography/is-this-a-dream.jpg",
        description: "My debut EP featuring a range of hyperpop records. A blend of raw emotion and vibrant beats.",
        listenLink: "https://distrokid.com/hyperfollow/ryzethakidd1/til-the-end-4",
        pageLink: "Discography/EP's/is-this-a-dream.html",
        tracks: [
            { title: "H3ART", link: "Is This A Dream/h3art.html" },
            { title: "Ego", link: "Is This A Dream/ego.html" },
            { title: "Crew", link: "Is This A Dream/crew-ft-okbreezy.html" },
            { title: "T1M3 T0 SH1N3", link: "Is This A Dream/t1m3-t0-sh1n3.html" },
            { title: "4LW4YS B3 B3TT3R", link: "Is This A Dream/4lw4ys-b3-b3tt3r.html" }
        ],
        credits: {
            artists: ["Ryze Tha Kidd", "Okbreezy"],
            producers: ["johnnyfriend", "Perish", "WellFed"]
        }
    },
    {
        id: "4lw4ys-b3-b3tt3r",
        type: "album-track",
        title: "4LW4YS B3 B3TT3R",
        artist: "Ryze Tha Kidd",
        releaseDate: "2024-04-25",
        displayDate: "25th April 2024",
        image: "Images/Discography/is-this-a-dream.jpg",
        description: "“4LW4YS B3 B3TT3R” by Ryze Tha Kidd is a bold and assertive track that showcases the artist’s confidence and competitive nature. The lyrics boast about outperforming others, particularly in romantic pursuits, with a provocative and unapologetic tone. The repetitive chorus highlights this bravado, while a brief interlude delves into themes of longing and love, adding a contrasting layer of emotional depth. The song merges aggressive self-assurance with moments of vulnerability, reflecting a multifaceted approach to relationships and personal success.",
        listenLink: "https://distrokid.com/hyperfollow/ryzethakidd1/is-this-a-dream-deluxe-edition",
        pageLink: "Discography/Albums/Is This A Dream/4lw4ys-b3-b3tt3r.html",
        genre: "Trap",
        duration: "1.37",
        writer: "Ryan Duncuft",
        producer: "WellFed",
        lyrics: "<p class=\"lyrics\">Yeah I'm always gonna be better<br>At getting your bitch wetter<br>Sending your bitch a letter<br>Your bitch wanna come over to my house, I'll let her<br>Yeah I'm always gonna be better<br>At getting your bitch wetter<br>Sending your bitch a letter<br>Your bitch wanna come over to my house, I'll let her<br><br>'Cause now<br>Now I got lost in your love<br>The way we love each other, the way we love each other<br>Our love for one another<br>I need a lover, who will be strong, never wrong<br>Never wrong, never wrong<br><br>Yeah it's been so long<br>It's been so long<br><br>Yeah I'm always gonna be better<br>At getting your bitch wetter<br>Sending your bitch a letter<br>Your bitch wanna come over to my house, I'll let her<br>Yeah I'm always gonna be better<br>At getting your bitch wetter<br>Sending your bitch a letter<br>Your bitch wanna come over to my house, I'll let her</p>",
        descriptionHtml: "<p>“4LW4YS B3 B3TT3R” by Ryze Tha Kidd is a bold and assertive track that showcases the artist’s confidence and competitive nature. The lyrics boast about outperforming others, particularly in romantic pursuits, with a provocative and unapologetic tone. The repetitive chorus highlights this bravado, while a brief interlude delves into themes of longing and love, adding a contrasting layer of emotional depth. The song merges aggressive self-assurance with moments of vulnerability, reflecting a multifaceted approach to relationships and personal success.</p>"
    },
    {
        id: "crew-ft-okbreezy",
        type: "album-track",
        title: "Crew ft. okbreezy",
        artist: "Ryze Tha Kidd",
        featuredArtist: "okbreezy",
        releaseDate: "2024-04-25",
        displayDate: "25th April 2024",
        image: "Images/Discography/is-this-a-dream.jpg",
        description: "“Crew” by Ryze Tha Kidd is a raw and unfiltered track that delves into themes of betrayal, heartbreak, and moving on. The song’s lyrics express intense emotions and a sense of camaraderie with the artist’s close circle, as he addresses the pain of a past relationship. With a blend of blunt language and candid reflections, Ryze Tha Kidd conveys his disdain for an ex-partner while reaffirming his loyalty to his crew. The repetitive chorus underscores his feelings of regret and anger, capturing the tumultuous aftermath of a failed romance.",
        listenLink: "https://distrokid.com/hyperfollow/ryzethakidd1/is-this-a-dream-deluxe-edition",
        pageLink: "Discography/Albums/Is This A Dream/crew.html",
        genre: "Trap",
        duration: "1.59",
        writer: "Ryan Duncuft, Fabrizio Bode",
        producer: "johnnyfriend, Perish",
        lyrics: "<p class=\"lyrics\">Whole crew<br>Fuck you<br><br>I'm with the whole crew<br>So it's bitch fuck you<br>People say your name and I'm like ew<br>Why did I even fuck you<br>Really thought I fucking loved you<br>I'm with the whole crew<br>So it's bitch fuck you<br>People say your name and I'm like ew<br>Why did I even fuck you<br>Really thought I fucking loved you<br><br>I'm with the crew<br>Two shorty's got a furry neck<br>I know you been passed around the team<br>While i'm out here getting checks<br>I noticed you got a new man, he prolly a fan<br>Ask him if he knew who I am<br>Lil' bitch got up and ran<br><br>If you think i'm playing<br>Just know I ain't playing<br>I'll rip your heart out if you ever think about playing me<br>So bitch just leave<br>Yeah bitch just leave<br>Ain't no demon or angel love so bitch just leave<br><br>I'm with the whole crew<br>So it's bitch fuck you<br>People say your name and I'm like ew<br>Why did I even fuck you<br>Really thought I fucking loved you<br>I'm with the whole crew<br>So it's bitch fuck you<br>People say your name and I'm like ew<br>Why did I even fuck you<br>Really thought I fucking loved you<br><br>Yeah really thought I loved you<br>My anger over your love yeah it overgrew<br>Saying shit about me bitch look at you<br>I had a love and lost me a youth<br>You ask me what I gave you and I say that I gave you my everything (where's my ring)<br>You say that you want me all the time<br>But I say<br><br>I'm with the whole crew<br>So it's bitch fuck you<br>People say your name and I'm like ew<br>Why did I even fuck you<br>Really thought I fucking loved you<br>I'm with the whole crew<br>So it's bitch fuck you<br>People say your name and I'm like ew<br>Why did I even fuck you<br>Really thought I fucking loved you</p>",
        descriptionHtml: "<p>“Crew” by Ryze Tha Kidd is a raw and unfiltered track that delves into themes of betrayal, heartbreak, and moving on. The song’s lyrics express intense emotions and a sense of camaraderie with the artist’s close circle, as he addresses the pain of a past relationship. With a blend of blunt language and candid reflections, Ryze Tha Kidd conveys his disdain for an ex-partner while reaffirming his loyalty to his crew. The repetitive chorus underscores his feelings of regret and anger, capturing the tumultuous aftermath of a failed romance.</p>"
    },
    {
        id: "ego",
        type: "album-track",
        title: "Ego",
        artist: "Ryze Tha Kidd",
        releaseDate: "2024-04-25",
        displayDate: "25th April 2024",
        image: "Images/Discography/is-this-a-dream.jpg",
        description: "“Ego” by Ryze Tha Kidd is a confrontational and straightforward track that explores themes of deceit and self-perception. The song features a repetitive chorus that emphasizes the artist’s frustration and disillusionment with a past partner. Through blunt and provocative language, Ryze Tha Kidd questions the whereabouts and fidelity of his ex, expressing his anger and disappointment. The lyrics reflect a struggle with ego and trust, wrapped in a rhythmic flow designed to underscore the raw emotion of the situation.",
        listenLink: "https://distrokid.com/hyperfollow/ryzethakidd1/is-this-a-dream-deluxe-edition",
        pageLink: "Discography/Albums/Is This A Dream/ego.html",
        genre: "Trap",
        duration: "1.59",
        writer: "Ryan Duncuft",
        producer: "johnnyfriend",
        lyrics: "<p class=\"lyrics\">Ooh woah<br><br>Yeah I'm losing my ego<br>Where the fuck you go<br>Ah fuck it you're a hoe<br>Yeah hoping you liking this flow<br>Just so you know<br>Yeah you're a hoe<br>Yeah I'm losing my ego<br>Where the fuck you go<br>Ah fuck it you're a hoe<br>Yeah hoping you liking this flow<br>Just so you know<br>Yeah you're a hoe<br><br>Yeah you're a hoe<br>Told me that you went to your friend house but really where did you go<br>Bitch I wanna know<br><br>Ooh woah<br><br>Yeah I'm losing my ego<br>Where the fuck you go<br>Ah fuck it you're a hoe<br>Hoping you liking this flow<br>Just so you know<br>Yeah you're a hoe<br>Yeah I'm losing my ego<br>Where the fuck you go<br>Ah fuck it you're a hoe<br>Hoping you liking this flow<br>Just so you know<br>Yeah you're a hoe</p>",
        descriptionHtml: "<p>“Ego” by Ryze Tha Kidd is a confrontational and straightforward track that explores themes of deceit and self-perception. The song features a repetitive chorus that emphasizes the artist’s frustration and disillusionment with a past partner. Through blunt and provocative language, Ryze Tha Kidd questions the whereabouts and fidelity of his ex, expressing his anger and disappointment. The lyrics reflect a struggle with ego and trust, wrapped in a rhythmic flow designed to underscore the raw emotion of the situation.</p>"
    },
    {
        id: "h3art",
        type: "album-track",
        title: "H3ART",
        artist: "Ryze Tha Kidd",
        releaseDate: "2024-09-29",
        displayDate: "29th September 2024",
        image: "Images/Discography/is-this-a-dream.jpg",
        description: "“H3ART” by Ryze Tha Kidd is an electrifying hyperpop love anthem that pulses with raw emotion and high-octane energy. The track kicks off with a dramatic confession—giving one's heart to the devil—ushering in a sense of chaotic freedom, where reality glitches and the rules fade away. The protagonist knows there’s no future in this love, yet they dive headfirst into the present, craving the intensity and connection that comes with it. It’s a song about living fully in the moment, without hesitation or pretense, and hoping the wild ride never ends. With an infectious blend of soaring beats and poignant lyrics, “H3ART” captures the thrilling, bittersweet highs of a love that’s both all-consuming and fleeting.",
        listenLink: "https://distrokid.com/hyperfollow/ryzethakidd1/is-this-a-dream-deluxe-edition",
        pageLink: "Discography/Albums/Is This A Dream/h3art.html",
        genre: "Pop",
        duration: "2.04",
        writer: "Ryan Duncuft",
        producer: "siemspark, solcloney",
        lyrics: "<p class=\"lyrics\">Yeah, I give my heart to the devil<br>He said, okay, now we're level<br>Glitch through reality ain't got no time to pretend<br>Yeah, I hope our party don't end<br>No rules, just vibes<br>Let the energy spike<br>Baby come here, we'll party all night<br>Don't let this be the end<br>Don't even try to pretend<br><br>I know there's no future<br>But life without you is a blur<br>Running so deeper than the choices that I've made<br>Life is a journey that I don't wanna face alone<br>We've all had hard times, but they're never tore us apart<br><br>Yeah, I give my heart to the devil<br>He said, okay, now we're level<br>Glitch through reality ain't got no time to pretend<br>Yeah, I hope our party don't end<br>No rules, just vibes<br>Let the energy spike<br>Baby come here, we'll party all night<br>Don't let this be the end<br>Don't even try to pretend</p>",
        descriptionHtml: "<p>“H3ART” by Ryze Tha Kidd is an electrifying hyperpop love anthem that pulses with raw emotion and high-octane energy. The track kicks off with a dramatic confession—giving one's heart to the devil—ushering in a sense of chaotic freedom, where reality glitches and the rules fade away. The protagonist knows there’s no future in this love, yet they dive headfirst into the present, craving the intensity and connection that comes with it. It’s a song about living fully in the moment, without hesitation or pretense, and hoping the wild ride never ends. With an infectious blend of soaring beats and poignant lyrics, “H3ART” captures the thrilling, bittersweet highs of a love that’s both all-consuming and fleeting.</p>"
    },
    {
        id: "t1m3-t0-sh1n3",
        type: "album-track",
        title: "T1M3 T0 SH1N3",
        artist: "Ryze Tha Kidd",
        releaseDate: "2024-09-29",
        displayDate: "29th September 2024",
        image: "Images/Discography/is-this-a-dream.jpg",
        description: "“T1M3 T0 SH1N3” by Ryze Tha Kidd is a high-energy hyperpop track that captures the frustration and intensity of being stuck in a toxic relationship. The song’s aggressive beat and raw lyrics express the anger of constantly being hurt by someone you loved. “It’s my time to shine” marks the turning point, when enough is enough and there’s a decision to break free from the cycle of fighting and heartache. The line “You can’t keep breaking my heart, you’re breaking the law” reflects the feeling of being mistreated and finally realising that it’s time to move on. The chaotic vibe of the track mirrors the emotional release of walking away from someone who has left nothing but pain behind. “T1M3 T0 SH1N3” is all about reclaiming strength and independence after being dragged down by love gone wrong.",
        listenLink: "https://distrokid.com/hyperfollow/ryzethakidd1/is-this-a-dream-deluxe-edition",
        pageLink: "Discography/Albums/Is This A Dream/t1m3-t0-sh1n3.html",
        genre: "Pop",
        duration: "2.33",
        writer: "Ryan Duncuft",
        producer: "",
        lyrics: "<p class=\"lyrics\">Yeah, b*tch, it's my time to shine<br>This the end, it's like the Rhine<br>All we did was fight, it's war<br>I loved you like you were my everything<br>My world (World War)<br><br>You can't keep breaking my heart<br>You're breaking the law<br><br>Yeah, it's like the war<br>F*ck you, you wh*re<br>You always leave me<br>Then you come back, texting me, saying that you want more<br>Telling me to put my heart in the bag<br>And nobody gets hurt<br><br>Yeah, b*tch, it's my time to shine<br>This the end, it's like the Rhine<br>All we did was fight, it's war<br>I loved you like you were my everything<br>My world (World War)<br><br>You can't keep breaking my heart<br>You're breaking the law<br><br>Yeah, it's like the war<br>Can't even be f*cking with a thot or a wh*re<br>But all these b*tches hitting on my phone<br>Telling me that they want more, ay<br><br>Yeah, b*tch, it's my time to shine<br>This the end, it's like the Rhine<br>All we did was fight, it's war<br>I loved you like you were my everything<br>My world (World War)<br><br>You can't keep breaking my heart<br>You're breaking the law<br><br>Yeah, b*tch, it's my time to shine<br>This the end, it's like the Rhine<br>All we did was fight, it's war<br>I loved you like you were my everything<br>My world (World War)<br><br>You can't keep breaking my heart<br>You're breaking the law</p>",
        descriptionHtml: "<p>“T1M3 T0 SH1N3” by Ryze Tha Kidd is a high-energy hyperpop track that captures the frustration and intensity of being stuck in a toxic relationship. The song’s aggressive beat and raw lyrics express the anger of constantly being hurt by someone you loved. “It’s my time to shine” marks the turning point, when enough is enough and there’s a decision to break free from the cycle of fighting and heartache. The line “You can’t keep breaking my heart, you’re breaking the law” reflects the feeling of being mistreated and finally realising that it’s time to move on. The chaotic vibe of the track mirrors the emotional release of walking away from someone who has left nothing but pain behind. “T1M3 T0 SH1N3” is all about reclaiming strength and independence after being dragged down by love gone wrong.</p>"
    },



    /// Patient Zero EP
    {
        id: "patient-zero",
        type: "ep",
        title: "Patient Zero",
        artist: "Ryze Tha Kidd",
        releaseDate: "2024-04-24",
        displayDate: "24th April 2024",
        image: "Images/Discography/patient-zero.jpg",
        description: "This EP dropped the same day as my debut album, and it features my personal favourite track, 'Rockstar', produced by EGGACION.",
        listenLink: "https://distrokid.com/hyperfollow/ryzethakidd1/patient-zero",
        pageLink: "Discography/EP's/patient-zero.html",
        tracks: [
            { title: "Rockstar", link: "Patient Zero/Rockstar.html" },
            { title: "Transform", link: "Patient Zero/Transform.html" },
            { title: "Tired Of This", link: "Patient Zero/Tired Of This.html" },
            { title: "Lean (freestyle)", link: "Patient Zero/Lean.html" }
        ],
        credits: {
            artists: ["Ryze Tha Kidd"],
            producers: ["Chris Marek", "DARKSIDE", "EGGACION", "Eskimos"]
        }
    },
    {
        id: "lean",
        type: "album-track",
        title: "Lean (freestyle)",
        artist: "Ryze Tha Kidd",
        releaseDate: "2024-05-24",
        displayDate: "24th May 2024",
        image: "Images/Discography/patient-zero.jpg",
        description: "“Lean (Freestyle)” by Ryze Tha Kidd is a gritty and unapologetic track that delves into themes of substance use, hedonism, and bravado. The freestyle format   allows Ryze to express his thoughts and feelings in a raw, unfiltered manner.",
        listenLink: "https://distrokid.com/hyperfollow/ryzethakidd1/patient-zero",
        pageLink: "Discography/EP's/Patient Zero/lean.html",
        genre: "Trap",
        duration: "1.30",
        writer: "Ryan Duncuft",
        producer: "Darkside",
        lyrics: "Sipping lean making me mean, yeah<br><br>Making me mean<br>Sipping lean making me mean, yeah<br>I like that, aha<br>Yeah, sipping lean<br><br>(Darkside light this shit up)<br><br>'Scuse me I don't really mean to be intervene<br>I don't wanna be mean, I'm just sipping this lean<br>I really be doing the same routine in the quarantine<br>Damn I really feel like a machine<br>Your bitch came over to my house and I took off her blouse<br>Then we started fucking on the couch<br><br>I got loads of cheddar<br>I got your girl in my twitter header<br>I fucked your bitch, I take her out while I'm live in twitch (witch) Yeah I'm    really getting rich<br>I'm skrrting off while you're in the ditch<br><br>Yeah I'm fucking your bitch, then send her off to Auschwitz<br>Yeah lock her up in the chamber<br>She got that ass oh no my cars all out of gas<br>Your girl ask me if I wanna fuck, I say perhaps",
        descriptionHtml: "<p>“Lean (Freestyle)” by Ryze Tha Kidd is a gritty and unapologetic track that delves into themes of substance use, hedonism, and bravado. The freestyle format allows Ryze to express his thoughts and feelings in a raw, unfiltered manner.</p>"
    },
    {
        id: "rockstar",
        type: "album-track",
        title: "Rockstar",
        artist: "Ryze Tha Kidd",
        releaseDate: "2024-05-24",
        displayDate: "24th May 2024",
        image: "Images/Discography/patient-zero.jpg",
        description: "“Rockstar” by Ryze Tha Kidd is a high-energy trap anthem that captures the quintessential bravado and rebellious spirit of the genre. The song kicks off with an infectious hook, repeating the declaration “Baby I’m a rockstar,” immediately setting a confident and unapologetic tone. Ryze Tha Kidd’s lyrics paint a vivid picture of a lavish, chaotic lifestyle filled with fast cars, risky behavior, and carefree attitudes towards societal norms. Throughout the track, Ryze Tha Kidd delivers verses that boast about his status, relationships, and unfiltered personality. The imagery of pulling up in sports cars and living life on the edge is underscored by references to encounters with law enforcement and a carefree approach to drug use. The lyrics also include bold, humorous lines that showcase his self-assured persona, such as likening himself to comedian Jimmy Carr and alluding to pop culture with mentions of XXXTentacion and the Fast and Furious franchise. The production of “Rockstar” complements Ryze Tha Kidd’s assertive flow with hard-hitting beats and a relentless tempo, amplifying the song’s hype factor. It’s a track designed to energize listeners, embodying the fearless and extravagant lifestyle often celebrated in trap music.",
        listenLink: "https://distrokid.com/hyperfollow/ryzethakidd1/patient-zero",
        pageLink: "Discography/EP's/Patient Zero/rockstar.html",
        genre: "Trap",
        duration: "2.32",
        writer: "Ryan Duncuft",
        producer: "EGGACION",
        lyrics: "(Yeah, yeah)<br>(Baby I’m a rockstar)<br>(Baby I’m a rockstar, rockstar)<br>Baby I’m a rockstar pull up in a sports car, bro be leaving in a cop car<br>Fucking your bitch and she in a sports bra<br>I’m your mums new son-in-law<br>I don’t give a fuck who you are<br>Fuck with me that gun go grahh grahh<br>Asking how I got so many hoes, it’s so bizarre<br>Yung Ryze you so funny, Jimmy carr<br>Put my dick in your bitch, it’s so sweet, cookie jar<br>We end up on XXX, rip Jah<br><br>Baby it’s alright to not like me (like me)<br>Pop a couple xannies and get feisty (feisty)<br>Speaking of xannies, I’m on too many (too many)<br>Driving so fast, I’m so furious, crash the car like my first name letty (like letty)<br>Baby I’m so high (so high)<br>Dressed in designer so fly (so fly)<br>Baby I’m not like them other guys (other guys)<br>Baby I’m not telling no lies (no lie)<br><br>Bitches be saying I’m a one hit wonder<br>I don’t give a shit (no shit)<br>I don’t see them like I’m stevie wonder<br>I’m making it big<br>You don’t gotta wonder<br><br>Baby I’m a rockstar pull up in a sports car, bro be leaving in a cop car<br>Fucking your bitch and she in a sports bra<br>I’m your mums new son-in-law<br>I don’t give a fuck who you are<br>Fuck with me that gun go grahh grahh<br>Asking how I got so many hoes, it’s so bizarre<br>Yung Ryze you so funny, Jimmy carr<br>Put my dick in your bitch, it’s so sweet, cookie jar<br>We end up on XXX, rip Jah<br><br>Baby I’m a rockstar pull up in a sports car, bro be leaving in a cop car<br>Fucking your bitch and she in a sports bra<br>I’m your mums new son-in-law<br>I don’t give a fuck who you are<br>Fuck with me that gun go grahh grahh<br>Asking how I got so many hoes, it’s so bizarre<br>Yung Ryze you so funny, Jimmy carr<br>Put my dick in your bitch, it’s so sweet, cookie jar<br>We end up on XXX, rip Jah",
        descriptionHtml: "<p>“Rockstar” by Ryze Tha Kidd is a high-energy trap anthem that captures the quintessential bravado and rebellious spirit of the genre. The song kicks off with an infectious hook, repeating the declaration “Baby I’m a rockstar,” immediately setting a confident and unapologetic tone. Ryze Tha Kidd’s lyrics paint a vivid picture of a lavish, chaotic lifestyle filled with fast cars, risky behavior, and carefree attitudes towards societal norms. Throughout the track, Ryze Tha Kidd delivers verses that boast about his status, relationships, and unfiltered personality. The imagery of pulling up in sports cars and living life on the edge is underscored by references to encounters with law enforcement and a carefree approach to drug use. The lyrics also include bold, humorous lines that showcase his self-assured persona, such as likening himself to comedian Jimmy Carr and alluding to pop culture with mentions of XXXTentacion and the Fast and Furious franchise. The production of “Rockstar” complements Ryze Tha Kidd’s assertive flow with hard-hitting beats and a relentless tempo, amplifying the song’s hype factor. It’s a track designed to energize listeners, embodying the fearless and extravagant lifestyle often celebrated in trap music.</p>"
    },
    {
        id: "tired-of-this",
        type: "album-track",
        title: "Tired Of This",
        artist: "Ryze Tha Kidd",
        releaseDate: "2024-05-24",
        displayDate: "24th May 2024",
        image: "Images/Discography/patient-zero.jpg",
        description: "“Tired Of This” by Ryze Tha Kidd is a raw and honest portrayal of the artist’s frustration and exhaustion with various aspects of his life. The lyrics   reflect a deep weariness, touching on personal relationships, substance use, and the struggle for financial success. The repetition of the phrase “I’m so tired”    throughout the song emphasizes a sense of overwhelming fatigue and disillusionment. Ryze Tha Kidd expresses his discontent with a troubled relationship,    highlighted by lines such as “I’m so tired of us” and “I’m so tired of this bitch.” This suggests a tumultuous and possibly toxic relationship that has left him  feeling drained. The mention of drugs in “I’m so tired of the drugs” adds another layer to the narrative, indicating a struggle with substance use that   contributes to his overall sense of exhaustion. The line “I’m too tired in this abyss” conveys a feeling of being trapped in a deep, dark place, further   emphasizing Ryze’s emotional and mental fatigue. Ryze Tha Kidd also touches on his dissatisfaction with the superficial aspects of his lifestyle, as seen in  “I’m too tired for these clubs” and “I’m so tired of not being rich.” These lines reflect a longing for something more meaningful and a frustration with the    endless pursuit of wealth and status. The second verse delves deeper into the pain of a broken relationship, with Ryze Tha Kidd lamenting being blamed for his    partner’s mistakes and the heartbreak he has endured. The lines “Got my heart on the line, girl it’s big stakes” and “Baby girl I love you from the bottom of my  heart” reveal a vulnerability and a genuine emotional investment that has been shattered. Overall, “Tired Of This” is a powerful expression of Ryze Tha Kidd’s  emotional state, capturing the weight of his struggles and his yearning for change. The song resonates with anyone who has felt the heavy burden of life’s   challenges and the desire to break free from a cycle of dissatisfaction and despair.",
        listenLink: "https://distrokid.com/hyperfollow/ryzethakidd1/patient-zero",
        pageLink: "Discography/EP's/Patient Zero/tired-of-this.html",
        genre: "Trap",
        duration: "2.32",
        writer: "Ryan Duncuft",
        producer: "EGGACION",
        lyrics: "I'm so tired of us<br>I'm so tired of this<br>I'm so tired of the drugs<br>I'm so tired of this bitch<br>I'm so tired of love<br>I'm too tired in this abyss<br>I'm too tired for these clubs<br>I'm so tired of not being rich<br><br>I'm so tired of us<br>I'm so tired of this<br>I'm so tired of the drugs<br>I'm so tired of this bitch<br>I'm so tired of love<br>I'm too tired in this abyss<br>I'm too tired for these clubs<br>I'm so tired of not being rich<br><br>Bitch I'm so tired of being blamed for your mistakes<br>Girl I don't get why you had to make my heart break<br>Got my heart on the line, girl it's big stakes<br>Baby girl I love you from the bottom of my heart<br>Never thought anything could take us apart<br><br>I'm so tired of us<br>I'm so tired of   this<br>I'm so tired of the drugs<br>I'm so tired of this bitch<br>I'm so tired of love<br>I'm too tired in this abyss<br>I'm too tired for these clubs<br>I'm so tired of not being rich<br><br>I'm so tired of us<br>I'm so tired of this<br>I'm so tired of the drugs<br>I'm so tired of this bitch<br>I'm so tired of love<br>I'm too tired in this abyss<br>I'm too tired for these clubs<br>I'm so tired of not being rich",
        descriptionHtml: "<p>“Tired Of This” by Ryze Tha Kidd is a raw and honest portrayal of the artist’s frustration and exhaustion with various aspects of his life. The lyrics   reflect a deep weariness, touching on personal relationships, substance use, and the struggle for financial success. The repetition of the phrase “I’m so tired”    throughout the song emphasizes a sense of overwhelming fatigue and disillusionment. Ryze Tha Kidd expresses his discontent with a troubled relationship,    highlighted by lines such as “I’m so tired of us” and “I’m so tired of this bitch.” This suggests a tumultuous and possibly toxic relationship that has left him  feeling drained. The mention of drugs in “I’m so tired of the drugs” adds another layer to the narrative, indicating a struggle with substance use that   contributes to his overall sense of exhaustion. The line “I’m too tired in this abyss” conveys a feeling of being trapped in a deep, dark place, further   emphasizing Ryze’s emotional and mental fatigue. Ryze Tha Kidd also touches on his dissatisfaction with the superficial aspects of his lifestyle, as seen in  “I’m too tired for these clubs” and “I’m so tired of not being rich.” These lines reflect a longing for something more meaningful and a frustration with the    endless pursuit of wealth and status. The second verse delves deeper into the pain of a broken relationship, with Ryze Tha Kidd lamenting being blamed for his    partner’s mistakes and the heartbreak he has endured. The lines “Got my heart on the line, girl it’s big stakes” and “Baby girl I love you from the bottom of my  heart” reveal a vulnerability and a genuine emotional investment that has been shattered. Overall, “Tired Of This” is a powerful expression of Ryze Tha Kidd’s  emotional state, capturing the weight of his struggles and his yearning for change. The song resonates with anyone who has felt the heavy burden of life’s   challenges and the desire to break free from a cycle of dissatisfaction and despair.</p>"
    },



    /// Singles
    {
        id: "sunshine",
        type: "single",
        title: "Sunshine",
        artist: "Ryze Tha Kidd",
        releaseDate: "2025-05-14",
        displayDate: "14th May 2025",
        image: "Images/Discography/sunshine.jpg",
        description: "Sunshine is an uplifting anthem by Ryze Tha Kidd, capturing warmth, love, and resilience through melodic verses and a catchy chorus, highlighting the healing power of love.",
        listenLink: "https://distrokid.com/hyperfollow/ryzethakidd1/sunshine-3",
        pageLink: "Discography/Singles/sunshine.html",
        genre: "Trap",
        duration: "2:49",
        writer: "Ryan Duncuft",
        producer: "T1mmo",
        lyrics: `<p class="lyrics">I'm in the sunshine<br>I'm in the sunshine<br>And everything feels right<br>Everything feels right<br><br>Everything feels right in the sunshine<br>From the touch of your skin to the sun in the sky<br>I'll never be alone in the sunshine<br>Forever chasing my high but I can't find mine<br>I'll keep forever fighting, one day I'll be fine<br><br>You see the scars but you love me the same<br>And in your eyes, I found a spark, a flame<br>We've been through the highs<br>Survived the lows<br>Together we'll rise<br>No matter where it goes<br><br>Everything feels right in the sunshine<br>From the touch of your skin to the sun in the sky<br>I'll never be alone in the sunshine<br>Forever chasing my high but I can't find mine<br>I'll keep forever fighting, one day I'll be fine<br><br>Everything feels right in the sunshine<br>From the touch of your skin to the sun in the sky<br>I'll never be alone in the sunshine<br>Forever chasing my high but I can't find mine<br>I'll keep forever fighting, one day I'll be fine</p>`,
        descriptionHtml: `<p>“Sunshine” by Ryze Tha Kidd is an uplifting anthem that captures the feeling of warmth, love, and resilience. With smooth, melodic verses and a catchy chorus, Ryze takes listeners on a journey through the highs and lows of life. The song shines a light on the healing power of love and the strength it brings to overcome personal battles. Through poetic lyrics, Ryze expresses a deep connection to someone who has been there through it all, offering solace in the metaphorical sunshine. “Sunshine” is a feel-good track that resonates with anyone chasing their own light, knowing that brighter days are always ahead.</p>`
    },
    {
        id: "lost-in-my-mind",
        type: "single",
        title: "Lost In My Mind",
        artist: "Ryze Tha Kidd",
        releaseDate: "2025-04-25",
        displayDate: "25th April 2025",
        image: "Images/Discography/lost-in-my-mind.jpg",
        description: "Lost In My Mind is a slow, melancholic track blending alt-rock with emotional rap, exploring isolation and inner turmoil.",
        listenLink: "https://distrokid.com/hyperfollow/ryzethakidd1/lost-in-my-mind",
        pageLink: "Discography/Singles/lost-in-my-mind.html",
        genre: "Trap",
        duration: "1:44",
        writer: "Ryan Duncuft",
        producer: "Xtacy Beatz",
        lyrics: `<p class="lyrics">Baby I<br>I'm feeling lost in my mind<br>Heart wide open<br>But love is so hard to find<br><br>Thoughts racing<br>But my soul<br>Is so confined<br><br>(ooh)<br>(ooh)<br><br>But my soul</p>`,
        descriptionHtml: `<p>“Lost In My Mind” is a slow, melancholic track that blends elements of alternative rock with emotional rap influences, similar to artists like XXXTENTACION and Juice WRLD. The song explores feelings of emotional isolation and inner turmoil, carried by a raw, stripped-back sound.<br><br>Lyrically, it’s simple but intentional—lines like “Heart wide open / But love is so hard to find” paint a picture of vulnerability and searching for connection. The repetitive, almost haunting use of “ooh” vocals adds to the lonely atmosphere, giving the song room to breathe between the verses.<br><br>It’s not about flashy production or overcomplicated lyricism—it’s more about capturing a moment of being lost in thought, lost in emotion. Definitely one for those late-night listens when you’re sitting with your own thoughts.</p>`
    },
    {
        id: "far-away",
        type: "single",
        title: "Far Away",
        artist: "Ryze Tha Kidd",
        releaseDate: "2025-01-17",
        displayDate: "17th January 2025",
        image: "Images/Discography/far-away.jpg",
        description: "Far Away is a heartfelt R&B love song that promises unwavering devotion, expressing a deep bond that transcends distance and time. With its slow, soulful melody, the track captures the essence of love and loyalty.",
        listenLink: "https://distrokid.com/hyperfollow/ryzethakidd1/far-away-alternative-versions",
        pageLink: "Discography/Singles/far-away.html",
        genre: "Rnb",
        duration: "1:57",
        writer: "Ryan Duncuft",
        producer: "Numb",
        lyrics: "<p class=\"lyrics\">Baby we'll never<br>We'll never be so far away<br>I'll be by your side<br>Until the day that I die<br>(Baby we'll never)</p>",
        descriptionHtml: "<p>​“Far Away” is a soulful and heartfelt R&B love song that expresses deep emotions of commitment and closeness. The lyrics convey a sense of unwavering devotion, promising that no matter the distance or time, the bond between Ryze Tha Kidd and his girlfriend will remain strong. With its slow tempo and smooth, mellow vibes, the song captures the essence of love, loyalty, and the comfort of knowing someone will always be there. Its intimate and tender tone makes it a beautiful track for those who cherish lasting connections.</p>"
    },
    {
        id: "heart-on-my-sleeve",
        type: "single",
        title: "Heart On My Sleeve",
        artist: "Ryze Tha Kidd feat. Josh Boone",
        releaseDate: "2024-11-15",
        displayDate: "15th November 2024",
        image: "Images/Discography/heart-on-my-sleeve.jpg",
        description: "Heart On My Sleeve by Ryze Tha Kidd featuring Josh Boone is an emotionally charged track about the pain and uncertainty of moving on from a past love.",
        listenLink: "https://distrokid.com/hyperfollow/ryzethakidd1/heart-on-my-sleeve-feat-josh-boone",
        pageLink: "Discography/Singles/heart-on-my-sleeve.html",
        genre: "Trap",
        duration: "3:10",
        writer: "Ryan Duncuft, Josh Boone",
        producer: "Elz, Eskimos",
        lyrics: `<p class="lyrics">Baby I don't know<br>Never thought forgetting you would be so slow<br>Fighting through the dark, but I'm so lost<br>Thought I'd find peace<br>But I'm so lost inside<br>You turn my head into a pit of lies<br><br>Chasing all the highs, but the lows always wait<br>Girl I thought our love, was so great<br>I don't know, I don't know where to go<br>Hearts feeling heavy, it's worn and it's called<br><br>Baby I don't know<br>Never thought forgetting you would be so slow<br>Fighting through the dark, but I'm so lost<br>Thought I'd find peace<br>But I'm so lost inside<br>You turn my head into a pit of lies<br><br>It's just me and my by Ryze Tha Kidd<br>As we are walking in<br>As I don't know where to go<br>I don't know where to show<br>Shout out to the boy Ryze Tha Kidd<br>As we are walking in<br>I don't know<br><br>Know, know, where to go<br>I don't know, oh, where to go<br>Where to show<br>here to show to you, oh<br><br>Baby I don't know<br>ever thought forgetting you would be so slow<br>Fighting through the dark, but I'm so lost<br>Thought I'd find peace<br>But I'm so lost inside<br>You turn my head into a pit of lies</p>`,
        descriptionHtml: `<p>“Heart On My Sleeve” by Ryze Tha Kidd, featuring Josh Boone, is an emotionally charged track that speaks to the pain and uncertainty of trying to move on from a past love. The song delves into the confusion and disorientation of not knowing where to go after everything falls apart. Ryze Tha Kidd’s raw lyrics capture the struggle of feeling lost in a world full of memories, while Josh Boone’s verse adds another layer of vulnerability, with both artists expressing the weight of their emotions. The section with Boone brings a sense of unity in the chaos, as both voices echo the sentiment of not knowing the way forward, yet still holding on to the hope of finding clarity. The track captures the feeling of being stuck in between moving on and holding on, making it a powerful anthem for anyone who’s ever felt lost in the aftermath of love.</p>`
    },
    {
        id: "save-her",
        type: "single",
        title: "Save Her",
        artist: "Ryze Tha Kidd",
        releaseDate: "2024-11-05",
        displayDate: "5th November 2024",
        image: "Images/Discography/save-her.jpg",
        description: "Save Her is a song about trying to save a girl from a dark abyss of depression and heartbreak, conveying deep love and a promise to fight her demons.",
        listenLink: "https://distrokid.com/hyperfollow/ryzethakidd1/save-her-2",
        pageLink: "Discography/Singles/save-her.html",
        genre: "Trap",
        duration: "3:30",
        writer: "Ryan Duncuft",
        producer: "Eskimos",
        lyrics: `<p class="lyrics">Could I ever save her<br>You turn everything to a blur<br>Lost in your eyes where my demons hide<br>I'll be the one, to fight right by your side<br><br>Together we'll rise leave the past behind<br>There's no doubt about it you're the only one on my mind<br>Promise me one thing, no more lonely nights<br>Baby I could fall in love with you twice (twice)<br><br>Could I ever save her<br>You turn everything to a blur<br>Lost in your eyes where my demons hide<br>I'll be the one, to fight right by your side<br><br>Got these feelings<br>That I can't ignore<br>But I'll fight your demons<br>Won't let them hurt you no more<br><br>Could I ever save her<br>You turn everything to a blur<br>Lost in your eyes where my demons hide<br>I'll be the one, to fight right by your side</p>`,
        descriptionHtml: `<p>"Save Her" is a song based around trying to save a girl from plunging into a dark abyss whilst fighting demons and heartbreak. It's a song about me finding her in a pit of depression and trying to convey my love to her.</p>`
    },
    {
        id: "so-numb",
        type: "single",
        title: "So Numb",
        artist: "Ryze Tha Kidd",
        releaseDate: "2024-10-12",
        displayDate: "12th October 2024",
        image: "Images/Discography/so-numb.jpg",
        description: "So Numb describes the pain of facing demons in a toxic relationship and feeling too numb to fight back, leading to silent torment.",
        listenLink: "https://distrokid.com/hyperfollow/ryzethakidd1/so-numb-2",
        pageLink: "Discography/Singles/so-numb.html",
        genre: "Trap",
        duration: "2:59",
        writer: "Ryan Duncuft",
        producer: "numb",
        lyrics: `<p class="lyrics">I'm so numb<br>Thought you would've realised<br>But you resorted to your lies<br>Said I'm so numb<br>Search for the truth in your eyes<br>Our love shines through the painted skies<br><br>My head is so quiet<br>I love you I don't deny it<br>I promise that I'd stand by her<br>In my imagination, uh<br>Trynna numb the pain but it never ends<br>Memories keep crawling back again<br><br>I'm so numb<br>Thought you would've realised<br>But you resorted to your lies<br>Said I'm so numb<br>Search for the truth in your eyes<br>Our love shines through the painted skies</p>`,
        descriptionHtml: `<p>"So Numb" is a single that I recorded in June of 2024, describing the pain of having to face demons in a toxic relationship and feeling so numb that you can't physically fight back, so you just sit in silence and deal with the torment.</p>`
    },
    {
        id: "like-that",
        type: "single",
        title: "Like That",
        artist: "Ryze Tha Kidd",
        releaseDate: "2024-07-27",
        displayDate: "27th July 2024",
        image: "Images/Discography/like-that.jpg",
        description: "Like That is a high-energy, unapologetic anthem by Ryze Tha Kidd, showcasing his carefree and rebellious lifestyle with braggadocious lyrics and a hard-hitting beat.",
        listenLink: "https://distrokid.com/hyperfollow/ryzethakidd1/like-that-2",
        pageLink: "Discography/Singles/like-that.html",
        genre: "Boom Bap",
        duration: "1:26",
        writer: "Ryan Duncuft",
        producer: "Zee Killah",
        lyrics: `<p class="lyrics">I'm so numb<br>Thought you would've realised<br>But you resorted to your lies<br>Said I'm so numb<br>Search for the truth in your eyes<br>Our love shines through the painted skies<br><br>My head is so quiet<br>I love you I don't deny it<br>I promise that I'd stand by her<br>In my imagination, uh<br>Trynna numb the pain but it never ends<br>Memories keep crawling back again<br><br>I'm so numb<br>Thought you would've realised<br>But you resorted to your lies<br>Said I'm so numb<br>Search for the truth in your eyes<br>Our love shines through the painted skies</p>`,
        descriptionHtml: `<p>“Like That” by Ryze Tha Kidd is a high-energy, unapologetic anthem that dives into the rapper’s carefree and rebellious lifestyle. With braggadocious lyrics and a catchy, hard-hitting beat, Ryze Tha Kidd flexes his bold confidence and unapologetic swagger. The song captures the spirit of living life on your own terms, taking what you want, and never looking back.<br><br>Ryze paints a vivid picture of a player lifestyle, filled with wild nights and unforgettable experiences. With lyrics that boast about taking someone else’s girl and treating life like a circus, “Like That” showcases his humorous yet daring personality. The verses flow effortlessly, switching up the rhythm and vibe while maintaining a consistent, hard-hitting energy throughout. The chorus is infectious, making it clear that Ryze Tha Kidd isn’t one to hold back—whether he’s talking about his dominance in the game or his prowess with women.<br><br>Overall, “Like That” is a bold declaration of independence and dominance, a track that’s sure to get listeners hyped up and ready to take on the world with the same fearless attitude Ryze embodies.</p>`
    },
    {
        id: "16-missed-calls",
        type: "single",
        title: "16 Missed Calls",
        artist: "Ryze Tha Kidd",
        releaseDate: "2024-03-24",
        displayDate: "24th March 2024",
        image: "Images/Discography/16-missed-calls.png",
        description: "16 Missed Calls by Ryze Tha Kidd delves into unrequited love and emotional turmoil, highlighting frustration and longing for connection.",
        listenLink: "https://distrokid.com/hyperfollow/ryzethakidd1/16-missed-calls-2",
        pageLink: "Discography/Singles/16-missed-calls.html",
        genre: "Trap",
        duration: "1:40",
        writer: "Ryan Duncuft",
        producer: "Stanic",
        lyrics: `<p class="lyrics">​Why you ignoring all my calls<br>​Why you ignoring all my calls<br>16 missed calls<br>16 missed calls<br>Yeah 16 missed calls<br><br>16 missed calls<br>I just want to say that I loved you and all<br>Your face plastered all over the walls<br>My blood plastered all over the halls<br><br>I want to hold you<br>And control you</p>`,
        descriptionHtml: `<p>​"16 Missed Calls" by Ryze Tha Kidd is a compelling track that delves into themes of unrequited love and emotional turmoil. The repetitive chorus, "Why you ignoring all my calls, 16 missed calls," underscores Ryze's frustration and longing for connection. The lyrics vividly depict the intensity of these feelings, with imagery of love and despair intertwined: "I just want to say that I loved you and all, Your face plastered all over the walls, My blood plastered all over the halls." The song conveys a deep desire to both embrace and possess, encapsulated in the lines, "I want to hold you, And control you." This track captures the raw emotion of heartache and the complexities of passionate love.</p>`
    },
    {
        id: "collide",
        type: "single",
        title: "Collide",
        artist: "Ryze Tha Kidd",
        releaseDate: "2024-03-16",
        displayDate: "6th March 2024",
        image: "Images/Discography/collide.jpg",
        description: "Collide by Ryze Tha Kidd is a heartfelt and passionate song about the power of love and the strength it brings to a relationship. The lyrics speak of the    challenges faced together, the fiery passion shared, and the unbreakable bond that keeps them united. The song conveys a sense of resilience, determination, and unwavering commitment to each other, despite the obstacles they may face. With its catchy melody and emotional lyrics, Collide is a beautiful ode to the enduring power of love.",
        listenLink: "https://distrokid.com/hyperfollow/ryzethakidd1/collide-3",
        pageLink: "Discography/Singles/collide.html",
        genre: "Rock",
        duration: "2.41",
        writer: "Ryan Duncuft",
        producer: "taymxru",
        lyrics: "Baby you just don’t understand<br>Don’t you know you take me to wonderland<br>Baby girl I’ll show you my love first hand<br>All these demon attacks that well withstand<br><br>In the darkness of light we collide<br>With the flames of desire we’re burning bright<br>In this world of chaos your my only truth<br>Together we stand invisible in our youth<br>We ride the edge on a rollercoaster high<br>Through highs and lows we’ll never say goodbye<br>Defying all odds with love as our prize<br><br>Loves like a hurricane tearing through our vines<br>Together we will conquer loves power will survive<br>Our souls unite<br>It feels so right<br><br>In the darkness of light we collide<br>With the flames of desire we’re burning bright<br>In this world of chaos your my only truth<br>Together we stand invisible in our youth<br>We ride the edge on a rollercoaster high<br>Through highs and lows we’ll never say goodbye<br>Defying all    odds with love as our prize",
        descriptionHtml: "<p>Collide by Ryze Tha Kidd is a heartfelt and passionate song about the power of love and the strength it brings to a relationship. The lyrics speak of the    challenges faced together, the fiery passion shared, and the unbreakable bond that keeps them united. The song conveys a sense of resilience, determination, and unwavering commitment to each other, despite the obstacles they may face. With its catchy melody and emotional lyrics, Collide is a beautiful ode to the enduring power of love.</p>"
    },
    {
        id: "true-romance",
        type: "collab",
        title: "True Romance",
        artist: "LostGem and Ryze Tha Kidd",
        releaseDate: "2025-02-14",
        displayDate: "14th February 2025",
        image: "Images/Discography/true-romance.jpg",
        description: "Dive deep into the bittersweet emotions of love and healing with “True Romance,” the latest single from LostGem’s upcoming collaborative album with Ryze Tha Kidd, set for release in Summer 2025. This track weaves heartfelt verses from both artists, exploring the struggles of letting go of past pain while finding comfort in a new connection. With its soulful lyrics and captivating melody, “True Romance” captures the tender balance between needing a friend and the unexpected spark of genuine love. Prepare to be moved by this introspective journey of rediscovery and emotional growth.",
        listenLink: "https://distrokid.com/hyperfollow/lostgem/true-romance-feat-ryze-tha-kidd",
        pageLink: "Discography/Collabs/true-romance.html",
        genre: "Trap",
        duration: "2.49",
        writer: "Ryan Duncuft",
        producer: "Ryze Tha Kidd",
        lyrics: "<p class=\"lyrics\">(Verse - Ryze Tha Kidd)<br>We wonder where we went wrong<br>What words left unsaid, what secrets lay<br>Your pictures in my head, I know it's been so long<br>As the day goes by, the pain starts to fade<br><br>(Hook - LostGem)<br>Honestly I just need a friend<br>I won't pretend, I don't want to fall in love again<br>But he's holding my hand<br>And it feels like true romance<br><br>(Verse - LostGem)<br>I been hurt to many times<br>Swore to many lies would kill me<br>But I met a nice guy<br>He held my hand and it healed me<br>It healed me<br><br>(Hook - LostGem)<br>Honestly I just need a friend<br>I won't pretend, I don't want to fall in love again<br>But he's holding my hand<br>And it feels like true romance<br>Honestly I just need a friend<br>I won't pretend, I don't want to fall in love again<br>But he's holding my hand<br>And it feels like true romance</p>",
        descriptionHtml: "<p>Dive deep into the bittersweet emotions of love and healing with “True Romance,” the latest single from LostGem’s upcoming collaborative album with Ryze Tha Kidd, set for release in Summer 2025. This track weaves heartfelt verses from both artists, exploring the struggles of letting go of past pain while finding comfort in a new connection. With its soulful lyrics and captivating melody, “True Romance” captures the tender balance between needing a friend and the unexpected spark of genuine love. Prepare to be moved by this introspective journey of rediscovery and emotional growth.</p>"
    },
    {
        id: "perfect",
        type: "collab",
        title: "Perfect",
        artist: "LostGem and Ryze Tha Kidd",
        releaseDate: "2024-09-27",
        displayDate: "27th September 2024",
        image: "Images/Discography/perfect.jpg",
        description: "Unveiling raw emotion and vulnerability, “Perfect” is the debut single from my upcoming album “What Is Love?” slated for a summer 2025 release. Featuring Ryze Tha Kidd, this track dives deep into the complexities of self-worth and love, blending heartfelt lyrics with a catchy beat that stays with you long after the music stops. With its powerful message of striving for worth in the face of imperfection, “Perfect” sets the tone for an album that promises to explore the many shades of love and longing. Get ready for a sonic journey that’s as introspective as it is unforgettable.",
        listenLink: "https://distrokid.com/hyperfollow/lostgem/perfect-feat-ryze-tha-kidd",
        pageLink: "Discography/Collabs/Perfect.html",
        genre: "Trap",
        duration: "3.05",
        writer: "Ryan Duncuft, Sophie Christoforou",
        producer: "Ryze Tha Kidd",
        lyrics: "<p class=\"lyrics\">(I know I'm not perfect)<br>(I'm trynna be worth it)<br><br>(Hook - LostGem) I know I'm not perfect<br>I'm trynna be worth it<br>I'm trynna give everything, I have left<br>I know I'm not perfect<br>But I'm trynna be worth it<br>I'm trynna give everything<br>Because I'm used to nothing<br><br>(Verse - LostGem) Since day one, I had you in my heart<br>I was trying to do everything for us, I was never enough<br>Now I gotta do it for myself too<br>Even if that means I can't have you<br><br>(Hook - LostGem)<br>I know I'm not perfect<br>I'm trynna be worth it<br>I'm trynna give everything, I have left<br>I know I'm not perfect<br>But I'm trynna be worth it<br>I'm trynna give everything<br>Because I'm used to nothing<br><br>(Verse - Ryze Tha Kidd) I tried to move on, but you're all I see<br>Every corner I turn, you're haunting me<br>I told you I'm not perfect<br>Girl I wanna reconnect<br>Got me reminiscing, I'm trynna reflect<br><br>(Hook - LostGem) I know I'm not perfect (Know I'm not perfect)<br>I'm trynna be worth it<br>I'm trynna give everything, I have left (That I have left)<br>I know I'm not perfect<br>But I'm trynna be worth it<br>I'm trynna give everything<br>Because I'm used to nothing (To nothing)<br></p>",
        descriptionHtml: "<p>Unveiling raw emotion and vulnerability, “Perfect” is the debut single from my upcoming album “What Is Love?” slated for a summer 2025 release. Featuring Ryze Tha Kidd, this track dives deep into the complexities of self-worth and love, blending heartfelt lyrics with a catchy beat that stays with you long after the music stops. With its powerful message of striving for worth in the face of imperfection, “Perfect” sets the tone for an album that promises to explore the many shades of love and longing. Get ready for a sonic journey that’s as introspective as it is unforgettable.</p>"
    }
];