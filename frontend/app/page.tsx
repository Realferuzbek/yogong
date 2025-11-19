import Link from "next/link";

export default function HomePage() {
  return (
    <main className="relative isolate flex min-h-screen items-center px-6 py-20 text-center sm:py-24">
      <div className="pointer-events-none absolute inset-x-0 top-4 -z-10 mx-auto h-[45vw] max-h-[450px] w-[45vw] max-w-[520px] rounded-full bg-[radial-gradient(circle,_rgba(255,148,195,0.28),_transparent_65%)] blur-3xl" />
      <div className="pointer-events-none absolute inset-x-0 bottom-10 -z-20 h-[120vh] bg-[radial-gradient(circle_at_50%_0%,_rgba(130,70,220,0.18),_transparent_55%)]" />
      <section className="relative z-10 mx-auto flex w-full max-w-2xl flex-col items-center">
        <div className="flex w-full items-center justify-center gap-4 text-[0.78rem] font-medium uppercase tracking-[0.35em] text-rose-100/70">
          <span className="h-px w-8 bg-rose-100/30" aria-hidden />
          <span>YoGong Roadmap</span>
          <span className="h-px w-8 bg-rose-100/30" aria-hidden />
        </div>
        <h1 className="accent-text mt-2 text-balance text-[2.5rem] font-bold leading-[1.15] tracking-tight sm:text-[3rem] sm:leading-[1.1] sm:tracking-[-0.02em]">
          Building the most heartfelt operating system for relationships.
        </h1>
        <p className="mt-3 max-w-2xl text-base leading-relaxed text-[rgba(224,214,244,0.78)] sm:text-lg sm:leading-[1.55]">
          Explore everything rolling out soon across Today, Together, Space, Life, and Profile.
        </p>
        <Link
          href="/dashboard"
          className="hero-focus-ring accent-gradient shadow-accent-glow mt-4 inline-flex h-12 w-full max-w-sm items-center justify-center rounded-full px-10 text-[0.95rem] font-semibold text-white transition duration-200 hover:-translate-y-0.5 hover:brightness-110 sm:h-14 sm:text-base"
        >
          Open Roadmap Dashboard
        </Link>
      </section>
    </main>
  );
}
