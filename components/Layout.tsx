// components/Layout.tsx
import React, { Suspense, ReactNode } from "react";
import TopNavigation from "./TopNavigation";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="page bg-site text-white bg-cover bg-no-repeat font-heebo relative">
      <Suspense fallback={<div>Loading...</div>}>
        {/* Top Navigation */}
        <TopNavigation />
      </Suspense>
      {children}
    </div>
  );
};

export default Layout;
