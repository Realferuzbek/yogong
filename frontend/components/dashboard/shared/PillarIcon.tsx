import type { SectionId } from "@/lib/roadmap";

export function PillarIcon({ id, isActive }: { id: SectionId; isActive: boolean }) {
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
