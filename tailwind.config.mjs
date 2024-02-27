/** @type {import('tailwindcss').Config} */

module.exports =  {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	
	theme: {
		colors: {
			"neutral-900":"#191A1A",
			"neutral-700":"#484A4C",
			"neutral-0":"#FFFFFF",
			"brand-100":"#E8F2FC",
			"brand-400":"#4799EB",
			"brand-500":"#197FE6",
			"accent-20":"#FFF5F7",
			"accent-50":"#FFE5EA",
			"accent-400":"#FFADBE",
		},
		fontSize: {
			/* body font-sizes */
			"fs-tiny": ["clamp(0.79rem, 0.06vw + 0.78rem, 0.82rem)", "1.6"],
			"fs-small": ["clamp(0.89rem, 0.17vw + 0.85rem, 0.99rem)", "1.5"],
			"fs-base": ["clamp(1rem, 0.31vw + 0.93rem, 1.19rem)", "1.5"],
			"fs-medium": ["clamp(1.27rem, 0.73vw + 1.09rem, 1.71rem)", "1.4"],

			/* heading font-sizes */
			"fs-h-xlarge": ["clamp(2.44rem, 2.57vw + 1.84rem, 4rem)", "1.1"],
			"fs-h-large": ["clamp(1.95rem, 1.73vw + 1.55rem, 3rem)", "1.2"],
			"fs-h-medium": ["(1.56rem, 1.13vw + 1.3rem, 2.25rem)", "1.2"],
			"fs-h-small": ["clamp(1.25rem, 0.72vw + 1.08rem, 1.69rem)", "1.2"],
			"fs-h-tiny": ["clamp(1rem, 0.44vw + 0.9rem, 1.27rem)", "1.3"],
		},
		extend: {},
	},
	
	plugins: [],
}
