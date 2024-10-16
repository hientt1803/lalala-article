import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

/** @type {import('next').NextConfig} */
const nextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
    silenceDeprecations: ["legacy-js-api"],
  },
  env: {
    NEXT_PUBLIC_HOST_URL: process.env.NEXT_PUBLIC_HOST_URL,
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
  
    NEXT_PUBLIC_USER_ID: process.env.NEXT_PUBLIC_USER_ID,
    NEXT_PUBLIC_CHANNEL_ID: process.env.NEXT_PUBLIC_CHANNEL_ID,
    NEXT_PUBLIC_POST_TYPE: process.env.NEXT_PUBLIC_POST_TYPE,
  },
  experimental: {
    optimizePackageImports: ["@mantine/core", "@mantine/hooks","@mantine/carousel"],
  },
};

export default nextConfig;
