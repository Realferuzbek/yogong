'use client';

import { useMemo, useState } from "react";

import { ROADMAP_SECTIONS, type RoadmapSection, type SectionId } from "@/lib/roadmap";
import { DesktopDashboard } from "./desktop/DesktopDashboard";
import { MobileDashboard } from "./mobile/MobileDashboard";

export function RoadmapDashboard() {
  const [activeSectionId, setActiveSectionId] = useState<SectionId>(ROADMAP_SECTIONS[0].id);
  const activeSection: RoadmapSection = useMemo(
    () => ROADMAP_SECTIONS.find((section) => section.id === activeSectionId) ?? ROADMAP_SECTIONS[0],
    [activeSectionId]
  );

  return (
    <section className="relative isolate min-h-screen overflow-hidden bg-gradient-to-b from-[#04010d] via-[#070317] to-[#02010a] text-white">
      <Aurora />
      <Noise />

      <div className="relative mx-auto w-full max-w-[1200px] px-6 pb-32 pt-10 sm:px-8 lg:pt-14">
        <DesktopDashboard sections={ROADMAP_SECTIONS} />
        <MobileDashboard
          section={activeSection}
          sections={ROADMAP_SECTIONS}
          activeSectionId={activeSectionId}
          onSelectSection={setActiveSectionId}
        />
      </div>
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
