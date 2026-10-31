/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        burgundy: {
          950: '#1A0307',
          900: '#2C060C',
          850: '#3D0911',
          800: '#4E0C17',
          700: '#64101E',
          600: '#7E1627',
          500: '#9B1D32',
          400: '#BA2F48',
          200: '#E6A8B3',
          100: '#F4D4DA',
          50: '#FBF1F3',
        },
        cream: {
          900: '#3D352C',
          800: '#5E5245',
          700: '#7E6F5F',
          600: '#9E8D7B',
          500: '#BDAF9E',
          300: '#DCD3C6',
          200: '#EBE4DB',
          100: '#F5ECE1',
          50: '#FBF7F0',
        },
        gold: {
          900: '#534311',
          800: '#735D18',
          700: '#967A20',
          600: '#BA982A',
          500: '#D4AF37', // Imperial Classic Gold
          400: '#E5C45B',
          300: '#F1D885',
          200: '#FAECB7',
          100: '#FCF5D8',
          50: '#FFFDF5',
        }
      },
      boxShadow: {
        'gold-glow': '0 0 25px rgba(212, 175, 55, 0.35)',
        'gold-subtle': '0 4px 20px rgba(44, 6, 12, 0.08), 0 0 0 1px rgba(212, 175, 55, 0.35)',
        'cinematic': '0 12px 35px -5px rgba(44, 6, 12, 0.25), 0 0 0 1px rgba(212, 175, 55, 0.25)',
        'cinematic-lg': '0 25px 50px -12px rgba(44, 6, 12, 0.45), 0 0 0 1px rgba(212, 175, 55, 0.4)',
        'burgundy-deep': '0 20px 40px -15px rgba(26, 3, 7, 0.7)',
      },
      fontFamily: {
        serif: ['Playfair Display', 'Cinzel', 'Georgia', 'serif'],
        sans: ['Plus Jakarta Sans', 'Inter', '-apple-system', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
