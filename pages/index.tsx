import type { NextPage } from "next";
import Head from "next/head";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Tier from "../components/Tier";
import Disclosure from "../components/Disclosure";
import Testimonial from "../components/Testimonial";
import Link from "next/link";
import { ShoppingCart, Info, Verified, Film } from "lucide-react";
import Newsletter from "../components/Newsletter";
import Partners from "../components/Partners";
import { FinotiveLogo } from "../components/Logos";
import Image from "next/image";
import TFTLogo from "../public/brand/tft.webp";
import React, { useState } from "react";

const Index: NextPage = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <>
      <Head>
        <title>Mad Science</title>
        <meta property="title" content="Mad Science" key="title" />
        <meta property="og:title" content="Mad Science" key="title" />
        <meta name="description" content="Mad Science" />
        <meta name="og:description" content="Mad Science" />
        <meta property="og:url" content="https://mad-science.io" />
        <link rel="canonical" href="https://mad-science.io" />
      </Head>
      <Navbar />
      <div
        id="hero"
        className="mb-4 flex min-h-screen w-full flex-row items-center justify-center gap-80 bg-light bg-cover bg-center bg-no-repeat px-24 dark:bg-dark 2xl:justify-between 2xl:gap-0 lg:mb-20 lg:flex-col lg:justify-center lg:gap-10 lg:pt-40 lg:text-center sm:px-5"
      >
        <div className="flex h-full flex-col items-start justify-center gap-8 lg:items-center sm:gap-5">
          <Link
            href="/edukacija"
            className="inline-flex flex-row items-center gap-x-4 rounded-full border border-gray-200 bg-white p-2 pr-6 text-sm font-medium duration-150 hover:bg-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:hover:bg-gray-700"
          >
            <span className="inline-block rounded-full bg-brand-primary px-3 py-1 text-white">
              Novosti
            </span>
            <p className="flex items-center text-start">
              Edukacija Level 2 je dostupna
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                  clipRule="evenodd"
                />
              </svg>
            </p>
          </Link>
          <h1 className="text-5xl font-bold text-brand-primary sm:text-4xl">
            Mad Science
          </h1>
          <h2 className="text-3xl font-medium text-gray-500 sm:text-2xl">
            A small group that can do the math.
          </h2>
          <div className="flex flex-row flex-wrap items-center justify-start gap-10 sm:gap-7">
            <Link
              className="rounded-md bg-brand-primary px-5 py-3 text-lg font-medium text-white transition hover:scale-105 hover:bg-brand-hover hover:shadow-xl focus:ring-4 focus:ring-brand-secondary sm:px-3 sm:text-base"
              href={"#edukacija"}
            >
              <span className="mr-2 inline-block align-middle">
                <ShoppingCart size={18} strokeWidth={3} />
              </span>
              Kupi kurs
            </Link>
            <Link
              className="-primary rounded-md px-5 py-3 text-lg font-medium text-brand-primary transition hover:scale-105  hover:border-transparent hover:bg-brand-hover hover:text-white hover:shadow-xl focus:ring-4 focus:ring-brand-secondary sm:px-3 sm:text-base"
              href={"#onama"}
            >
              <span className="mr-2 inline-block align-middle">
                <Info size={18} strokeWidth={3} />
              </span>
              O nama
            </Link>
          </div>
        </div>
        <iframe
          className="h-[28rem] w-[60rem] rounded-lg border border-gray-200 shadow shadow-black/5 dark:border-gray-600 dark:shadow-white/5 2xl:w-6/12 lg:w-9/12 sm:w-full"
          src="https://www.youtube-nocookie.com/embed/GHKC3fcMBaE"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>
      <div className="flex flex-col items-center justify-center gap-44 px-20 sm:gap-36 sm:px-5">
        <section
          id="onama"
          className="flex w-full flex-col items-center justify-center gap-10 text-center"
        >
          <p className="text-center text-4xl font-bold text-black dark:text-white md:text-2xl">
            O nama
          </p>
          <div className="flex flex-row flex-wrap items-center justify-center gap-6">
            <div className="flex flex-row items-center gap-x-2 text-base text-gray-500">
              <Verified size={22} className="stroke-[#009dff]" />
              Preko 300+ zadovoljnih polaznika
            </div>
            <div className="flex flex-row items-center gap-x-2 text-base text-gray-500">
              <Film size={22} className="stroke-[#7432c9]" />
              Preko 50+ sati kontenta
            </div>
          </div>
          <div className="flex max-w-6xl flex-col gap-3">
            <p
              className={`text-center text-xl text-gray-500 dark:text-gray-400 md:text-base ${
                isExpanded ? "" : "sm:line-clamp-6"
              }`}
            >
              Mad Science čine četiri konstanto profitabilna trejdera koji imaju
              iste ciljeve, vrlo slično razmišljaju, imaju vrlo specifične
              pristupe marketu, a opet dolaze do istih rezultata. Zapravo, mi
              funkcionišemo kao jedan mini DAO (Decentralized Autonomous
              Organisation) gde svako iznese svoje mišljenje i analizu, a
              ukoliko se sve analize se poklapaju jedna sa drugom, to nam je još
              jedna konfirmacija za ulazak u trejd. To je Mad Science pre Mad
              Science-a, naš sami početak. Oni koji su prepoznali naš rad i
              znanje koje imamo su želeli da nauče isto to, zanimalo ih je kako
              mi to radimo, po kom principu. Takodje su tražili i mentoring.
              Odlučili smo da to znanje koje imamo nesebično podelimo sa drugim
              trejderima kojima je potrebna pomoć. Ideja se rodila upravo iz
              toga, vi ste to tražili od nas! Kako bismo svima bili dostupni i
              kako bi svako mogao da čuje naše mišljenje i analize, napravili
              smo javnu grupu na Telegramu gde su svi koji žele nešto novo da
              nauče dobrodošli. Sam mentoring bi oduzimao puno vremean kako je
              potražnja za njim velika. Došli smo do zaključka da je najbolje
              snimiti lekcije u video formatu koje će svima biti dostupne u
              svakom momentu kako bismo jedni drugima uštedeli dragoceno vreme i
              kako bi se vi mogli da se podsetite uvek ono što ste možda
              zaboravili ili tek učite. Sve u svemu, ovo je bila kratka priča o
              tome kako je nastao Mad Science i ko smo mi, neka naša dela govore
              o nama!
            </p>
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="hidden self-end text-black transition hover:text-black/50 dark:text-white/50 dark:hover:text-white sm:block"
            >
              {isExpanded ? "Read Less" : "Read More"}
            </button>
          </div>
        </section>
        <section
          id="recenzije"
          className="flex w-full flex-col items-center justify-center gap-10 text-center"
        >
          <p className="text-center text-4xl font-bold text-black dark:text-white md:text-2xl">
            Šta kažu ljudi o nama
          </p>
          <p className="text-center text-xl text-gray-500 dark:text-gray-400 md:text-base">
            Uzmite njihovu reč, ne našu.
          </p>
          <Testimonial
            content={[
              {
                user: "Djomla17",
                position: "Level 2.0 polaznik",
                message:
                  "Sada kada sam odgledao detalino sva 3 videa i backtestovao, malo je reći da sam oduševlien. Veoma detaljno objašnjeno, a opet tako da se može sve razumeti. Preporučujem vam svima da uzmete, nećete se pokajati. Jedva čekam nove epizode zbog kojih će biti i novih profita.",
                avatar: "/testimonials/default.webp",
              },
              {
                user: "Amir",
                position: "Essentials polaznik",
                message:
                  "Prvo da kažem da sam mnogo zadovoljan sa Essentials programom pogotovo za cijenu koju košta, vjerujem da nigdje drugo se ne mogu naći sve te bitne informacije ovako dobro objašnjene na jednom mjestu, sve se to može naći online ali bi morao tražiti mjesecima i milion različitih mišlienia čuti da na kraju ništa ne skontaš suštinski. Svidja mi se to predavanje jer nema monotonosti gdje ti se spava nakon 3 minute videa što je jako jako bitna stvar kada se uči nešto. Teme jako ozbiljne i baš ono što je potrebno ni manje ni više. Za sada sam prezadovoljan i jedva čekam da krenem na veći nivo, a vama samo poručujem da nastavite kako radite i sigurno će biti jako ozbiljna priča.",
                avatar: "/testimonials/amir.webp",
              },
              {
                user: "Joca",
                position: "Level 2.0 polaznik",
                message:
                  "Utisak je predobar 👌, community TOP, edukacija TOP, nema zamerki! Tačno kada sam pogledao videe iz edukacije par puta bilo mi je jasno koliko do sad nisam znao i koliko sam propuštao. Šta Mad Science radi to 100% nema nigde na Balkanu, a teško i da ima u stranim zemljama 🥰. A small group that can do the math 💯.",
                avatar: "/testimonials/joca.webp",
              },
              {
                user: "Kowe",
                position: "Level 2.0 polaznik",
                message:
                  "Odgledao sam sve 3 epizode i mogu reći da sam prezadovoljan, baš ima mnogo materijala i novih stvari da se uči što do sad niko nije spominjao.",
                avatar: "/testimonials/default.webp",
              },
              {
                user: "Yara",
                position: "Level 2.0 polaznik",
                message:
                  "Evo i ja ću da vas pohvalim, lekcije su odlične iako ih treba pogledati barem 3 puta. Tačno onako kako sam i očekivala od vas. Trejdala nisam ništa nego sam ovih dana radila backtest (replay tw) i poštovanje setupa je neverovatno (ako znaš šta tražiš). Sve u svemu sve pohvale.",
                avatar: "/testimonials/yara.webp",
              },
              {
                user: "Leo Kuna",
                position: "Level 2.0 polaznik",
                message:
                  "Da i ja dam neko svoje mišljenje, nikada nisam gledao i vidio po videima da netko koristi fib na log chartu tako da za prvu epizodu to je meni otkriće i onda kad se jos poveže s vremenom vidi se nadopunjavanje istih. Nastavliam dalje s gledanjem pa javljam kako mi se svidi, a za sada je super!",
                avatar: "/testimonials/leokuna.webp",
              },
              {
                user: "K F",
                position: "Level 2.0 polaznik",
                message:
                  "kao pro bih se zahvalio Edinu i mentorima u MadSciencu sto su se udruzili i omogucili clanovima BM free chi, sto je meni napokon probilo led, jer sam vec prije razmisjao da uzmem tu edukaciju i samo nikako da odlucim, kao drugo, u chi se spominju stvari koje nikad nisam cuo u godinu i pol dana od kad sam cuo za forex i prosao par edukacija, zavrsio free ch1 i definitivno nastavljam dalje sa edukacijom... mnogo opsirne lekcije i znanje koje zelim steci, a jerujem da sam na pravom mjestu za to...",
                avatar: "/testimonials/kf.webp",
              },
              {
                user: "Stefan",
                position: "Level 2.0 polaznik",
                message:
                  "vec godinu i jace sam u trejdanju bio sam kod raznih poznatih kao mentora na balkanu koji mi nisu pomogli u opste i tu mogu reci da sam dosta novca izgubio. gledao sam sa interneta poznatog ict i na njemu sam se zadrzo ali nakon nekog vremena sam skapirao da ima mnogo nejasnih stvari koje su me zbunjivale na chartu. Igrom slucajeva sam saznao za ovu edukaciju i nasao pravog mentora @gcalgo koji mi je otkrio novi svet u ovome i pomogo mi da razumem ceo market kako funkcionise, i naravno nesto jos bitnije kakva treba da bude prava mind profitabilnog trejdera. naravno tu su i ostali mentori koji pomazu u svakom trenutku. Sada sam u chapteru 5 prezadovoljan sam i ako docete u dodir sa losim trejdom to je samo zato sto niste hteli da slusate svog mentora. Jedino mi je zao sto ovde nisam ranije doso i sto ce neko provesti dosta veci period u trazenju prave edukacije dok ne doce ovde",
                avatar: "/testimonials/stefan.webp",
              },
              {
                user: "Mume",
                position: "Level 2.0 polaznik",
                message:
                  "Sve znas sto se tice mog hrabrog poteza i (privremenog) napustanja faksa kako bih se posvetio necemu sto volim, posle x broja grupa, mentorshipa i pokusaja, konacho sam dosao do kraja, sada sa pravim ljudima napredujem bolje nego ikad u zivotu, trenutno chapter 3 polaznik, a materije koje su rangu fakultetskih lekcija su jos lude, pojedine lekcije se moraju gledati nekoliko puta da bi se obradila kompleksna sustina, uz sav taj profesionalni pristup, tu je @gcalgo i ostali mentori koji dodatno objasjavaju i pomazu u svemu sto treba mentorship je pun pogodak",
                avatar: "/testimonials/mume.webp",
              },
              {
                user: "Djomla17",
                position: "Level 2.0 polaznik",
                message:
                  "Nakon mogo pokusaja i svakakvih strategija koje su donosile rezultate, ali ne dugorone, sada mislim da sam napokon uz @gcalgo pronasao edge koji ce me uz rad na psihologiji dovesti do konstantne profitabilnosti. Sto se tie zanja koje sam stekao kroz chaptere, to nigde drugde nisam video tako jednostavno objasjeno da svako moze da razume. Ono sto moram da napomenem je da je Gory takode stalno tu za svako pitanje i za sve nedoumice, nije ono kao snimio sam vam videe pa se snalazite, a to mogo znaci. Totalno mi je promenio nacin na koji gledam na trejdovanje i naucio me strpljenju. Iz dana u dan gledam kako postajem bolji i kako sam sve blizi tome da jednoga dana od ovoga i zivim. Hvala na svemu",
                avatar: "/testimonials/djomla.webp",
              },
              {
                user: "Vito",
                position: "Level 2.0 polaznik",
                message:
                  "Evo da se i ja oglasim povodom mentorshipa Goryja znam vec jako dugo i kao prijateli i kao mentor od pocetka je bio odlican Sto se tice mentorshipa - 10/10 Cijeli sistem od A do Z, jednostavan, treba vremena da se pohvata ali kad klikne...wow Prosao sam ICTijev content prije ovog mentorshipa ali nesto je falilo - to nesto je sistem Ovaj mentorship to sreduje i slaze te koncepte na mjesto Od mene sve preporuke, tako da batalite tamo neke gurue, patterne i tzv. edukacije, ovo je prava prica koju nema nitko drugi kod nas",
                avatar: "/testimonials/vito.webp",
              },
              {
                user: "Darjan Belak",
                position: "Level 2.0 polaznik",
                message:
                  "Evo da dam i ja svoj utisak za ovih otprilike 5 meseci, nesto vise. U pocetku sam bio u jednoj edkuacij u kojoj sam se zadrzao dve godine i nisam imao nikakvih uspeha. Kasnije sam preko jednog storija cuo za madscience grupu l odmah me je tu nesto privuklo I tako sam poceoo sa Gorijem ,go algo koncept. Vec posle nekoliko nedelja sam imao uspesnih trejdova sto mi je bilo neverovatno kao I taj koncept kad sam video sta sve ne znam ustvari.Ima jako puno informacija ali kad se sve to poveze onda je sve jednostavno, takodje je i Gori uvek tu bio sta god je trebalo za svaku nedoumicu ili bilo sta drugo. Svako ko udje u ovu grupu nece sigurno zaliti! Sve ja na vrhunskom nivou! 10/10",
                avatar: "/testimonials/darjan.webp",
              },
              {
                user: "Delayl",
                position: "Level 2.0 polaznik",
                message:
                  "Stvarno moram da pohvalim sve sto se tice ove edukacije. U svim mogucim edukacijama sam bio ali ovakav koncept i da se ovako ucenicima objasjava nisam vidio nigdje. Uvijek se uzme vrijeme za ucenike da se objasni neka star pa ako treba i po 5 puta stvarno sve pohvale.",
                avatar: "/testimonials/default.webp",
              },
              {
                user: "WMO",
                position: "Level 2.0 polaznik",
                message:
                  "Zahvaljujuci mom mentor @gcalgo drzim rekord na Finotive u isplatama Tko god se dvoumi, neka upada odmah kod ekipe u mentorship, bolje necete naci",
                avatar: "/testimonials/wmo.webp",
              },
            ]}
          />
        </section>
        <section
          id="partneri"
          className="flex w-full flex-col items-center justify-center gap-10 text-center"
        >
          <p className="text-center text-4xl font-bold text-black dark:text-white md:text-2xl">
            Partneri
          </p>
          <p className="text-center text-xl text-gray-500 dark:text-gray-400 md:text-base">
            Partneri smo sa Finotive Funding prop firmom, iskoristite naš kupon
            kod &apos;&apos;MADSCIENCE&apos;&apos; za dodatnih 13% popusta i 5%
            profit split. Takodje, partneri smo sa The Funded Trader prop
            firmom, iskoristite naš link za popust + profit split klikom na
            njihov logo ispod.
          </p>
          <Partners
            items={[
              {
                logo: <FinotiveLogo />,
                link: "https://finotivefunding.com/",
                label: "Finotive Funding website link",
              },
              {
                logo: (
                  <Image
                    width={58}
                    src={TFTLogo}
                    alt="tft logo"
                    className="hover:brightness-150"
                  />
                ),
                link: "https://dashboard.thefundedtraderprogram.com/purchasechallenge-n/?sl=17572",
                label: "TFT affiliate website link",
              },
            ]}
          />
        </section>
        <section
          id="edukacija"
          className="flex w-full flex-col items-center justify-center gap-10 text-center"
        >
          <p className="text-center text-4xl font-bold text-black dark:text-white md:text-2xl">
            Edukacija
          </p>

          <div className="items-atretch flex w-full flex-row flex-wrap justify-center gap-10 md:flex-col">
            <Tier
              title={"Essentials"}
              features={["Osnove tehničke analize"]}
              models={[{ interval: "jednokratno", amount: 44 }]}
            />
            <Tier
              title={"Level 2.0"}
              features={[
                "MAD Concept",
                "GC Algo Concept",
                "Live trading",
                "Pristup privatnoj Telegram grupi",
                "Weekly outlook",
                "Daily updates",
              ]}
              models={[
                { interval: "1 chapter", amount: 80 },
                { interval: "3 chaptera", amount: 224 },
                { interval: "6 chaptera", amount: 440 },
              ]}
            />
          </div>
        </section>
        <section
          className="flex w-full flex-col items-center justify-center gap-10 text-center"
          id="pitanja"
        >
          <p className="text-center text-4xl font-bold text-black dark:text-white md:text-2xl">
            Često postavljana pitanja
          </p>
          <p className="text-center text-xl text-gray-500 dark:text-gray-400 md:text-base">
            Svi odgovori na sva vaša pitanja.
          </p>
          <div className="flex w-10/12 max-w-5xl sm:w-full">
            <Disclosure
              content={[
                {
                  question: "Šta je Mad Science?",
                  answer:
                    "Grupa osnovana u cilju deljenja znanja pre svega početnicima, a i naprednima u cilju sticanja i usavršavanja znanja. Osnovana od strane 5  trejdera koji imaju preko 7 godina iskustva na tržištu crypto valuta i forex-a sa vrlo unikatnim pristupom.",
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
                    "Algo i Mad koncept su skroz različiti po pitanju tehničke analize na samom chartu, kao i po alatima i servisima koji se koriste za posmatranje pozadine kretanja cene. Fuzija ova dva koncepta daje isti rezultat na bilo kom trading paru. Na vama je da odlučite iz kog želite da posmatrate market.",
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
        <Footer />
      </div>
    </>
  );
};

export default Index;
