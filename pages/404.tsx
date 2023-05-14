import type { NextPage } from "next";
import Head from "next/head";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

const Error404: NextPage = () => {
  return (
    <>
      <Head>
        <title>Mad Science - 404</title>
        <meta property="title" content="Mad Science - 404" key="title" />
        <meta property="og:title" content="Mad Science - 404" key="title" />
        <meta name="description" content="Mad Science" />
        <meta name="og:description" content="Mad Science" />
        <meta property="og:url" content="https://mad-science.io" />
        <link rel="canonical" href="https://mad-science.io" />
      </Head>
      <Navbar />
      <div className="flex min-h-screen w-screen flex-col items-center justify-center gap-5 px-20 text-center sm:px-10">
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
          <span className="mr-2 inline-block align-middle">
            <ArrowLeft size={20} />
          </span>
          Nazad
        </Link>
      </div>
      <Footer />
    </>
  );
};

export default Error404;
