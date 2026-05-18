

const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ['lenis'],
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
}

export default nextConfig
