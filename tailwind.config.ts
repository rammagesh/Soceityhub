import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
      maxWidth: {
      container: '1216px',
    },
    screens: {
      xs: '350px',
      sm: '575px',
      md: '768px',
      lg: '992px',
      xl: '1200px',
      xl2: '1300px',
      xxl: '1400px',
      xxl2: '1600px',
      xxxl: '1920px',
    },
    fontFamily: {
      farro: ['Farro', 'sans-serif'],
      inter: ['Inter', 'sans-serif'],
    },
    extend: {
      colors: {
        emerald: '#10B981',
        mint: '#A7F3D0',
        forest: '#065F46',
        lime: '#84CC16',
        offwhite: '#F0FDF4',
        charcoal: '#111827',
        coolgray: '#6B7280',
        redrose: '#EF4444',
        springgreen: '#22C55E',
        skyblue: '#0EA5E9',
        amber: '#F59E0B',
      },
    },
  },
  plugins: [],
}
export default config
