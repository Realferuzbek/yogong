export type SectionId = "today" | "together" | "space" | "life" | "profile";

export type RoadmapSection = {
  id: SectionId;
  title: string;
  subtitle: string;
  gradient: string;
  features: string[];
};

export const ROADMAP_SECTIONS: RoadmapSection[] = [
  {
    id: "today",
    title: "Today (Home)",
    subtitle: "Daily rhythms, rituals, and nudges",
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
