import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
  console.log("🌱 Seeding database...");

  // Hash password for demo users
  const passwordHash = await bcrypt.hash("demo1234", 12);

  // Create admin user
  const admin = await prisma.user.upsert({
    where: { email: "admin@socialimpression.in" },
    update: {},
    create: {
      email: "admin@socialimpression.in",
      name: "Admin User",
      passwordHash,
      role: "ADMIN",
      status: "ACTIVE",
    },
  });

  console.log("✅ Admin user created:", admin.email);

  // Create demo artist
  const artist = await prisma.user.upsert({
    where: { email: "mira@socialimpression.in" },
    update: {},
    create: {
      email: "mira@socialimpression.in",
      name: "Mira Vohra",
      passwordHash,
      role: "ARTIST",
      status: "ACTIVE",
    },
  });

  console.log("✅ Artist user created:", artist.email);

  // Create artist profile
  const artistProfile = await prisma.artistProfile.upsert({
    where: { userId: artist.id },
    update: {},
    create: {
      userId: artist.id,
      slug: "mira-vo",
      artistName: "Mira Vohra",
      moniker: "MIRA VO",
      genre: "Alt-Pop",
      city: "Pune",
      bio: "Alt-pop artist from Pune crafting atmospheric soundscapes with honest lyrics.",
      profileImage: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=400&auto=format&fit=crop",
      coverImage: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=1600&auto=format&fit=crop",
      monthlyListeners: "2100000",
      socialLinks: JSON.stringify([
        { platform: "instagram", url: "https://instagram.com/miravo" },
        { platform: "spotify", url: "https://spotify.com/artist/miravo" },
        { platform: "youtube", url: "https://youtube.com/@miravo" },
      ]),
      songs: JSON.stringify([
        { title: "Midnight Petals", releaseDate: "2026-10-02", streams: "2100000" },
        { title: "Static/Signal", releaseDate: "2026-08-02", streams: "41208" },
        { title: "Glass Hours", releaseDate: "2026-03-14", streams: "214506" },
      ]),
      videos: JSON.stringify([]),
      portfolioPublic: true,
      showUnreleased: false,
      notifyPrefs: JSON.stringify({
        email: true,
        push: true,
        marketing: false,
        weekly: true,
      }),
    },
  });

  console.log("✅ Artist profile created:", artistProfile.artistName);

  // Create packages
  const packages = [
    {
      slug: "strike",
      index: "01",
      name: "Strike",
      tagline: "Your first professional release, done right.",
      forWhom: "Artists sitting on one finished song and zero infrastructure.",
      duration: "4–5 weeks",
      price: 34999,
      launchPrice: 27999,
      instalmentCount: 2,
      instalmentAmount: 14499,
      accent: "bone",
      image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=1600&auto=format&fit=crop",
      outcome: "A single that sounds like you meant it — live on 180+ platforms, with thirty days of push behind it and artist profiles that actually belong to you.",
      includesProduction: JSON.stringify([
        "1 original single, fully produced",
        "Song grooming & pre-production (arrangement, structure, references)",
        "1 custom production direction with a matched producer",
        "1 guided vocal recording session (studio + engineer)",
        "Mix & master with 2 revision rounds",
        "Radio-ready masters (WAV + MP3 + instrumental)",
      ]),
      includesMarketing: JSON.stringify([
        "30-day release rollout plan",
        "3 promo assets (audiograms & reel cutdowns)",
        "1 custom cover art direction",
        "Caption & content calendar starter kit",
        "Pitch to Social Impression channels & playlists",
      ]),
      includesDistribution: JSON.stringify([
        "Release to 180+ platforms — Spotify, Apple Music, YouTube Music, Amazon, JioSaavn & more",
        "Release date planning & metadata handling",
        "Spotify for Artists & Apple Music for Artists setup",
        "YouTube Content ID claiming",
      ]),
      includesFreebies: JSON.stringify([
        "Release-day checklist (the one we actually use)",
        "Lyric-video template pack",
        "1 artist portrait retouch",
      ]),
      active: true,
      sortOrder: 1,
    },
    {
      slug: "momentum",
      index: "02",
      name: "Momentum",
      tagline: "For artists ready to show up again. And again.",
      forWhom: "Artists with one release behind them who want consistency, visibility and a real growth curve.",
      duration: "8–10 weeks",
      price: 64999,
      launchPrice: 52999,
      instalmentCount: 3,
      instalmentAmount: 18499,
      accent: "iris",
      image: "https://images.unsplash.com/photo-1461784121038-f088ca1e7714?q=80&w=1600&auto=format&fit=crop",
      outcome: "Two releases, sixty days of compounding push, and an audience that starts recognising your name before the second drop.",
      includesProduction: JSON.stringify([
        "2 original singles, fully produced",
        "Song grooming & pre-production for both",
        "2 custom production directions",
        "2 guided vocal recording sessions",
        "Mix & master with 3 revision rounds",
        "Your personal vocal-chain preset card",
      ]),
      includesMarketing: JSON.stringify([
        "60-day rollout per release",
        "6 promo assets — reels, audiograms, 1 visualiser",
        "Playlist pitching — editorial + independent lists",
        "2 platform ad campaign builds (Meta & YouTube, ad spend excluded)",
        "Artist brand mini-guide (palette, type, tone)",
        "Monthly performance report with next-move notes",
      ]),
      includesDistribution: JSON.stringify([
        "Everything in Strike",
        "Pre-save campaigns for both releases",
        "Release Radar & algorithm optimisation",
        "Full distribution for both singles",
      ]),
      includesFreebies: JSON.stringify([
        "Everything in Strike freebies",
        "1 extra revision round, on us",
        "Priority studio slot booking",
      ]),
      active: true,
      sortOrder: 2,
    },
    {
      slug: "northstar",
      index: "03",
      name: "North Star",
      tagline: "The full artist journey. Bigger stages, sharper identity.",
      forWhom: "Artists aiming at festivals, press and a sound-and-visual identity that holds up at scale.",
      duration: "14–16 weeks",
      price: 129999,
      launchPrice: 104999,
      instalmentCount: 4,
      instalmentAmount: 26999,
      accent: "signal",
      image: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?q=80&w=1600&auto=format&fit=crop",
      outcome: "A body of work, a visual identity, and a ninety-day campaign that introduces you like a headliner — because that is where you are headed.",
      includesProduction: JSON.stringify([
        "EP of up to 4 tracks, fully produced",
        "A&R + creative direction — a sonic identity workshop before anything is recorded",
        "Custom production per track with matched producers",
        "3 guided vocal recording sessions",
        "Mix & master with 4 revision rounds",
        "1 feature artist sourcing & coordination",
      ]),
      includesMarketing: JSON.stringify([
        "90-day campaign with a dedicated release manager",
        "10+ content assets across the campaign",
        "1 cinematic live-session video (1-day shoot, 4K)",
        "PR & editorial pitching to blogs, radio and press",
        "Playlist + radio pitching, priority handling",
        "2 managed ad campaigns (strategy, creatives, optimisation)",
        "Release-week command center — daily monitoring & rapid moves",
        "Quarterly performance reviews",
      ]),
      includesDistribution: JSON.stringify([
        "Everything in Momentum",
        "Priority release slots & guaranteed release date",
        "Pre-save + countdown assets",
        "Sync-ready instrumentals & stems archive",
      ]),
      includesFreebies: JSON.stringify([
        "Everything in Momentum freebies",
        "Press kit (bio, one-pager, photo set)",
        "1 free add-on of your choice under ₹14,999",
      ]),
      active: true,
      sortOrder: 3,
    },
  ];

  for (const pkg of packages) {
    await prisma.package.upsert({
      where: { slug: pkg.slug },
      update: {},
      create: pkg,
    });
    console.log("✅ Package created:", pkg.name);
  }

  // Create services
  const services = [
    {
      slug: "production",
      name: "Music Production",
      tag: "The record itself",
      image: "https://images.unsplash.com/photo-1487180144351-b8472da7d491?q=80&w=1600&auto=format&fit=crop",
      what: "Song grooming, arrangement, custom production and world-class recording — built around your references, your key, your tempo, your voice.",
      why: "A release competes with everything, everywhere, the second it drops. Production is the difference between a demo and a record.",
      receive: JSON.stringify([
        "Groomed, release-ready arrangement",
        "Custom instrumental & production",
        "Guided vocal session with engineer",
        "Mix & master with revision rounds",
      ]),
      journey: "Weeks 1–5 of your timeline · 2–3 feedback loops · nothing ships without your yes",
      active: true,
      sortOrder: 1,
    },
    {
      slug: "distribution",
      name: "Distribution",
      tag: "Everywhere, on time",
      image: "https://images.unsplash.com/photo-1501612780327-45045538702b?q=80&w=1600&auto=format&fit=crop",
      what: "Release delivery to 180+ platforms with clean metadata, correct splits, pre-saves, artist profile setup and Content ID — handled end to end.",
      why: "Distribution is where good releases quietly die: wrong metadata, delayed go-lives, unclaimed profiles. Ours is boring in the best way — it just works.",
      receive: JSON.stringify([
        "180+ platform delivery",
        "Pre-save campaigns",
        "Spotify & Apple profile claiming",
        "Content ID & YouTube handling",
      ]),
      journey: "Locked at onboarding · go-live on the date you circled",
      active: true,
      sortOrder: 2,
    },
    {
      slug: "marketing",
      name: "Marketing",
      tag: "Attention, engineered",
      image: "https://images.unsplash.com/photo-1461784121038-f088ca1e7714?q=80&w=1600&auto=format&fit=crop",
      what: "Rollout plans, promo assets, playlist pitching, ad campaigns and release-week monitoring — a real campaign, not post-and-pray.",
      why: "Uploading is not launching. Attention is designed weeks before release day, and the first 72 hours decide the next 90 days.",
      receive: JSON.stringify([
        "30–90 day rollout plan",
        "3–10 promo assets",
        "Playlist & press pitching",
        "Managed ad campaigns (spend at cost)",
      ]),
      journey: "Plan locks in week 5 · assets ship pre-release · reports at day 7/30/90",
      active: true,
      sortOrder: 3,
    },
    {
      slug: "development",
      name: "Artist Development",
      tag: "The long game",
      image: "https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?q=80&w=1600&auto=format&fit=crop",
      what: "Sonic identity workshops, brand mini-guides, repertoire strategy and honest A&R on what to finish, park or kill.",
      why: "Artists don't fail from one bad song. They fail from a blurry identity. We build the thread that runs through every release.",
      receive: JSON.stringify([
        "Sonic identity workshop",
        "Brand & visual mini-guide",
        "Repertoire strategy sessions",
        "Quarterly growth reviews",
      ]),
      journey: "Starts at onboarding · continues between releases",
      active: true,
      sortOrder: 4,
    },
  ];

  for (const svc of services) {
    await prisma.service.upsert({
      where: { slug: svc.slug },
      update: {},
      create: svc,
    });
    console.log("✅ Service created:", svc.name);
  }

  // Create FAQs
  const faqs = [
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
  ];

  for (const faq of faqs) {
    await prisma.faq.upsert({
      where: { id: `faq-${faq.q.substring(0, 20)}` },
      update: {},
      create: {
        id: `faq-${faq.q.substring(0, 20)}`,
        scope: "general",
        q: faq.q,
        a: faq.a,
        sortOrder: 0,
      },
    });
    console.log("✅ FAQ created:", faq.q.substring(0, 40) + "...");
  }

  // Create addons
  const addons = [
    { name: "Music video", price: "from ₹44,999", note: "Concept, shoot and edit. Performance or narrative, 1–2 day shoot.", active: true },
    { name: "Lyric video", price: "₹12,999", note: "Motion-typography lyric video, art-directed to your cover.", active: true },
    { name: "Live session video", price: "₹19,999", note: "Multi-cam live performance session in a curated space.", active: true },
    { name: "Extra revision round", price: "₹3,499", note: "One more pass on a mix, master or design deliverable.", active: true },
    { name: "Ad management", price: "₹8,999 / month", note: "We run your Meta & YouTube campaigns. Ad spend billed at cost.", active: true },
    { name: "Rush delivery", price: "15% of package", note: "Cut two weeks off the timeline when the moment can't wait.", active: true },
  ];

  for (const addon of addons) {
    await prisma.addon.create({
      data: addon,
    });
    console.log("✅ Addon created:", addon.name);
  }

  // Create blog posts
  const blogPosts = [
    {
      slug: "why-artists-fail-at-release",
      title: "Why Most Independent Artists Fail at Release (And How to Fix It)",
      dek: "The quiet killers of independent releases aren't bad songs — they're bad systems. Here's what actually goes wrong.",
      category: "Strategy",
      date: "August 20, 2026",
      readTime: "7 min",
      author: "Social Impression Team",
      role: "Ecosystem",
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?q=80&w=1600&auto=format&fit=crop",
      body: JSON.stringify([
        { type: "paragraph", content: "Most artists don't fail because their song isn't good enough. They fail because the machinery around the song — the plan, the timeline, the people, the follow-through — was never built to hold it." },
        { type: "heading", content: "The Seven Quiet Killers" },
        { type: "paragraph", content: "After 120+ releases, we've seen the same patterns kill momentum before a song ever gets a chance." },
      ]),
      featured: true,
      published: true,
    },
    {
      slug: "what-is-song-grooming",
      title: "What Is Song Grooming — And Why Every Song Needs It",
      dek: "The step between 'I wrote this' and 'this is ready to record' that most artists skip entirely.",
      category: "Production",
      date: "August 15, 2026",
      readTime: "5 min",
      author: "Rhea Castellano",
      role: "Head of Production",
      image: "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?q=80&w=1600&auto=format&fit=crop",
      body: JSON.stringify([
        { type: "paragraph", content: "Song grooming is the pressure test. It's where we take a finished song and ask: does the arrangement serve the emotion? Is the structure tight? Are the key and tempo right for your voice? Do the references actually match what you're trying to do?" },
      ]),
      featured: false,
      published: true,
    },
    {
      slug: "playlist-pitching-reality",
      title: "The Reality of Playlist Pitching in 2026",
      dek: "No guarantees, no bots, no shortcuts. Here's what actually moves the needle on editorial playlists.",
      category: "Marketing",
      date: "August 10, 2026",
      readTime: "6 min",
      author: "Dev Malik",
      role: "Head of Marketing",
      image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=1600&auto=format&fit=crop",
      body: JSON.stringify([
        { type: "paragraph", content: "Editorial playlists are the most coveted real estate in music. They're also the most misunderstood. Here's what actually happens when we pitch your music." },
      ]),
      featured: false,
      published: true,
    },
  ];

  for (const post of blogPosts) {
    await prisma.blogPost.upsert({
      where: { slug: post.slug },
      update: {},
      create: post,
    });
    console.log("✅ Blog post created:", post.title);
  }

  // Create settings
  const settings = [
    { key: "site.name", value: "Social Impression" },
    { key: "site.tagline", value: "A creative ecosystem for independent artists" },
    { key: "site.url", value: "https://socialimpression.in" },
    { key: "contact.email", value: "hello@socialimpression.in" },
    { key: "contact.phone", value: "+91 98765 43210" },
    { key: "social.instagram", value: "https://instagram.com/socialimpression" },
    { key: "social.twitter", value: "https://twitter.com/socialimpress" },
    { key: "social.linkedin", value: "https://linkedin.com/company/socialimpression" },
    { key: "social.youtube", value: "https://youtube.com/@socialimpression" },
  ];

  for (const setting of settings) {
    await prisma.setting.upsert({
      where: { key: setting.key },
      update: {},
      create: setting,
    });
    console.log("✅ Setting created:", setting.key);
  }

  console.log("🎉 Seeding complete!");
}

main()
  .catch((e) => {
    console.error("❌ Seeding failed:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });