import type { NextPage } from "next";
import Head from "next/head";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import Link from "next/link";

const LevelTwo: NextPage = () => {
  return (
    <>
      <Head>
        <title>Mad Science - Level 2</title>
        <meta property="title" content="Mad Science - Level 2" key="title" />
        <meta property="og:title" content="Mad Science - Level 2" key="title" />
        <meta name="description" content="Mad Science Level 2 kurs" />
        <meta name="og:description" content="Mad Science Level 2 kurs" />
        <meta
          property="og:url"
          content="https://mad-science-website.vercel.app/courses/level-two"
        />
        <link
          rel="canonical"
          href="https://mad-science-website.vercel.app/courses/level-two"
        />
      </Head>
      <Navbar />
      <main className="flex min-h-screen w-screen flex-col items-center justify-center">
        <section className="flex w-full flex-1 flex-col items-center justify-center gap-5 px-20 text-center">
          <h1 className="text-9xl font-black text-gray-200 dark:text-gray-800">
            404
          </h1>
          <p className="text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl">
            Uh-oh!
          </p>
          <p className="text-gray-500 ">Ova stranica ne postoji.</p>
          <Link
            href="/"
            className="inline-block rounded bg-blue-600 px-5 py-3 text-sm font-medium text-white hover:bg-blue-700 focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900"
          >
            Nazad
          </Link>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default LevelTwo;
