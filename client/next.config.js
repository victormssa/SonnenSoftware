/** @type {import('next').NextConfig} */
const dotenv = require('dotenv');

dotenv.config();

const nextConfig = {
  images: {
    domains: ['api.dicebear.com'],
  },
  env: {
    JWT_SECRET: process.env.JWT_SECRET,
  },
};

module.exports = nextConfig;
