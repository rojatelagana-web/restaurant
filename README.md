# Celebrations Restaurant — Website

A premium, agency-quality marketing site for **Celebrations Restaurant**, a beloved North Indian dining destination in Visakhapatnam (4.5★ across 6,653 Google reviews).

Built with the latest stack:

- **Next.js 15** (App Router, React Server Components)
- **React 19**
- **Tailwind CSS v4** (`@theme` design tokens)
- **Framer Motion** (scroll, stagger, marquee, parallax)
- **React Hook Form** (reservation form)
- **next/font** Google Fonts: Cormorant Garamond, DM Sans, Playfair Display, JetBrains Mono
- **Lucide React** icon set

---

## Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Run the dev server
npm run dev
# → http://localhost:3000

# 3. Build for production
npm run build
npm start
```

---

## Project Structure

```
app/
  layout.tsx              ← Root layout, fonts, metadata, JSON-LD schema
  page.tsx                ← Homepage (all sections composed)
  globals.css             ← Tailwind v4 + brand theme tokens
  menu/                   ← Full menu page (client filterable)
  gallery/                ← Gallery page
  reserve/                ← Reservation page

components/
  sections/               ← Page sections (Hero, About, MenuHighlights, …)
  ui/                     ← Reusable primitives (Button, NavBar, Footer, cards)

lib/
  data/
    menu.ts               ← Menu items + categories
    testimonials.ts       ← Customer reviews
    gallery.ts            ← Gallery photos + filters
    site.ts               ← Business details, address, phone, hours
  utils.ts                ← cn() class merger
```

---

## Brand System

Tokens are declared in `app/globals.css` under `@theme {}` and consumed via Tailwind utility classes (e.g. `bg-gold`, `text-charcoal`, `font-display`).

| Token              | Value      | Purpose                          |
| ------------------ | ---------- | -------------------------------- |
| `--color-charcoal` | `#1A1A1A`  | Primary text / luxury base       |
| `--color-gold`     | `#C9953A`  | Warm saffron gold accent         |
| `--color-cream`    | `#F5EFE0`  | Warm ivory backdrop              |
| `--color-cream-light` | `#FDFAF5` | Surface background             |
| `--font-display`   | Cormorant Garamond | Hero / section headings  |
| `--font-body`      | DM Sans    | UI + paragraphs                  |
| `--font-accent`    | Playfair Display italic | Quotes / pull text   |

---

## Editing Content

All copy and data lives in `lib/data/*.ts`:

- Update menu items in `menu.ts` (auto-flows to homepage highlights + `/menu`)
- Add testimonials in `testimonials.ts`
- Add gallery photos in `gallery.ts`
- Update phone / address / hours / map embed in `site.ts`

Replace placeholder Unsplash imagery in `lib/data/*` with real restaurant photography (and corresponding entries in `next.config.ts > images.remotePatterns` if needed).

---

## SEO

- Per-page metadata via Next.js `Metadata` API
- LocalBusiness / Restaurant JSON-LD schema in `app/layout.tsx`
- Open Graph + Twitter Card tags
- Sitemap and robots can be added under `app/sitemap.ts` and `app/robots.ts` when deployed

---

## Reservation Form

The reservation handler in `components/sections/Reservation.tsx` currently logs to the console and shows a success state. Wire it up to your backend by replacing the body of `onSubmit()` — common options:

- Post to a Next.js `route.ts` API handler
- Forward to your CRM / Google Sheets via webhook
- Send to a WhatsApp Business number via the API

---

## Deploy

Optimised for [Vercel](https://vercel.com). Push to a Git provider and import — zero config required. Set the production domain in `lib/data/site.ts > site.url` so OG tags and JSON-LD resolve correctly.

---

© Celebrations Restaurant · Visakhapatnam
