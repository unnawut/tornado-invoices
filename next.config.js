/** @type {import('next').NextConfig} */


module.exports = {
  reactStrictMode: true,
  webpack5: true,
  webpack: (config) => {
    config.resolve.fallback = {
      fs: false,
      path: false,
      process: false,
      os: false
    };

    return config;
  },
};


