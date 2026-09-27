export const adminProjects = [
  { id: "PRJ-118", artist: "Mira Vohra", pkg: "Momentum", song: "Midnight Petals", stage: "Vocal recording", status: "In progress", due: "28 Aug", owner: "Rhea (Prod)" },
  { id: "PRJ-117", artist: "Aarav Sen", pkg: "Momentum", song: "Static/Signal", stage: "Rollout day 22", status: "In marketing", due: "15 Sep", owner: "Dev (Mktg)" },
  { id: "PRJ-116", artist: "Tanya Iype", pkg: "North Star", song: "Monsoon Circuit EP", stage: "Mix revisions", status: "Revision requested", due: "27 Aug", owner: "Rhea (Prod)" },
  { id: "PRJ-115", artist: "Kabir Mehta", pkg: "Strike", song: "Paper Boats", stage: "Master delivery", status: "Input pending", due: "29 Aug", owner: "Rhea (Prod)" },
  { id: "PRJ-114", artist: "Sana Qureshi", pkg: "Momentum", song: "Velvet Static", stage: "Pre-save live", status: "In progress", due: "02 Sep", owner: "Dev (Mktg)" },
  { id: "PRJ-113", artist: "Ishaan Rao", pkg: "Strike", song: "Concrete Garden", stage: "Released 14 Aug", status: "In marketing", due: "14 Sep", owner: "Dev (Mktg)" },
  { id: "PRJ-112", artist: "Mira Vohra", pkg: "Momentum", song: "Glass Hours", stage: "Delivered", status: "Completed", due: "—", owner: "Rhea (Prod)" },
  { id: "PRJ-111", artist: "Nikhil Barua", pkg: "North Star", song: "Kolkata Neon EP", stage: "Master delivery", status: "Delivered", due: "—", owner: "Rhea (Prod)" },
];

export const adminClients = [
  { name: "Mira Vohra", moniker: "MIRA VO", pkg: "Momentum", status: "Active", storage: "34.2 / 50 GB", nextPayment: "₹18,499 · 12 Sep", city: "Pune" },
  { name: "Aarav Sen", moniker: "ASEN", pkg: "Momentum", status: "Active", storage: "21.7 / 50 GB", nextPayment: "₹18,499 · 02 Sep", city: "Delhi" },
  { name: "Tanya Iype", moniker: "TANVY", pkg: "North Star", status: "Active", storage: "48.9 / 100 GB", nextPayment: "₹26,999 · 30 Aug", city: "Bengaluru" },
  { name: "Kabir Mehta", moniker: "KABIR M", pkg: "Strike", status: "Active", storage: "9.4 / 25 GB", nextPayment: "—", city: "Mumbai" },
  { name: "Sana Qureshi", moniker: "SANA Q", pkg: "Momentum", status: "Active", storage: "17.2 / 50 GB", nextPayment: "₹18,499 · 09 Sep", city: "Hyderabad" },
  { name: "Ishaan Rao", moniker: "ISHRAO", pkg: "Strike", status: "Completed", storage: "6.1 / 25 GB", nextPayment: "—", city: "Chennai" },
];

export const adminApplications = [
  { name: "Rhea Castellano", moniker: "RHEA C", genre: "R&B", city: "Goa", pkg: "Momentum", score: 92, status: "New", link: "soundcloud.com/rheac" },
  { name: "Dev Malik", moniker: "DEVMALIK", genre: "Hip-Hop", city: "Delhi", pkg: "North Star", score: 88, status: "Shortlisted", link: "instagram.com/devmalik" },
  { name: "Ananya Pai", moniker: "PAI.", genre: "Indie", city: "Mangaluru", pkg: "Strike", score: 81, status: "New", link: "spotify.com/pai" },
  { name: "Zoran Fernandes", moniker: "ZORAN", genre: "Electronic", city: "Mumbai", pkg: "Momentum", score: 76, status: "Waitlist", link: "soundcloud.com/zoran" },
  { name: "Meher Singh", moniker: "MEHER", genre: "Alt-Pop", city: "Chandigarh", pkg: "Strike", score: 84, status: "Accepted", link: "instagram.com/meher.sings" },
  { name: "Arjun Nair", moniker: "ARJUN N", genre: "Folk", city: "Kochi", pkg: "Strike", score: 69, status: "Rejected", link: "youtube.com/arjunnair" },
];

