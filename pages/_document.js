// pages/_document.js

import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="utf-8" />
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
