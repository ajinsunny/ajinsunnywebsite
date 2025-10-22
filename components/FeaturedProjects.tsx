"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { BsArrowRight } from "react-icons/bs";

interface Project {
  title: string;
  description: string;
  image: string;
  url: string;
  techStack: string[];
}

const projects: Project[] = [
  {
    title: "Zensus",
    description:
      "Financial intelligence platform powered by consensus AI. Specialized agents collaborate to provide financial guidance",
    image: "/zensus.webp",
    url: "https://zensus.app",
    techStack: ["iOS SwiftUI", "NestJS", "AI/ML", "PostgreSQL"],
  },
  {
    title: "Market Signal",
    description:
      "Real-time market analysis and trading signals platform for informed investment decisions",
    image: "/marketsignal.webp",
    url: "https://marketsignal-git-master-ajinsunnys-projects.vercel.app/",
    techStack: ["React", "Next.js", "TypeScript", "Market Data API"],
  },
  {
    title: "EV Charger Finder",
    description:
      "Location-based service helping users find electric vehicle charging stations",
    image: "/evchargefinder.webp",
    url: "https://ev-chargerfinder.vercel.app/",
    techStack: ["TypeScript", "Next.js", "Maps API"],
  },
  {
    title: "Fleet Management System",
    description:
      "Enterprise solution for tracking and managing vehicle fleets in real-time",
    image: "/fms.webp",
    url: "https://main.d2tmvp8ck6o5qe.amplifyapp.com/",
    techStack: ["React", "AWS", "Node.js"],
  },
  {
    title: "Contact Info",
    description:
      "Modern contact information management system with intuitive interface",
    image: "/contactinfo.webp",
    url: "https://contactinfo-two.vercel.app/",
    techStack: ["React", "Next.js", "TypeScript"],
  },
  {
    title: "Sentim Analyzer",
    description:
      "AI-powered sentiment analysis tool for analyzing text emotions and opinions",
    image: "/sentim-analyzer.webp",
    url: "https://sentim-analyzer.vercel.app/",
    techStack: ["React", "Next.js", "AI/ML", "NLP"],
  },
];

const FeaturedProjects = () => {
  return (
    <section id="featured-projects" className="py-24 bg-white/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Featured <span className="text-accent">Projects</span>
          </h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            A selection of recent work showcasing AI integration, full-stack
            development, and user-centric design
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {projects.map((project, index) => (
            <motion.a
              key={project.title}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-white/5 rounded-2xl overflow-hidden border border-white/10 hover:border-accent/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                <p className="text-white/70 text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-medium bg-white/10 text-white/80 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* View Project Link */}
                <div className="flex items-center gap-2 text-accent group-hover:gap-3 transition-all">
                  <span className="text-sm font-medium">View Project</span>
                  <BsArrowRight className="group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        {/* View All Projects CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center"
        >
          <Link href="/work">
            <button className="group px-8 py-4 border-2 border-white/30 text-white rounded-full font-medium text-lg hover:bg-white/10 hover:border-accent transition-all duration-300 inline-flex items-center gap-2">
              <span>View All Projects</span>
              <BsArrowRight className="group-hover:translate-x-1 transition-transform" />
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
