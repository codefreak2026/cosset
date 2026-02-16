# Architecture Portfolio

A responsive portfolio site for an architecture studio, inspired by [Design Plus Studio](https://designplusstudio.in/) and [Jaypro Infratech](https://www.jayproinfratech.com/).

## Tech Stack

- **Next.js 16** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **MongoDB** (via Mongoose) – used for contact form submissions

## Setup

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Environment**
   - `.env.local` is already present with your MongoDB connection string.
   - Contact form submissions are stored in the `cosset` database in a `contacts` collection.

3. **Run development server**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000).

## Sections

- **Hero** – Tagline and CTAs
- **About** – Studio intro and image
- **Process** – How we work (Discuss → Design → Build)
- **Projects** – Project grid; each item opens in a new tab (dummy links for now)
- **Packages** – Silver / Gold / Diamond packages (reference: Jaypro Infratech)
- **Testimonials** – Client quotes (dummy data)
- **Blog** – Blog cards (dummy data)
- **Contact** – Cards (Phone, Instagram, WhatsApp, Email) + contact form (saved to MongoDB)
- **Privacy & Disclaimer** – Legal text
- **Footer** – About, quick links, contact info

## Editing Content

- **Dummy text and images** – Replace in the component files under `src/components/`.
- **Contact card links** – Update `contactCards` in `src/components/ContactSection.tsx` (phone, Instagram, WhatsApp, email).
- **Projects** – Edit `dummyProjects` in `src/components/Projects.tsx` or later connect to MongoDB.
- **Packages** – Edit `packages` in `src/components/Packages.tsx`.

## Build & Deploy

```bash
npm run build
npm start
```

For production, set `MONGODB_URI` in your hosting environment (e.g. Vercel).
