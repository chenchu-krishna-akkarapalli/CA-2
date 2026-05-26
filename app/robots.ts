import { MetadataRoute } from "next";

export const dynamic = "force-static";

const SITE_URL = "https://gmnrassociates.com";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // ── Legitimate search engines: full access ──
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
      // ── AI search assistants: full access (drive referral traffic) ──
      {
        userAgent: ["PerplexityBot", "YouBot", "Diffbot", "cohere-ai"],
        allow: "/",
      },
      // ── AI training crawlers: disallowed ──
      // Content is proprietary professional advice; opt-out of model training.
      {
        userAgent: [
          "GPTBot",
          "ChatGPT-User",
          "OAI-SearchBot",
          "CCBot",
          "anthropic-ai",
          "Claude-Web",
          "ClaudeBot",
          "meta-externalagent",
          "Meta-ExternalFetcher",
          "Bytespider",
          "Applebot-Extended",
          "Google-Extended",
          "omgili",
          "omgilibot",
          "imgproxy",
          "DataForSeoBot",
          "MJ12bot",
        ],
        disallow: "/",
      },
      // ── Default for all other bots ──
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
