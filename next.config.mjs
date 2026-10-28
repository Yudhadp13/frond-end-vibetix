/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [{
      hostname: "res.cloudinary.com",
      protocol: "https",
    }],
  },
  typescript: {
    // Mengabaikan seluruh error TypeScript saat build di Vercel
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;