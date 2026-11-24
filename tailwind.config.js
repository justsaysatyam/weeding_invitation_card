/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        cinzel: ['Cinzel', 'serif'],
        playfair: ['Playfair Display', 'serif'],
        vibes: ['Great Vibes', 'cursive'],
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        ivory: '#FDFBF7',
        maroon: { DEFAULT: '#580B18', light: '#7a1020', dark: '#3d0710' },
        gold: { DEFAULT: '#D4AF37', light: '#E8C84A', dark: '#B8942A', warm: '#F59E0B' },
        mehendi: '#15803D',
        marigold: '#F59E0B',
      },
      backgroundImage: {
        'gold-shimmer': 'linear-gradient(135deg, #D4AF37 0%, #F5E06A 30%, #D4AF37 50%, #B8942A 70%, #D4AF37 100%)',
        'maroon-gradient': 'linear-gradient(135deg, #580B18 0%, #7a1020 50%, #3d0710 100%)',
        'silk-gradient': 'linear-gradient(180deg, #FDFBF7 0%, #F9F3E8 100%)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 9s ease-in-out infinite',
        'shimmer': 'shimmer 3s linear infinite',
        'pulse-gold': 'pulseGold 2s ease-in-out infinite',
        'petal-fall': 'petalFall 4s ease-in forwards',
        'spin-slow': 'spin 20s linear infinite',
      },
      keyframes: {
        float: { '0%,100%': { transform: 'translateY(0px)' }, '50%': { transform: 'translateY(-15px)' } },
        shimmer: { '0%': { backgroundPosition: '-200% center' }, '100%': { backgroundPosition: '200% center' } },
        pulseGold: { '0%,100%': { boxShadow: '0 0 20px rgba(212,175,55,0.4)' }, '50%': { boxShadow: '0 0 40px rgba(212,175,55,0.8), 0 0 60px rgba(212,175,55,0.3)' } },
        petalFall: { '0%': { transform: 'translateY(-100px) rotate(0deg)', opacity: 1 }, '100%': { transform: 'translateY(110vh) rotate(720deg)', opacity: 0 } },
      },
    },
  },
  plugins: [],
}

