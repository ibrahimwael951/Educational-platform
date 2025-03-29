import { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const nextConfig: NextConfig = {
  // images: {
  //   remotePatterns: [
  //   {
  //       protocol: "https",
  //       hostname: "example.com",
  //     },
  //     {
  //       protocol: "https",
  //       hostname: "educational-platform-backend-production.up.railway.app/api",
  //     },
  //   ],
  // },
};

const withNextIntl = createNextIntlPlugin();

export default withNextIntl(nextConfig);
