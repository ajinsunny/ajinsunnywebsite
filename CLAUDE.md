# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 14 portfolio website for Ajin Sunny, optimized for performance (tested with PageSpeed Insights). Built with React, TypeScript, and Tailwind CSS, featuring framer-motion animations and a contact form with reCAPTCHA validation and AWS SES email integration.

**Tech Stack:** Next.js 14 (App Router), React 18, TypeScript, Tailwind CSS, Framer Motion

## Development Commands

```bash
# Development server (runs on http://localhost:3000)
npm run dev

# Production build
npm run build

# Start production server
npm start

# Lint code
npm run lint
```

**Node.js Requirement:** Node.js 20+ (specified in package.json engines and .nvmrc)

## Architecture

### App Router Structure

This project uses Next.js App Router (not Pages Router). Routes are defined in the `app/` directory:

- `app/page.tsx` - Home page (composed of multiple section components)
- `app/about/page.tsx` - About page
- `app/work/page.tsx` - Work/portfolio page
- `app/contact/page.tsx` - Contact page
- `app/layout.tsx` - Root layout with metadata and global Layout wrapper
- `app/api/sendEmail/route.ts` - API route for contact form submissions

### Component Organization

All reusable components live in the `components/` directory. The home page (`app/page.tsx`) is assembled from these section components in a specific order:

1. **HeroSection** - Profile image, title, description, CTA buttons
2. **QuickStats** - Statistics display with CountUp animations
3. **AboutDetails** - Skills, experience, credentials sections
4. **FeaturedProjects** - Project showcase cards
5. **TechStack** - Technology stack display
6. **Footer** - Site footer

**Layout Component** (`components/Layout.tsx`) wraps all pages and provides:
- TopNavigation component
- Global background styling (bg-site pattern)
- Heebo font family

### Styling System

**Tailwind CSS Configuration** (`tailwind.config.js`):
- Custom colors: `primary` (#131424), `secondary` (#393A47), `accent` (#F13024)
- Custom breakpoints: sm (640px), md (768px), lg (960px), xl (1200px)
- Background images: explosion, circles, circleStar, site (all in `/public`)
- Custom animation: `spin-slow` (6s linear infinite)
- Plugins: tailwind-scrollbar, @tailwindcss/forms

**Global Styles** (`styles/globals.css`):
- Swiper.js slider styling (pagination bullets and navigation in accent color)
- Heebo font from Google Fonts

### Contact Form & Email API

**API Route** (`app/api/sendEmail/route.ts`):
- Uses Zod schema validation for form inputs (name, email, subject, message, recaptchaToken)
- Verifies Google reCAPTCHA tokens server-side
- Sends emails via AWS SES (Amazon Simple Email Service) using nodemailer
- SMTP endpoint: `email-smtp.us-east-1.amazonaws.com:587`

**Required Environment Variables:**
- `NEXT_PUBLIC_RECAPTCHA_SECRET_KEY` - reCAPTCHA secret key
- `NEXT_PUBLIC_SES_SMTP_USER` - AWS SES SMTP username
- `NEXT_PUBLIC_SES_SMTP_PASSWORD` - AWS SES SMTP password
- `NEXT_PUBLIC_RECEIVER_EMAIL` - Email address to receive contact form submissions

### Static Assets

**Public Directory** (`/public`):
- Profile images: `profile.webp`, `avatar.webp`
- Background images: `bg-explosion.webp`, `circles.png`, `circle-star.svg`, `site-bg.svg`
- Project images: `evchargefinder.webp`, `fms.webp`, `homelessoutreach.jpg`, `marketsignal.webp`, etc.
- Credentials folder: Contains certification/credential images
- Logo files: `logo-desktop.svg`, `logo-mobile.svg`

**Note:** Profile image path is hardcoded in `components/HeroSection.tsx:56` as `/profile.webp`. See `PROFILE_IMAGE_INSTRUCTIONS.md` for details on updating.

## Deployment

**AWS Amplify Configuration** (`amplify.yml`):
- Uses Node.js 20 via nvm
- Clears node_modules and package-lock.json before fresh install
- Build command: `npm run build`
- Output directory: `.next`

## Code Patterns

### Client vs Server Components

- Most components use `"use client"` directive (HeroSection, home page, etc.) due to framer-motion animations and interactive features
- API routes are server-side by default
- Root layout (`app/layout.tsx`) is a server component with metadata exports

### Animation Pattern

Components use framer-motion's `motion` components with common patterns:
- Initial state: `{ opacity: 0, x: -50 }` or `{ opacity: 0, y: 20 }`
- Animate state: `{ opacity: 1, x: 0 }` or `{ opacity: 1, y: 0 }`
- Staggered transitions with delay increments (0.2s, 0.4s, etc.)
- Infinite animations for background elements

### Image Optimization

All images use Next.js `Image` component with:
- WebP format for photos (better compression)
- SVG for logos and icons
- `priority` prop on above-the-fold images (hero profile image)
- `fill` prop with object-fit classes for responsive containers

## Performance Considerations

This site is heavily optimized for performance:
- WebP images throughout
- Lazy loading via Suspense boundaries
- Minimal JavaScript bundle (use code splitting when adding features)
- Tailwind CSS with PurgeCSS configuration (`purgecss.config.js`)
- SWC minification enabled in `next.config.js`

When making changes, maintain these performance standards and test with PageSpeed Insights.
