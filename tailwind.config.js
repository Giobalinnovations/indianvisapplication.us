/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0891b2',
        secondary: '#334155',
        accent: '#0ea5e9',
        highlight: '#475569',
        success: '#16a34a',
        warning: '#d97706',
        error: '#dc2626',
        background: '#f0f9ff',
        orange: '#f97316',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      keyframes: {
        'slide-diagonal': {
          '0%': { transform: 'translate(-100%, -100%) rotate(45deg)' },
          '100%': { transform: 'translate(100%, 100%) rotate(45deg)' },
        },
        'slide-diagonal-reverse': {
          '0%': { transform: 'translate(100%, -100%) rotate(-45deg)' },
          '100%': { transform: 'translate(-100%, 100%) rotate(-45deg)' },
        },
        'slide-right': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        'slide-left': {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
      animation: {
        'slide-diagonal': 'slide-diagonal 3s ease-in-out infinite',
        'slide-diagonal-reverse':
          'slide-diagonal-reverse 3s ease-in-out infinite',
        'slide-right': 'slide-right 3s ease-in-out infinite',
        'slide-left': 'slide-left 3s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
