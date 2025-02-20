// components/Layout.tsx
import React, { Suspense, lazy, ReactNode } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

interface NavItem {
  name: string;
  path: string;
  icon: React.ReactNode;
}

export const navData: NavItem[] = [
  {
    name: "home",
    path: "/",
    icon: (
      <svg
        className="w-6 h-6"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
      </svg>
    ),
  },
  {
    name: "about",
    path: "/about",
    icon: (
      <svg
        className="w-6 h-6"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 14 18"
      >
        <path d="M7 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9Zm2 1H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z" />
      </svg>
    ),
  },
  {
    name: "contact",
    path: "/contact",
    icon: (
      <svg
        className="w-6 h-6"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 20 16"
      >
        <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
        <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
      </svg>
    ),
  },
];

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="page bg-site text-white bg-cover bg-no-repeat font-heebo relative">
      <Head>
        <title>Ajin Sunny</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="This website is the portfolio for Ajin Sunny"
        />
        <link rel="icon" href="/icons8-user-color-16.webp" />
      </Head>

      <Suspense fallback={<div>Loading...</div>}>
        {/* Navigation */}
        <nav className="fixed bottom-0 w-full xl:w-16 xl:max-w-md xl:right-[2%] z-50 xl:top-0 xl:h-screen">
          <div
            className="flex w-full xl:flex-col items-center justify-center xl:justify-center gap-x-20 xl:gap-y-12 
            px-4 md:px-40 xl:px-0 h-[80px] xl:h-max py-6 
            bg-primary/90 xl:bg-white/10 backdrop-blur-sm 
            border-t xl:border-t-0 border-white/20
            xl:rounded-full xl:mt-[30vh]"
          >
            {navData.map((link, index) => (
              <Link href={link.path} key={index} aria-label={link.name}>
                <div className="group relative flex items-center">
                  <div className="text-white hover:text-accent duration-700">
                    {link.icon}
                  </div>
                  <div className="absolute pr-14 right-0 hidden xl:group-hover:flex">
                    <div className="bg-white relative flex text-primary items-center p-[6px] rounded-[3px]">
                      <div className="text-[12px] leading-none font-semibold capitalize">
                        {link.name}
                      </div>
                      <div className="border-solid border-l-white border-l-8 border-y-transparent border-y-[6px] border-r-0 absolute -right-2" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </nav>

        {/* Header */}
        <header className="absolute z-30 w-full">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-center lg:justify-start pt-16 sm:pt-20 lg:pt-8">
              <Link href="/" aria-label="Home">
                {/* Mobile Logo */}
                <div className="block lg:hidden">
                  <Image
                    src="/logo-mobile.svg"
                    width={350}
                    height={100}
                    alt="Ajin Sunny Logo"
                    priority
                    className="w-[300px] sm:w-[350px] h-auto object-contain"
                  />
                </div>
                {/* Desktop Logo */}
                <div className="hidden lg:block">
                  <Image
                    src="/logo-desktop.svg"
                    width={800}
                    height={200}
                    alt="Ajin Sunny Logo"
                    priority
                    className="w-[300px] xl:w-[400px] h-auto object-contain"
                  />
                </div>
              </Link>
            </div>
          </div>
        </header>
      </Suspense>
      {children}
    </div>
  );
};

export default Layout;
