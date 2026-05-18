import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      /* ── Figma Design Tokens ── */
      colors: {
        brand: {
          primary: "var(--color-brand-primary)",
          accent: "var(--color-brand-accent)",
          "accent-hover": "var(--color-brand-accent-hover)",
          secondary: "var(--color-brand-secondary)",
          charcoal: "var(--color-brand-charcoal)",
        },
        surface: {
          "light-gray": "#efefef",
          "card-border": "#f3f4f6",
          "input-border": "#e5e7eb",
          "btn-border": "#b5b7bb",
          "divider-dark": "#1e2939",
        },
        text: {
          primary: "#094c00",
          secondary: "#4a5565",
          muted: "#99a1af",
          "footer-muted": "#6a7282",
          placeholder: "rgba(16, 24, 40, 0.5)",
        },
      },
      fontFamily: {
        outfit: ["var(--font-outfit)", "Outfit", "sans-serif"],
        inter: ["var(--font-inter)", "Inter", "sans-serif"],
        arial: ["Arial", "Helvetica", "sans-serif"],
      },
      fontSize: {
        "12": ["12px", { lineHeight: "16px" }],
        "14": ["14px", { lineHeight: "20px" }],
        "16": ["16px", { lineHeight: "19px" }],
        "18": ["18px", { lineHeight: "28px" }],
        "20": ["20px", { lineHeight: "25px" }],
        "24": ["24px", { lineHeight: "32px" }],
        "30": ["30px", { lineHeight: "36px" }],
        "32": ["32px", { lineHeight: "44px" }],
        "50": ["50px", { lineHeight: "55px" }],
      },
      borderRadius: {
        "6": "6px",
        "8": "8px",
        "10": "10px",
        "14": "14px",
        "16": "16px",
        "30": "30px",
        "40": "40px",
        "66": "66px",
      },
      boxShadow: {
        "navbar": "0px 4px 4px rgba(0, 0, 0, 0.25)",
        "card": "0px 10px 15px -3px rgba(0, 0, 0, 0.1), 0px 4px 6px -4px rgba(0, 0, 0, 0.1)",
        "badge": "0px 10px 15px rgba(0, 0, 0, 0.1), 0px 4px 6px rgba(0, 0, 0, 0.1)",
        "mission": "0px 4px 6px rgba(0, 0, 0, 0.25), 0px 10px 15px rgba(0, 0, 0, 0.25)",
        "contact": "0px 25px 50px -12px rgba(0, 0, 0, 0.25)",
        "strategic": "0px 4px 16px rgba(0, 0, 0, 0.1)",
      },
      backgroundImage: {
        "gradient-primary": "var(--gradient-primary)",
        "gradient-btn-hero": "linear-gradient(166.443deg, var(--color-brand-primary) 0%, var(--color-brand-secondary) 100%)",
        "gradient-btn-services": "linear-gradient(164.894deg, var(--color-brand-primary) 0%, var(--color-brand-secondary) 100%)",
        "gradient-btn-blog": "linear-gradient(150.642deg, var(--color-brand-primary) 0%, var(--color-brand-secondary) 100%)",
        "gradient-btn-submit": "linear-gradient(173.443deg, var(--color-brand-primary) 0%, var(--color-brand-secondary) 100%)",
        "gradient-contact": "var(--gradient-contact)",
        "gradient-footer-logo": "linear-gradient(135deg, var(--color-brand-charcoal) 0%, var(--color-brand-primary) 100%)",
      },
      width: {
        "1440": "1440px",
      },
      maxWidth: {
        "1440": "1440px",
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
  ],
};

export default config;
