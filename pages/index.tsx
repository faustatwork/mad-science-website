import type { NextPage } from "next";
import Head from "next/head";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Tier from "../components/Tier";
import Disclosure from "../components/Disclosure";

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
        <div className="flex h-screen w-full flex-col items-start justify-center gap-10 px-40 text-start sm:px-10">
          <h1 className="text-[6rem] font-bold text-[#80EAEA] sm:text-4xl">
            Mad Science
          </h1>
          <p className="text-5xl font-bold text-gray-500 sm:text-2xl">
            Dolazi uskoro.
          </p>
        </div>
      </header>
      <main className="flex flex-col items-center justify-center gap-20 px-20">
        <section id="kupi">
          <Tier
            items={[
              {
                title: "Level 1",
                description: "Opis",
                price: 44,
                features: ["Live trading", "Item", "Item"],
                model: "jednokratno",
              },
              {
                title: "Level 2",
                description: "Opis",
                price: 80,
                features: ["Live trading", "Item", "Item"],
                model: "mjesečno",
                recommended: true,
              },
              {
                title: "Level 3",
                description: "Opis",
                price: 999,
                features: ["Live trading", "Item", "Item"],
                model: "jednokratno",
              },
            ]}
          />
        </section>
        <section
          className="flex flex-col items-start justify-start gap-5"
          id="pitanja"
        >
          <p className="text-3xl font-bold text-black dark:text-white">
            Pitanja i odgovori
          </p>
          <p className="text-lg text-gray-500 dark:text-gray-400">
            Svi odgovori na sva vaša pitanja.
          </p>
          <Disclosure
            content={[
              { question: "Pitanje 1", answer: "Odgovor 1" },
              { question: "Pitanje 2", answer: "Odgovor 2" },
            ]}
          />
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Index;
