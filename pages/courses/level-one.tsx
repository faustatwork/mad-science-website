import type { NextPage } from "next";
import Head from "next/head";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import { useEffect, useRef } from "react";

const LevelOne: NextPage = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Define a custom handler function for the contextmenu event
    const handleContextMenu = (e: MouseEvent) => {
      // Prevent the right-click menu from appearing
      e.preventDefault();
    };

    // Attach the event listener to the document object
    document.addEventListener("contextmenu", handleContextMenu);

    // Clean up the event listener when the component unmounts
    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
    };
  }, []);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.src = "/api/video";
    }
  }, []);

  return (
    <>
      <Head>
        <title>Mad Science - Level 1</title>
        <meta property="title" content="Mad Science - Level 1" key="title" />
        <meta property="og:title" content="Mad Science - Level 1" key="title" />
        <meta name="description" content="Mad Science Level 1 kurs" />
        <meta name="og:description" content="Mad Science Level 1 kurs" />
        <meta
          property="og:url"
          content="https://mad-science-website.vercel.app/courses/level-one"
        />
        <link
          rel="canonical"
          href="https://mad-science-website.vercel.app/courses/level-one"
        />
      </Head>
      <Navbar />
      <main className="flex min-h-screen w-screen flex-col items-center justify-center">
        <section className="flex w-full flex-1 flex-col items-center justify-center gap-5 px-20 text-center">
          <video
            ref={videoRef}
            width="640"
            height="480"
            controls
            controlsList="nodownload"
          ></video>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default LevelOne;
