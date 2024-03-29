import type { NextPage } from "next";
import Head from "next/head";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import {
  InstagramLogo,
  TelegramLogo,
  TikTokLogo,
  YouTubeLogo,
} from "../components/Logos";
import Links from "../components/Links";

const Linkovi: NextPage = () => {
  return (
    <>
      <Head>
        <title>Mad Science - Linkovi</title>
        <meta property="title" content="Mad Science - Linkovi" key="title" />
        <meta property="og:title" content="Mad Science - Linkovi" key="title" />
        <meta name="description" content="Mad Science linkovi." />
        <meta name="og:description" content="Mad Science linkovi." />
        <meta property="og:url" content="https://mad-science.io/linkovi" />
        <link rel="canonical" href="https://mad-science.io/linkovi" />
      </Head>
      <Navbar />
      <div className="flex min-h-screen w-screen flex-col items-center justify-center gap-10 px-20 sm:px-10 sm:pt-48">
        <p className="text-center text-4xl font-bold text-black dark:text-white md:text-2xl">
          Linkovi
        </p>
        <p className="text-center text-xl text-gray-500 dark:text-gray-400 md:text-base">
          Svi linkovi gdje nas možete naći.
        </p>
        <Links
          items={[
            {
              icon: <InstagramLogo />,
              href: "/instagram",
              name: "Instagram",
            },
            {
              icon: <TelegramLogo />,
              href: "/telegram",
              name: "Telegram",
            },
            {
              icon: <TikTokLogo />,
              href: "/tiktok",
              name: "TikTok",
            },
            {
              icon: <YouTubeLogo />,
              href: "/youtube",
              name: "YouTube",
            },
          ]}
        />
      </div>
      <div className="sm:mt-36">
        <Footer />
      </div>
    </>
  );
};

export default Linkovi;
