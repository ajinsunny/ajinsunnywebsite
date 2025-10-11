"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { BsArrowRight, BsDownload } from "react-icons/bs";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary via-primary/95 to-primary/80" />
      
      {/* Animated background circles */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent rounded-full blur-3xl"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-[auto_1fr] gap-8 lg:gap-16 items-start max-w-7xl mx-auto">
          {/* Left Column - Profile Image Only */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center lg:items-start lg:-mt-8"
          >
            {/* Profile Image */}
            <div className="relative w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-accent/50 shadow-2xl">
              <Image
                src="/profile.webp"
                alt="Ajin Sunny Profile"
                fill
                className="object-cover"
                priority
              />
            </div>
          </motion.div>

          {/* Right Column - Title, Description & Buttons */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col"
          >
            {/* Title */}
            <h2 className="text-2xl md:text-3xl text-accent font-semibold mb-6 text-center lg:text-left">
              Senior Software Engineer
            </h2>

            {/* Description */}
            <p className="text-white/70 text-base md:text-lg leading-[2] mb-8 text-center lg:text-left">
              Product-focused engineer with 5+ years building scalable AI-powered applications 
              and search solutions. I combine technical expertise in full-stack development with 
              product strategy—from user research and MVP development to leading engineering teams. 
              Previously delivered mission-critical systems for federal agencies and accelerated 
              startup growth through technical leadership and mentorship.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 md:gap-6">
              {/* Primary CTA - Scroll to Projects */}
              <button 
                onClick={() => {
                  const projectsSection = document.getElementById('featured-projects');
                  projectsSection?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="group relative px-8 py-4 bg-accent text-white rounded-full font-medium text-lg hover:bg-accent/90 transition-all duration-300 flex items-center justify-center gap-2 min-w-[200px]"
              >
                <span>View Projects</span>
                <BsArrowRight className="group-hover:translate-x-1 transition-transform" />
              </button>

              {/* Secondary CTA */}
              <a
                href="https://docs.google.com/document/d/1rTVCddc-drK-TC1gLO3fvGZOJ3Vgtcb7MgxjB8vxTv8/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="group relative px-8 py-4 border-2 border-white/30 text-white rounded-full font-medium text-lg hover:bg-white/10 hover:border-white/50 transition-all duration-300 flex items-center justify-center gap-2 min-w-[200px]">
                  <BsDownload className="group-hover:translate-y-1 transition-transform" />
                  <span>Resume</span>
                </button>
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="flex flex-col items-center gap-2 text-white/50"
        >
          <span className="text-sm">Scroll to explore</span>
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
