import type { NextPage } from "next";
import Head from "next/head";
import Footer from "../components/Footer";
import Button from "../components/Button";
import SwitchTheme from "../components/SwitchTheme";
import { Home } from "lucide-react";
import { Variants, motion } from "framer-motion";
import Navbar from "../components/Navbar";
import { RefreshCcw } from "lucide-react";

const motionVariant: Variants = {
  visible: {
    x: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 40, duration: 1 },
  },
  hidden: { x: -300, opacity: 0 },
};

const Index: NextPage = () => {
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
      <Navbar />
      <header>
        <div className="flex h-screen w-full flex-col items-center justify-center gap-10 px-40 text-center">
          <h1 className="text-6xl font-bold text-black dark:text-white">
            Next.js starter template with Tailwind
          </h1>
          <p className="text-2xl text-black dark:text-white">
            Example paragraph
          </p>
          <div className="flex flex-row items-center gap-3">
            <Home size={20} />
            <p className="text-black dark:text-white">Example icon</p>
          </div>
          <motion.div
            variants={motionVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <p className="text-black dark:text-white">Example animation</p>
          </motion.div>
          <Button
            text={"Example button"}
            size={"sm"}
            color={"primary"}
            icon={<RefreshCcw size={20} />}
          />
          <SwitchTheme />
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
