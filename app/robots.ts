import { MetadataRoute } from "next";

export const dynamic = "force-static";

const SITE_URL = "https://www.cmkca.com";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // ── Search Engine Crawlers ──
      {
        userAgent: [
          "Googlebot",
          "Bingbot",
          "Slurp",
          "DuckDuckBot",
          "Baiduspider",
          "YandexBot",
          "Sogou",
          "ia_archiver",
          "facebookexternalhit",
          "LinkedInBot",
          "Twitterbot",
          "WhatsApp",
        ],
        allow: "/",
      },
      // ── Generative AI & Search Engine Crawlers (AI Discovery Enabled) ──
      {
        userAgent: [
          "PerplexityBot",
          "GPTBot",
          "ChatGPT-User",
          "OAI-SearchBot",
          "ClaudeBot",
          "Claude-Web",
          "anthropic-ai",
          "Google-Extended",
          "YouBot",
          "Diffbot",
          "cohere-ai",
          "Applebot-Extended",
          "Meta-ExternalFetcher",
        ],
        allow: "/",
      },
      // ── Default Rule for all other bots ──
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/_next/"],
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
