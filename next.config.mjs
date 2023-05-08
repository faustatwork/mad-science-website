/** @type {import('next').NextConfig} */

const config = {
  reactStrictMode: true,
  swcMinify: true,
  async redirects() {
    return [
      {
        source: "/telegram",
        destination: "https://t.me/MadScience618",
        permanent: true,
      },
      {
        source: "/discord",
        destination: "https://discord.gg/mepGCW4EHa",
        permanent: true,
      },
      {
        source: "/instagram",
        destination: "https://instagram.com/madscience.io",
        permanent: true,
      },
      {
        source: "/youtube",
        destination: "https://www.youtube.com/@MadScience618",
        permanent: true,
      },
      {
        source: "/tiktok",
        destination: "https://www.tiktok.com/@madscience.io",
        permanent: true,
      },
    ];
  },
};

export default config;
