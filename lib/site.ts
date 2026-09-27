export const inr = (n: number) => `₹${n.toLocaleString("en-IN")}`;

export const IMG = {
  heroDeck: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=1600&auto=format&fit=crop",
  crowd: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?q=80&w=1600&auto=format&fit=crop",
  stage: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?q=80&w=1600&auto=format&fit=crop",
  mic: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=1600&auto=format&fit=crop",
  mic2: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=1600&auto=format&fit=crop",
  gear: "https://images.unsplash.com/photo-1487180144351-b8472da7d491?q=80&w=1600&auto=format&fit=crop",
  lights: "https://images.unsplash.com/photo-1458560871784-56d23406c091?q=80&w=1600&auto=format&fit=crop",
  keys: "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?q=80&w=1600&auto=format&fit=crop",
  piano: "https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?q=80&w=1600&auto=format&fit=crop",
  djRed: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?q=80&w=1600&auto=format&fit=crop",
  confetti: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=1600&auto=format&fit=crop",
  silhouette: "https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?q=80&w=1600&auto=format&fit=crop",
  dj: "https://images.unsplash.com/photo-1461784121038-f088ca1e7714?q=80&w=1600&auto=format&fit=crop",
  crowdLights: "https://images.unsplash.com/photo-1501612780327-45045538702b?q=80&w=1600&auto=format&fit=crop",
};

/* ---------------------------------- packages --------------------------------- */

export type PkgId = "strike" | "momentum" | "northstar";

export type Pkg = {
  id: PkgId;
  index: string;
  name: string;
  tagline: string;
  for: string;
  duration: string;
  price: number;
  launchPrice: number;
  instalments: { count: number; amount: number };
  accent: "bone" | "iris" | "signal";
  image: string;
  outcome: string;
  includes: {
    production: string[];
    marketing: string[];
    distribution: string[];
    freebies: string[];
  };
};

export const packages: Pkg[] = [
  {
    id: "strike",
    index: "01",
    name: "Strike",
    tagline: "Your first professional release, done right.",
    for: "Artists sitting on one finished song and zero infrastructure.",
    duration: "4–5 weeks",
    price: 34999,
    launchPrice: 27999,
    instalments: { count: 2, amount: 14499 },
    accent: "bone",
    image: IMG.mic2,
    outcome:
      "A single that sounds like you meant it — live on 180+ platforms, with thirty days of push behind it and artist profiles that actually belong to you.",
    includes: {
      production: [
        "1 original single, fully produced",
        "Song grooming & pre-production (arrangement, structure, references)",
        "1 custom production direction with a matched producer",
        "1 guided vocal recording session (studio + engineer)",
        "Mix & master with 2 revision rounds",
        "Radio-ready masters (WAV + MP3 + instrumental)",
      ],
      marketing: [
        "30-day release rollout plan",
        "3 promo assets (audiograms & reel cutdowns)",
        "1 custom cover art direction",
        "Caption & content calendar starter kit",
        "Pitch to Social Impression channels & playlists",
      ],
      distribution: [
        "Release to 180+ platforms — Spotify, Apple Music, YouTube Music, Amazon, JioSaavn & more",
        "Release date planning & metadata handling",
        "Spotify for Artists & Apple Music for Artists setup",
        "YouTube Content ID claiming",
      ],
      freebies: [
        "Release-day checklist (the one we actually use)",
        "Lyric-video template pack",
        "1 artist portrait retouch",
      ],
    },
  },
  {
    id: "momentum",
    index: "02",
    name: "Momentum",
    tagline: "For artists ready to show up again. And again.",
    for: "Artists with one release behind them who want consistency, visibility and a real growth curve.",
    duration: "8–10 weeks",
    price: 64999,
    launchPrice: 52999,
    instalments: { count: 3, amount: 18499 },
    accent: "iris",
    image: IMG.dj,
    outcome:
      "Two releases, sixty days of compounding push, and an audience that starts recognising your name before the second drop.",
    includes: {
      production: [
        "2 original singles, fully produced",
        "Song grooming & pre-production for both",
        "2 custom production directions",
        "2 guided vocal recording sessions",
        "Mix & master with 3 revision rounds",
        "Your personal vocal-chain preset card",
      ],
      marketing: [
        "60-day rollout per release",
        "6 promo assets — reels, audiograms, 1 visualiser",
        "Playlist pitching — editorial + independent lists",
        "2 platform ad campaign builds (Meta & YouTube, ad spend excluded)",
        "Artist brand mini-guide (palette, type, tone)",
        "Monthly performance report with next-move notes",
      ],
      distribution: [
        "Everything in Strike",
        "Pre-save campaigns for both releases",
        "Release Radar & algorithm optimisation",
        "Full distribution for both singles",
      ],
      freebies: [
        "Everything in Strike freebies",
        "1 extra revision round, on us",
        "Priority studio slot booking",
      ],
    },
  },
  {
    id: "northstar",
    index: "03",
    name: "North Star",
    tagline: "The full artist journey. Bigger stages, sharper identity.",
    for: "Artists aiming at festivals, press and a sound-and-visual identity that holds up at scale.",
    duration: "14–16 weeks",
    price: 129999,
    launchPrice: 104999,
    instalments: { count: 4, amount: 26999 },
    accent: "signal",
    image: IMG.stage,
    outcome:
      "A body of work, a visual identity, and a ninety-day campaign that introduces you like a headliner — because that is where you are headed.",
    includes: {
      production: [
        "EP of up to 4 tracks, fully produced",
        "A&R + creative direction — a sonic identity workshop before anything is recorded",
        "Custom production per track with matched producers",
        "3 guided vocal recording sessions",
        "Mix & master with 4 revision rounds",
        "1 feature artist sourcing & coordination",
      ],
      marketing: [
        "90-day campaign with a dedicated release manager",
        "10+ content assets across the campaign",
        "1 cinematic live-session video (1-day shoot, 4K)",
        "PR & editorial pitching to blogs, radio and press",
        "Playlist + radio pitching, priority handling",
        "2 managed ad campaigns (strategy, creatives, optimisation)",
        "Release-week command center — daily monitoring & rapid moves",
        "Quarterly performance reviews",
      ],
      distribution: [
        "Everything in Momentum",
        "Priority release slots & guaranteed release date",
        "Pre-save + countdown assets",
        "Sync-ready instrumentals & stems archive",
      ],
      freebies: [
        "Everything in Momentum freebies",
        "Press kit (bio, one-pager, photo set)",
        "1 free add-on of your choice under ₹14,999",
      ],
    },
  },
];

