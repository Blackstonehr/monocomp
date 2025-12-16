/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        graphite: "#2e2e2e",
        concrete: "#f5f4f2",
        blueprint: "#1e75bb",
        steel: "#797979",
        "brand-accent": "#d7b86a",
      },
      fontSize: {
        hero: ["3.5rem", { lineHeight: "1.05", letterSpacing: "-0.02em" }],
        h1: ["2.75rem", { lineHeight: "1.15" }],
        h2: ["2rem", { lineHeight: "1.25" }],
        h3: ["1.4rem", { lineHeight: "1.35" }],
        body: ["1.125rem", { lineHeight: "1.65" }]
      },
      spacing: {
        section: "6rem",
        sectionLg: "8rem",
        cardGap: "2rem",
        inner: "1.75rem"
      },
      borderRadius: {
        card: "0.75rem"
      },
      boxShadow: {
        card: "0 6px 18px rgba(0,0,0,0.08)",
        cardHover: "0 10px 24px rgba(0,0,0,0.12)"
      }
    }
  },
  plugins: [],
}
