import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#000000',
        foreground: '#ffffff',
        card: {
          DEFAULT: '#0a0a0a',
          foreground: '#ffffff',
        },
        popover: {
          DEFAULT: '#0a0a0a',
          foreground: '#ffffff',
        },
        primary: {
          DEFAULT: '#7C3AED',
          foreground: '#ffffff',
        },
        secondary: {
          DEFAULT: '#1a1a1a',
          foreground: '#ffffff',
        },
        muted: {
          DEFAULT: '#262626',
          foreground: '#a1a1aa',
        },
        accent: {
          DEFAULT: '#7C3AED',
          foreground: '#ffffff',
        },
        destructive: {
          DEFAULT: '#ef4444',
          foreground: '#ffffff',
        },
        border: '#262626',
        input: '#262626',
        ring: '#7C3AED',
      },
    },
  },
  plugins: [],
};

export default config;
