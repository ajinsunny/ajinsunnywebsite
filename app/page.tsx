// app/page.tsx
"use client";
import { Suspense, lazy } from "react";
import BackgroundImage from "../components/BackgroundImage";
import LoadingSpinner from "../components/LoadingSpinner";
import Link from "next/link";

const Avatar = lazy(() => import("../components/Avatar"));

export default function HomePage() {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <div className="relative bg-primary/60 min-h-screen w-full overflow-hidden">
        {/* Background gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-black/30 to-black/10" />

        {/* Content container */}
        <div className="relative z-10 px-8 sm:px-12 lg:px-16">
          <div className="flex flex-col justify-center min-h-screen">
            <div className="text-center lg:text-left max-w-4xl mx-auto lg:mx-12 pt-20 lg:pt-40">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                Digitally Drafting <br className="hidden sm:block" />
                Your Ideas Into{" "}
                <span className="text-accent animate-pulse">Execution</span>
              </h1>

              {/* Call to action section */}
              <div className="mt-12 flex flex-col sm:flex-row justify-center lg:justify-start gap-6">
                <Link href="/work">
                  <button className="px-10 py-4 bg-accent text-white rounded-full hover:bg-accent/90 transition-colors">
                    View Projects
                  </button>
                </Link>
                <a
                  href="https://docs.google.com/document/d/1NVpmnywVhhY3nZeWlyeUkgPb63zyVQRxEs5PdYGsLkY/edit?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="px-10 py-4 border border-white/20 rounded-full hover:bg-white/10 transition-colors">
                    Resume
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Background image */}
        <BackgroundImage
          src="/bg-explosion.webp"
          alt="Background Effect"
          className="absolute inset-0 object-cover mix-blend-color-dodge opacity-60 sm:opacity-80"
        />

        {/* Avatar */}
        <div
          className="absolute w-full max-w-[300px] sm:max-w-[400px] lg:max-w-[525px] 
                      h-[400px] sm:h-[500px] lg:h-[650px] 
                      -bottom-16 sm:-bottom-24 lg:bottom-0 
                      left-1/2 lg:left-auto lg:right-[15%] 
                      transform -translate-x-1/2 lg:translate-x-0"
        >
          <Avatar />
        </div>
      </div>
    </Suspense>
  );
}
