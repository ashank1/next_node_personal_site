import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      boxShadow: {
        'neon': '5px 5px 5px, -5px -5px 5px, -5px 5px 5px, 5px -5px 5px',
        'neon-sm': '2px 2px 4px, -2px -2px 4px, -2px 2px 4px, 2px -2px 4px',
        'neon-lg': '10px 10px 10px, -10px -10px 10px, -10px 10px 10px, 10px -10px 10px',
      }
    },
  },
  plugins: [],
};
export default config;
