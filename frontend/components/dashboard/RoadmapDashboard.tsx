import Link from "next/link";

import { ROADMAP_SECTIONS, type RoadmapSection } from "@/lib/roadmap";

export function RoadmapDashboard() {
  return (
    <section className="relative isolate min-h-screen overflow-hidden bg-gradient-to-b from-[#03010a] via-[#070317] to-[#010105] text-white">
      <Aurora />

      <div className="relative mx-auto flex w-full max-w-6xl flex-col gap-10 px-6 pb-20 pt-16 sm:px-10 lg:pt-20">
        <DashboardHero />

        <div id="pillars" className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {ROADMAP_SECTIONS.map((section) => (
            <FeatureCard key={section.id} section={section} />
          ))}
        </div>
      </div>
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

function DashboardHero() {
  return (
    <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_320px]">
      <div className="relative overflow-hidden rounded-[40px] border border-white/10 bg-white/[0.05] p-8 shadow-card-soft">
        <div className="pointer-events-none absolute inset-0 opacity-50">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.18),_transparent_55%)]" />
        </div>

        <div className="relative z-10 flex flex-col gap-4">
          <p className="text-[0.7rem] uppercase tracking-[0.5em] text-white/70">Welcome to YoGong</p>
          <h1 className="text-3xl font-semibold leading-snug text-white sm:text-[2.35rem]">
            Track every romantic pillar from one velvet dashboard.
          </h1>
          <p className="text-base text-white/75 sm:text-lg">
            Five worlds (Today, Together, Space, Life, Profile) each hold dozens of rituals, prompts, and utilities. Wander in,
            open a pillar, and peek at every sub-feature before we light them up.
          </p>

          <div className="mt-6 grid gap-4 text-sm text-white/70 sm:grid-cols-2">
            <HeroStat label="Main pillars" value="5" detail="Crafted for every moment" />
            <HeroStat label="Sub features" value={`${ROADMAP_SECTIONS.reduce((sum, sec) => sum + sec.features.length, 0)}+`} detail="All in velvet beta" />
            <HeroStat label="Status" value="Coming soon" detail="Invite-only previews" />
            <HeroStat label="Mood" value="Romantic OS" detail="Built for soulmates" />
          </div>
        </div>
      </div>

      <div className="rounded-[36px] border border-white/10 bg-gradient-to-br from-[#ff8fba]/70 via-[#ffb170]/70 to-[#ffd86d]/60 p-6 text-[#2f0b13] shadow-accent-glow">
        <p className="text-[0.65rem] uppercase tracking-[0.45em]">Velvet Access</p>
        <h2 className="mt-3 text-2xl font-semibold">Roadmap Dashboard</h2>
        <p className="mt-2 text-sm text-[#481929]">
          Open any pillar to explore every planned touchpoint. Each tile links to its own lounge so you can plan future work.
        </p>

        <Link
          href="#pillars"
          className="mt-6 inline-flex h-12 w-full items-center justify-center rounded-full bg-[#2e0a1b] text-sm font-semibold uppercase tracking-[0.3em] text-white transition duration-200 hover:-translate-y-0.5"
        >
          Browse pillars
        </Link>

        <div className="mt-6 space-y-2 text-sm text-[#47152a]">
          <p>• Beta drops weekly</p>
          <p>• Deep build diary</p>
          <p>• Couple-first energy</p>
        </div>
      </div>
    </div>
  );
}

function HeroStat({ label, value, detail }: { label: string; value: string; detail: string }) {
  return (
    <div className="rounded-[22px] border border-white/10 bg-white/5 px-4 py-3 backdrop-blur-xl">
      <p className="text-[0.6rem] uppercase tracking-[0.4em] text-white/65">{label}</p>
      <p className="mt-2 text-2xl font-semibold text-white">{value}</p>
      <p className="text-xs text-white/70">{detail}</p>
    </div>
  );
}

function FeatureCard({ section }: { section: RoadmapSection }) {
  return (
    <Link
      href={`/dashboard/${section.id}`}
      className="group relative flex flex-col gap-5 overflow-hidden rounded-[34px] border border-white/10 bg-white/[0.04] p-6 text-left shadow-card-soft transition duration-300 hover:-translate-y-1 hover:border-white/30 hover:bg-white/[0.08]"
    >
      <div className="pointer-events-none absolute inset-0 opacity-40">
        <div className={`absolute inset-0 ${section.gradient} bg-gradient-to-br blur-3xl`} />
      </div>

      <div className="relative z-10 flex items-center gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-[18px] bg-white/10 text-lg font-semibold text-white">
          {section.title
            .split(" ")
            .slice(0, 2)
            .map((word) => word[0])
            .join("")}
        </div>
        <div>
          <p className="text-[0.62rem] uppercase tracking-[0.45em] text-white/70">{section.subtitle}</p>
          <h3 className="mt-1 text-[1.35rem] font-semibold text-white">{section.title}</h3>
        </div>
      </div>

      <p className="relative z-10 text-sm text-white/75">
        {section.features.length} sub-features waiting to be unwrapped. Tap in to see every ritual and utility planned for this pillar.
      </p>

      <div className="relative z-10 flex items-center justify-between text-sm text-white/80">
        <span className="rounded-full border border-white/15 px-3 py-1">View details</span>
        <span className="accent-gradient inline-flex items-center rounded-full px-3 py-1 text-[0.58rem] font-semibold uppercase tracking-[0.35em] text-[#2f0c18]">
          Coming soon
        </span>
      </div>
    </Link>
  );
}