export const addons = [
  { name: "Music video", price: "from ₹44,999", note: "Concept, shoot and edit. Performance or narrative, 1–2 day shoot." },
  { name: "Lyric video", price: "₹12,999", note: "Motion-typography lyric video, art-directed to your cover." },
  { name: "Live session video", price: "₹19,999", note: "Multi-cam live performance session in a curated space." },
  { name: "Extra revision round", price: "₹3,499", note: "One more pass on a mix, master or design deliverable." },
  { name: "Ad management", price: "₹8,999 / month", note: "We run your Meta & YouTube campaigns. Ad spend billed at cost." },
  { name: "Rush delivery", price: "15% of package", note: "Cut two weeks off the timeline when the moment can't wait." },
];

export const comparison: { label: string; strike: string; momentum: string; northstar: string }[] = [
  { label: "Tracks produced", strike: "1 single", momentum: "2 singles", northstar: "EP · up to 4 tracks" },
  { label: "Production directions", strike: "1", momentum: "2", northstar: "Per track + identity workshop" },
  { label: "Vocal recording sessions", strike: "1", momentum: "2", northstar: "3" },
  { label: "Mix / master revisions", strike: "2 rounds", momentum: "3 rounds", northstar: "4 rounds" },
  { label: "Marketing rollout", strike: "30 days", momentum: "60 days × 2", northstar: "90-day campaign" },
  { label: "Promo assets", strike: "3", momentum: "6", northstar: "10+ & live-session video" },
  { label: "Playlist pitching", strike: "—", momentum: "Editorial + independent", northstar: "Priority + radio" },
  { label: "Ad campaigns", strike: "—", momentum: "2 builds", northstar: "2 fully managed" },
  { label: "Release manager", strike: "Shared", momentum: "Shared", northstar: "Dedicated" },
  { label: "Performance reporting", strike: "End of rollout", momentum: "Monthly", northstar: "Weekly + quarterly review" },
  { label: "Launch pricing", strike: "₹27,999", momentum: "₹52,999", northstar: "₹1,04,999" },
];

