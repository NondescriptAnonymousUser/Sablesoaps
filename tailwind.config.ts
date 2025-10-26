import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: { bg: "#0b0b0b", fg: "#f7f7f7", mid: "#1a1a1a", sub: "#7c7c7c" },
      fontFamily: { sans: ["var(--font-inter)"] },
      borderRadius: { xl: "1rem", "2xl": "1.25rem" }
    }
  },
  plugins: [],
};
export default config;
