import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import { Inter } from "next/font/google";
import Head from "next/head";
import { Toaster } from "react-hot-toast";
import HTMLComment from "react-html-comment";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

function MadScienceWebsite({ Component, pageProps }: AppProps) {
  return (
    <>
      <HTMLComment text="Developed and designed by Marin Heđeš <https://marinhedes.com>" />
      <Head>
        <meta name="viewport" content="width=device-width" />
      </Head>
      <ThemeProvider
        enableSystem={true}
        defaultTheme="system"
        attribute="class"
      >
        <main className={inter.className}>
          <Component {...pageProps} />
          <Toaster position="bottom-right" reverseOrder={false} />
        </main>
      </ThemeProvider>
    </>
  );
}

export default MadScienceWebsite;
