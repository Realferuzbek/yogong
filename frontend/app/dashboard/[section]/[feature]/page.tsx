import Link from "next/link";
import { notFound } from "next/navigation";

import {
  ROADMAP_SECTIONS,
  getFeatureFromSection,
  getSectionById,
  toFeatureSlug,
  type RoadmapSection
} from "@/lib/roadmap";

type FeaturePageProps = {
  params: { section: string; feature: string };
};

export function generateStaticParams() {
  return ROADMAP_SECTIONS.flatMap((section) =>
    section.features.map((feature) => ({
      section: section.id,
      feature: toFeatureSlug(feature)
    }))
  );
}

export default function FeaturePage({ params }: FeaturePageProps) {
  const section = getSectionById(params.section);
  if (!section) {
    notFound();
  }

  const feature = getFeatureFromSection(section, params.feature);

  if (!feature) {
    notFound();
  }

  return (
    <main className="relative isolate flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-b from-[#05010c] via-[#06041a] to-[#010107] px-6 py-16 text-white sm:px-10">
      <FeatureBackdrop section={section} />

      <div className="relative z-10 w-full max-w-3xl rounded-[52px] border border-white/10 bg-white/[0.04] px-10 py-12 text-center shadow-card-soft">
        <Link href={`/dashboard/${section.id}`} className="text-sm text-white/70 transition hover:text-white">
          ← Back to {section.title}
        </Link>

        <p className="mt-6 text-[0.65rem] uppercase tracking-[0.5em] text-white/70">Coming soon</p>
        <h1 className="mt-3 text-4xl font-semibold text-white">{feature}</h1>
        <p className="mt-4 text-base text-white/75">
          We are sculpting {feature} inside the {section.title} pillar. Expect thoughtful rituals, playful moments, and utilities tailored to{" "}
          {section.subtitle.toLowerCase()}. For now, this lounge holds space while we polish the full experience.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4 text-sm text-white/80">
          <span className="rounded-full border border-white/20 px-4 py-2">{section.title}</span>
          <span className="rounded-full border border-white/20 px-4 py-2">Velvet beta</span>
          <span className="rounded-full border border-white/20 px-4 py-2">Romantic OS</span>
        </div>

        <div className="mt-10 rounded-[28px] border border-white/15 bg-black/30 px-6 py-5 text-sm text-white/75">
          <p>
            Want to help shape this feature? Drop us a note with stories, rituals, or delightful details you would love to see inside{" "}
            {feature}.
          </p>
        </div>
      </div>
    </main>
  );
}

function FeatureBackdrop({ section }: { section: RoadmapSection }) {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10">
      <div className={`absolute inset-0 ${section.gradient} bg-gradient-to-br opacity-30 blur-[220px]`} />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(18,8,40,0.8),_rgba(2,1,8,0.95))]" />
    </div>
  );
}
