import { ROADMAP_SECTIONS, type RoadmapSection } from "@/lib/roadmap";

export function RoadmapDashboard() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-plum-900 via-midnight-900 to-black">
      <div className="pointer-events-none absolute inset-x-0 top-6 -z-10 flex justify-center">
        <div className="h-[55vh] w-[80vw] max-w-[1200px] rounded-[320px] bg-[radial-gradient(ellipse_at_center,_rgba(255,140,170,0.24),_transparent_70%)] blur-[130px]" />
      </div>
      <div className="pointer-events-none absolute -left-24 top-[30%] -z-10 h-[60vw] w-[60vw] rounded-full bg-[radial-gradient(circle,_rgba(118,72,255,0.12),_transparent_65%)] blur-[140px]" />
      <div className="pointer-events-none absolute -right-20 bottom-10 -z-10 h-[45vw] w-[45vw] rounded-full bg-[radial-gradient(circle,_rgba(255,102,153,0.15),_transparent_60%)] blur-[140px]" />

      <div className="relative mx-auto flex w-full max-w-[85rem] flex-col px-6 pb-24 pt-20 sm:px-10 lg:px-12">
        <header className="mx-auto max-w-3xl text-center">
          <p className="text-[0.75rem] uppercase tracking-[0.5em] text-rose-100/70">Product Roadmap</p>
          <h1 className="mt-3 text-[2.25rem] font-semibold leading-tight text-white sm:text-[2.4rem]">
            Everything we are crafting for YoGong
          </h1>
          <p className="mt-2 text-sm leading-relaxed text-[rgba(224,214,244,0.78)] sm:text-base">
            Five pillars, dozens of romantic touchpoints. Every card still whispers <span className="font-semibold text-white">Coming soon</span> while
            we polish the velvet details.
          </p>
        </header>

        <div className="mt-8 grid grid-cols-[repeat(auto-fit,_minmax(260px,_1fr))] gap-y-5 gap-x-6">
          {ROADMAP_SECTIONS.map((section) => (
            <RoadmapSectionCard key={section.id} section={section} />
          ))}
        </div>
      </div>
    </div>
  );
}

function RoadmapSectionCard({ section }: { section: RoadmapSection }) {
  return (
    <section className="group relative flex h-full flex-col overflow-hidden rounded-[30px] border border-rose-100/10 bg-[rgba(9,5,20,0.9)] px-6 pb-8 pt-7 shadow-card-soft backdrop-blur-[26px] transition duration-300 hover:-translate-y-0.5 hover:shadow-accent-glow">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-px rounded-[26px] bg-[radial-gradient(circle_at_50%_-20%,rgba(255,255,255,0.12),transparent_70%)]" />
        <div className={`absolute inset-0 opacity-20 blur-3xl ${section.gradient} bg-gradient-to-r`} />
        <div className="absolute inset-0 rounded-[30px] border border-white/5 opacity-30" />
      </div>

      <div className="relative z-10 flex flex-col">
        <div className="mb-6 flex items-start justify-between gap-4">
          <div>
            <p className="text-[0.7rem] uppercase tracking-[0.6em] text-lavender-200/70">{section.subtitle}</p>
            <h2 className="mt-2 text-[1.15rem] font-semibold text-white sm:text-[1.25rem]">{section.title}</h2>
          </div>
          <span className="accent-gradient inline-flex items-center rounded-full px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.25em] text-[#2f0c18] opacity-90 shadow-accent-glow">
            Coming soon
          </span>
        </div>

        <ul className="mt-5 flex flex-col gap-3">
          {section.features.map((feature) => (
            <li
              key={feature}
              className="group/feature rounded-full border border-white/5 bg-white/5 px-5 py-3 text-sm text-white/90 transition duration-200 hover:-translate-y-0.5 hover:bg-white/10"
            >
              <div className="flex items-center justify-between gap-3">
                <span className="text-[0.95rem] font-medium leading-snug">{feature}</span>
                <span className="accent-gradient inline-flex shrink-0 items-center rounded-full border border-white/5 px-3 py-1 text-[0.62rem] font-semibold uppercase tracking-[0.3em] text-[#ffe0ef] opacity-80 transition duration-200 group-hover/feature:border-white/10">
                  Coming soon
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