export const adminTickets = [
  { id: "TKT-312", from: "Kabir Mehta", subject: "Master file won't download", priority: "High", status: "Open", age: "2h" },
  { id: "TKT-311", from: "Sana Qureshi", subject: "Wrong artist name on release", priority: "High", status: "In progress", age: "5h" },
  { id: "TKT-310", from: "Ishaan Rao", subject: "Invoice GST details update", priority: "Medium", status: "Open", age: "1d" },
  { id: "TKT-309", from: "Nikhil Barua", subject: "Request extra mix revision", priority: "Low", status: "Waiting on client", age: "2d" },
  { id: "TKT-308", from: "Mira Vohra", subject: "Reschedule vocal session", priority: "Medium", status: "Resolved", age: "3d" },
];

export const salesMonths = [
  { m: "Jan", revenue: 4.2, packages: 4 },
  { m: "Feb", revenue: 5.8, packages: 5 },
  { m: "Mar", revenue: 7.4, packages: 6 },
  { m: "Apr", revenue: 6.1, packages: 5 },
  { m: "May", revenue: 9.2, packages: 8 },
  { m: "Jun", revenue: 11.6, packages: 9 },
  { m: "Jul", revenue: 13.9, packages: 11 },
  { m: "Aug", revenue: 16.3, packages: 13 },
];

export const platformMix = [
  { name: "Spotify", value: 44 },
  { name: "YouTube", value: 23 },
  { name: "Instagram", value: 14 },
  { name: "Apple Music", value: 11 },
  { name: "Others", value: 8 },
];

export const packageMix = [
  { name: "Strike", value: 52 },
  { name: "Momentum", value: 33 },
  { name: "North Star", value: 15 },
];

export const adminCalls = [
  { artist: "Mira Vohra", title: "Vocal recording session", time: "Today · 4:00 PM", mode: "Partner Studio, Pune" },
  { artist: "Tanya Iype", title: "Mix revision review", time: "Today · 6:30 PM", mode: "Google Meet" },
  { artist: "Kabir Mehta", title: "Discovery call", time: "Tomorrow · 11:00 AM", mode: "Google Meet" },
  { artist: "Sana Qureshi", title: "Rollout check-in", time: "Fri · 3:00 PM", mode: "Google Meet" },
];

export const adminEnquiries = [
  { from: "Ishaan Rao", type: "Complaint", subject: "Release delayed by a week", time: "3h ago", mood: "negative" },
  { from: "Ananya Pai", type: "Enquiry", subject: "Custom quote for 6-track album", time: "8h ago", mood: "neutral" },
  { from: "Meher Singh", type: "Compliment", subject: "Loved the rollout plan", time: "1d ago", mood: "positive" },
];

export const adminStorage = [
  { client: "Tanya Iype", used: 48.9, total: 100, pct: 49 },
  { client: "Mira Vohra", used: 34.2, total: 50, pct: 68 },
  { client: "Aarav Sen", used: 21.7, total: 50, pct: 43 },
  { client: "Sana Qureshi", used: 17.2, total: 50, pct: 34 },
  { client: "Kabir Mehta", used: 9.4, total: 25, pct: 38 },
  { client: "Ishaan Rao", used: 6.1, total: 25, pct: 24 },
];

export const broadcasts = [
  { title: "Cohort 04 waitlist is open", audience: "All waitlisted artists", sent: "18 Aug 2026", opens: "71%" },
  { title: "Your mix is ready — approve in dashboard", audience: "PRJ-118 · Mira Vohra", sent: "21 Aug 2026", opens: "100%" },
  { title: "Launch pricing ends this month", audience: "All applications (pending)", sent: "22 Aug 2026", opens: "54%" },
];

export const popCampaigns = [
  { name: "Release-week countdown popup", placement: "Website hero", status: "Live", clicks: 1240 },
  { name: "\u201cOnly 8 slots left\u201d banner", placement: "Packages page", status: "Scheduled", clicks: 0 },
  { name: "Blog exit-intent: download checklist", placement: "Blog", status: "Paused", clicks: 3821 },
];
