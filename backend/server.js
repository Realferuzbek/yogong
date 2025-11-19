const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");

const PORT = process.env.PORT || 4000;
const BUILD_SHA = process.env.RENDER_GIT_COMMIT || "local";
const START_TIME = new Date().toISOString();

const app = express();
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

const roadmapTabs = {
  today: [
    "Daily Love Prompt",
    "“Remember When?” Flashback",
    "Mood Check-In / Mood Journal",
    "Streaks & Rituals",
    "Mini “Today” Cards",
    "Quick Actions Strip (Call / Pulse / Chat / Together)",
    "Notifications Feed"
  ],
  together: [
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
  ],
  space: [
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
  ],
  life: [
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
  ],
  profile: [
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
};

app.get("/", (_req, res) => {
  res.json({
    service: "YoGong backend",
    comingSoon: true,
    tabs: Object.keys(roadmapTabs)
  });
});

app.get("/roadmap", (_req, res) => {
  res.json({
    updated: START_TIME,
    build: BUILD_SHA,
    sections: roadmapTabs
  });
});

app.get("/health", (_req, res) => {
  res.json({
    status: "ok",
    uptimeSeconds: process.uptime(),
    build: BUILD_SHA,
    startedAt: START_TIME
  });
});

app.use((req, res) => {
  res.status(404).json({ message: "Not found", path: req.path });
});

app.listen(PORT, () => {
  console.log(`YoGong backend listening on port ${PORT}`);
});
