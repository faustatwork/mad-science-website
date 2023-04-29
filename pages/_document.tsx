import Document, { Head, Html, Main, NextScript } from "next/document";

export default class MadScienceWebsiteDocument extends Document {
  render() {
    return (
      <Html lang="sr">
        <html
          dangerouslySetInnerHTML={{
            __html:
              "<!-- Developed and designed by Marin Heđeš <https://marinhedes.com> -->",
          }}
        ></html>
        <Head>
          {/* Meta tags */}
          <meta
            name="keywords"
            content="mad science, mad, science, trading, crypto, financial, financije, ulaganje, investments, investing, investicije, kurs, course, tecaj, zarada, profit, balkan, uspjeh, forex, novac, financijska sloboda"
          />
          <meta property="og:image" content="/images/image.webp" />
          <meta property="og:site_name" content="Mad Science" />
          {/* Favicons */}
          <link rel="icon" href="/favicon/favicon.ico" />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/favicon/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon/favicon-16x16.png"
          />
          <link rel="manifest" href="/site.webmanifest" />
          {/* Apple-specific tags */}
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta
            name="apple-mobile-web-app-status-bar-style"
            content="#02B6EB"
          />
          <meta name="apple-mobile-web-app-title" content="Mad Science" />
          {/* Microsoft-specific tags */}
          <meta name="msapplication-TileImage" content="/favicon/favicon.ico" />
          <meta name="msapplication-TileColor" content="#02B6EB" />
          {/* Twitter-specific tags */}
          <meta name="twitter:card" content="summary_large_image" />
          {/* Random tags */}
          <meta name="theme-color" content="#02B6EB" />
          <meta charSet="UTF-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
