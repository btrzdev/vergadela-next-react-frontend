import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      keyframes: {
        slideInLeft: {
          '0%': { transform: 'translateX(-100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        slideInRight: {
          '0%': { transform: 'translateX(100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        slideFromTop: {
          '0%': { transform: 'translateY(-100%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      animation: {
        slideInLeft: 'slideInLeft 1s forwards',
        slideInRight: 'slideInRight 1s forwards',
        slideFromTop: 'slideFromTop 0.5s ease-out forwards',
      },
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
