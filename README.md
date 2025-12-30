# YoGong ✨

A small, personal web experience — a single-page micro-site that combines staged messaging, subtle animation, and optional background audio to deliver one focused moment.

**Live demo:** https://yobogongjunim.vercel.app/

---

## What this is (and what it isn’t)

**What it is:** a lightweight, static web project designed to communicate a feeling through interaction (timing, motion, and sound).  
**What it isn’t:** a full product (no backend, no accounts, no analytics, no database).

This repository is intentionally simple and transparent — built as a **personal prototype** and UI/interaction study.

---

## Preview

> Add screenshots here to make the first 10 seconds impressive:
- `docs/screenshot-desktop.png` (TBD)
- `docs/screenshot-mobile.png` (TBD)

---

## Features ✅

- **Staged flow** (a guided sequence instead of one static page)
- **Typewriter-style reveal** for message pacing
- **Floating heart particles** as a lightweight ambient animation layer
- **Background audio (optional)** — starts only after user interaction (browser autoplay-safe)
- **Mobile-friendly interaction** (tap to continue)
- **No build step** — static files, easy to host anywhere

---

## Tech Stack 🧩

- **HTML** (single page)
- **CSS** (inline styling)
- **Vanilla JavaScript** (inline logic)
- **Static hosting** (Vercel)

---

## How it works (high level)

- `index.html` contains the full UI + styling + logic.
- A simple **state flow** controls which stage is visible.
- A phrase list drives the **typewriter animation** (character-by-character rendering).
- Hearts are generated as small DOM elements and animated with CSS.
- Audio is triggered only after a click/tap to comply with browser policies.

---

## Project structure

- `index.html` — UI + styles + logic
- `die_with_a_smile.mp3` — audio file used by the page
- `2_5260552987264182737.m4a` — additional audio asset (currently unused)

---

## Run locally

You can open `index.html` directly, or use a local static server:

```bash
python -m http.server 5173
# then open http://localhost:5173
