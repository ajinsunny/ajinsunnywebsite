// app/page.tsx
"use client";
import { Suspense, lazy } from "react";
import BackgroundImage from "../components/BackgroundImage";
import LoadingSpinner from "../components/LoadingSpinner";
import Link from "next/link";
import Image from "next/image";

export default function HomePage() {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <div className="relative bg-primary/60 min-h-screen w-full overflow-hidden">
        {/* Background gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-black/30 to-black/10" />

        {/* Content container - vertically and horizontally centered */}
        <div className="relative z-10 flex flex-col items-center justify-center min-h-screen w-full pt-32">
          {/* SEO Metrics Image */}
          <div className="relative w-[420px] h-[236px] sm:w-[600px] sm:h-[338px] lg:w-[700px] lg:h-[394px] mb-8">
            <Image
              src="/seo-metrics.webp"
              alt="SEO Metrics"
              fill
              className="rounded-3xl border-4 border-accent shadow-2xl opacity-95 object-contain bg-white/10"
              priority
            />
          </div>
          {/* Tagline */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-center mb-8">
            Optimizing for tomorrow's{' '}
            <span className="text-accent animate-pulse">search engines</span>
          </h1>
          {/* Call to action section */}
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link href="/work">
              <button className="px-10 py-4 bg-accent text-white rounded-full hover:bg-accent/90 transition-colors">
                View Projects
              </button>
            </Link>
            <a
              href="https://docs.google.com/document/d/1rTVCddc-drK-TC1gLO3fvGZOJ3Vgtcb7MgxjB8vxTv8/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="px-10 py-4 border border-white/20 rounded-full hover:bg-white/10 transition-colors">
                Resume
              </button>
            </a>
          </div>
        </div>

        {/* Background image */}
        <BackgroundImage
          src="/bg-explosion.webp"
          alt="Background Effect"
          className="absolute inset-0 object-cover mix-blend-color-dodge opacity-60 sm:opacity-80"
        />
      </div>
    </Suspense>
  );
}
