import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './providers/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        cormorant: ['var(--font-cormorant)', 'Georgia', 'serif'],
        inter: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      colors: {
        dax: {
          bg: '#F3F0E8',
          pearl: '#EDE9DF',
          fog: '#E5E1D6',
          silver: '#CEC9BE',
          primary: '#1C1A16',
          secondary: '#6A6760',
          tertiary: '#9C9891',
          blue: '#83AECA',
          violet: '#A698BF',
          lavender: '#BFAFD8',
          border: 'rgba(150, 145, 138, 0.15)',
        },
      },
      backgroundImage: {
        'radial-glow-blue': 'radial-gradient(circle, rgba(131, 174, 202, 0.22) 0%, transparent 70%)',
        'radial-glow-violet': 'radial-gradient(circle, rgba(166, 152, 191, 0.18) 0%, transparent 70%)',
        'radial-glow-lavender': 'radial-gradient(circle, rgba(191, 175, 216, 0.15) 0%, transparent 70%)',
      },
      animation: {
        'glow-drift': 'glowDrift 20s ease-in-out infinite alternate',
        'glow-drift-slow': 'glowDriftSlow 28s ease-in-out infinite alternate',
        'grain': 'grain 8s steps(10) infinite',
        'fade-up': 'fadeUp 1.1s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'pulse-soft': 'pulseSoft 4s ease-in-out infinite',
      },
      keyframes: {
        glowDrift: {
          '0%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(30px, -20px) scale(1.05)' },
          '66%': { transform: 'translate(-20px, 15px) scale(0.97)' },
          '100%': { transform: 'translate(10px, -10px) scale(1.02)' },
        },
        glowDriftSlow: {
          '0%': { transform: 'translate(0px, 0px) scale(1)' },
          '50%': { transform: 'translate(-25px, 30px) scale(1.03)' },
          '100%': { transform: 'translate(20px, -15px) scale(0.98)' },
        },
        grain: {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '10%': { transform: 'translate(-2%, -3%)' },
          '20%': { transform: 'translate(1%, 2%)' },
          '30%': { transform: 'translate(-1%, 1%)' },
          '40%': { transform: 'translate(2%, -1%)' },
          '50%': { transform: 'translate(-2%, 2%)' },
          '60%': { transform: 'translate(1%, -2%)' },
          '70%': { transform: 'translate(-1%, 3%)' },
          '80%': { transform: 'translate(2%, 1%)' },
          '90%': { transform: 'translate(-1%, -1%)' },
        },
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(24px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        pulseSoft: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.6' },
        },
      },
      transitionTimingFunction: {
        'cinema': 'cubic-bezier(0.16, 1, 0.3, 1)',
        'luxury': 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
    },
  },
  plugins: [],
}

export default config
