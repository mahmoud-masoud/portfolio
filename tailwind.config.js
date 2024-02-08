/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      sm: '640px',
      md: '770px',
      lg: '1024px',
      xl: '1280px',
    },
    extend: {
      colors: {
        primary: '#11CCE5',
        secondary: '#974B8B',
        background: '#0f172a',
      },
      backgroundImage: {
        hero: 'url(/images/hero.webp)',
        'gradient-radial': 'radial-gradient(var(--gradient-color-stops))',
      },
      boxShadow: {
        skillsShadow: '0px 100px 100px -4px  rgba(96,165,250); ',
        inputShadow: '0px 0px 2px 2px rgba(100,165,250);',
      },
      keyframes: {
        gradient: {
          '0%': { backgroundPosition: '0% 50%' },
          '100%': { backgroundPosition: '100% 50%' },
        },
      },
      animation: {
        'spin-fast': 'spin .6s linear infinite',
        gradient: 'gradient linear 6s infinite',
      },
    },
  },
  plugins: [],
};
