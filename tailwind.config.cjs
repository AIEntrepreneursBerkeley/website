const { fontFamily } = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
const config = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        'image-rotate': 'image-rotate 1400ms ease forwards',
        'image-glow': 'image-glow 4100ms 600ms ease-out forwards',
        'sketch-lines': 'sketch-lines 1200ms ease-out forwards',
        'glow-line-horizontal':
          'glow-line-horizontal var(--animation-duration) ease-in forwards',
        'glow-line-vertical':
          'glow-line-vertical var(--animation-duration) ease-in forwards',
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
      backgroundImage: {
        'hero-gradient':
          'radial-gradient(ellipse 50% 80% at 20% 40%,rgba(93,52,221,0.1),transparent), radial-gradient(ellipse 50% 80% at 80% 50%,rgba(120,119,198,0.15),transparent)',
        'hero-glow':
          'conic-gradient(from 230.29deg at 51.63% 52.16%, rgb(36, 0, 255) 0deg, rgb(0, 135, 255) 67.5deg, rgb(108, 39, 157) 198.75deg, rgb(24, 38, 163) 251.25deg, rgb(54, 103, 196) 301.88deg, rgb(105, 30, 255) 360deg)',
        'glow-lines':
          'linear-gradient(var(--direction),#9d9bf2 0.43%,#7877c6 14.11%,rgba(120,119,198,0) 62.95%)',
        'darken-image':
          'linear-gradient(180deg,transparent,rgba(4,4,16,.8) 50%, rgba(4,4,16,.9) 75%, rgba(4,4,16,1))',
        texture:
          'url(/glow-texture.png), radial-gradient(var(--color-primary), transparent 70%)',
      },
      boxShadow: {
        border: 'inset 0 0 0 1px hsla(240, 60%, 95%, 0.15)',
      },
      colors: {
        background: '#040410',
      },
      fontFamily: {
        sans: ['var(--font-inter)', ...fontFamily.sans],
        serif: ['var(--font-signifier)', ...fontFamily.serif],
      },
      keyframes: {
        'image-rotate': {
          '0%': { transform: 'rotateX(25deg)' },
          '25%': { transform: 'rotateX(25deg) scale(0.9)' },
          '60%': { transform: 'none' },
          '100%': { transform: 'none' },
        },
        'image-glow': {
          '0%': {
            opacity: '0',
            'animation-timing-function': 'cubic-bezier(0.74,0.25,0.76,1)',
          },
          '10%': {
            opacity: '1',
            'animation-timing-function': 'cubic-bezier(0.12,0.01,0.08,0.99)',
          },
          '100%': {
            opacity: '0.2',
          },
        },
        'sketch-lines': {
          '0%': { 'stroke-dashoffset': '1' },
          '50%': { 'stroke-dashoffset': '0' },
          '99%': { 'stroke-dashoffset': '0' },
          '100%': { visiblity: 'hidden' },
        },
        'glow-line-horizontal': {
          '0%': { opacity: '0', transform: 'translateX(0)' },
          '5%': { opacity: '1', transform: 'translateX(0)' },
          '90%': { opacity: '1' },
          '100%': { opacity: '0', transform: 'translateX(min(25vw, 15rem))' },
        },
        'glow-line-vertical': {
          '0%': { opacity: '0', transform: 'translateY(0)' },
          '5%': { opacity: '1', transform: 'translateY(0)' },
          '90%': { opacity: '1' },
          '100%': { opacity: '0', transform: 'translateY(min(15vw, 10rem))' },
        },
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      screens: {
        xs: '540px',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};

module.exports = config;
