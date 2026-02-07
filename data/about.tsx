"use client";

import React from "react";
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
import { AboutSection } from "./types";

export const aboutData: AboutSection[] = [
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
        title: "MindPetal - Senior AI Software Engineer",
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
        title: "Certified Scrum Developer\u00AE",
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
