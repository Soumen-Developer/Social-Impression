export const dashArtist = {
  name: "Mira",
  fullName: "Mira Vohra",
  moniker: "MIRA VO",
  package: "Momentum",
  packageId: "momentum",
  memberSince: "June 2026",
  storageUsed: 34.2,
  storageTotal: 50,
  portfolioViews: 1284,
  releaseProgress: 68,
  nextCall: {
    title: "Vocal recording session",
    date: "Fri, 28 Aug",
    time: "4:00 PM IST",
    studio: "Partner Studio — Pune",
  },
  nextPayment: { amount: 18499, due: "12 Sep 2026", instalment: "3 of 3" },
};

export type ProjectSection = {
  name: string;
  status: string;
  inputs: { label: string; state: "done" | "pending" | "overdue"; due?: string }[];
  outputs: { label: string; date: string; kind: string }[];
  revisions: { used: number; limit: number };
  timeline: { label: string; date: string; state: "done" | "active" | "next" }[];
};

export type Project = {
  id: string;
  name: string;
  pkg: string;
  purchased: string;
  status: "In production" | "In marketing" | "Queued" | "Completed";
  stage: string;
  progress: number;
  cover: string;
  streams?: string;
  inputsRequired: number;
  sections: ProjectSection[];
};

export const projects: Project[] = [
  {
    id: "midnight-petals",
    name: "Midnight Petals",
    pkg: "Momentum · Single 1 of 2",
    purchased: "12 Jun 2026",
    status: "In production",
    stage: "Vocal recording",
    progress: 68,
    cover: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=1600&auto=format&fit=crop",
    inputsRequired: 2,
    sections: [
      {
        name: "Production",
        status: "In progress",
        inputs: [
          { label: "Reference tracks & lyric sheet", state: "done" },
          { label: "Approve cover art direction", state: "overdue", due: "was due 22 Aug" },
          { label: "Confirm final lyrics v3", state: "pending", due: "due 27 Aug" },
        ],
        outputs: [
          { label: "Grooming notes & song map", date: "18 Jun", kind: "PDF" },
          { label: "Instrumental v2", date: "09 Jul", kind: "WAV" },
          { label: "Demo vocal comp", date: "21 Aug", kind: "MP3" },
        ],
        revisions: { used: 1, limit: 3 },
        timeline: [
          { label: "Song grooming", date: "Jun 16", state: "done" },
          { label: "Production", date: "Jul 02", state: "done" },
          { label: "Vocal recording", date: "Aug 28", state: "active" },
          { label: "Mix & master", date: "Sep 08", state: "next" },
        ],
      },
      {
        name: "Distribution",
        status: "Preparing",
        inputs: [
          { label: "Artist bio & photos", state: "done" },
          { label: "Confirm release date", state: "pending", due: "due 30 Aug" },
        ],
        outputs: [{ label: "Pre-save page — live", date: "19 Aug", kind: "LINK" }],
        revisions: { used: 0, limit: 1 },
        timeline: [
          { label: "Metadata lock", date: "Sep 05", state: "next" },
          { label: "Platform delivery", date: "Sep 12", state: "next" },
          { label: "Worldwide go-live", date: "Oct 02", state: "next" },
        ],
      },
      {
        name: "Marketing",
        status: "Planned",
        inputs: [{ label: "Pick 3 promo concepts", state: "pending", due: "due 05 Sep" }],
        outputs: [{ label: "60-day rollout plan v1", date: "24 Aug", kind: "PDF" }],
        revisions: { used: 0, limit: 2 },
        timeline: [
          { label: "Assets production", date: "Sep 10", state: "next" },
          { label: "Pitching wave 1", date: "Sep 15", state: "next" },
          { label: "Release week push", date: "Oct 02", state: "next" },
        ],
      },
    ],
  },
  {
    id: "static-signal",
    name: "Static/Signal",
    pkg: "Momentum · Single 2 of 2",
    purchased: "12 Jun 2026",
    status: "In marketing",
    stage: "Day 22 of 60 · rollout",
    progress: 84,
    cover: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?q=80&w=1600&auto=format&fit=crop",
    streams: "41,208",
    inputsRequired: 1,
    sections: [
      {
        name: "Production",
        status: "Delivered",
        inputs: [{ label: "All inputs received", state: "done" }],
        outputs: [
          { label: "Final master", date: "Jul 14", kind: "WAV" },
          { label: "Instrumental & stems", date: "Jul 14", kind: "ZIP" },
        ],
        revisions: { used: 2, limit: 3 },
        timeline: [
          { label: "Song grooming", date: "Jun 16", state: "done" },
          { label: "Production", date: "Jun 28", state: "done" },
          { label: "Vocal recording", date: "Jul 02", state: "done" },
          { label: "Mix & master", date: "Jul 14", state: "done" },
        ],
      },
      {
        name: "Distribution",
        status: "Live",
        inputs: [{ label: "Release date confirmed", state: "done" }],
        outputs: [
          { label: "Live on 182 platforms", date: "Aug 02", kind: "LINK" },
          { label: "Spotify for Artists — claimed", date: "Jun 20", kind: "LINK" },
        ],
        revisions: { used: 0, limit: 1 },
        timeline: [
          { label: "Metadata lock", date: "Jul 20", state: "done" },
          { label: "Platform delivery", date: "Jul 28", state: "done" },
          { label: "Worldwide go-live", date: "Aug 02", state: "done" },
        ],
      },
      {
        name: "Marketing",
        status: "In progress",
        inputs: [{ label: "Approve ad creative set B", state: "pending", due: "due 26 Aug" }],
        outputs: [
          { label: "6 promo assets", date: "Jul 25", kind: "ZIP" },
          { label: "Playlist pitch — 14 lists", date: "Jul 30", kind: "PDF" },
          { label: "Performance report · day 21", date: "Aug 23", kind: "PDF" },
        ],
        revisions: { used: 1, limit: 2 },
        timeline: [
          { label: "Assets production", date: "Jul 25", state: "done" },
          { label: "Pitching wave 1", date: "Jul 30", state: "done" },
          { label: "Release week push", date: "Aug 02", state: "done" },
          { label: "Sustain phase", date: "Sep 15", state: "active" },
        ],
      },
    ],
  },
  {
    id: "glass-hours",
    name: "Glass Hours",
    pkg: "Strike · Single",
    purchased: "04 Feb 2026",
    status: "Completed",
    stage: "Delivered 14 Mar 2026",
    progress: 100,
    cover: "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?q=80&w=1600&auto=format&fit=crop",
    streams: "214,506",
    inputsRequired: 0,
    sections: [
      {
        name: "Production",
        status: "Delivered",
        inputs: [{ label: "All inputs received", state: "done" }],
        outputs: [
          { label: "Final master", date: "Mar 10", kind: "WAV" },
          { label: "Cover art — final", date: "Mar 06", kind: "PNG" },
        ],
        revisions: { used: 2, limit: 2 },
        timeline: [
          { label: "Song grooming", date: "Feb 08", state: "done" },
          { label: "Production", date: "Feb 18", state: "done" },
          { label: "Vocal recording", date: "Feb 24", state: "done" },
          { label: "Mix & master", date: "Mar 10", state: "done" },
        ],
      },
      {
        name: "Distribution",
        status: "Live",
        inputs: [{ label: "Release date confirmed", state: "done" }],
        outputs: [{ label: "Live on 180 platforms", date: "Mar 14", kind: "LINK" }],
        revisions: { used: 0, limit: 1 },
        timeline: [
          { label: "Metadata lock", date: "Mar 08", state: "done" },
          { label: "Platform delivery", date: "Mar 11", state: "done" },
          { label: "Worldwide go-live", date: "Mar 14", state: "done" },
        ],
      },
      {
        name: "Marketing",
        status: "Completed",
        inputs: [{ label: "All inputs received", state: "done" }],
        outputs: [
          { label: "3 promo assets", date: "Mar 11", kind: "ZIP" },
          { label: "30-day report — final", date: "Apr 14", kind: "PDF" },
        ],
        revisions: { used: 0, limit: 1 },
        timeline: [
          { label: "Assets production", date: "Mar 11", state: "done" },
          { label: "Release week push", date: "Mar 14", state: "done" },
          { label: "Final report", date: "Apr 14", state: "done" },
        ],
      },
    ],
  },
  {
    id: "neon-monsoon",
    name: "Neon Monsoon",
    pkg: "Momentum · Add-on single",
    purchased: "20 Aug 2026",
    status: "Queued",
    stage: "Onboarding scheduled",
    progress: 6,
    cover: "https://images.unsplash.com/photo-1501612780327-45045538702b?q=80&w=1600&auto=format&fit=crop",
    inputsRequired: 1,
    sections: [
      {
        name: "Production",
        status: "Queued",
        inputs: [{ label: "Upload demo & references", state: "pending", due: "due 30 Aug" }],
        outputs: [],
        revisions: { used: 0, limit: 3 },
        timeline: [
          { label: "Song grooming", date: "Sep 02", state: "active" },
          { label: "Production", date: "Sep 14", state: "next" },
          { label: "Vocal recording", date: "Sep 26", state: "next" },
          { label: "Mix & master", date: "Oct 06", state: "next" },
        ],
      },
      {
        name: "Distribution",
        status: "Queued",
        inputs: [{ label: "Fill release info form", state: "pending", due: "due 30 Aug" }],
        outputs: [],
        revisions: { used: 0, limit: 1 },
        timeline: [
          { label: "Metadata lock", date: "Oct 08", state: "next" },
          { label: "Platform delivery", date: "Oct 12", state: "next" },
          { label: "Worldwide go-live", date: "Nov 06", state: "next" },
        ],
      },
      {
        name: "Marketing",
        status: "Queued",
        inputs: [{ label: "Book brand mini-guide call", state: "pending", due: "due 05 Sep" }],
        outputs: [],
        revisions: { used: 0, limit: 2 },
        timeline: [
          { label: "Assets production", date: "Oct 10", state: "next" },
          { label: "Pitching wave 1", date: "Oct 18", state: "next" },
          { label: "Release week push", date: "Nov 06", state: "next" },
        ],
      },
    ],
  },
];