/* ---------------------------------- journey ---------------------------------- */

export const journey = [
  { n: "01", title: "Join the waitlist", time: "2 minutes", desc: "Tell us who you are, what you make, and where you want to go. Links matter more than follower counts." },
  { n: "02", title: "Discovery call & selection", time: "30 minutes", desc: "A real conversation about your music and goals. We take a limited number of artists per cohort — fit goes both ways." },
  { n: "03", title: "Onboarding & planning", time: "Week 1", desc: "You get your dashboard, your team, and a release map with dates you can circle." },
  { n: "04", title: "Pre-production & song grooming", time: "Weeks 1–2", desc: "We pressure-test the song: arrangement, structure, key, tempo, references. The song gets sharper before it gets louder." },
  { n: "05", title: "Music production", time: "Weeks 2–4", desc: "Your producer builds the record. You hear versions, you give notes, nothing ships until it moves you." },
  { n: "06", title: "Vocal recording", time: "Week 4", desc: "A guided session with an engineer who knows the song. Warm-up, takes, comps — done in a day." },
  { n: "07", title: "Mix, master & marketing plan", time: "Week 5", desc: "The record gets its final polish while your rollout plan, assets and release date lock in." },
  { n: "08", title: "Music release", time: "Release day", desc: "Worldwide, on time, everywhere. Pre-saves convert, playlists respond, and release week has a command center." },
  { n: "09", title: "Performance reports", time: "Day 7 / 30 / 90", desc: "Streams, saves, playlist adds, audience data — translated into what to do next, not just numbers." },
];

/* ------------------------------------ faqs ----------------------------------- */

export const faqs = [
  {
    q: "Do I keep ownership of my music?",
    a: "Yes. Always. Your masters, your publishing, your name on the statement. We are an ecosystem, not a label — no splits, no lock-ins, no surprise rights grabs.",
  },
  {
    q: "What genres do you work with?",
    a: "All of them. Producers are matched to your sound, not the other way around. Hip-hop, alt-pop, indie, electronic, folk, R&B, rock, experimental — if the song is honest, we have a home for it.",
  },
  {
    q: "I'm not in your city. Can I still join?",
    a: "Yes. The ecosystem is remote-first — your dashboard, sessions and reviews all run online. We also have partner studios in Mumbai, Bengaluru, Delhi and Pune for recording days.",
  },
  {
    q: "Why is there an application and waitlist?",
    a: "Because we take a limited number of artists per cohort and we would rather tell you honestly that we can move you than take everyone's money and move no one. Selection is about fit and timing, not clout.",
  },
  {
    q: "Do you guarantee streams?",
    a: "No — and anyone who guarantees streams is lying to you or buying bots. We guarantee the process: a release that sounds world-class, a real marketing plan, and transparent reporting you can verify in your own artist dashboard.",
  },
  {
    q: "How much time do I need to commit?",
    a: "Around 3–5 hours a week during production weeks: feedback sessions, one recording day, and approvals. Your dashboard keeps every input and deadline in one place, so nothing lives in your DMs.",
  },
  {
    q: "Can I release in my own language?",
    a: "Absolutely. Some of our best-performing releases are in Hindi, Tamil, Telugu, Punjabi, Bengali and Marathi. Music travels; we handle the map.",
  },
  {
    q: "What if I'm not selected?",
    a: "You get honest feedback and a clear reason. Many artists reapply after one more release and get in. Either way, you keep access to our free guides and the community waitlist.",
  },
];

export const packageFaqs = [
  {
    q: "Can I upgrade mid-journey?",
    a: "Yes. If you are inside an active project, upgrading from Strike to Momentum (or Momentum to North Star) simply adds scope — you only pay the difference, and your timeline is re-planned around it.",
  },
  {
    q: "How do instalments work?",
    a: "Packages can be split into 2–4 instalments. Work on your project begins after the first instalment, and each following instalment is billed to your dashboard on a fixed date. No hidden interest, no credit checks.",
  },
  {
    q: "What exactly is launch pricing?",
    a: "For our first cohorts we are pricing all three packages below their standard rate while we build our public roster. Launch pricing is limited to the first 100 artists and moves to standard pricing after that.",
  },
  {
    q: "What happens if my release gets delayed?",
    a: "Delays happen — vocals need another day, artwork needs another pass. If a delay is on our side, your timeline is re-planned at no cost. If it is on yours, we hold your slot and re-sequence the calendar with you.",
  },
  {
    q: "Are ad budgets included in the price?",
    a: "Campaign strategy, creatives and management are included. The media spend itself is billed at cost — you approve every rupee before it runs, and you own the ad accounts.",
  },
  {
    q: "Can I buy add-ons without a package?",
    a: "Some, yes — lyric videos, live sessions and ad management can be booked standalone. Production-heavy add-ons like music videos require an active or completed package so the song is release-ready.",
  },
];

