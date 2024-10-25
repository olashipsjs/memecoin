/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				"inter-tight": "Inter Tight, sans-serif",
			},
			colors: {
				"primary": "rgb(54 79 255)"
			}
		},
	},
	plugins: [],
}
