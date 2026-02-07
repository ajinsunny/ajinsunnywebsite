# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Next.js 14 portfolio website for Ajin Sunny. Performance-optimized (PageSpeed Insights tested). Built with React 18, TypeScript, Tailwind CSS, Framer Motion. Contact form uses reCAPTCHA + AWS SES email integration.

## Development Commands

```bash
npm run dev       # Dev server on http://localhost:3000
npm run build     # Production build
npm start         # Start production server
npm run lint      # ESLint
```

**Node.js 20+ required** (see package.json engines and .nvmrc). No test framework is configured.

## Architecture

### App Router Structure

Uses Next.js App Router (not Pages Router). Routes in `app/`:

- `app/page.tsx` - Home page (client component, assembles section components)
- `app/about/page.tsx` - About page (client component with tabbed content)
- `app/work/page.tsx` - Work page (Swiper.js carousel via WorkSlider)
- `app/contact/page.tsx` - Contact form with reCAPTCHA, confetti animation, auto-redirect
- `app/layout.tsx` - Root layout (server component, exports metadata)
- `app/api/sendEmail/route.ts` - POST endpoint: Zod validation → reCAPTCHA verify → AWS SES send

### Home Page Section Order

The home page (`app/page.tsx`) renders these components in sequence:

1. **HeroSection** - Profile image, title, CTA buttons (View Projects scrolls to `#featured-projects`, Resume is external link)
2. **QuickStats** - CountUp animations triggered on scroll (scrollSpyOnce)
3. **AboutDetails** - Tabbed sections: Skills (icon grid), Experience (job list), Credentials (card grid with images from `/public/credentials/`)
4. **FeaturedProjects** - Project cards with tech stack pills, links to `/work`
5. **TechStack** - Technology icons grid with hover animations
6. **Footer** - CTA + nav links + copyright

### Key Component Notes

- **Layout.tsx** wraps all pages (TopNavigation + bg-site pattern + Heebo font)
- **TopNavigation.tsx** - Fixed nav with scroll-based blur, mobile hamburger menu, uses `layoutId` for active indicator animation
- **Socials.tsx** - Memoized (`React.memo`) social links with inline SVGs, used in TopNavigation
- **WorkSlider.tsx** - Swiper carousel, chunks images into groups of 4 via `chunkArray()` utility
- **Avatar.tsx** - Only used on About page (XL+ screens only)
- **BackgroundImage.tsx** and **ProjectsBtn.tsx** - Legacy/unused components

### Data Architecture

Shared data lives in `data/`:
- `data/about.tsx` - Shared `aboutData` array (skills, experience, credentials) with `"use client"` directive since it contains JSX (react-icons)
- `data/types.ts` - Shared TypeScript interfaces (`AboutSection`, `AboutInfo`, `CredentialCard`)

Both `components/AboutDetails.tsx` and `app/about/page.tsx` import from `data/about.tsx` — update data in one place.

Other data is defined as inline arrays within their components (no CMS):
- `stats` array in QuickStats
- `projects` array in FeaturedProjects (6 projects)
- `technologies` array in TechStack (11 items, categorized: frontend/backend/devops)
- `navItems` array in TopNavigation (Home, Contact only)
- `workSlider` object in WorkSlider

### Styling System

**Tailwind config** (`tailwind.config.js`):
- Colors: `primary` (#131424), `secondary` (#393A47), `accent` (#F13024)
- Breakpoints: sm(640), md(768), lg(960), xl(1200)
- Background images: explosion, circles, circleStar, site (all in `/public`)
- Animation: `spin-slow` (6s linear infinite)
- Plugins: tailwind-scrollbar, @tailwindcss/forms

**Note:** `purgecss.config.js` references `./src/**/*` paths but project uses `app/` and `components/` directories — this config appears outdated and may not function correctly.

### Environment Variables

Required for contact form functionality:
- `NEXT_PUBLIC_RECAPTCHA_SITE_KEY` - reCAPTCHA site key (client-side, used in Contact page)
- `NEXT_PUBLIC_RECAPTCHA_SECRET_KEY` - reCAPTCHA secret key (server-side verification)
- `NEXT_PUBLIC_SES_SMTP_USER` - AWS SES SMTP username
- `NEXT_PUBLIC_SES_SMTP_PASSWORD` - AWS SES SMTP password
- `NEXT_PUBLIC_RECEIVER_EMAIL` - Email recipient address

No `.env.example` file exists.

## Code Patterns

### Client vs Server Components

Most components use `"use client"` due to framer-motion and interactive features. Only the root layout and API route are server-side. Data files that contain JSX (e.g., `data/about.tsx` with react-icons) also need `"use client"`.

### Animation Pattern

Framer-motion throughout with consistent conventions:
- Entry: `initial={{ opacity: 0, y: 20 }}` → `animate={{ opacity: 1, y: 0 }}`
- Staggered delays in 0.2s increments
- Scroll-triggered: `whileInView` with `viewport={{ once: true }}`
- Layout transitions: `layoutId` for tab indicators and nav active states
- `AnimatePresence` for mount/unmount animations (mobile menu)

### Image Conventions

- All photos in WebP format, logos/icons in SVG
- All images use Next.js `Image` component
- `priority` prop on above-the-fold images (hero profile)
- Profile image hardcoded at `components/HeroSection.tsx:56` as `/profile.webp`
- All images stored in `/public` (no CDN)

### State Management

Local component state only (useState). No global state (no Redux/Context/Zustand). No custom hooks.

## Deployment

**AWS Amplify** (`amplify.yml`): Forces Node.js 20, clears node_modules before fresh `npm install`, builds with `npm run build`, outputs `.next`.

## Performance Considerations

Site is heavily optimized — maintain these standards:
- WebP images, lazy loading via Suspense
- SWC minification (`next.config.js`: `swcMinify: true`)
- Code splitting when adding features
- Test with PageSpeed Insights after changes
