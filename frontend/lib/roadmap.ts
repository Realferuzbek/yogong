export type SectionId = "today" | "together" | "space" | "life" | "profile";

export type RoadmapSection = {
  id: SectionId;
  title: string;
  subtitle: string;
  description: string;
  gradient: string;
  features: string[];
};

export const ROADMAP_SECTIONS: RoadmapSection[] = [
  {
    id: "today",
    title: "Today (Home)",
    subtitle: "Daily rhythms, rituals, and nudges",
    description: "Anchor your day together with gentle prompts, tiny rituals, and micro-moments that keep you in each other’s orbit.",
    gradient: "from-rose-500/80 via-pink-500/80 to-orange-400/70",
    features: [
      "Daily Love Prompt",
      "“Remember When?” Flashback",
      "Mood Check-In / Mood Journal",
      "Streaks & Rituals",
      "Mini “Today” Cards",
      "Quick Actions Strip (Call / Pulse / Chat / Together)",
      "Notifications Feed"
    ]
  },
  {
    id: "together",
    title: "Together (Live)",
    subtitle: "Real-time co-presence experiences",
    description: "Live rooms for co-presence—calls, co-play, focus, and quick spark moments when you can’t be side by side.",
    gradient: "from-blue-500/80 via-sky-500/80 to-cyan-400/70",
    features: [
      "Voice Call",
      "Video Call",
      "Pulse Mode",
      "Watch Together",
      "Listen Together (Mood-Sync Playlist)",
      "Micro-Games",
      "Mini Scavenger Hunts",
      "Recipe Roulette",
      "Fitness Duo",
      "Joint Meditation Timer",
      "Focus / Study Together"
    ]
  },
  {
    id: "space",
    title: "Space (Stories & Feelings)",
    subtitle: "Deep stories, emotions, and keepsakes",
    description: "A soft landing for feelings, stories, and keepsakes. Capture the texture of your relationship in one velvet space.",
    gradient: "from-violet-500/80 via-fuchsia-500/80 to-rose-400/70",
    features: [
      "Normal Chat",
      "Slow-Text Mode",
      "Voice Mood Drops",
      "“If I Were There” Button",
      "“Tease AI” Bot",
      "Fantasy Mode (Co-written Stories)",
      "Shared Diary",
      "Goal Buddy (Habits / Goals)",
      "“Open When” Notes",
      "Virtual Bouquet",
      "Love Coupons Generator",
      "Wish-List & “She Likes This” Alerts",
      "Partners’ Gallery",
      "Memory Timeline",
      "Saved Fantasy Stories & Prompts"
    ]
  },
  {
    id: "life",
    title: "Life (Utilities)",
    subtitle: "Logistics made romantic and simple",
    description: "Make the practical feel romantic—plans, lists, reminders, and nudges designed for two intertwined calendars.",
    gradient: "from-emerald-500/80 via-lime-500/80 to-amber-400/70",
    features: [
      "Couple Calendar",
      "Countdowns",
      "Reminders",
      "Shared To-Do List",
      "Shared Grocery List",
      "Bill Split Helper",
      "Location Peek",
      "Geo-Reminders",
      "Check-In Buttons (“I got home safe”)",
      "Read Together",
      "Couple Learning Section",
      "Virtual Experiences (Museums, etc.)",
      "Experience Packs (Curated Date Flows)"
    ]
  },
  {
    id: "profile",
    title: "Profile / Settings",
    subtitle: "Personalization, safety, and control",
    description: "Shape the shared space to fit your bond—personalization, safety, and boundaries tuned to your love story.",
    gradient: "from-slate-500/80 via-gray-500/80 to-slate-300/70",
    features: [
      "Relationship Details",
      "Love Language Quiz",
      "Theme Skins",
      "Nickname Reactions",
      "Custom Emoji / Sticker Packs",
      "Chat / UI Customization",
      "Voice-Activated Shortcuts",
      "Ringtone Helpers",
      "Wallpaper Helpers",
      "Permissions Center",
      "Data & Backups",
      "Block / Emergency & Safety"
    ]
  }
];

export function getSectionById(id: string): RoadmapSection | undefined {
  return ROADMAP_SECTIONS.find((section) => section.id === id);
}

export function toFeatureSlug(feature: string): string {
  const normalized = feature
    .normalize("NFKD")
    .replace(/[\u2018\u2019\u201C\u201D]/g, "")
    .replace(/&/g, "and");

  return normalized
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export function getFeatureFromSection(section: RoadmapSection, featureSlug: string): string | undefined {
  return section.features.find((feature) => toFeatureSlug(feature) === featureSlug);
}

export function getFeatureRoute(sectionId: SectionId, feature: string): string {
  return `/dashboard/${sectionId}/${toFeatureSlug(feature)}`;
}
