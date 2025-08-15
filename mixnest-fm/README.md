# Mixnest FM — Retro Neon Website

A ready-to-deploy static website with dark/light mode, retro-futuristic neon styling, and a simple audio player.

## Quick Start
1. Replace the placeholder stream URL in `index.html` and `listen.html`:
   ```html
   <source src="https://example.com/stream.mp3" type="audio/mpeg" />
   ```
2. Open `index.html` locally, or deploy the folder to:
   - GitHub Pages (static hosting)
   - Netlify / Vercel (drag-and-drop)
3. (Optional) Connect real Now Playing metadata in `script.js` by calling your radio server API.

## Files
- `index.html` — Home + Now Playing + inline player
- `listen.html` — Dedicated player page
- `schedule.html` — Weekly schedule (rendered from JS data)
- `djs.html` — DJ cards
- `contact.html` — Contact form (Netlify-ready)
- `style.css` — Theme (dark by default, light mode supported)
- `script.js` — Theme toggle, nav, schedule, simulated Now Playing
- `assets/logo.svg`, `assets/favicon.svg`

## Theme Toggle
The 🌓 button toggles modes and persists choice in `localStorage`.

## Accessibility
- Semantic HTML
- Focus styles via ring color
- ARIA labels for navigation and toggle

Enjoy!
