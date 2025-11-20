'use client';

import Link from "next/link";
import { useMemo, useState } from "react";

import {
  ROADMAP_SECTIONS,
  getFeatureRoute,
  type RoadmapSection,
  type SectionId
} from "@/lib/roadmap";

const SECTION_COPY: Record<SectionId, { label: string; description: string; status: string; tag: string }> = {
  today: {
    label: "Daily rituals",
    description: "Tiny rituals and prompts to keep you in each other's orbit.",
    status: "Preview",
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

export function RoadmapDashboard() {
  const [activeSectionId, setActiveSectionId] = useState<SectionId>(ROADMAP_SECTIONS[0].id);
  const activeSection = useMemo(
    () => ROADMAP_SECTIONS.find((section) => section.id === activeSectionId) ?? ROADMAP_SECTIONS[0],
    [activeSectionId]
  );
  const sectionsWithSpacer: Array<RoadmapSection | "spacer"> = [
    ...ROADMAP_SECTIONS.slice(0, 3),
    "spacer",
    ...ROADMAP_SECTIONS.slice(3)
  ];

  return (
    <section className="relative isolate min-h-screen overflow-hidden bg-gradient-to-b from-[#04010d] via-[#070317] to-[#02010a] text-white">
      <Aurora />
      <Noise />

      <div className="relative mx-auto w-full max-w-[1200px] px-6 pb-32 pt-10 sm:px-8 lg:pt-14">
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

        <MobileExperience section={activeSection} />
      </div>

      <MobileBottomTabs activeSectionId={activeSectionId} onSelectSection={setActiveSectionId} />
    </section>
  );
}

function Aurora() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <div className="absolute left-1/2 top-[-140px] h-[620px] w-[620px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,_rgba(255,122,176,0.4),_transparent_60%)] blur-[180px]" />
      <div className="absolute -left-24 top-1/3 h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle,_rgba(105,84,255,0.36),_transparent_60%)] blur-[170px]" />
      <div className="absolute -right-20 bottom-4 h-[360px] w-[360px] rounded-full bg-[radial-gradient(circle,_rgba(255,190,140,0.3),_transparent_60%)] blur-[160px]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(14,8,28,0.85),_rgba(3,1,8,0.95))]" />
    </div>
  );
}

