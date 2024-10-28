/** @type {import('tailwindcss').Config} */
import animations from '@midudev/tailwind-animations'

export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: { colors: { 'primary-500': '#FF885B', 'primary-600': '#F6784F' } },
  },
  plugins: [animations],
};
