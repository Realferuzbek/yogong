import Link from "next/link";

import { getFeatureRoute, type RoadmapSection, type SectionId } from "@/lib/roadmap";
import { PillarIcon } from "../shared/PillarIcon";

type MobileDashboardProps = {
  section: RoadmapSection;
  sections: RoadmapSection[];
  activeSectionId: SectionId;
  onSelectSection: (sectionId: SectionId) => void;
};

export function MobileDashboard({ section, sections, activeSectionId, onSelectSection }: MobileDashboardProps) {
  return (
    <>
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

      <MobileBottomTabs sections={sections} activeSectionId={activeSectionId} onSelectSection={onSelectSection} />
    </>
  );
}

type MobileBottomTabsProps = {
  sections: RoadmapSection[];
  activeSectionId: SectionId;
  onSelectSection: (sectionId: SectionId) => void;
};

function MobileBottomTabs({ sections, activeSectionId, onSelectSection }: MobileBottomTabsProps) {
  return (
    <nav className="md:hidden fixed bottom-4 left-1/2 z-40 flex w-[min(26rem,calc(100%-2rem))] -translate-x-1/2 items-center gap-2 rounded-[32px] border border-white/15 bg-black/75 px-2 py-2 shadow-card-soft backdrop-blur-3xl">
      {sections.map((section) => {
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
