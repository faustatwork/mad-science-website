import type { NextPage } from "next";
import Head from "next/head";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Tier from "../components/Tier";
import Disclosure from "../components/Disclosure";
import Testimonial from "../components/Testimonial";
import Link from "next/link";
import { ShoppingCart, Info } from "lucide-react";
import Newsletter from "../components/Newsletter";

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
          <h1 className="text-8xl font-bold text-brand-main sm:text-4xl">
            Mad Science
          </h1>
          <h2 className="text-5xl font-bold text-gray-500 sm:text-2xl">
            Dolazi uskoro.
          </h2>
          <div className="flex flex-row flex-wrap items-start justify-start gap-10 sm:gap-7">
            <Link
              className="rounded-md bg-blue-600 px-5 py-3 text-lg font-medium text-white transition hover:scale-105 hover:bg-blue-700 hover:shadow-xl focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 sm:px-3 sm:text-base"
              href={"#kupi"}
            >
              <span className="mr-2 inline-block align-middle">
                <ShoppingCart size={18} strokeWidth={3} />
              </span>
              Kupi kurs
            </Link>
            <Link
              className="rounded-md border-2 border-blue-600 px-5 py-3 text-lg font-medium text-blue-600 transition hover:scale-105 hover:bg-blue-700 hover:text-white hover:shadow-xl focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 sm:px-3 sm:text-base"
              href={"#onama"}
            >
              <span className="mr-2 inline-block align-middle">
                <Info size={18} strokeWidth={3} />
              </span>
              O nama
            </Link>
          </div>
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
                {
                  question: "Šta je Mad Science?",
                  answer:
                    "Grupa osnovana u cilju deljenja znanja pre svega početnicima, a i naprednima u cilju sticanja i usavršavanja znanja. Osnovana od strane 4 profitabilna trejdera koji imaju preko 7 godina iskustva na tržištu crypto valuta i forex-a sa vrlo unikatnim pristupom.",
                },
                {
                  question: "Šta možemo naučiti?",
                  answer:
                    "Edukacija je podeljena na dva dela. Prvi je namenjen početnicima sa osnovnim ili nikakvim nivoom znanja tehničke analize. Tu mogu naučiti najbitnije termine i pojmove koje su im najpotrebniji, ono esencijalno, zato se i zove 'Essentials'. Drugi deo je namenjen naprednijim trejderima koji žele da upotpune ili usavrše svoje već stečeno znanje i podignu ga na viši nivo. Posmatramo tržište iz dva različita ugla, to su Algo i Mad koncepti trejdinga.",
                },
                {
                  question: "Šta sadrži Mad Essentials?",
                  answer:
                    "Bazirali smo se na čisti 'price action', to je nešto što svaki početnik prvo treba da savlada da bi mogao da se opredeli na koju je stranu marketa, bullish ili bearish. Nismo želeli da puno komplikujemo stvari već da to odradimo konkretno i precizno.",
                },
                {
                  question: "Koja je razlika izmedju Algo i Mad koncepta?",
                  answer:
                    "Algo koncept je baziran na Forex & Indicies trejding, a Mad koncept na Crypto tržište. Oni su skroz različiti, a fuzija ova dva koncepta daje isti rezultat na bilo kom trejding paru. Na vama je da odlučite iz kog želite da posmatrate market.",
                },
                {
                  question: "Šta sadrži Algo koncept?",
                  answer:
                    "Algo koncept je sistem koji očisti pogled na tržište do toga da može se većina tih pokreta predvidjati velikim win rate-om. Algo koncept obuhvata analizu od weekly timeframe-s skroz do 1 minut tako da sa tim znanjem možete samostalno trejdati i biti dugoročno profitabilni. Sadržaj obuhvata 6+ chaptera, preko 35 video lekcija, i preko 30 nedeljnih očekivanja, sadržaj je tako spremljen da bi sve na kraju bilo čisto i jednostavno kad se sve spoji.",
                },
                {
                  question: "Šta sadrži Mad koncept?",
                  answer:
                    "MAD Concept je sistem koji se pre svega zasniva na suštinskom razumevanju tržišta, šta utiče i na koji način se kreira PA kroz analizu distribucije volume-a, vremena i njihovih derivata na level 1, level 2 i level 3 chartu. Daje mogućnost da pored reagovanja dodatno i predvidimo budući potencijalni 'price action' i njegovo razvijanje. Sadržaj je podeljen na module od kojih svaki sadrži odredjen alpha tool koji zajedno u sinergiji čine MAD Concept.",
                },
                {
                  question: "Šta nakon odgledane edukacije?",
                  answer:
                    "Prvo i osnovno, testirajte što više na chartu sve što ste naučili ili i dalje učite. Kada konačno shvatite kako odabrana strategija funkcioniše, i osećate se spremno, možete se upustiti u trejd u koji ste sigurni uz prethodno navedene konfluence kojih ima nekoliko, što više to bolje. Možete smatrati sebe kao neko ko je i po znanju i po win rate-u zaista daleko od proseka, to vam garantujemo, isključivo pod uslovod da ste savladali sve prethodno prikazano u lekcijama. Dokažite to sebi tako što će vam vaši rezultati to reći.",
                },
                {
                  question: "Kako do finansiranja?",
                  answer:
                    "Srećom po nas, postoje firme koje tragaju baš za trejderima kao što ćete VI postati. Te firme imaju za cilj da finansiraju konstantno profitabilne trejdere, od čega jedan deo profita ide njima, a ostatak zadržavate vi. Te sume mogu iznostiti od 5.000$ pa sve do 200.000$. Zvuči previše dobro da bi bilo istinito, zar ne? Slušajte tek ovo, Mad Science je jedina grupa na našim prostorima koja ima zvaničnu saradnju sa jednom od takvih firmi. U pitanju je Finotive Funding, jedna od najpoznatijih prop firmi kod nas. Pored toga što nude najbolje uslove kao što su No Time Limit i veoma povoljne cene, uz naš promo kod 'MADSCIENCE' dobijate dodatne pogodnosti u vidu deljenja profita i popust na plaćanje probe. To vam daje mogučnost da trejdujete bez svojih sredstava, dakle bez ikakvog rizika, a većinski profit vi zadrzavate.",
                },
              ]}
            />
          </div>
        </section>
        <section id="newsletter" className="w-full">
          <Newsletter />
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Index;
