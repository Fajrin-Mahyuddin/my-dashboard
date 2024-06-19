import { NextPublicTsPlugin } from "next-public";
import path from "path";
/** @type {import('next').NextConfig} */

const __dirname = new URL(".", import.meta.url).pathname;

const nextConfig = {
  webpack(config) {
    config.plugins.push(
      new NextPublicTsPlugin({
        inputDir: path.join(__dirname, "utils", "firebase-messaging-sw.ts"),
        outputDir: path.join(__dirname, "public"),
      }),
    );
    return config;
  },
};

export default nextConfig;
