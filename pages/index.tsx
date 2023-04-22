import type { NextPage } from "next";
import Head from "next/head";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Index: NextPage = () => {
  return (
    <>
      <Head>
        <title>Mad Science</title>
        <meta property="title" content="Mad Science" key="title" />
        <meta property="og:title" content="Mad Science" key="title" />
        <meta name="description" content="Mad Science" />
        <meta name="og:description" content="Mad Science" />
        <meta
          property="og:url"
          content="https://mad-science-website.vercel.app"
        />
        <link rel="canonical" href="https://mad-science-website.vercel.app" />
      </Head>
      <Navbar />
      <header>
        <div className="flex h-screen w-full flex-col items-start justify-center gap-10 px-40 text-start sm:px-20">
          <h1 className="text-[6rem] font-bold text-black dark:text-white">
            Mad Science
          </h1>
          <p className="text-5xl font-bold text-gray-500">Dolazi uskoro.</p>
        </div>
      </header>
      <main className="flex flex-col items-center justify-center gap-20 px-20">
        <section></section>
      </main>
      <Footer />
    </>
  );
};

export default Index;
