/** @type {import('next').NextConfig} */
const nextConfig = {
  devIndicators: {
    appIsrStatus: false,
    buildActivity: false,
  },
  experimental: {
    nextScriptWorkers: false,
  },
};

module.exports = nextConfig;
