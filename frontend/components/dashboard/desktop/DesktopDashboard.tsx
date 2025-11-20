import Link from "next/link";

import type { RoadmapSection, SectionId } from "@/lib/roadmap";
import { PillarIcon } from "../shared/PillarIcon";

const SECTION_COPY: Record<SectionId, { label: string; description: string; status: string; tag: string }> = {
  today: {
    label: "Daily rituals",
    description: "Tiny rituals and prompts to keep you in each other's orbit.",
    status: "Coming soon",
    tag: "Laptop"
  },
  together: {
    label: "Live presence",
    description: "Real-time rooms for calls, co-play, focus, and quick spark sessions.",
    status: "Coming soon",
    tag: "Laptop"
  },
  space: {
    label: "Feelings & stories",
    description: "A soft space for feelings, stories, and keepsakes you want to keep close.",
    status: "Coming soon",
    tag: "Romantic OS"
  },
  life: {
    label: "Gentle logistics",
    description: "Lists, plans, and reminders that keep the practical side of love gentle.",
    status: "Coming soon",
    tag: "Laptop"
  },
  profile: {
    label: "Preferences",
    description: "Tune preferences, safety, and boundaries to fit your love story.",
    status: "Coming soon",
    tag: "Settings"
  }
};

type CardTone = {
  surface: string;
  halo: string;
  badge: string;
  icon: string;
  pill: string;
};

const CARD_TONES: Record<SectionId, CardTone> = {
  today: {
    surface: "from-[#9b5cfb]/70 via-[#b94cff]/70 to-[#ff9f8a]/85",
    halo: "bg-[radial-gradient(circle_at_25%_25%,rgba(255,255,255,0.16),transparent_42%),radial-gradient(circle_at_80%_70%,rgba(255,198,164,0.18),transparent_46%)]",
    badge: "from-[#ffe6a3] via-[#ff9acb] to-[#b084ff]",
    icon: "border-white/50 bg-white/15",
    pill: "border-white/[0.35] bg-white/15"
  },
  together: {
    surface: "from-[#14203e]/85 via-[#1d2a50]/75 to-[#142036]/85",
    halo: "bg-[radial-gradient(circle_at_24%_22%,rgba(124,176,255,0.22),transparent_40%),radial-gradient(circle_at_88%_68%,rgba(255,140,186,0.14),transparent_46%)]",
    badge: "from-[#ffd59f] via-[#ff9ac8] to-[#7ab8ff]",
    icon: "border-white/25 bg-white/12",
    pill: "border-white/20 bg-white/5"
  },
  space: {
    surface: "from-[#1f183d]/85 via-[#2c1c4b]/75 to-[#3a1f3d]/80",
    halo: "bg-[radial-gradient(circle_at_22%_22%,rgba(255,182,255,0.18),transparent_42%),radial-gradient(circle_at_78%_72%,rgba(255,148,186,0.16),transparent_48%)]",
    badge: "from-[#ffd7ff] via-[#ff9ccf] to-[#b084ff]",
    icon: "border-white/25 bg-white/12",
    pill: "border-white/20 bg-white/5"
  },
  life: {
    surface: "from-[#132524]/85 via-[#1c2d22]/78 to-[#2a261c]/82",
    halo: "bg-[radial-gradient(circle_at_22%_20%,rgba(162,255,215,0.18),transparent_44%),radial-gradient(circle_at_82%_70%,rgba(255,182,142,0.18),transparent_46%)]",
    badge: "from-[#ffe6a3] via-[#ffb38f] to-[#8be6c0]",
    icon: "border-white/20 bg-white/10",
    pill: "border-white/18 bg-white/5"
  },
  profile: {
    surface: "from-[#181c31]/85 via-[#25293a]/78 to-[#2f2032]/82",
    halo: "bg-[radial-gradient(circle_at_18%_22%,rgba(154,205,255,0.14),transparent_44%),radial-gradient(circle_at_80%_70%,rgba(255,176,152,0.17),transparent_46%)]",
    badge: "from-[#ffd6a5] via-[#ff99c2] to-[#9eb7ff]",
    icon: "border-white/22 bg-white/10",
    pill: "border-white/18 bg-white/5"
  }
};

const DISPLAY_TITLES: Record<SectionId, string> = {
  today: "Home",
  together: "Together",
  space: "Stories & Feelings",
  life: "Life",
  profile: "Profile"
};

type DesktopDashboardProps = {
  sections: RoadmapSection[];
};

