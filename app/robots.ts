import type { MetadataRoute } from "next";
import { HOST_URL } from "../utils";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/", // Changed to explicitly allow the entire site
    },
    sitemap: `${HOST_URL}/sitemap.xml`,
  };
}
