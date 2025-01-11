import React from "react";
import Document, { Head, Html, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="ru">
        <Head>
          <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        </Head>

        <head>
          <title>ЖК Новоград</title>
        </head>
        <NextScript />
        <body>
          <Main />
          <div id="CallMeModal" />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