export const serviceFaqs = [
  {
    q: "Can I use only one service instead of a full package?",
    a: "A few — mixing & mastering, lyric videos, live sessions and ad management can be booked à la carte from ₹3,499. Full production and release work lives inside packages because that is where results actually come from.",
  },
  {
    q: "Who exactly works on my project?",
    a: "A producer matched to your genre, a session engineer, a release manager, and a marketing lead. You meet all of them on onboarding calls, and every deliverable lands in your dashboard with a name attached.",
  },
  {
    q: "What does 'membership' include?",
    a: "Every artist with an active or completed package is a member: dashboard access, portfolio, storage, the call scheduler, performance reports, and first access to Community, Opportunities and Education as they launch.",
  },
];

/* -------------------------------- testimonials -------------------------------- */

export const testimonials = [
  {
    quote: "I used to dread release days. Three logins, five group chats, and still something slipped. With Social Impression I opened one dashboard, approved one master, and watched my song go everywhere.",
    name: "Mira Vohra",
    artist: "MIRA VO · alt-pop, Pune",
    stat: "2.1M streams on her debut single",
    image: IMG.mic,
  },
  {
    quote: "They groomed a song I had already given up on. Same chords, same words — completely different life. It found playlists I had been cold-DMing for a year.",
    name: "Aarav Sen",
    artist: "ASEN · hip-hop, Delhi",
    stat: "12 editorial playlist adds in 60 days",
    image: IMG.djRed,
  },
  {
    quote: "The performance report after week four changed how I write. I finally knew which songs to finish and which ones to let go. That is worth more than any single deliverable.",
    name: "Tanya Iype",
    artist: "TANVY · electronic, Bengaluru",
    stat: "Sold out her first 300-cap show post-release",
    image: IMG.lights,
  },
  {
    quote: "It never felt like an agency. It felt like a label that was actually on my side — minus the label deal I'd have to sign for it.",
    name: "Kabir Mehta",
    artist: "KABIR M · indie-folk, Mumbai",
    stat: "Sync placement in an OTT series, 8 weeks post-release",
    image: IMG.keys,
  },
];

export const proofStats = [
  { value: "120+", label: "releases shipped" },
  { value: "9.4M+", label: "streams generated" },
  { value: "38", label: "artists in the ecosystem" },
  { value: "180+", label: "platforms & playlists touched" },
];

export const frustrations = [
  { title: "Too many people, no owner", desc: "A producer here, a designer there, a cousin on the artwork. Nobody owns the outcome." },
  { title: "No clear direction", desc: "Endless opinions, zero decisions. The song has twelve versions and no release date." },
  { title: "Delayed releases", desc: "\u201cTwo more weeks\u201d for six months. The moment you made the song for quietly passes." },
  { title: "Fragmented production", desc: "Stems in one email, masters in another, artwork in a chat that got deleted." },
  { title: "Marketing confusion", desc: "Post and pray. Nobody ever explained what a rollout actually is." },
  { title: "Distribution complexity", desc: "Metadata errors, wrong splits, a release stuck in review on the day it should be live." },
  { title: "Hard to get discovered", desc: "Great song, silence on arrival. No playlists, no press, no plan — just a link nobody clicks." },
];

/* ---------------------------------- services ---------------------------------- */

