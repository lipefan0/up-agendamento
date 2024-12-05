/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				primary: '#6200EE',
				primaryDark: '#BB86FC',
				secondary: '#03DAC6',
				light: '#FFFFFF',
				dark: '#121212',
				error: '#B00020',
				errorDark: '#CF6679',
			}
		},
	},
	plugins: [],
}
