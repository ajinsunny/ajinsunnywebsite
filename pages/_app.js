import "../styles/globals.css";

// components
import Layout from "../components/Layout";

// router
import { useRouter } from "next/router";

export default function MyApp({ Component, pageProps }) {
  const router = useRouter();
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}