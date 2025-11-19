'use client';

import { useEffect, useMemo, useState } from "react";

import { ROADMAP_SECTIONS, type RoadmapSection } from "@/lib/roadmap";

export function RoadmapDashboard() {
  const [activeSectionId, setActiveSectionId] = useState<RoadmapSection["id"]>(ROADMAP_SECTIONS[0].id);
  const activeSection =
    useMemo(() => ROADMAP_SECTIONS.find((section) => section.id === activeSectionId) ?? ROADMAP_SECTIONS[0], [activeSectionId]);
  const [spotlightFeature, setSpotlightFeature] = useState<string>(activeSection.features[0]);

  useEffect(() => {
    setSpotlightFeature(activeSection.features[0]);
  }, [activeSection]);

  const totalFeatures = useMemo(
    () => ROADMAP_SECTIONS.reduce((sum, section) => sum + section.features.length, 0),
    []
  );

  return (
    <section className="relative isolate overflow-hidden bg-gradient-to-b from-[#04010c] via-[#060317] to-[#020108] text-white">
      <BackgroundAurora />

      <div className="relative mx-auto flex min-h-screen w-full max-w-[92rem] flex-col gap-12 px-6 pb-20 pt-16 sm:px-10 lg:px-12">
        <HeroPanel totalFeatures={totalFeatures} />

        <div className="grid gap-8 xl:grid-cols-[360px_minmax(0,1fr)]">
          <aside className="flex flex-col gap-4">
            {ROADMAP_SECTIONS.map((section) => (
              <PillarCard
                key={section.id}
                section={section}
                isActive={section.id === activeSection.id}
                onSelect={() => setActiveSectionId(section.id)}
              />
            ))}
          </aside>

          <FeatureShowcase
            section={activeSection}
            spotlightFeature={spotlightFeature}
            onSelectFeature={setSpotlightFeature}
          />
        </div>
      </div>
    </section>
  );
}

function BackgroundAurora() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <div className="absolute left-1/2 top-0 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,_rgba(255,110,154,0.35),_transparent_60%)] blur-[140px]" />
      <div className="absolute -left-32 top-1/3 h-[360px] w-[360px] rounded-full bg-[radial-gradient(circle,_rgba(96,84,255,0.35),_transparent_60%)] blur-[160px]" />
      <div className="absolute -right-28 bottom-12 h-[320px] w-[320px] rounded-full bg-[radial-gradient(circle,_rgba(255,180,120,0.35),_transparent_60%)] blur-[150px]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(16,7,32,0.92),_rgba(4,2,10,0.95))]" />
    </div>
  );
}

function HeroPanel({ totalFeatures }: { totalFeatures: number }) {
  const stats = [
    {
      label: "Romantic pillars",
      value: ROADMAP_SECTIONS.length.toString(),
      caption: "Today • Together • Space • Life • Profile"
    },
    {
      label: "Touchpoints in the works",
      value: `${totalFeatures}+`,
      caption: "Intimate prompts, rituals, & utilities"
    },
    {
      label: "Status",
      value: "Coming soon",
      caption: "Every corner still wrapped in velvet secrecy"
    }
  ];

  return (
    <header className="relative overflow-hidden rounded-[48px] border border-white/10 bg-[rgba(8,4,18,0.92)] px-8 py-12 text-white shadow-glow">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.14),_transparent_55%)]" />
        <div className="absolute inset-y-0 left-1/3 w-1/2 rotate-6 bg-gradient-to-br from-rose-500/30 via-orange-400/20 to-yellow-300/10 opacity-70 blur-3xl" />
      </div>

      <div className="relative z-10 flex flex-col gap-8 lg:flex-row lg:items-center">
        <div className="flex-1">
          <p className="text-[0.7rem] uppercase tracking-[0.55em] text-rose-100/70">Yogong Roadmap</p>
          <h1 className="mt-4 text-4xl font-semibold leading-tight text-white sm:text-[2.7rem]">
            Building the most heartfelt operating system for relationships.
          </h1>
          <p className="mt-4 text-base leading-relaxed text-white/75 sm:text-lg">
            This dashboard is your velvet sneak peek. Wander through every pillar, feel the glow, and see what is simmering in
            the studio before we unwrap it for the world.
          </p>
        </div>

        <div className="w-full max-w-sm rounded-[32px] border border-white/10 bg-white/[0.05] p-6 shadow-card-soft">
          <p className="text-sm uppercase tracking-[0.4em] text-white/70">Preview Access</p>
          <p className="mt-2 text-lg font-semibold text-white">Explore the roadmap layers</p>
          <button
            className="hero-focus-ring accent-gradient shadow-accent-glow mt-4 inline-flex h-12 w-full items-center justify-center rounded-full px-8 text-[0.95rem] font-semibold text-[#2f0c18] transition duration-200 hover:-translate-y-0.5 hover:brightness-110"
            type="button"
          >
            Open Roadmap Dashboard
          </button>
          <p className="mt-3 text-sm text-white/70">Beta invitations roll out weekly. Stay close.</p>
        </div>
      </div>

      <div className="relative z-10 mt-10 grid gap-4 text-left sm:grid-cols-3">
        {stats.map((stat) => (
          <div key={stat.label} className="rounded-[26px] border border-white/10 bg-white/[0.03] px-6 py-5 backdrop-blur-2xl">
            <p className="text-[0.65rem] uppercase tracking-[0.45em] text-white/70">{stat.label}</p>
            <p className="mt-3 text-3xl font-semibold text-white">{stat.value}</p>
            <p className="mt-2 text-sm text-white/70">{stat.caption}</p>
          </div>
        ))}
      </div>
    </header>
  );
}