export const activity = [
  { text: "Master delivered for \u201cMidnight Petals\u201d — waiting on your approval", time: "2h ago", kind: "output" },
  { text: "Cover art direction v4 uploaded for review", time: "5h ago", kind: "output" },
  { text: "\u201cStatic/Signal\u201d added to 3 editorial playlists", time: "Yesterday", kind: "win" },
  { text: "You approved ad creative set A", time: "Yesterday", kind: "input" },
  { text: "Vocal session booked — Fri 28 Aug, 4:00 PM", time: "2d ago", kind: "call" },
  { text: "Pre-save page for \u201cMidnight Petals\u201d went live", time: "5d ago", kind: "win" },
];

export const notifications = [
  { title: "Cover art approval overdue", body: "\u201cMidnight Petals\u201d artwork needs your call to keep the Sep 8 mix slot.", time: "1h", unread: true },
  { title: "Master ready for review", body: "Mix v2 is in your project outputs. 2 revision rounds left.", time: "2h", unread: true },
  { title: "Playlist add", body: "\u201cStatic/Signal\u201d landed on Fresh Finds Indie.", time: "1d", unread: false },
  { title: "Invoice reminder", body: "Momentum instalment 3 of 3 — ₹18,499 due 12 Sep.", time: "2d", unread: false },
  { title: "Session confirmed", body: "Vocal recording, Fri 28 Aug · 4:00 PM · Partner Studio Pune.", time: "2d", unread: false },
];

