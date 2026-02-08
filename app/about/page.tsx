"use client";

import React, { useState } from "react";
import Image from "next/image";
import { BsArrowRight } from "react-icons/bs";
import Avatar from "../../components/Avatar";
import CountUp from "react-countup";
import { aboutData } from "../../data/about";
import { CredentialCard } from "../../data/types";

// Credential Card Content Component
const CredentialCardContent = ({ credential }: { credential: CredentialCard }) => {
  return (
    <>
      <div className="relative h-48 overflow-hidden bg-white/10">
        <Image
          src={credential.image}
          alt={credential.title}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
      </div>
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

const About: React.FC = () => {
  const [index, setIndex] = useState<number>(0);

  return (
    <div className="h-full bg-primary/30 py-24 text-center xl:text-left">
      {/* Avatar image */}
      <div className="hidden xl:flex absolute bottom-0 -left-[370px]">
        <Avatar />
      </div>

      <div className="container mx-auto h-full flex flex-col items-center xl:flex-row">
        {/* Text section */}
        <div className="flex-1 flex flex-col justify-center">

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
                  Code Reviews
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
            {aboutData[index].credentials ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
                {aboutData[index].credentials!.map((credential, credIndex) => (
                  credential.url ? (
                    <a
                      key={credIndex}
                      href={credential.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group block bg-white/5 rounded-2xl overflow-hidden border border-white/10 hover:border-accent/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                    >
                      <CredentialCardContent credential={credential} />
                    </a>
                  ) : (
                    <div
                      key={credIndex}
                      className="bg-white/5 rounded-2xl overflow-hidden border border-white/10"
                    >
                      <CredentialCardContent credential={credential} />
                    </div>
                  )
                ))}
              </div>
            ) : (
              aboutData[index].info?.map((item, itemIndex) => (
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
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
