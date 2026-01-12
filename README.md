# From Yobo to Gongjunim — Single-Page Web Letter

A **static, single-file web experience** (no backend, no accounts) that plays an animated “caption-style” letter with:
- floating heart animations,
- typewriter text effects (welcome → main phrases → ending),
- a background audio track with autoplay attempt + tap-to-play fallback,
- and a final CTA button linking out to Instagram.

This repo is **pure HTML/CSS/JS** and can be hosted anywhere as a static page.

---

## What it contains (code-backed)

### Animated background
- Generates **20** floating hearts on load with randomized:
  - size,
  - position,
  - opacity,
  - animation duration + delay.

### Letter flow (typewriter + captions)
- Runs automatically on `DOMContentLoaded`.
- Sequence:
  1) **Welcome** lines are typed (`WELCOME_LINES`)
  2) Welcome panel fades out
  3) **Main** phrases are shown *one at a time* with typewriter + fade (`MAIN_PHRASES`)
  4) **Ending** lines are typed (`ENDING_LINES`)
  5) Shows a CTA button labeled **“BACK TO YOBO”** linking to Instagram

### Background audio
- Audio element is `die_with_a_smile.mp3` (looped).
- Tries autoplay first.
- If blocked by the browser, shows a **“TAP TO PLAY”** chip and also captures the **first user tap** via an invisible gesture layer to start audio.

### External resources
- Uses **Google Fonts** (`fonts.googleapis.com`, `fonts.gstatic.com`).
- CTA link points to: `https://www.instagram.com/realferuzbek`.

---

## Project files

- `index.html` — the full page (styles + script are inline)
- `die_with_a_smile.mp3` — background audio referenced by `index.html`
- `2_5260552987264182737.m4a` — additional audio file present in repo (not referenced by `index.html`)
- `README.md` — documentation

---

## Run locally

### Option A: open directly
Open `index.html` in your browser.

### Option B: run a local static server (recommended)
```bash
# From the repo folder:
python -m http.server 5173
```

Then open:
- `http://localhost:5173/`

---

## Customize (all changes are in `index.html`)

### 1) Change the text
Edit these arrays in the inline script:
- `WELCOME_LINES`
- `MAIN_PHRASES`
- `ENDING_LINES`

### 2) Change the audio
Replace the audio file and update:
```html
<audio id="bgm" src="die_with_a_smile.mp3" ...></audio>
```

### 3) Change the CTA destination
Update the link inside:
- `#endingBtnWrap a` (currently points to Instagram)

---

## Tech stack
- HTML + CSS + vanilla JavaScript
- Google Fonts (external)
- No backend, no database, no build step

---

## License
No license file is included in this repo. Add one if you want reuse permissions to be explicit.
