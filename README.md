# Hidden Harbor Marina - Marketing Website

Production-ready marketing website for **Hidden Harbor Marina** on Center Hill Lake in Smithville, Tennessee. Built with Next.js (App Router), TypeScript, and Tailwind CSS.

> ⚠️ **MANDATORY PRICING NOTICE BEFORE LAUNCH**  
> All boat rental rates, cabin pricing, and campsite fees displayed on this website are **starting placeholder rates only**. Exact pricing must be confirmed directly with Hidden Harbor Marina management before launch and reservation confirmation.

---

## Business Facts & NAP

- **Name:** Hidden Harbor Marina
- **Address:** 2685 Casey Cove Rd, Smithville, TN 37166
- **Phone:** (615) 597-8800 (`tel:+16155978800`)
- **Email:** info@hiddenharbortn.com
- **Online Booking System:** [hiddenharbormarina.stellarims.com](https://hiddenharbormarina.stellarims.com/)
- **Operating Hours:** Daily 8:00 AM – 5:00 PM (seasonal variations apply)
- **Google Reviews:** ~4.8 rating from ~280 reviews

---

## Local Development & Build Instructions

### Prerequisites
- Node.js 18.x or 20.x+
- npm 9.x+

### Setup & Run
```bash
# Install dependencies
npm install

# Start development server
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build & Static Validation
```bash
# Build production bundle & validate TypeScript / static routes
npm run build

# Preview production build locally
npm run start
```

---

## Page Route Map

| Route | Page Purpose | Features |
| :--- | :--- | :--- |
| `/` | **Home** | Full-bleed hero matching concept art, trust strip, 4 photo cards, story & new chapter, reviews, map teaser, homepage FAQ |
| `/rentals` | **Fleet Index** | Overview of all rental boat types (Pontoons, Deck Boats, Fishing Boats, Houseboats) |
| `/rentals/pontoons` | **Pontoon Rentals** | Double-deckers with slides & cruisers, 40-word direct answer, specs, FAQ, Book CTA |
| `/rentals/deck-boats` | **Deck Boat Rentals** | High-speed watersport cruisers, 40-word direct answer, specs, FAQ, Book CTA |
| `/rentals/fishing-boats` | **Fishing Boat Rentals** | Bass & walleye angling boats starting ~$135/day, 40-word direct answer, FAQ, Book CTA |
| `/rentals/houseboats` | **Houseboat Rentals** | Multi-day floating getaways starting ~$1,900/weekend, 40-word direct answer, FAQ, Book CTA |
| `/stay` | **Stay Index** | Cabins & Camping overview |
| `/stay/cabins` | **Cabin Rentals** | Rustic & modern lakeside cabins, 40-word direct answer, amenities, FAQ, Book CTA |
| `/stay/camping` | **Campground & RV** | 22 water/electric sites & primitive spots, 40-word direct answer, rules, FAQ, Book CTA |
| `/slips` | **Boat Slips & Dock** | Covered & uncovered slip info, waitlist note, fuel dock, ship's store, Call/Email CTAs |
| `/the-lake` | **Day Guide & AI Citation** | Drive times from Nashville/Lebanon/Cookeville/Murfreesboro, fuel, pack list, nearby parks |
| `/contact` | **Contact & NAP** | Address, hours, phone, email, embedded Google Map, written driving directions from I-40 |
| `/about` | **History & Transition** | 1989 history, Leiser family stewardship, 2026 new chapter under Bobby Davis with original staff retained |

---

## Technical & SEO Features

- **App Router Architecture:** Modern Next.js App Router structure with TypeScript strict mode.
- **Tailwind CSS Design System:** Custom HSL/hex color palette featuring deep lake blue (`#0c2333`), off-white cream (`#faf8f5`), sand (`#d9be9b`), and cedar (`#965b38`).
- **Structured Data (JSON-LD):**
  - `LocalBusiness` + `LodgingBusiness` schema injected in root layout.
  - `FAQPage` schema automatically rendered on `/`, rental, and stay pages.
- **Mobile First Navigation:** Sticky header with slide-out drawer on mobile, plus a fixed bottom action bar (`Call Marina` & `Book Online`).
- **SEO Ready:** `robots.ts`, `sitemap.ts`, Open Graph tags, canonical metadata, semantic HTML5 hierarchy.
