import Image from "next/image";
import Head from "next/head";
import { Suspense, lazy } from "react";

// components
const ParticlesContainer = lazy(
  () => import("../components/ParticlesContainer")
);
const ProjectsBtn = lazy(() => import("../components/ProjectsBtn"));
const Avatar = lazy(() => import("../components/Avatar"));

const Home = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="bg-primary/60 h-full">
        <Head>
          <title>Ajin Sunny</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        {/* text */}
        <div className="w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10">
          <div className="text-center flex flex-col justify-center xl:pt-40 xl:text-left h-full container mx-auto">
            {/* title */}
            <h1 className="h1">
              Digitally Drafting <br /> Your Ideas Into{" "}
              <span className="text-accent"> Execution</span>
            </h1>
            {/* subtitle */}
            <p className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16"></p>
            {/* btn */}
            <div className="flex justify-center xl:hidden relative">
              <ProjectsBtn />
            </div>
            <div className="hidden xl:flex"></div>
          </div>
        </div>
        {/* image */}
        <div className="w-[1200px] h-full absolute right-0 bottom-0">
          {/* bg img */}
          <div className="bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0"></div>
          {/* particles */}
          <ParticlesContainer />
          {/* avatar img */}
          <div className="w-full h-full max-w-[525px] max-h-[650px] absolute -bottom-32 lg:bottom-0 lg:right-[15%]">
            <Avatar />
          </div>
        </div>
      </div>
    </Suspense>
  );
};

export default Home;
