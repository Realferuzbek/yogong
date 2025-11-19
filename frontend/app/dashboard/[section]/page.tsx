import Link from "next/link";
import { notFound } from "next/navigation";

import { ROADMAP_SECTIONS, getSectionById, toFeatureSlug, type RoadmapSection } from "@/lib/roadmap";

type SectionPageProps = {
  params: { section: string };
};

export function generateStaticParams() {
  return ROADMAP_SECTIONS.map((section) => ({ section: section.id }));
}

export default function SectionPage({ params }: SectionPageProps) {
  const section = getSectionById(params.section);

  if (!section) {
    notFound();
  }

  return (
    <main className="relative isolate min-h-screen overflow-hidden bg-gradient-to-b from-[#04010c] via-[#07041b] to-[#010106] text-white">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className={`absolute inset-0 ${section.gradient} bg-gradient-to-br opacity-30 blur-[200px]`} />
      </div>

      <div className="relative mx-auto flex w-full max-w-5xl flex-col gap-10 px-6 pb-20 pt-16 sm:px-10 lg:pt-20">
        <Link
          href="/dashboard"
          className="inline-flex w-fit items-center text-sm font-medium text-white/70 transition hover:text-white"
        >
          ← Back to romantic pillars
        </Link>

        <SectionHero section={section} />

        <div className="grid gap-5 sm:grid-cols-2">
          {section.features.map((feature) => (
            <FeatureTile key={feature} section={section} feature={feature} />
          ))}
        </div>
      </div>
    </main>
  );
}

function SectionHero({ section }: { section: RoadmapSection }) {
  return (
    <div className="relative overflow-hidden rounded-[46px] border border-white/10 bg-white/[0.05] px-8 py-10 shadow-card-soft">
      <div className="pointer-events-none absolute inset-0 opacity-40">
        <div className={`absolute inset-0 ${section.gradient} bg-gradient-to-br blur-3xl`} />
      </div>

      <div className="relative z-10">
        <p className="text-[0.65rem] uppercase tracking-[0.5em] text-white/70">Pillar</p>
        <h1 className="mt-3 text-4xl font-semibold text-white">{section.title}</h1>
        <p className="mt-3 text-base text-white/80">{section.subtitle}</p>
        <p className="mt-4 max-w-3xl text-sm text-white/70">
          Each sub-feature below will open in its own velvet room. For now, every door reveals a polished &ldquo;Coming soon&rdquo; state so
          your team can plan future development with clarity.
        </p>
      </div>
    </div>
  );
}

function FeatureTile({ section, feature }: { section: RoadmapSection; feature: string }) {
  return (
    <Link
      href={`/dashboard/${section.id}/${toFeatureSlug(feature)}`}
      className="group relative flex flex-col gap-4 overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.04] px-6 py-6 transition duration-200 hover:-translate-y-0.5 hover:border-white/30 hover:bg-white/[0.08]"
    >
      <div className="pointer-events-none absolute inset-0 opacity-25">
        <div className={`absolute inset-0 ${section.gradient} bg-gradient-to-br blur-2xl`} />
      </div>

      <div className="relative z-10 flex items-start justify-between gap-3">
        <div>
          <p className="text-[0.6rem] uppercase tracking-[0.45em] text-white/70">Coming soon</p>
          <h2 className="mt-2 text-xl font-semibold text-white">{feature}</h2>
        </div>
        <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-white/20 text-lg text-white/80">
          ↗
        </span>
      </div>

      <p className="relative z-10 text-sm text-white/75">
        Part of the {section.title} experience. Tap to view the dedicated detail screen for this romantic touchpoint.
      </p>
    </Link>
  );
}
