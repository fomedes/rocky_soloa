/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'  ],
  theme: {
    extend: {
      backgroundImage: {
        'center-gradient': 'radial-gradient(ellipse, rgba(0,0,0,0.5) 80%, rgba(250,250,250,0.9) 100%)',
      },
      animation: {
        // Bounces 5 times 1s equals 5 seconds
        'bounce-short': 'bounce 1s ease-in-out 3.5'
      },
      colors: {
        'primary':'#BAA333',
        'secondary':'#F0E8D8',
        'bg-primary':'#F0E8D8',
        'bg-secondary':'#F0E8D8',
        'radial-bg-primary':'#CD02BC',
        'radial-bg-secondary':'#450167',
      }
    },
  },
  plugins: [],
};