# Yogong — a tap-to-play digital postcard

A minimalist single-page web experience that delivers a short message with optional audio — built for fast sharing and frictionless viewing.

## Demo
- Live: https://yobogongjunim.vercel.app/

## Visuals
> Screenshots/GIF not committed yet.
- Add `./assets/preview.png` (and optionally `./assets/preview.gif`) and update this section.
- Example embed (once added):
  - `![Preview](./assets/preview.png)`

## Features
- Single-file, static page (no build step)
- Centered “glass” card layout with gradient background
- Tap-to-play audio interaction
- Mobile-friendly, responsive typography
- Lightweight and easy to deploy (Vercel / GitHub Pages)

## Tech Stack
- **Frontend:** HTML, CSS, JavaScript (vanilla)
- **Media:** local audio asset(s)
- **Hosting:** Vercel (demo)

## How It Works
- `index.html` contains the full UI (markup + styling) and the interaction logic.
- The page renders a centered hero message.
- A user gesture triggers audio playback via the browser’s media API.
- Assets (audio) are served as static files alongside the HTML.

## Evidence / Results
> No measured metrics committed yet (avoid guessing). Suggested proof to add:
- TBD: Lighthouse performance / accessibility scores
- TBD: Page weight (HTML + media) and first-load time on mobile
- TBD: Cross-browser verification notes (Chrome/Firefox/Safari, mobile)

## My Role & Contributions
- Primary author/maintainer: **Feruzbek Qurbonov** (GitHub: https://github.com/Realferuzbek)
- Scope: design + implementation + deployment
- If this was a team effort, add collaborators and responsibilities here (TBD).

## Project Report
- See: **[PROJECT_REPORT.md](./PROJECT_REPORT.md)** — deep dive on intent, UX decisions, and implementation details.

## Roadmap
- Add `/assets` with screenshots/GIF for reviewer-friendly visuals
- Add a short “content + audio configuration” note (where to change text/audio)
- Add basic accessibility pass (contrast, focus states, reduced motion)
- Add lightweight QA checklist (mobile + desktop browsers)
- Add a license file (choose an OSS license or mark as proprietary)

## License
- TBD (no license file committed yet)

## Contact
- GitHub: https://github.com/Realferuzbek