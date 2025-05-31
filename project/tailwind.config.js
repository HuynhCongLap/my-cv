/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#E6F6FF',
          100: '#CCE8FF',
          200: '#99D1FF',
          300: '#66BAFF',
          400: '#33A3FF',
          500: '#008CFF',
          600: '#0070CC',
          700: '#005499',
          800: '#003866',
          900: '#001C33',
        },
        accent: {
          cyan: '#00FFFF',
          green: '#00FF8C',
          yellow: '#FFFF00',
          purple: '#BB00FF',
          red: '#FF2266',
          blue: '#0088FF',
          orange: '#FF6900',       // Cam đậm (Orange primary)
          orangeGlow: '#FF6900',   // Có thể thêm biến phụ cho glow nếu muốn
        },
        dark: {
          100: '#1A1A1A',
          200: '#151515',
          300: '#121212',
          400: '#0D0D0D',
          500: '#080808',
          900: '#030303',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'grid-lines': 'linear-gradient(to right, #111 1px, transparent 1px), linear-gradient(to bottom, #111 1px, transparent 1px)',
      },
      boxShadow: {
        'neon-cyan': '0 0 5px rgba(0, 255, 255, 0.7), 0 0 10px rgba(0, 255, 255, 0.5)',
        'neon-purple': '0 0 5px rgba(187, 0, 255, 0.7), 0 0 10px rgba(187, 0, 255, 0.5)',
        'neon-blue': '0 0 5px rgba(0, 136, 255, 0.7), 0 0 10px rgba(0, 136, 255, 0.5)',
        'neon-orange': '0 0 12px 2px rgba(255,105,0,0.23), 0 0 24px 10px rgba(255,105,0,0.13)',
      },
    },
  },
  plugins: [],
};