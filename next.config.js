/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/dotfiles",
        destination: "https://github.com/Nathan-Ojieabu/dotfiles",
        permanent: true,
      },
      {
        source: "/github",
        destination: "https://github.com/Nathan-Ojieabu",
        permanent: true,
      },
      {
        source: "/twitter",
        destination: "https://twitter.com/@mr_nate_says",
        permanent: true,
      },
      {
        source: "/linkedin",
        destination: "https://www.linkedin.com/in/Nathan-Ojieabu-093361209/",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
