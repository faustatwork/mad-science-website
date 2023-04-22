import type { NextPage } from "next";
import Head from "next/head";
import Footer from "../components/Footer";
import Button from "../components/Button";
import SwitchTheme from "../components/SwitchTheme";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Mad Science - 404</title>
        <meta property="title" content="Mad Science - 404" key="title" />
        <meta property="og:title" content="Mad Science - 404" key="title" />
        <meta name="description" content="Mad Science" />
        <meta name="og:description" content="Mad Science" />
        <meta
          property="og:url"
          content="https://mad-science-website.vercel.app"
        />
        <link rel="canonical" href="https://mad-science-website.vercel.app" />
      </Head>
      <div className="flex min-h-screen w-screen flex-col items-center justify-center">
        <main className="flex w-full flex-1 flex-col items-center justify-center gap-10 px-20 text-center">
          <h1 className="text-6xl font-bold text-black dark:text-white">
            Next.js starter template with Tailwind
          </h1>
          <p className="text-2xl text-black dark:text-white">
            Example paragraph
          </p>
          <Button text={"Example button"} size={"sm"} color={"primary"} />
          <SwitchTheme />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Home;
