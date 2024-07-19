/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    dangerouslyAllowSVG: true,
    domains: ["firebasestorage.googleapis.com", "placehold.co"],
  },
};

export default nextConfig;
