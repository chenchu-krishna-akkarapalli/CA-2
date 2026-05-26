import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  // Static export only during `next build` — dev server must not use it
  // because export mode triggers a static-paths worker that races against
  // lazy vendor-chunk writes, producing MODULE_NOT_FOUND errors in dev.
  ...(isProd ? { output: "export" } : {}),
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;
