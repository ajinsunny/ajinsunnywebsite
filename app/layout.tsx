// app/layout.tsx
import "../styles/globals.css"; // Global CSS
import Layout from "../components/Layout"; // Your custom layout component
import type { ReactNode } from "react";

// Metadata replaces <Head> content from _document.js
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

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
