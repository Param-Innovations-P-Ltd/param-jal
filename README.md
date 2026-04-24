# Param Jal

Marketing & information website for **Param Jal** — the water technology division of Param Innovations Pvt. Ltd.

Param Jal is a six-stage modular treatment system that converts acidic coal mine pit water (pH 2–4) into BIS IS 10500:2012 potable drinking water.

## Stack

- **Vite** + **React 18** + **TypeScript**
- **Tailwind CSS** (brand palette under `tailwind.config.js`)
- **React Router v6** (multi-page)
- Deployed on **Vercel** (free tier)

## Pages

| Route | Purpose |
|-------|---------|
| `/` | Home — hero, problem/solution, six reasons |
| `/technology` | Six-stage process, stage cards, sequencing rationale |
| `/impact` | Ward-7 pilot, DMC contract, NABL results, pipeline |
| `/assured` | ASSURED framework scoring + compliance status |
| `/atmanirbhar` | Strategic / geopolitical case for government backing |
| `/about` | Company story, certifications, milestones, partners |
| `/contact` | Enquiry form (mailto) |

## Local development

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # production build → dist/
npm run preview   # preview the built bundle
```

## Deploy to Vercel (free)

### Option A — GitHub + Vercel UI (recommended)

1. Push this folder to a new GitHub repo (e.g. `param-jal`).
2. Go to https://vercel.com → **Add New Project** → import the repo.
3. Vercel auto-detects Vite. Accept defaults:
   - Framework preset: **Vite**
   - Build command: `npm run build`
   - Output directory: `dist`
4. Click **Deploy**. Live at `param-jal.vercel.app` in ~60 seconds.

### Option B — Vercel CLI (faster)

```bash
npm i -g vercel
vercel login
vercel            # first-time, prompts to create project
vercel --prod     # production deploy
```

### Custom domain

Project → Settings → Domains → add `paramjal.in` (or any domain). Vercel will issue an SSL cert automatically.

## Content

All copy is in `src/pages/*.tsx`. Source facts, NABL numbers and strategic framing are from:

- `PARAM_JAL_Speaker_Notes.pdf` (15-min SPM NIWAS pitch)
- `WATER PURIFIACTION WITH MECHANICAL COAGULATION_19.07.25.pdf` (technical paper)

Update copy directly in each page file.

## Project structure

```
param-jal/
├── index.html
├── vite.config.ts
├── tailwind.config.js
├── vercel.json
├── public/
│   └── favicon.svg
└── src/
    ├── main.tsx
    ├── App.tsx
    ├── index.css
    ├── components/
    │   ├── Layout.tsx
    │   ├── Navbar.tsx
    │   ├── Footer.tsx
    │   ├── PageHero.tsx
    │   └── SectionHeader.tsx
    └── pages/
        ├── Home.tsx
        ├── Technology.tsx
        ├── Impact.tsx
        ├── Assured.tsx
        ├── Atmanirbhar.tsx
        ├── About.tsx
        ├── Contact.tsx
        └── NotFound.tsx
```

---
© Param Innovations Pvt. Ltd. · Dhanbad, Jharkhand
