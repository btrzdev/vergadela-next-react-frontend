/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['app.grupoerre.pt'],
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/about-us',
        permanent: true,
      },
    ]
  },
}

export default nextConfig
