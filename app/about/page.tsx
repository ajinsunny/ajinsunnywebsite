"use client";

import React, { useState } from "react";
import { FaHtml5, FaCss3, FaJs, FaReact } from "react-icons/fa";
import { SiNextdotjs, SiFramer } from "react-icons/si";
import Avatar from "../../components/Avatar";
import CountUp from "react-countup";

// Define interfaces for type safety
interface AboutInfo {
  title: React.ReactNode;
  stage?: string;
  icons?: React.ReactNode[];
}

interface AboutSection {
  title: string;
  info: AboutInfo[];
}

// About data array with type annotations
export const aboutData: AboutSection[] = [
  {
    title: "skills",
    info: [
      {
        title: "Web Development",
        icons: [
          <FaHtml5 key="html5" />,
          <FaCss3 key="css3" />,
          <FaJs key="javascript" />,
          <FaReact key="react" />,
          <SiNextdotjs key="nextjs" />,
          <SiFramer key="framer" />,
        ],
      },
    ],
  },
  {
    title: "experience",
    info: [
      {
        title: "MindPetal Sofwtare Solutions - Software Engineer",
        stage: "2021 - Present",
      },
      {
        title: "Full-Stack Software Engineer - Outco Inc.",
        stage: "2020 - 2021",
      },
      {
        title: "Embedded Software Developer - NASA Kentucky",
        stage: "2017 - 2019",
      },
    ],
  },
  {
    title: "credentials",
    info: [
      {
        title: (
          <a
            href="https://triplebyte.com/tb/ajin-sunny-5davdag/certificate"
            style={{ textDecoration: "underline" }}
          >
            Triple Byte Certified Software Engineer - Triple Byte
          </a>
        ),
        stage: "2023",
      },
      {
        title: (
          <a
            href="https://coursera.org/share/47e2de8cbcf7ccf2768a6dcb0e602965"
            style={{ textDecoration: "underline" }}
          >
            Software Product Management Certificate - University of Alberta
          </a>
        ),
        stage: "2022",
      },
    ],
  },
];

const About: React.FC = () => {
  const [index, setIndex] = useState<number>(0);
  console.log(index);

  return (
    <div className="h-full bg-primary/30 py-24 text-center xl:text-left">
      {/* Avatar image */}
      <div className="hidden xl:flex absolute bottom-0 -left-[370px]">
        <Avatar />
      </div>

      <div className="container mx-auto h-full flex flex-col items-center xl:flex-row">
        {/* Text section */}
        <div className="flex-1 flex flex-col justify-center">
          <h2 className="h2">
            Narratives <span className="text-accent">Fuel</span> Breakthrough
            Designs
          </h2>
          <p className="max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0">
            5 years ago, I began my journey as a software developer. I worked
            for a career accelerator startup, where I learned the basics of web
            development. Following this journey, I worked for United States
            Federal Agencies as a web developer. I&apos;m currently learning new
            technologies such as Next.js and Solid.js
          </p>
          {/* Counters */}
          <div className="hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8">
            <div className="flex flex-1 xl:gap-x-6">
              {/* Experience counter */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={5} duration={1} /> +
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Years of experience
                </div>
              </div>
              {/* Clients counter */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={2000} duration={3} /> +
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Satisfied clients
                </div>
              </div>
              {/* Projects counter */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={15} duration={1} /> +
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Finished projects
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Info section */}
        <div className="flex flex-col w-full xl:max-w-[48%] h-[480px]">
          {/* Navigation tabs */}
          <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
            {aboutData.map((item, itemIndex) => (
              <div
                key={itemIndex}
                className={`${
                  index === itemIndex &&
                  "text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300"
                } cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
                onClick={() => setIndex(itemIndex)}
              >
                {item.title}
              </div>
            ))}
          </div>
          {/* Info details */}
          <div className="py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start">
            {aboutData[index].info.map((item, itemIndex) => (
              <div
                key={itemIndex}
                className="flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60"
              >
                {/* Title */}
                <div className="font-light mb-2 md:mb-0">{item.title}</div>
                <div className="hidden md:flex">-</div>
                <div>{item.stage}</div>
                <div className="flex gap-x-4">
                  {/* Icons */}
                  {item.icons?.map((icon, iconIndex) => (
                    <div key={iconIndex} className="text-2xl text-white">
                      {icon}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
