"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  FaReact,
  FaNode,
  FaPython,
  FaAws,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiPostgresql,
  SiMicrosoftazure,
  SiDocker,
} from "react-icons/si";

interface Tech {
  name: string;
  icon: React.ReactNode;
  category: "frontend" | "backend" | "devops";
}

const technologies: Tech[] = [
  { name: "TypeScript", icon: <SiTypescript />, category: "frontend" },
  { name: "React", icon: <FaReact />, category: "frontend" },
  { name: "Next.js", icon: <SiNextdotjs />, category: "frontend" },
  { name: "Tailwind", icon: <SiTailwindcss />, category: "frontend" },
  { name: "Node.js", icon: <FaNode />, category: "backend" },
  { name: "Python", icon: <FaPython />, category: "backend" },
  { name: "PostgreSQL", icon: <SiPostgresql />, category: "backend" },
  { name: "AWS", icon: <FaAws />, category: "devops" },
  { name: "Azure", icon: <SiMicrosoftazure />, category: "devops" },
  { name: "Docker", icon: <SiDocker />, category: "devops" },
  { name: "Git", icon: <FaGitAlt />, category: "devops" },
];

const TechStack = () => {
  return (
    <section className="py-24 bg-primary/50">
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
            Technologies <span className="text-accent">I Use</span>
          </h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Building modern solutions with cutting-edge tools and frameworks
          </p>
        </motion.div>

        {/* Tech Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 max-w-5xl mx-auto">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              whileHover={{ scale: 1.1, y: -5 }}
              className="flex flex-col items-center justify-center group cursor-pointer"
            >
              <div className="relative mb-3">
                {/* Icon Container */}
                <div className="w-16 h-16 flex items-center justify-center text-5xl text-white/80 group-hover:text-accent transition-colors duration-300">
                  {tech.icon}
                </div>
                
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-accent/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              {/* Tech Name */}
              <span className="text-sm font-medium text-white/70 group-hover:text-white transition-colors text-center">
                {tech.name}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Category Labels (Optional) */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16 flex flex-wrap justify-center gap-4 text-white/50 text-sm"
        >
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-accent rounded-full"></span>
            <span>Frontend</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-accent rounded-full"></span>
            <span>Backend</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-accent rounded-full"></span>
            <span>DevOps & Infrastructure</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TechStack;
