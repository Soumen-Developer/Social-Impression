export type PortfolioArtist = {
  slug: string;
  name: string;
  moniker: string;
  genre: string;
  city: string;
  bio: string;
  image: string;
  cover: string;
  monthlyListeners: string;
  songs: { title: string; plays: string; duration: string; unreleased?: boolean }[];
  videos: { title: string; kind: string; image: string }[];
  socials: { label: string; handle: string }[];
};

export const artists: PortfolioArtist[] = [
  {
    slug: "mira-vo",
    name: "Mira Vohra",
    moniker: "MIRA VO",
    genre: "Alt-Pop",
    city: "Pune",
    bio: "MIRA VO writes alt-pop for the hour between midnight and the last train home. Built inside the Social Impression ecosystem, her debut 'Midnight Petals' turned a bedroom demo into 2.1M streams and a live show that sells out in hours.",
    image: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=1600&auto=format&fit=crop",
    cover: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?q=80&w=1600&auto=format&fit=crop",
    monthlyListeners: "148,204",
    songs: [
      { title: "Midnight Petals", plays: "2.1M", duration: "3:42" },
      { title: "Glass Hours", plays: "486K", duration: "4:05" },
      { title: "Sirens (feat. ASEN)", plays: "312K", duration: "3:18" },
      { title: "Neon Monsoon", plays: "—", duration: "3:55", unreleased: true },
    ],
    videos: [
      { title: "Midnight Petals — Live Session", kind: "Live session", image: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?q=80&w=1600&auto=format&fit=crop" },
      { title: "Glass Hours — Official Visualiser", kind: "Visualiser", image: "https://images.unsplash.com/photo-1458560871784-56d23406c091?q=80&w=1600&auto=format&fit=crop" },
    ],
    socials: [
      { label: "Instagram", handle: "@miravoo" },
      { label: "Spotify", handle: "MIRA VO" },
      { label: "YouTube", handle: "@miravomusic" },
    ],
  },
  {
    slug: "asen",
    name: "Aarav Sen",
    moniker: "ASEN",
    genre: "Hip-Hop",
    city: "Delhi",
    bio: "ASEN raps like the city talks — fast, funny, and quietly heartbroken. Two Momentum singles later, his pen is on editorial playlists and his shows moved from open mics to sold-out basements.",
    image: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?q=80&w=1600&auto=format&fit=crop",
    cover: "https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?q=80&w=1600&auto=format&fit=crop",
    monthlyListeners: "96,441",
    songs: [
      { title: "Static/Signal", plays: "1.4M", duration: "2:58" },
      { title: "Dilli Haat", plays: "733K", duration: "3:21" },
      { title: "Cold Call", plays: "402K", duration: "2:44" },
      { title: "Blue Tick", plays: "—", duration: "3:02", unreleased: true },
    ],
    videos: [
      { title: "Static/Signal — Official Video", kind: "Music video", image: "https://images.unsplash.com/photo-1461784121038-f088ca1e7714?q=80&w=1600&auto=format&fit=crop" },
    ],
    socials: [
      { label: "Instagram", handle: "@asen.exe" },
      { label: "Spotify", handle: "ASEN" },
      { label: "YouTube", handle: "@asenmusic" },
    ],
  },
  {
    slug: "tanvy",
    name: "Tanya Iype",
    moniker: "TANVY",
    genre: "Electronic",
    city: "Bengaluru",
    bio: "TANVY builds electronic music out of field recordings, broken synths and 4AM city hum. Her North Star EP turned a SoundCloud habit into festival support slots across South India.",
    image: "https://images.unsplash.com/photo-1458560871784-56d23406c091?q=80&w=1600&auto=format&fit=crop",
    cover: "https://images.unsplash.com/photo-1461784121038-f088ca1e7714?q=80&w=1600&auto=format&fit=crop",
    monthlyListeners: "71,880",
    songs: [
      { title: "Monsoon Circuit", plays: "890K", duration: "4:44" },
      { title: "Ultraviolet Birds", plays: "511K", duration: "5:02" },
      { title: "Home Frequency", plays: "298K", duration: "4:12" },
    ],
    videos: [
      { title: "Monsoon Circuit — Live at Fete", kind: "Live session", image: "https://images.unsplash.com/photo-1501612780327-45045538702b?q=80&w=1600&auto=format&fit=crop" },
    ],
    socials: [
      { label: "Instagram", handle: "@tanvy.wav" },
      { label: "Spotify", handle: "TANVY" },
    ],
  },
];
