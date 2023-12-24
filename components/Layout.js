// components
import Nav from "../components/Nav";
import Header from "../components/Header";
import TopLeftImg from "../components/TopLeftImg";
import Head from "next/head";

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
        <link rel="icon" href="/icons8-user-color-96.png" />
      </Head>
      <TopLeftImg />
      <Nav />
      <Header />
      {children}
    </div>
  );
};

export default Layout;