export function DesktopDashboard({ sections }: DesktopDashboardProps) {
  const sectionsWithSpacer: Array<RoadmapSection | "spacer"> = [
    ...sections.slice(0, 3),
    "spacer",
    ...sections.slice(3)
  ];

  return (
    <div className="hidden flex-col gap-10 md:flex">
      <TopBar />

      <div id="pillars" className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
        {sectionsWithSpacer.map((section) =>
          section === "spacer" ? (
            <div key="spacer" className="hidden lg:block" aria-hidden />
          ) : (
            <PillarCard key={section.id} section={section} />
          )
        )}
      </div>
    </div>
  );
}

function TopBar() {
  return (
    <header className="sticky top-4 z-30 flex h-16 items-center justify-between gap-4 rounded-[18px] border border-white/10 bg-white/5 px-4 shadow-[0_12px_40px_rgba(3,1,12,0.45)] backdrop-blur-2xl sm:px-6">
      <div className="flex items-center gap-3">
        <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-500 via-pink-500 to-amber-400 text-lg font-semibold text-white shadow-inner">
          Y
        </span>
        <div className="leading-tight">
          <p className="text-[11px] uppercase tracking-[0.32em] text-white/60">YoGong</p>
          <p className="text-sm font-semibold text-white">Velvet OS · Laptop</p>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <div className="hidden overflow-hidden rounded-full border border-white/10 bg-white/10 p-1 text-[11px] font-medium uppercase tracking-[0.25em] text-white/75 sm:flex">
          <span className="rounded-full bg-gradient-to-r from-white/15 to-white/5 px-3 py-1.5 text-white shadow-inner">Laptop experience</span>
          <span className="px-3 py-1.5 text-white/70">Reviewer panel</span>
        </div>
        <div className="flex items-center -space-x-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[#05010c] bg-gradient-to-br from-indigo-500 to-purple-500 text-sm font-semibold shadow-inner">
            US
          </span>
          <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[#05010c] bg-gradient-to-br from-rose-400 to-orange-300 text-sm font-semibold shadow-inner">
            YG
          </span>
        </div>
      </div>
    </header>
  );
}

function PillarCard({ section }: { section: RoadmapSection }) {
  const meta = SECTION_COPY[section.id];
  const isPrimary = section.id === "today";
  const tone = CARD_TONES[section.id];

  return (
    <Link
      href={`/dashboard/${section.id}`}
      className={`group relative flex h-full min-h-[230px] flex-col justify-between overflow-hidden rounded-[30px] border p-6 text-left shadow-[0_26px_80px_rgba(3,1,12,0.55)] backdrop-blur-3xl transition duration-200 ease-out hover:-translate-y-1.5 hover:shadow-[0_32px_90px_rgba(255,124,182,0.18)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 ${
        isPrimary ? "border-white/30" : "border-white/15 bg-white/[0.02]"
      }`}
    >
      <div className="pointer-events-none absolute inset-0 opacity-80 transition duration-300 group-hover:opacity-100">
        <div className={`absolute inset-0 ${tone.surface} bg-gradient-to-br`} />
        <div className={`absolute inset-0 ${tone.halo}`} />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.05),transparent_55%)] mix-blend-screen" />
        <div className="absolute inset-0 rounded-[30px] border border-white/8" />
        <div className="absolute inset-4 rounded-[26px] border border-white/5 opacity-60" />
      </div>

      <div className="relative z-10 flex flex-col gap-5 text-white">
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-start gap-3">
            <div
              className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full border text-base font-semibold text-white shadow-inner transition duration-200 group-hover:scale-105 group-hover:shadow-[0_10px_30px_rgba(255,255,255,0.25)] ${tone.icon}`}
            >
              <PillarIcon id={section.id} isActive={true} />
            </div>
            <div className="space-y-1">
              <p className="text-[11px] uppercase tracking-[0.3em] text-white/70">{meta.label}</p>
              <h3 className="text-[20px] font-semibold leading-tight text-white">{DISPLAY_TITLES[section.id]}</h3>
            </div>
          </div>
          <span
            className={`inline-flex items-center rounded-full bg-gradient-to-r ${tone.badge} px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#1e0c13] shadow-[0_14px_40px_rgba(255,139,170,0.35)]`}
          >
            {meta.status}
          </span>
        </div>

        <p className="text-[14px] leading-6 text-white/85">{meta.description}</p>
      </div>
    </Link>
  );
}
