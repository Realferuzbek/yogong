"use client";

import { useMemo, useState } from "react";

import { ROADMAP_SECTIONS, type RoadmapSection, type SectionId } from "@/lib/roadmap";

export function RoadmapDashboard() {
  const [activeSection, setActiveSection] = useState<SectionId>(ROADMAP_SECTIONS[0].id);
  const visibleSection = useMemo(
    () => ROADMAP_SECTIONS.find((section) => section.id === activeSection) ?? ROADMAP_SECTIONS[0],
    [activeSection]
  );

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-midnight-800/70 via-midnight-900 to-black">
      <div className="pointer-events-none absolute inset-x-10 top-10 -z-10 h-64 rounded-[40px] bg-gradient-to-r from-pink-500/30 via-fuchsia-500/20 to-sky-500/30 blur-[110px]" />
      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-4 pb-32 pt-16 sm:px-6 lg:px-8">
        <header className="space-y-4 text-center">
          <p className="text-xs uppercase tracking-[0.6em] text-pink-200/70">Product Roadmap</p>
          <h1 className="text-4xl font-semibold text-white sm:text-5xl">Everything we are crafting for YoGong</h1>
          <p className="text-base text-slate-300 sm:text-lg">
            Five pillars, dozens of magical touchpoints. Every card is tagged as <span className="font-semibold text-white">Coming soon</span> while
            we polish the experience.
          </p>
        </header>

        <div className="hidden gap-6 md:grid md:grid-cols-2 lg:grid-cols-3">
          {ROADMAP_SECTIONS.map((section) => (
            <RoadmapSectionCard key={section.id} section={section} />
          ))}
        </div>

        <div className="md:hidden">
          <RoadmapSectionCard section={visibleSection} highlight />
        </div>
      </div>

      <nav className="fixed inset-x-4 bottom-4 z-50 rounded-3xl border border-white/10 bg-white/5 p-2 shadow-2xl backdrop-blur md:hidden">
        <div className="grid grid-cols-5 gap-1">
          {ROADMAP_SECTIONS.map((section) => {
            const isActive = section.id === activeSection;
            return (
              <button
                key={section.id}
                type="button"
                onClick={() => setActiveSection(section.id)}
                className={`flex flex-col items-center justify-center rounded-2xl px-2 py-2 text-[0.7rem] font-semibold ${
                  isActive ? "bg-white text-midnight-800" : "text-slate-200"
                }`}
                aria-pressed={isActive}
                aria-label={`Show ${section.title}`}
              >
                <span className="text-[0.65rem] uppercase tracking-wide">{section.title.split(" ")[0]}</span>
                <span className="text-[0.6rem] font-normal opacity-80">Coming</span>
              </button>
            );
          })}
        </div>
      </nav>
    </div>
  );
}

function RoadmapSectionCard({ section, highlight = false }: { section: RoadmapSection; highlight?: boolean }) {
  return (
    <section
      className={`group relative flex flex-col overflow-hidden rounded-[32px] border border-white/5 bg-gradient-to-b from-white/5 via-white/0 to-white/0 p-6 shadow-glow transition ${
        highlight ? "ring-2 ring-pink-400/80" : "hover:-translate-y-1"
      }`}
    >
      <div className={`absolute inset-0 -z-10 opacity-80 blur-3xl transition group-hover:opacity-100 ${section.gradient} bg-gradient-to-r`} />
      <div className="mb-4 flex items-center justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.4em] text-slate-200/60">{section.subtitle}</p>
          <h2 className="mt-2 text-2xl font-semibold text-white">{section.title}</h2>
        </div>
        <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-white/80">Coming soon</span>
      </div>
      <ul className="flex flex-col gap-3">
        {section.features.map((feature) => (
          <li
            key={feature}
            className="rounded-3xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-100 shadow-inner shadow-black/30"
          >
            <div className="flex items-start justify-between gap-3">
              <span className="font-medium leading-snug">{feature}</span>
              <span className="text-xs font-semibold uppercase tracking-wide text-pink-200">Coming soon</span>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
