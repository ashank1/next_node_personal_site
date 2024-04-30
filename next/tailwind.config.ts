import type { Config } from "tailwindcss";
import { createThemes } from "tw-colors";
import { nextui } from "@nextui-org/react";

const config: Config = {
  
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
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
  //https://www.npmjs.com/package/tw-colors
  plugins: [
    nextui({}),
    createThemes({
      light: { 
        'background': '#f3f4f6',
        'cover': '#d1d5db',
        'bold': '#0ea5e9',
        'acent': '#0369a1',
        'active': '#22c55e',
        'disabled': '#1f2937',
        'invis': '#00FFFFFF',
        'text': '#ffffff',
      },
      dark: {
        'background': '#27272a',
        'cover': '#18181b',
        'bold': '#0ea5e9',
        'acent': '#0369a1',
        'active': '#22c55e',
        'disabled': '#1f2937',
        'invis': '#00FFFFFF',
        'text': '#f3f4f6',
      }
    })
  ],
  darkMode: 'class',
};
export default config;
