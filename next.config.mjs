/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";
// Vercel'de basePath kullanma, sadece GitHub Pages için gerekli
const isVercel = process.env.VERCEL === "1";
const basePath = isProd && !isVercel ? "/sustainable-nextjs" : "";

const nextConfig = {
  // Vercel'de static export kullanma, Next.js server kullan
  ...(isProd && !isVercel ? { output: "export" } : {}),
  basePath,
  assetPrefix: basePath,
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

export default nextConfig;
