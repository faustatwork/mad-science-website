import type { NextPage } from "next";
import Head from "next/head";
import Footer from "../components/Footer";
import Button from "../components/Button";
import SwitchTheme from "../components/SwitchTheme";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>website</title>
        <meta property="title" content="website" key="title" />
        <meta property="og:title" content="website" key="title" />
        <meta name="description" content="website description" />
        <meta name="og:description" content="website description" />
        <meta property="og:url" content="website url" />
        <link rel="canonical" href="website url" />
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
