// const withPWA = require('next-pwa')({
//     dest: 'public',
//     register: true,
//     skipWaiting: true,
//   });
  
//   /** @type {import('next').NextConfig} */
//   const nextConfig = withPWA({
//     // other next config if needed
//   });
  
//   module.exports = nextConfig;


const withPWA = require("next-pwa")({
    dest: "public",
    disable: process.env.NODE_ENV === "development", // ✅ this prevents GenerateSW in dev
  });
  
  const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
  };
  
  module.exports = withPWA(nextConfig);
  