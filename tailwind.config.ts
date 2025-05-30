import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
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
       fontSize: {
  'heading-xl': ['3.25rem', '4.1875rem'], // 52px / 67px
        'heading-lg': ['2.75rem', '3.5625rem'], // 44px / 57px
        'heading1': ['2.25rem', '2.875rem'],    // 36px / 46px
        'heading2': ['2rem', '2.625rem'],       // 32px / 42px
        'heading3': ['1.75rem', '2.25rem'],     // 28px / 36px
        'heading4': ['1.5rem', '2rem'],         // 24px / 32px
        'heading5': ['1.25rem', '1.75rem'],     // 20px / 28px
        'heading6': ['1rem', '1.5rem'],         // 16px / 24px
        'para': ['1rem', '1.625rem'],           // 16px / 26px
        'para-lg': ['1.125rem', '1.75rem'],     // 18px / 28px
        'small': ['0.875rem', '1.25rem'],       // 14px / 20px
        'x-small': ['0.75rem', '1.125rem'],     // 12px / 18px
        'xs-small': ['0.625rem', '1rem'],       // 10px / 16px
  },
  fontFamily: {
     farro: ['Farro', 'sans-serif'],
      inter: ['Inter', 'sans-serif'],
  },
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
