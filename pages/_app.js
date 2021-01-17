// pages/_app.js
import React from "react";
import Head from "next/head";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com"></link>
        <title>Bridge</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