export const storageFolders = [
  { name: "Masters", used: 12.4 },
  { name: "Stems", used: 10.8 },
  { name: "Artwork", used: 4.1 },
  { name: "Videos", used: 5.6 },
  { name: "Docs", used: 1.3 },
];

export const dashFiles = [
  { name: "midnight_petals_master_v2.wav", folder: "Masters", size: "412 MB", date: "21 Aug 2026", kind: "audio" },
  { name: "static_signal_final_master.wav", folder: "Masters", size: "386 MB", date: "14 Jul 2026", kind: "audio" },
  { name: "static_signal_stems.zip", folder: "Stems", size: "1.2 GB", date: "14 Jul 2026", kind: "zip" },
  { name: "glass_hours_instrumental.wav", folder: "Masters", size: "355 MB", date: "10 Mar 2026", kind: "audio" },
  { name: "midnight_petals_cover_v4.png", folder: "Artwork", size: "18 MB", date: "22 Aug 2026", kind: "image" },
  { name: "static_signal_cover_final.png", folder: "Artwork", size: "16 MB", date: "20 Jul 2026", kind: "image" },
  { name: "static_signal_visualiser_1080.mp4", folder: "Videos", size: "890 MB", date: "25 Jul 2026", kind: "video" },
  { name: "60_day_rollout_plan.pdf", folder: "Docs", size: "2 MB", date: "24 Aug 2026", kind: "pdf" },
  { name: "performance_report_day21.pdf", folder: "Docs", size: "3 MB", date: "23 Aug 2026", kind: "pdf" },
  { name: "vocal_comp_session_2808.zip", folder: "Stems", size: "640 MB", date: "28 Aug 2026", kind: "zip" },
];

