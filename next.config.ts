import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    /* config options here */
    reactCompiler: true,
    reactStrictMode: true,

    // static export for Github Pages
    output: "export",

    // recommended for static hosting
    trailingSlash: true,
};

export default nextConfig;
