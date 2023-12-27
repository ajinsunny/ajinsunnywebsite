// components
import React, { Suspense, lazy } from "react";
import Head from "next/head";

const Nav = lazy(() => import("../components/Nav"));
const Header = lazy(() => import("../components/Header"));
const TopLeftImg = lazy(() => import("../components/TopLeftImg"));

const Layout = ({ children }) => {
  return (
    <div
      className={`page bg-site text-white bg-cover bg-no-repeat font-heebo relative`}
    >
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
        <TopLeftImg />
        <Nav />
        <Header />
      </Suspense>
      {children}
    </div>
  );
};

export default Layout;
