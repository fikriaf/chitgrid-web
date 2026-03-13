/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [{ protocol: "https", hostname: "avatars.chitgrid.xyz" }],
  },
};
export default nextConfig;
