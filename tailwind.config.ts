import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        footer: "url('/bg_footer.png')",
      },
      colors: {
        'primary-green': '#052E26',
        'primary-dark': '#1F1A17',
        'primary-yellow': '#E0B75B',
        'secondary-yellow': '#D3AA59',
        'medium-gray': '#1D1C1B',
      },
      fontSize: {
        sm: '14px',
        md: '16px',
        xl: '70px',
      },
      fontFamily: {
        glitten: ['Glitten', 'sans-serif'],
        glittenCaps: ['GlittenCaps', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config
