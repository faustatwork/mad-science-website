import type { NextPage } from "next";
import Head from "next/head";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Tier from "../components/Tier";
import Disclosure from "../components/Disclosure";
import Testimonial from "../components/Testimonial";

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
        <div className="mb-4 flex h-screen w-full flex-col items-start justify-center gap-10 px-40 text-start sm:px-10">
          <h1 className="text-[6rem] font-bold text-[#80EAEA] sm:text-4xl">
            Mad Science
          </h1>
          <p className="text-5xl font-bold text-gray-500 sm:text-2xl">
            Dolazi uskoro.
          </p>
        </div>
      </header>
      <main className="flex flex-col items-center justify-center gap-40 px-20 sm:px-10">
        <section
          id="recenzije"
          className="flex flex-col items-center justify-center gap-10"
        >
          <p className="text-center text-5xl font-bold text-black dark:text-white md:text-3xl">
            Što kažu ljudi o nama
          </p>
          <p className="text-center text-xl text-gray-500 dark:text-gray-400">
            Uzmite njihovu riječ, ne našu.
          </p>
          <Testimonial
            content={[
              {
                user: "Marin",
                message:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam posuere lacus consequat odio interdum maximus. Morbi metus arcu, rhoncus et enim suscipit, molestie luctus nulla. Maecenas tempor nisi metus. Suspendisse rhoncus sem lectus, vitae laoreet sem consectetur a. Fusce eu nisi convallis, pellentesque velit eget, facilisis eros. Pellentesque quis auctor ligula. Donec semper dui et dui imperdiet, ac dictum mi commodo.",
                avatar: "/images/image.webp",
              },
              {
                user: "Marin",
                message:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam posuere lacus consequat odio interdum maximus. Morbi metus arcu, rhoncus et enim suscipit, molestie luctus nulla. Maecenas tempor nisi metus. Suspendisse rhoncus sem lectus, vitae laoreet sem consectetur a. Fusce eu nisi convallis, pellentesque velit eget, facilisis eros. Pellentesque quis auctor ligula. Donec semper dui et dui imperdiet, ac dictum mi commodo. Phasellus bibendum, diam ac tempor lobortis, quam eros bibendum justo, ac dignissim enim sapien laoreet velit.",
                avatar: "/images/image.webp",
              },
              {
                user: "Marin",
                message:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam posuere lacus consequat odio interdum maximus. Morbi metus arcu, rhoncus et enim suscipit, molestie luctus nulla. Maecenas tempor nisi metus. Suspendisse rhoncus sem lectus, vitae laoreet sem consectetur a.",
                avatar: "/images/image.webp",
              },
              {
                user: "Marin",
                message:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam posuere lacus consequat odio interdum maximus. Morbi metus arcu, rhoncus et enim suscipit, molestie luctus nulla. Maecenas tempor nisi metus. Suspendisse rhoncus sem lectus, vitae laoreet sem consectetur a. Fusce eu nisi convallis, pellentesque velit eget, facilisis eros. Pellentesque quis auctor ligula. Donec semper dui et dui imperdiet, ac dictum mi commodo. Phasellus bibendum, diam ac tempor lobortis, quam eros bibendum justo, ac dignissim enim sapien laoreet velit.",
                avatar: "/images/image.webp",
              },
              {
                user: "Marin",
                message:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam posuere lacus consequat odio interdum maximus. Morbi metus arcu, rhoncus et enim suscipit, molestie luctus nulla. Maecenas tempor nisi metus. Suspendisse rhoncus sem lectus, vitae laoreet sem consectetur a. Fusce eu nisi convallis, pellentesque velit eget, facilisis eros. Pellentesque quis auctor ligula. Donec semper dui et dui imperdiet, ac dictum mi commodo. Phasellus bibendum, diam ac tempor lobortis, quam eros bibendum justo, ac dignissim enim sapien laoreet velit.",
                avatar: "/images/image.webp",
              },
            ]}
          />
        </section>
        <section
          id="kupi"
          className="flex flex-col items-center justify-center gap-8 text-center"
        >
          <p className="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">
            Naslov
          </p>
          <p className="text-lg text-gray-500 dark:text-gray-400">Opis</p>
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
          className="flex w-full items-center justify-center"
          id="pitanja"
        >
          <div className="flex w-10/12 max-w-5xl flex-col items-start justify-start gap-5 sm:w-full">
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
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Index;
