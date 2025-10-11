// app/page.tsx
"use client";
import { Suspense } from "react";
import LoadingSpinner from "../components/LoadingSpinner";
import HeroSection from "../components/HeroSection";
import QuickStats from "../components/QuickStats";
import AboutDetails from "../components/AboutDetails";
import FeaturedProjects from "../components/FeaturedProjects";
import TechStack from "../components/TechStack";
import Footer from "../components/Footer";

export default function HomePage() {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <div className="relative bg-primary min-h-screen w-full overflow-hidden">
        {/* Hero Section */}
        <HeroSection />

        {/* Quick Stats Section */}
        <QuickStats />

        {/* About Details Section (Skills, Experience, Credentials) */}
        <AboutDetails />

        {/* Featured Projects Section */}
        <FeaturedProjects />

        {/* Tech Stack Section */}
        <TechStack />

        {/* Footer */}
        <Footer />
      </div>
    </Suspense>
  );
}
