import "../styles/globals.css";
// components
import Layout from "../components/Layout";

export default function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
