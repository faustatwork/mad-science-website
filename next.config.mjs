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
    ];
  },
};

export default config;
