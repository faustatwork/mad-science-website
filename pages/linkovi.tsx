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
import { Book } from "lucide-react";

const Linkovi: NextPage = () => {
  return (
    <>
      <Head>
        <title>Mad Science - Linkovi</title>
        <meta property="title" content="Mad Science - Linkovi" key="title" />
        <meta property="og:title" content="Mad Science - Linkovi" key="title" />
        <meta name="description" content="Mad Science" />
        <meta name="og:description" content="Mad Science" />
        <meta property="og:url" content="https://mad-science.io" />
        <link rel="canonical" href="https://mad-science.io" />
      </Head>
      <Navbar />
      <div className="flex min-h-screen w-screen flex-col items-center justify-center gap-10 px-20 sm:px-10 sm:pt-48">
        <p className="text-center text-5xl font-bold text-black dark:text-white md:text-3xl">
          Linkovi
        </p>
        <p className="text-center text-xl text-gray-500 dark:text-gray-400">
          Svi linkovi gdje nas možete naći.
        </p>
        <Links
          items={[
            {
              icon: <InstagramLogo />,
              href: "/instagram",
              name: "Instagram",
              desc: "Instagram",
            },
            {
              icon: <TelegramLogo />,
              href: "/telegram",
              name: "Telegram",
              desc: "Telegram",
            },
            {
              icon: <TikTokLogo />,
              href: "/tiktok",
              name: "TikTok",
              desc: "TikTok",
            },
            {
              icon: <YouTubeLogo />,
              href: "/youtube",
              name: "YouTube",
              desc: "YouTube",
            },
            {
              icon: <Book size={26} />,
              href: "/edukacija",
              name: "Edukacija",
              desc: "Edukacija",
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
