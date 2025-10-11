"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { BsArrowRight } from "react-icons/bs";
import {
  FaReact,
  FaNode,
  FaPython,
  FaAws,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiFramer,
  SiTypescript,
  SiTailwindcss,
  SiPostgresql,
  SiMicrosoftazure,
} from "react-icons/si";
import { TbBrain, TbWind, TbPointer } from "react-icons/tb";

// Define interfaces for type safety
interface AboutInfo {
  title: React.ReactNode;
  stage?: string;
  icons?: React.ReactNode[];
}

interface CredentialCard {
  title: string;
  organization: string;
  date: string;
  image: string;
  url?: string;
}

interface AboutSection {
  title: string;
  info?: AboutInfo[];
  credentials?: CredentialCard[];
}

// About data array
const aboutData: AboutSection[] = [
  {
    title: "skills",
    info: [
      {
        title: "AI",
        icons: [
          <TbBrain key="claude" />,
          <TbWind key="windsurf" />,
          <TbPointer key="cursor" />,
        ],
      },
      {
        title: "Frontend",
        icons: [
          <SiTypescript key="typescript" />,
          <FaReact key="react" />,
          <SiNextdotjs key="nextjs" />,
          <SiFramer key="framer" />,
          <SiTailwindcss key="tailwind" />,
        ],
      },
      {
        title: "Backend",
        icons: [
          <FaNode key="nodejs" />,
          <FaPython key="python" />,
          <SiPostgresql key="postgresql" />,
        ],
      },
      {
        title: "Infrastructure & DevOps",
        icons: [
          <FaAws key="aws" />,
          <SiMicrosoftazure key="azure" />,
          <FaGitAlt key="git" />,
        ],
      },
    ],
  },
  {
    title: "experience",
    info: [
      {
        title: "MindPetal - Senior Software Engineer",
        stage: "2021 - Aug 2025",
      },
      {
        title: "Outco Inc - Full Stack Software Engineer",
        stage: "2020 - 2021",
      },
      {
        title: "NASA Kentucky - Embedded Software Engineer",
        stage: "2017 - 2019",
      },
    ],
  },
  {
    title: "credentials",
    credentials: [
      {
        title: "Claude with Anthropic API",
        organization: "Anthropic",
        date: "October 2025",
        image: "/credentials/certificate-2d2fvev4ctv7-1760199723 (1).webp",
        url: "https://verify.skilljar.com/c/2d2fvev4ctv7",
      },
      {
        title: "Certified Scrum Developer®",
        organization: "Scrum Alliance",
        date: "April 2025",
        image: "/credentials/Ajin Sunny-ScrumAlliance_CSD_Certificate.webp",
      },
      {
        title: "Atlassian Jira Fundamentals Badge",
        organization: "Atlassian University",
        date: "2024",
        image: "/credentials/ajin-jira-certificate.webp",
        url: "https://university.atlassian.com/student/award/NYW4PukCkuALHNFhEH57rsY4",
      },
      {
        title: "Software Product Management Certificate",
        organization: "University of Alberta",
        date: "2022",
        image: "/credentials/CERTIFICATE_LANDING_PAGE~YJXWJJB4JVKY.webp",
        url: "https://coursera.org/share/47e2de8cbcf7ccf2768a6dcb0e602965",
      },
    ],
  },
];

// Credential Card Content Component
const CredentialCardContent = ({ credential }: { credential: CredentialCard }) => {
  return (
    <>
      {/* Credential Image */}
      <div className="relative h-48 overflow-hidden bg-white/10">
        <Image
          src={credential.image}
          alt={credential.title}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
      </div>

      {/* Credential Content */}
      <div className="p-6">
        <h3 className="text-lg font-bold text-white mb-1 group-hover:text-accent transition-colors">
          {credential.title}
        </h3>
        <p className="text-white/70 text-sm mb-3">
          {credential.organization}
        </p>
        <div className="flex items-center justify-between">
          <span className="text-white/60 text-sm">{credential.date}</span>
          {credential.url && (
            <div className="flex items-center gap-2 text-accent group-hover:gap-3 transition-all">
              <span className="text-sm font-medium">View</span>
              <BsArrowRight className="group-hover:translate-x-1 transition-transform" />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

const AboutDetails = () => {
  const [activeTab, setActiveTab] = useState<number>(0);

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
            Professional <span className="text-accent">Background</span>
          </h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            My skills, experience, and certifications
          </p>
        </motion.div>

        {/* Content Container */}
        <div className="max-w-5xl mx-auto">
          {/* Navigation Tabs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex justify-center gap-6 md:gap-12 mb-12"
          >
            {aboutData.map((item, itemIndex) => (
              <button
                key={itemIndex}
                onClick={() => setActiveTab(itemIndex)}
                className={`relative pb-2 text-lg md:text-xl font-semibold capitalize transition-colors duration-300 ${
                  activeTab === itemIndex
                    ? "text-accent"
                    : "text-white/60 hover:text-white"
                }`}
              >
                {item.title}
                {/* Active Indicator */}
                {activeTab === itemIndex && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </motion.div>

          {/* Tab Content */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            {/* Render credentials as cards */}
            {aboutData[activeTab].credentials ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {aboutData[activeTab].credentials!.map((credential, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    {credential.url ? (
                      <a
                        href={credential.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group block bg-white/5 rounded-2xl overflow-hidden border border-white/10 hover:border-accent/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl h-full"
                      >
                        <CredentialCardContent credential={credential} />
                      </a>
                    ) : (
                      <div className="bg-white/5 rounded-2xl overflow-hidden border border-white/10 h-full">
                        <CredentialCardContent credential={credential} />
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            ) : (
              /* Render skills/experience as list */
              <div className="bg-white/5 rounded-2xl border border-white/10 p-8 md:p-12 min-h-[300px]">
                <div className="space-y-6">
                  {aboutData[activeTab].info!.map((item, itemIndex) => (
                    <motion.div
                      key={itemIndex}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: itemIndex * 0.1 }}
                      className="flex flex-col md:flex-row md:items-center gap-4"
                    >
                      {/* Title */}
                      <div className="flex-1 text-white/90 text-base md:text-lg font-medium">
                        {item.title}
                      </div>

                      {/* Stage/Date */}
                      {item.stage && (
                        <>
                          <div className="hidden md:block text-white/30">•</div>
                          <div className="text-white/60 text-sm md:text-base">
                            {item.stage}
                          </div>
                        </>
                      )}

                      {/* Icons */}
                      {item.icons && (
                        <div className="flex gap-4">
                          {item.icons.map((icon, iconIndex) => (
                            <div
                              key={iconIndex}
                              className="text-3xl text-white/80 hover:text-accent transition-colors cursor-pointer"
                            >
                              {icon}
                            </div>
                          ))}
                        </div>
                      )}
                    </motion.div>
                  ))}
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutDetails;
