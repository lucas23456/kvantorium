import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Lico.py</title>
        <link rel="icon" type="image/png" href="/logo.png" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Lico.py - Легчайший способ найти человека на фотографии"
        />
        <meta
          property="og:description"
          content="Легчайший способ найти человека на фотографии. Работает только на Windows"
        />
        <meta property="og:site_name" content="Lico.py" />
        <meta property="og:url" content="" />
        <meta
          property="og:image"
          content=""
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
