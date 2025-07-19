import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#9E7FFF',
        secondary: '#38bdf8',
        accent: '#f472b6',
        background: '#171717',
        surface: '#262626',
        text: '#FFFFFF',
        textSecondary: '#A3A3A3',
        border: '#2F2F2F',
        success: '#10b981',
        warning: '#f59e0b',
        error: '#ef4444',
        'light-primary': '#9E7FFF',
        'light-secondary': '#38bdf8',
        'light-accent': '#f472b6',
        'light-background': '#FFFFFF',
        'light-surface': '#F3F4F6',
        'light-text': '#000000',
        'light-textSecondary': '#4B5563',
        'light-border': '#D1D5DB',
      },
    },
  },
  plugins: [],
}
export default config
