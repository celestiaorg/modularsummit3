import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/sections/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  safelist: [
    {
      pattern: /grid-cols-(1|2|3|4|5|6|7|8|9|10|11|12|13|14|15|16|17|18|19|20)/,
      variants: ['lg', 'md', 'sm']
    },
    {
      pattern: /grid-rows-(1|2|3|4|5|6|7|8|9|10|11|12|13|14|15|16|17|18|19|20)/,
      variants: ['lg', 'md', 'sm']
    },
    {
      pattern: /basis-(1|2|3|4|5|6|7|8|9|10|11|12)\/(2|3|4|5|6|12)/,
      variants: ['lg', 'md', 'sm']
    },
    {
      pattern: /p-(1|2|3|4|5|6|7|8|9|10|11|12|13|14|15|16|17|18|19|20)/,
      variants: ['lg', 'md', 'sm']
    },
    {
      pattern: /mb-(1|2|3|4|5|6|7|8|9|10|11|12|13|14|15|16|17|18|19|20)/,
      variants: ['lg', 'md', 'sm']
    },
    {
      pattern: /mb-(1|2|3|4|5|6|7|8|9|10|11|12|13|14|15|16|17|18|19|20)/,
      variants: ['lg', 'md', 'sm']
    }
  ],
  theme: {
    extend: {
      colors: {
        'brand-green': '#234735',
        'brand-orange': '#BBC04C',
        'brand-yellow': '#FFEA72',
        'brand-oil-': '#EC9455',
        'brand-blue': '#77BFF7'
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
      }
    }
  },
  plugins: []
}
export default config
