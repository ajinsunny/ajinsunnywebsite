import React, { lazy, Suspense } from "react";
import Image from "next/image";

// next link
import Link from "next/link";

// components
const Socials = lazy(() => import("../components/Socials"));

const Header = () => {
  return (
    <header className="absolute z-30 w-full flex items-center px-16 xl:px-0 xl:h-[90px]">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-y-6 py-8">
          {/* logo */}
          <Link href={"/"}>
            <Image
              src={"/logo.svg"}
              width={200}
              height={50}
              alt=""
              priority={true}
              className="logo"
            />
          </Link>
          {/* socials */}
          <Suspense fallback={<div>Loading Socials...</div>}>
            <Socials />
          </Suspense>
        </div>
      </div>
    </header>
  );
};

export default Header;
