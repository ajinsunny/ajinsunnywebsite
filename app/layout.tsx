// app/layout.tsx
import "../styles/globals.css";
import Layout from "../components/Layout";
import type { ReactNode } from "react";

export const metadata = {
  title: "Ajin Sunny",
  description:
    "Portfolio website showcasing work, projects, and contact information.",
  keywords: "software, engineering, fullstack, webdevelopment, performance",
  authors: [{ name: "Ajin Sunny" }],
  alternates: {
    canonical: "https://ajinsunny.com",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#131424",
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
