/** @type {import('next').NextConfig} */

// GitHub Pages serves project sites from https://<user>.github.io/<repo>/
// Keep this in sync with the repository name.
const repoName = "grow";
const isProd = process.env.NODE_ENV === "production";
const basePath = isProd ? `/${repoName}` : undefined;

const nextConfig = {
  output: "export",
  trailingSlash: true,
  basePath,
  images: { unoptimized: true },
};

export default nextConfig;
