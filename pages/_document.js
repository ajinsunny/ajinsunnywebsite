// pages/_document.js

import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="icon" href="/icons8-user-color-96.png" />
          <script
            src={`https://www.google.com/recaptcha/api.js?render=${process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}`}
            async
            defer
          ></script>
          <meta charSet="utf-8" />
          <meta
            name="description"
            content="This website is the portfolio for Ajin Sunny"
          />
          <meta
            name="keywords"
            content="software, enigneering, fullstack, webdevelopement, performance"
          />
          <meta name="author" content="Ajin Sunny" />
          <link rel="canonical" href="https://ajinsunny.com" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
