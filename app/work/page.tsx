// app/work/page.tsx
"use client";

import React from "react";
import WorkSlider from "../../components/WorkSlider";

const Work: React.FC = () => {
  return (
    <div className="h-full bg-primary/30 py-36 flex items-center">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-x-8">
          {/* Text Section */}
          <div className="text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0">
            <h2 className="h2 xl:mt-12">
              My work <span className="text-accent">.</span>
            </h2>
          </div>
          {/* Slider Section */}
          <div className="w-full xl:max-w-[65%]">
            <WorkSlider />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
