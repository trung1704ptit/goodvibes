import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      container: {
        center: true, // Centers the container
        padding: '1rem', // Adds padding to the container
        screens: {
          sm: '100%', // Full width for small screens
          md: '100%', // Full width for medium screens
          lg: '1366px', // 1024px max width for large screens
          xl: '1366px', // 1024px max width for extra-large screens
        },
      },
      animation: {
        marquee: "marquee 36s linear infinite", // Default speed
        marqueeFast: "marquee 10s linear infinite", // Faster for mobile
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
