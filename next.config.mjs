/** @type {import('next').NextConfig} */
const isGitHubPages = process.env.GITHUB_PAGES === "true";

const nextConfig = {
  output: "export",
  images: {
    unoptimized: true
  },
  basePath: isGitHubPages ? "/praavalegal.com-R1" : "",
  assetPrefix: isGitHubPages ? "/praavalegal.com-R1/" : ""
};

export default nextConfig;