export const invoices = [
  { id: "SI-2043", date: "12 Aug 2026", amount: 18499, status: "Paid", item: "Momentum — instalment 2 of 3" },
  { id: "SI-1988", date: "20 Aug 2026", amount: 4999, status: "Paid", item: "Add-on — extra revision pack" },
  { id: "SI-2031", date: "12 Jul 2026", amount: 18499, status: "Paid", item: "Momentum — instalment 1 of 3" },
  { id: "SI-1902", date: "04 Feb 2026", amount: 14499, status: "Paid", item: "Strike — instalment 2 of 2" },
  { id: "SI-1877", date: "04 Jan 2026", amount: 14499, status: "Paid", item: "Strike — instalment 1 of 2" },
];

export const upcomingPayment = { amount: 18499, due: "12 Sep 2026", label: "Momentum — instalment 3 of 3", daysLeft: 19 };

export const comingSoon = [
  {
    id: "community",
    name: "Community",
    desc: "A private network of Social Impression artists — collab calls, feedback circles, and the group chat where your next feature probably comes from.",
    perks: ["Artist-only circles by genre & city", "Monthly collab calls", "Early demo swaps"],
  },
  {
    id: "opportunities",
    name: "Opportunities",
    desc: "A curated board of gigs, festivals, sync briefs and brand deals — filtered for independent artists, with intros we actually make for you.",
    perks: ["Festival & showcase calls", "Sync & brand briefs", "Direct intros for shortlisted artists"],
  },
  {
    id: "education",
    name: "Education",
    desc: "Short, sharp courses on the things no YouTube video explains properly — royalties, splits, pitching, and surviving your first release cycle.",
    perks: ["Release strategy masterclass", "Royalties & splits, decoded", "Live AMAs with industry guests"],
  },
];

export const helpTopics = [
  { title: "Project & timeline questions", desc: "Where things stand, what's next, revision rules." },
  { title: "Payments & invoices", desc: "Instalments, receipts, failed payments." },
  { title: "Portfolio & storage", desc: "Your public page, files and limits." },
  { title: "Distribution issues", desc: "Metadata, takedowns, profile claims." },
];

export const dashFaqs = [
  { q: "How many revisions do I get?", a: "Every package includes revision rounds per deliverable — 2 on Strike, 3 on Momentum, 4 on North Star. You can always add extra rounds for ₹3,499 from your project page." },
  { q: "How do I request a revision?", a: "Open the project, find the deliverable, hit Request revision, and describe the change. Your team is notified instantly and the round is tracked against your limit." },
  { q: "When is my next payment?", a: "Your Payments page shows the exact date and amount of every instalment, with invoices for everything already paid." },
  { q: "How do I schedule a call with my team?", a: "Use the Schedule a call button in the top bar — you'll see your manager's live calendar and get a confirmation in your dashboard." },
];

export const myTickets = [
  { id: "TKT-312", subject: "Master file won't download", status: "In progress", updated: "2h ago" },
  { id: "TKT-287", subject: "Change release date to Oct 9", status: "Resolved", updated: "5d ago" },
];
