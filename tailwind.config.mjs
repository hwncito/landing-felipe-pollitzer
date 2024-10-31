/** @type {import('tailwindcss').Config} */
import animations from '@midudev/tailwind-animations';

export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'primary-500': '#FF885B',
        'primary-600': '#F6784F',
        'secondary-500': '#557C56',
      },
      rotate: {
        135: '135deg',
      },
    },
  },
  plugins: [animations],
};
