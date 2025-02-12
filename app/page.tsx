// app/page.tsx
"use client";

import { Suspense, lazy } from "react";
import BackgroundImage from "../components/BackgroundImage";
import Image from "next/image";
import Link from "next/link";

// Lazy-load the Avatar component
const Avatar = lazy(() => import("../components/Avatar"));

export default function HomePage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="bg-primary/60 h-full w-full">
        {/* Text overlay */}
        <div className="w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10">
          <div className="text-center flex flex-col justify-center xl:pt-40 xl:text-left h-full container mx-auto">
            {/* Title */}
            <h1 className="h1">
              Digitally Drafting <br /> Your Ideas Into{" "}
              <span className="text-accent"> Execution</span>
            </h1>
            {/* Subtitle (empty in your example) */}
            <p className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16"></p>
            {/* Button linking to Work */}
            <div className="flex justify-center xl:hidden relative">
              <div className="mx-auto xl:mx-0 z-10">
                <Link
                  href="/work"
                  aria-label="Work"
                  className="relative w-[185px] h-[185px] flex justify-center items-center bg-circleStar bg-cover bg-center bg-no-repeat group"
                >
                  <Image
                    src="/rounded-text.webp"
                    width={141}
                    height={148}
                    priority
                    alt=""
                    className="w-full h-full max-w-[141px] max-h-[148px]"
                  />
                  <svg
                    className="absolute w-[48px] h-[48px] text-gray-800 dark:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeWidth="2"
                      d="M1 10c1.5 1.5 5.25 3 9 3s7.5-1.5 9-3m-9-1h.01M2 19h16a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1ZM14 5V3a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v2h8Z"
                    />
                  </svg>
                </Link>
              </div>
            </div>
            <div className="hidden xl:flex"></div>
          </div>
        </div>
        {/* Background Image */}
        <BackgroundImage
          src="/bg-explosion.webp"
          alt="Background"
          className="mix-blend-color-dodge"
        />
        {/* Avatar image (lazy-loaded) */}
        <div className="w-full h-full max-w-[525px] max-h-[650px] absolute -bottom-32 lg:bottom-0 lg:right-[15%]">
          <Avatar />
        </div>
      </div>
    </Suspense>
  );
}