export const serviceCategories = [
  {
    id: "production",
    name: "Music Production",
    tag: "The record itself",
    image: IMG.gear,
    what: "Song grooming, arrangement, custom production and world-class recording — built around your references, your key, your tempo, your voice.",
    why: "A release competes with everything, everywhere, the second it drops. Production is the difference between a demo and a record.",
    receive: ["Groomed, release-ready arrangement", "Custom instrumental & production", "Guided vocal session with engineer", "Mix & master with revision rounds"],
    journey: "Weeks 1–5 of your timeline · 2–3 feedback loops · nothing ships without your yes",
  },
  {
    id: "distribution",
    name: "Distribution",
    tag: "Everywhere, on time",
    image: IMG.crowdLights,
    what: "Release delivery to 180+ platforms with clean metadata, correct splits, pre-saves, artist profile setup and Content ID — handled end to end.",
    why: "Distribution is where good releases quietly die: wrong metadata, delayed go-lives, unclaimed profiles. Ours is boring in the best way — it just works.",
    receive: ["180+ platform delivery", "Pre-save campaigns", "Spotify & Apple profile claiming", "Content ID & YouTube handling"],
    journey: "Locked at onboarding · go-live on the date you circled",
  },
  {
    id: "marketing",
    name: "Marketing",
    tag: "Attention, engineered",
    image: IMG.dj,
    what: "Rollout plans, promo assets, playlist pitching, ad campaigns and release-week monitoring — a real campaign, not post-and-pray.",
    why: "Uploading is not launching. Attention is designed weeks before release day, and the first 72 hours decide the next 90 days.",
    receive: ["30–90 day rollout plan", "3–10 promo assets", "Playlist & press pitching", "Managed ad campaigns (spend at cost)"],
    journey: "Plan locks in week 5 · assets ship pre-release · reports at day 7/30/90",
  },
  {
    id: "development",
    name: "Artist Development",
    tag: "The long game",
    image: IMG.piano,
    what: "Sonic identity workshops, brand mini-guides, repertoire strategy and honest A&R on what to finish, park or kill.",
    why: "Artists don't fail from one bad song. They fail from a blurry identity. We build the thread that runs through every release.",
    receive: ["Sonic identity workshop", "Brand & visual mini-guide", "Repertoire strategy sessions", "Quarterly growth reviews"],
    journey: "Starts at onboarding · continues between releases",
  },
  {
    id: "release-strategy",
    name: "Release Strategy",
    tag: "Dates, not vibes",
    image: IMG.silhouette,
    what: "Release mapping, timing, sequencing, feature planning and pre-release runway — the full calendar before a single note is recorded.",
    why: "The best song released on the wrong Friday dies next to a hundred bigger Fridays. Strategy is choosing your battlefield.",
    receive: ["Release map with real dates", "Single vs EP sequencing", "Pre-save & countdown runway", "Feature & collab planning"],
    journey: "Built in onboarding week · re-checked at every milestone",
  },
  {
    id: "creative-direction",
    name: "Creative Direction",
    tag: "A world, not a cover",
    image: IMG.lights,
    what: "Cover art direction, visual identity, photoshoot concepts and the palette-type-tone system that makes you recognisable at a glance.",
    why: "People hear with their eyes first. A coherent visual world makes a stranger's third song feel like their favourite.",
    receive: ["Cover art direction", "Visual identity system", "Photoshoot & content concepts", "Portfolio-ready press shots"],
    journey: "Begins with production · compounds every release",
  },
  {
    id: "video",
    name: "Video Production",
    tag: "Motion, added",
    image: IMG.confetti,
    what: "Music videos, lyric videos, live sessions and visualisers — concepted, shot and edited by a crew that treats a ₹15k visualiser like a festival set piece.",
    why: "Video is where songs get shared, synced and remembered. It is also where budgets explode — ours are scoped like instruments, not black holes.",
    receive: ["Concept & storyboard", "1–2 day shoot with full crew", "Edit, grade & delivery in all ratios", "YouTube optimisation"],
    journey: "Booked as an add-on or inside North Star · 2–4 weeks",
  },
  {
    id: "addons",
    name: "Add-ons",
    tag: "Extra strings",
    image: IMG.mic,
    what: "Extra revisions, rush delivery, standalone videos, ad management and custom quotations for EPs, albums and beyond.",
    why: "Every artist's journey bends differently. Add-ons let you pull exactly the lever you need, exactly when you need it.",
    receive: ["À la carte services from ₹3,499", "Rush delivery options", "Custom quotes for bigger swings"],
    journey: "Anytime from your dashboard",
  },
];
