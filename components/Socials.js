import React, { memo } from "react";
import Link from "next/link";

const SocialsComponent = () => {
  return (
    <div className="flex items-center gap-x-5 text-lg">
      <Link href={"https://www.youtube.com/channel/UCfg_jh0JuDJOQdCKS3W9e4g"}>
        <svg
          className="w-[22px] h-[22px] hover:text-accent duration-700 text-gray-800 dark:text-white"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 14"
        >
          <path
            fillRule="evenodd"
            d="M19.7 3.037a4.26 4.26 0 0 0-.789-1.964 2.84 2.84 0 0 0-1.984-.84c-2.767-.2-6.926-.2-6.926-.2s-4.157 0-6.928.2a2.836 2.836 0 0 0-1.983.84A4.225 4.225 0 0 0 .3 3.038a30.148 30.148 0 0 0-.2 3.206v1.5c.01 1.071.076 2.142.2 3.206.094.712.363 1.39.784 1.972.604.536 1.38.837 2.187.848 1.583.15 6.731.2 6.731.2s4.161 0 6.928-.2a2.844 2.844 0 0 0 1.985-.84 4.27 4.27 0 0 0 .787-1.965c.124-1.064.19-2.135.2-3.206V6.243a30.672 30.672 0 0 0-.202-3.206ZM8.008 9.59V3.97l5.4 2.819-5.4 2.8Z"
            clipRule="evenodd"
          />
        </svg>
      </Link>
      <Link href={"https://twitter.com/_ajinsunny_"}>
        <svg
          className="w-[22px] h-[22px] hover:text-accent duration-700 text-gray-800 dark:text-white"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 20 20"
        >
          <path
            fill="currentColor"
            d="M12.186 8.672 18.743.947h-2.927l-5.005 5.9-4.44-5.9H0l7.434 9.876-6.986 8.23h2.927l5.434-6.4 4.82 6.4H20L12.186 8.672Zm-2.267 2.671L8.544 9.515 3.2 2.42h2.2l4.312 5.719 1.375 1.828 5.731 7.613h-2.2l-4.699-6.237Z"
          />
        </svg>
      </Link>
      <Link href={"https://github.com/ajinsunny"}>
        <svg
          className="w-[22px] h-[22px] hover:text-accent duration-700 text-gray-800 dark:text-white"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            fillRule="evenodd"
            d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
            clipRule="evenodd"
          />
        </svg>
      </Link>
      <Link href={"https://medium.com/@ajin.sunny"}>
        <svg
          className="w-[22px] h-[22px] hover:text-accent duration-700 text-gray-800 dark:text-white"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 65 65"
        >
          <path d="M45.049,14c12.011,0 12.951,0.94 12.951,12.951v18.098c0,12.011 -0.94,12.951 -12.951,12.951h-18.098c-12.011,0 -12.951,-0.94 -12.951,-12.951v-18.098c0,-12.011 0.94,-12.951 12.951,-12.951zM29.713,44.151c4.502,0 8.151,-3.649 8.151,-8.151c0,-4.502 -3.649,-8.151 -8.151,-8.151c-4.502,0 -8.151,3.649 -8.151,8.151c0,4.502 3.65,8.151 8.151,8.151zM42.713,43.757c2.228,0 4.034,-3.473 4.034,-7.757c0,-4.284 -1.806,-7.757 -4.034,-7.757c-2.228,0 -4.034,3.473 -4.034,7.757c0,4.284 1.806,7.757 4.034,7.757zM48.98,42.928c0.775,0 1.403,-3.102 1.403,-6.928c0,-3.826 -0.628,-6.928 -1.403,-6.928c-0.775,0 -1.403,3.102 -1.403,6.928c0,3.826 0.628,6.928 1.403,6.928z" />
        </svg>
      </Link>
      <Link href={"https://www.linkedin.com/in/ajinsunny/"}>
        <svg
          className="w-[22px] h-[22px] hover:text-accent duration-700 text-gray-800 dark:text-white"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 15 15"
        >
          <path
            fillRule="evenodd"
            d="M7.979 5v1.586a3.5 3.5 0 0 1 3.082-1.574C14.3 5.012 15 7.03 15 9.655V15h-3v-4.738c0-1.13-.229-2.584-1.995-2.584-1.713 0-2.005 1.23-2.005 2.5V15H5.009V5h2.97ZM3 2.487a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
            clipRule="evenodd"
          />
          <path d="M3 5.012H0V15h3V5.012Z" />
        </svg>
      </Link>
    </div>
  );
};

const Socials = memo(SocialsComponent);
Socials.displayName = "Socials";

export default Socials;