type PillarCardProps = {
  section: RoadmapSection;
  isActive: boolean;
  onSelect: () => void;
};

function PillarCard({ section, isActive, onSelect }: PillarCardProps) {
  return (
    <button
      type="button"
      onClick={onSelect}
      aria-pressed={isActive}
      className={`group relative overflow-hidden rounded-[30px] border px-6 py-6 text-left transition duration-300 ${
        isActive
          ? "border-white/40 bg-white/[0.08] shadow-accent-glow"
          : "border-white/10 bg-white/[0.03] hover:border-white/30 hover:bg-white/[0.05]"
      }`}
    >
      <div className="pointer-events-none absolute inset-0 opacity-60">
        <div className={`absolute inset-0 ${section.gradient} bg-gradient-to-r opacity-40 blur-3xl`} />
        <div className="absolute inset-0 rounded-[30px] border border-white/10 opacity-40" />
      </div>
      <div className="relative z-10 flex flex-col gap-4">
        <div>
          <p className="text-[0.63rem] uppercase tracking-[0.5em] text-white/70">{section.subtitle}</p>
          <h2 className="mt-2 text-[1.2rem] font-semibold text-white">{section.title}</h2>
        </div>
        <div className="flex items-center justify-between text-sm text-white/70">
          <span>{section.features.length} romantic touchpoints</span>
          <span className="accent-gradient inline-flex items-center rounded-full px-3 py-1 text-[0.57rem] font-semibold uppercase tracking-[0.3em] text-[#2f0c18] shadow-accent-glow">
            Enter
          </span>
        </div>
      </div>
    </button>
  );
}

type FeatureShowcaseProps = {
  section: RoadmapSection;
  spotlightFeature: string;
  onSelectFeature: (feature: string) => void;
};

function FeatureShowcase({ section, spotlightFeature, onSelectFeature }: FeatureShowcaseProps) {
  const romanceCopy = `We are threading ${spotlightFeature} into ${section.title} so couples can unwrap it when they need it most. Expect velvet lighting, gentle nudges, and intentional rituals tuned to ${section.subtitle.toLowerCase()}.`;

  return (
    <div className="relative overflow-hidden rounded-[40px] border border-white/10 bg-white/[0.04] px-8 py-10 shadow-card-soft backdrop-blur-[26px]">
      <div className="pointer-events-none absolute inset-0 opacity-30">
        <div className={`absolute inset-0 ${section.gradient} bg-gradient-to-br blur-3xl`} />
      </div>

      <div className="relative z-10 flex flex-col gap-8">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-[0.65rem] uppercase tracking-[0.5em] text-white/70">Active pillar</p>
            <h2 className="mt-2 text-3xl font-semibold text-white sm:text-[2rem]">{section.title}</h2>
            <p className="mt-2 text-sm text-white/80 sm:text-base">{section.subtitle}</p>
          </div>
          <div className="flex flex-wrap gap-3 text-sm text-white/80">
            <span className="rounded-full border border-white/20 px-4 py-2">{section.features.length} features</span>
            <span className="rounded-full border border-white/20 px-4 py-2">Coming soon</span>
          </div>
        </div>

        <ul className="grid gap-4 sm:grid-cols-2">
          {section.features.map((feature) => {
            const isFeatureActive = feature === spotlightFeature;
            return (
              <li key={feature}>
                <button
                  type="button"
                  onClick={() => onSelectFeature(feature)}
                  aria-pressed={isFeatureActive}
                  className={`group relative flex w-full flex-col rounded-[22px] border px-5 py-4 text-left transition duration-200 ${
                    isFeatureActive
                      ? "border-white/50 bg-white/[0.12] shadow-accent-glow"
                      : "border-white/15 bg-white/[0.05] hover:border-white/40 hover:bg-white/[0.08]"
                  }`}
                >
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-[1rem] font-semibold leading-snug text-white">{feature}</span>
                    <span className="accent-gradient inline-flex shrink-0 items-center rounded-full px-3 py-1 text-[0.58rem] font-semibold uppercase tracking-[0.3em] text-[#2f0c18]">
                      Coming soon
                    </span>
                  </div>
                  <p className="mt-2 text-[0.85rem] text-white/70">
                    Crafted inside <span className="font-semibold text-white">{section.title}</span>
                  </p>
                </button>
              </li>
            );
          })}
        </ul>

        <div className="rounded-[28px] border border-white/15 bg-black/30 px-6 py-6 shadow-inner backdrop-blur-3xl">
          <p className="text-[0.65rem] uppercase tracking-[0.45em] text-white/70">Spotlight</p>
          <h3 className="accent-text mt-3 text-2xl font-semibold">{spotlightFeature}</h3>
          <p className="mt-3 text-sm text-white/80 sm:text-base">{romanceCopy}</p>
          <div className="mt-5 flex flex-wrap gap-3 text-xs text-white/80">
            <span className="rounded-full border border-white/20 px-3 py-1">{section.title}</span>
            <span className="rounded-full border border-white/20 px-3 py-1">{section.subtitle}</span>
            <span className="rounded-full border border-white/20 px-3 py-1">Velvet beta</span>
          </div>
        </div>
      </div>
    </div>
  );
}