function Noise() {
  return (
    <div
      className="pointer-events-none absolute inset-0 -z-10 opacity-[0.08] mix-blend-soft-light"
      style={{
        backgroundImage:
          "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160' viewBox='0 0 160 160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='160' height='160' filter='url(%23n)' opacity='0.4'/%3E%3C/svg%3E\")"
      }}
    />
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
              <h3 className="text-[20px] font-semibold leading-tight text-white">{section.title}</h3>
            </div>
          </div>
          <span
            className={`inline-flex items-center rounded-full bg-gradient-to-r ${tone.badge} px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#1e0c13] shadow-[0_14px_40px_rgba(255,139,170,0.35)]`}
          >
            {meta.status}
          </span>
        </div>

        <p className="text-[14px] leading-6 text-white/85">{meta.description}</p>

        <div className="flex items-center justify-between gap-3 pt-1 text-sm text-white/90">
          <span
            className={`inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-sm font-medium transition duration-200 ${tone.pill} hover:border-white/55 hover:text-white`}
          >
            <span className="h-1.5 w-1.5 rounded-full bg-white/80 transition duration-200 group-hover:bg-white" />
            Detail view
          </span>
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center rounded-full border border-white/18 bg-white/[0.06] px-3 py-1 text-[11px] uppercase tracking-[0.28em] text-white/75">
              {meta.tag}
            </span>
            <span className="inline-flex items-center rounded-full border border-white/16 bg-white/[0.05] px-3 py-1 text-[11px] uppercase tracking-[0.28em] text-white/70">
              Romantic OS
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}

function MobileExperience({ section }: { section: RoadmapSection }) {
  return (
    <div className="flex flex-col gap-5 pb-10 pt-4 md:hidden">
      <div className="rounded-[32px] border border-white/10 bg-white/[0.08] px-6 py-7 shadow-card-soft">
        <p className="text-[0.6rem] uppercase tracking-[0.45em] text-white/70">Pillar</p>
        <h2 className="mt-2 text-2xl font-semibold text-white">{section.title}</h2>
        <p className="mt-2 text-sm text-white/75">{section.subtitle}</p>
        <div className="mt-4 flex items-center justify-between text-sm text-white/80">
          <span>{section.features.length} romantic sub-features</span>
          <span className="accent-gradient inline-flex items-center rounded-full px-3 py-1 text-[0.55rem] font-semibold uppercase tracking-[0.35em] text-[#2f0c18]">
            Coming soon
          </span>
        </div>
      </div>

      <div className="space-y-3">
        {section.features.map((feature) => (
          <Link
            key={feature}
            href={getFeatureRoute(section.id, feature)}
            className="group flex flex-col gap-2 rounded-[28px] border border-white/10 bg-black/40 px-5 py-4 shadow-card-soft transition hover:border-white/30"
          >
            <div className="flex items-center justify-between gap-3">
              <span className="text-base font-semibold text-white">{feature}</span>
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-2xl border border-white/20 text-lg text-white/80 transition group-hover:border-white/40">
                ↗
              </span>
            </div>
            <p className="text-sm text-white/70">Dedicated lounge opens soon.</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

type MobileBottomTabsProps = {
  activeSectionId: SectionId;
  onSelectSection: (sectionId: SectionId) => void;
};

function MobileBottomTabs({ activeSectionId, onSelectSection }: MobileBottomTabsProps) {
  return (
    <nav className="md:hidden fixed bottom-4 left-1/2 z-40 flex w-[min(26rem,calc(100%-2rem))] -translate-x-1/2 items-center gap-2 rounded-[32px] border border-white/15 bg-black/75 px-2 py-2 shadow-card-soft backdrop-blur-3xl">
      {ROADMAP_SECTIONS.map((section) => {
        const isActive = section.id === activeSectionId;
        const label = section.title.replace(/\(.*?\)/, "").split("/")[0].trim();
        return (
          <button
            key={section.id}
            type="button"
            onClick={() => onSelectSection(section.id)}
            className={`flex flex-1 flex-col items-center gap-1 rounded-[26px] px-2 py-2 transition ${
              isActive ? "bg-white/15 text-white" : "text-white/60 hover:text-white"
            }`}
            aria-pressed={isActive}
          >
            <PillarIcon id={section.id} isActive={isActive} />
            <span className="text-[0.6rem] font-semibold uppercase tracking-[0.3em]">{label}</span>
          </button>
        );
      })}
    </nav>
  );
}

function PillarIcon({ id, isActive }: { id: SectionId; isActive: boolean }) {
  const stroke = isActive ? "#ffffff" : "rgba(255,255,255,0.65)";
  const secondary = isActive ? "rgba(255,255,255,0.9)" : "rgba(255,255,255,0.45)";

  switch (id) {
    case "today":
      return (
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke={stroke} strokeWidth="1.5" strokeLinecap="round">
          <circle cx="12" cy="12" r="4.5" />
          <path d="M12 4V2" />
          <path d="M12 22v-2" />
          <path d="m4.93 4.93 1.4 1.4" />
          <path d="m17.66 17.66 1.41 1.41" />
          <path d="M4 12H2" />
          <path d="M22 12h-2" />
          <path d="m4.93 19.07 1.4-1.4" />
          <path d="m17.66 6.34 1.41-1.41" />
        </svg>
      );
    case "together":
      return (
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke={stroke} strokeWidth="1.5" strokeLinecap="round">
          <path
            d="M12 20s-5.5-3.35-5.5-7.5A3.5 3.5 0 0 1 10 9c1.66 0 2.5 1 2 3 .5-2 1.5-3 3.5-3a3.5 3.5 0 0 1 3.5 3.5C19 16.65 12 20 12 20Z"
            fill={secondary}
            fillOpacity={isActive ? 0.3 : 0.15}
          />
        </svg>
      );
    case "space":
      return (
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke={stroke} strokeWidth="1.5" strokeLinecap="round">
          <path d="M12 2v3" />
          <path d="M12 19v3" />
          <path d="M4.22 4.22 6.34 6.34" />
          <path d="m17.66 17.66 2.12 2.12" />
          <path d="M2 12h3" />
          <path d="M19 12h3" />
          <circle cx="12" cy="12" r="4.5" />
        </svg>
      );
    case "life":
      return (
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke={stroke} strokeWidth="1.5" strokeLinecap="round">
          <rect x="3" y="4" width="18" height="17" rx="3" />
          <path d="M16 2v4" />
          <path d="M8 2v4" />
          <path d="M3 10h18" />
          <path d="m9 15 2 2 4-4" />
        </svg>
      );
    case "profile":
      return (
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke={stroke} strokeWidth="1.5" strokeLinecap="round">
          <circle cx="12" cy="8" r="4" />
          <path d="M5.5 20.5a6.5 6.5 0 0 1 13 0" />
        </svg>
      );
    default:
      return null;
  }
}
