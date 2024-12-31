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
        primary: '#6366F1', // Indigo
        secondary: '#0F172A', // Slate Dark
        accent: '#F43F5E', // Rose
        tertiary: '#8B5CF6', // Purple
        success: '#10B981', // Emerald
        warning: '#F59E0B', // Amber
        info: '#3B82F6', // Blue
        surface: '#F8FAFC', // Slate Light
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'mesh-pattern': 'url("/assets/images/india/common/mesh.png")',
        'dots-pattern': 'url("/assets/images/india/common/dots.png")',
      },
      boxShadow: {
        glass: '0 0 15px 0 rgba(255, 255, 255, 0.05)',
        neon: '0 0 20px 0 rgba(99, 102, 241, 0.3)',
      },
    },
  },
  plugins: [],
};
