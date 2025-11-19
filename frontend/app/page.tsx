import Link from "next/link";

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6 px-6 text-center">
      <p className="text-sm uppercase tracking-[0.4em] text-pink-300/80">YoGong Roadmap</p>
      <h1 className="max-w-2xl text-4xl font-semibold text-white sm:text-5xl">
        Building the most heartfelt operating system for relationships.
      </h1>
      <p className="max-w-2xl text-lg text-slate-300">
        Explore everything rolling out soon across Today, Together, Space, Life, and Profile.
      </p>
      <Link
        href="/dashboard"
        className="rounded-full bg-gradient-to-r from-pink-500 via-rose-500 to-orange-400 px-8 py-3 text-lg font-semibold text-white shadow-glow transition hover:scale-105"
      >
        Open Roadmap Dashboard
      </Link>
    </main>
  );
}
