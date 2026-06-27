import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // AXIMO brand tokens (mapped from the uploaded logo)
        primary: '#0E4B8F', // Deep Royal Blue
        secondary: '#123E6B', // Midnight Navy
        accent: '#4DA3FF', // Soft Metallic Blue Glow
        ink: '#0A0F1C', // Dark background
        paper: '#F5F7FA', // Light background
        smoke: '#d8dee9',
        skyglow: '#4DA3FF', // keep legacy name used in components
        skywash: '#EAF6FF',
      },
      boxShadow: {
        glow: '0 0 48px rgba(77, 163, 255, 0.18)',
        panel: '0 24px 80px rgba(0, 0, 0, 0.35)',
      },
      backgroundImage: {
        'hero-radial': 'radial-gradient(circle at top, rgba(77,163,255,0.16), transparent 42%)',
        'grid-fade': 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
      },
      animation: {
        float: 'float 10s ease-in-out infinite',
        shimmer: 'shimmer 2.4s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translate3d(0, 0, 0)' },
          '50%': { transform: 'translate3d(0, -18px, 0)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-120% 0' },
          '100%': { backgroundPosition: '120% 0' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
