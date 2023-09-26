// fonts
import { Heebo } from "@next/font/google";

// font settings
const heebo = Heebo({
  subsets: ["latin"],
  variable: "--font-heebo",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

// components
import Nav from "../components/Nav";
import Header from "../components/Header";
import TopLeftImg from "../components/TopLeftImg";
import Head from "next/head";

const Layout = ({ children }) => {
  return (
    <div
      className={`page bg-site text-white bg-cover bg-no-repeat ${heebo.variable} font-heebo relative`}
    >
      <TopLeftImg />
      <Nav />
      <Header />
      {children}
    </div>
  );
};

export default Layout;
