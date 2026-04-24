# Deploying Param Jal to Vercel (free)

Pick one of the two paths below.

---

## Path A — GitHub + Vercel dashboard (recommended, ~3 min)

### 1. Push to GitHub

On https://github.com/new, create a new empty repo named `param-jal` (Private or Public — either works on Vercel free).

Then from this folder:

```bash
cd C:\Users\USER\Downloads\param-jal
git branch -M main
git remote add origin https://github.com/<your-username>/param-jal.git
git push -u origin main
```

### 2. Import on Vercel

1. Go to https://vercel.com/new
2. **Import Git Repository** → select `param-jal`
3. Vercel auto-detects **Vite** — leave all defaults:
   - Framework preset: `Vite`
   - Build command: `npm run build`
   - Output directory: `dist`
   - Install command: `npm install`
4. Click **Deploy**

~60 seconds later you'll have a live URL like `https://param-jal.vercel.app`.

### 3. Every future push to `main` auto-deploys

That's it. No CI config needed.

---

## Path B — Vercel CLI (no GitHub needed)

```bash
npm i -g vercel
cd C:\Users\USER\Downloads\param-jal
vercel login                   # opens browser, pick your preferred login
vercel                         # first time — walks you through project creation
                               #   Set up and deploy? Y
                               #   Scope?           (your personal account)
                               #   Link to existing? N
                               #   Project name?    param-jal
                               #   Directory?       ./
                               #   Settings?        N (accept auto-detected)
vercel --prod                  # deploy to production
```

The preview URL prints in the terminal.

---

## Custom domain (e.g. `paramjal.in`)

On Vercel dashboard:

1. Project → **Settings** → **Domains**
2. Type the domain, click **Add**
3. Vercel shows the DNS records to add (A or CNAME)
4. Add them at your registrar (GoDaddy, Cloudflare, etc.)
5. Vercel issues a free SSL cert automatically within minutes

---

## Before you push

- Review copy in `src/pages/*.tsx` — numbers are sourced from the SPM NIWAS speaker notes; double-check anything that's customer-facing.
- Replace `aps@paramai.in` in `src/components/Footer.tsx` and `src/pages/Contact.tsx` if you use a different email.
- Drop your logo as `public/logo.svg` and swap the inline `<Logo/>` component in `src/components/Navbar.tsx` if you want to use the real mark.

## Local dev reminder

```bash
npm run dev       # http://localhost:5174
npm run build     # production build → dist/
```
