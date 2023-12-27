import React, { memo } from "react";
import Link from "next/link";

// icons
import {
  RiYoutubeLine,
  RiTwitterXFill,
  RiGithubFill,
  RiMediumFill,
  RiLinkedinBoxFill,
} from "react-icons/ri";

const SocialsComponent = () => {
  return (
    <div className="flex items-center gap-x-5 text-lg">
      <Link
        href={"https://www.youtube.com/channel/UCfg_jh0JuDJOQdCKS3W9e4g"}
        className="hover:text-accent transition-all duration-300"
      >
        <RiYoutubeLine />
      </Link>
      <Link
        href={"https://twitter.com/_ajinsunny_"}
        className="hover:text-accent transition-all duration-300"
      >
        <RiTwitterXFill />
      </Link>
      <Link
        href={"https://github.com/ajinsunny"}
        className="hover:text-accent transition-all duration-300"
      >
        <RiGithubFill />
      </Link>
      <Link
        href={"https://medium.com/@ajin.sunny"}
        className="hover:text-accent transition-all duration-300"
      >
        <RiMediumFill />
      </Link>
      <Link
        href={"https://www.linkedin.com/in/ajinsunny/"}
        className="hover:text-accent transition-all duration-300"
      >
        <RiLinkedinBoxFill />
      </Link>
    </div>
  );
};

const Socials = memo(SocialsComponent);
Socials.displayName = "Socials";

export default Socials;
