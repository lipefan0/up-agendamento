/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				light: '#f8f8f8',
				dark: '#1a1a1a',
			}
		},
	},
	plugins: [],
}
