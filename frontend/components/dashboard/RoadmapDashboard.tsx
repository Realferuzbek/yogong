'use client';

import Link from "next/link";
import { useMemo, useState } from "react";

import {
  ROADMAP_SECTIONS,
  getFeatureRoute,
  type RoadmapSection,
  type SectionId
} from "@/lib/roadmap";

export function RoadmapDashboard() {
  const [activeSectionId, setActiveSectionId] = useState<SectionId>(ROADMAP_SECTIONS[0].id);
  const activeSection = useMemo(
    () => ROADMAP_SECTIONS.find((section) => section.id === activeSectionId) ?? ROADMAP_SECTIONS[0],
    [activeSectionId]
  );

  return (
    <section className="relative isolate min-h-screen overflow-hidden bg-gradient-to-b from-[#03010a] via-[#070317] to-[#010105] text-white">
      <Aurora />

      <div className="relative mx-auto w-full max-w-6xl px-6 pb-32 pt-12 sm:px-10 lg:pt-16">
        <div className="hidden flex-col gap-8 md:flex">
          <TopBar />
          <WelcomePanel />

          <div id="pillars" className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {ROADMAP_SECTIONS.map((section) => (
              <PillarCard key={section.id} section={section} />
            ))}
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
      <div className="absolute left-1/2 top-[-120px] h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,_rgba(255,122,176,0.4),_transparent_60%)] blur-[150px]" />
      <div className="absolute -left-20 top-1/3 h-[360px] w-[360px] rounded-full bg-[radial-gradient(circle,_rgba(105,84,255,0.36),_transparent_60%)] blur-[150px]" />
      <div className="absolute -right-16 bottom-10 h-[300px] w-[300px] rounded-full bg-[radial-gradient(circle,_rgba(255,190,140,0.3),_transparent_60%)] blur-[140px]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(14,8,28,0.85),_rgba(3,1,8,0.95))]" />
    </div>
  );
}

function TopBar() {
  return (
    <header className="flex flex-wrap items-center justify-between gap-4 rounded-[999px] border border-white/10 bg-black/40 px-6 py-4 shadow-card-soft">
      <div className="flex items-center gap-3">
        <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-500 via-pink-500 to-amber-400 text-lg font-semibold text-white">
          Y
        </span>
        <div>
          <p className="text-xs uppercase tracking-[0.4em] text-white/60">YoGong</p>
          <p className="text-base font-semibold text-white">Romantic Roadmap</p>
        </div>
      </div>

      <div className="flex items-center gap-4 text-sm text-white/70">
        <p className="uppercase tracking-[0.3em]">Reviewer panel</p>
        <div className="flex items-center -space-x-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[#05010c] bg-gradient-to-br from-indigo-500 to-purple-500 text-sm font-semibold">
            US
          </span>
          <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[#05010c] bg-gradient-to-br from-rose-400 to-orange-300 text-sm font-semibold">
            YG
          </span>
        </div>
      </div>
    </header>
  );
}

function WelcomePanel() {
  return (
    <div className="relative overflow-hidden rounded-[50px] border border-white/10 bg-white/[0.07] px-8 py-10 shadow-card-soft">
      <div className="pointer-events-none absolute inset-0 opacity-50">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(77,39,141,0.4),_transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,_rgba(255,138,170,0.2),_transparent_60%)]" />
      </div>

      <div className="relative z-10 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex items-center gap-5">
          <div className="h-16 w-16 rounded-[28px] border border-white/20 bg-gradient-to-br from-purple-500 to-rose-500 p-1 shadow-inner">
            <div className="flex h-full w-full items-center justify-center rounded-[22px] bg-black/40 text-xl font-semibold">♥</div>
          </div>
          <div>
            <p className="text-sm uppercase tracking-[0.4em] text-white/60">Welcome</p>
            <h1 className="text-3xl font-semibold leading-tight text-white">Velvet Studio Crew</h1>
            <p className="text-white/75">romance@yogong.app</p>
          </div>
        </div>
        <div className="flex flex-wrap gap-4 text-sm">
          <WelcomeChip label="Drops" value="Weekly beta batches" />
          <WelcomeChip label="Focus" value="Heartfelt rituals & utilities" />
          <WelcomeChip label="Status" value="All lounges coming soon" />
        </div>
      </div>
    </div>
  );
}

function WelcomeChip({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-[24px] border border-white/20 bg-white/5 px-4 py-3 text-left text-white/80">
      <p className="text-[0.55rem] uppercase tracking-[0.4em] text-white/60">{label}</p>
      <p className="mt-1 text-sm font-semibold text-white">{value}</p>
    </div>
  );
}

function PillarCard({ section }: { section: RoadmapSection }) {
  const initials = section.title
    .split(/\s+/)
    .map((word) => word[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <Link
      href={`/dashboard/${section.id}`}
      className="group relative flex flex-col gap-4 overflow-hidden rounded-[38px] border border-white/12 bg-gradient-to-b from-white/[0.07] via-white/[0.03] to-black/40 p-6 text-left shadow-card-soft transition duration-300 hover:-translate-y-1 hover:border-white/30"
    >
      <div className="pointer-events-none absolute inset-0 opacity-40">
        <div className={`absolute inset-0 ${section.gradient} bg-gradient-to-br blur-3xl`} />
        <div className="absolute inset-0 rounded-[38px] border border-white/10" />
      </div>

      <div className="relative z-10 flex items-center gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/20 bg-black/50 text-base font-semibold text-white">
          {initials}
        </div>
        <div>
          <p className="text-[0.6rem] uppercase tracking-[0.45em] text-white/70">{section.subtitle}</p>
          <h3 className="mt-1 text-[1.35rem] font-semibold text-white">{section.title}</h3>
        </div>
      </div>

      <p className="relative z-10 text-sm text-white/75">
        {section.features.length} sub-features waiting to be unwrapped. Tap in to explore every ritual and touchpoint lovingly planned for
        this pillar.
      </p>

      <div className="relative z-10 flex items-center justify-between pt-2 text-sm text-white/85">
        <span className="inline-flex items-center gap-2 rounded-full border border-white/20 px-3 py-1">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-300/70" />
          Detail view
        </span>
        <span className="accent-gradient inline-flex items-center rounded-full px-3 py-1 text-[0.58rem] font-semibold uppercase tracking-[0.35em] text-[#2f0c18]">
          Coming soon
        </span>
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
