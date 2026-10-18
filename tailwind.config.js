/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cornflower: '#94B6EF',
        'cornflower-light': '#BBD2F7',
        'cornflower-soft': '#D5E4FB',
        'cornflower-dark': '#6F97DB',
        'cornflower-deep': '#476FB7',
        chartreuse: '#E6E279',
        'chartreuse-light': '#F0EEA4',
        'chartreuse-dark': '#C8C44E',
        rust: '#924B12',
        'rust-light': '#B66524',
        'rust-soft': '#D48645',
        'rust-dark': '#6E3408',
      },
      fontFamily: {
        heading: ['var(--font-heading)'],
        body: ['var(--font-body)'],
        cursive: ['var(--font-cursive)'],
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'marquee-reverse': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0%)' },
        },
      },
      animation: {
        blink: 'blink 1s step-end infinite',
        marquee: 'marquee 35s linear infinite',
        'marquee-reverse': 'marquee-reverse 35s linear infinite',
      },
    },
  },
  plugins: [],
};
