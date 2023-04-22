import Document, { Head, Html, Main, NextScript } from "next/document";

export default class WebsiteDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          {/* Meta tags */}
          <meta name="keywords" content="keywords" />
          <meta property="og:image" content="image url" />
          <meta property="og:site_name" content="site name" />
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
            content="#ffffff"
          />
          <meta name="apple-mobile-web-app-title" content="site name" />
          {/* Microsoft-specific tags */}
          <meta name="msapplication-TileImage" content="/favicon/favicon.ico" />
          <meta name="msapplication-TileColor" content="#ffffff" />
          {/* Random tags */}
          <meta name="theme-color" content="#ffffff" />
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
