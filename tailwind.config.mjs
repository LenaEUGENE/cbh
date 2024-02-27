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
			"fs-tiny": ["clamp(0.625rem, 0.191vw + 0.587rem, 0.75rem)", "1.6"],
			"fs-small": ["clamp(0.75rem, 0.191vw + 0.712rem, 0.875rem)", "1.5"],
			"fs-base": ["clamp(0.875rem, 0.382vw + 0.799rem, 1.125rem)", "1.5"],
			"fs-medium": ["clamp(1.25rem, 0.382vw + 1.174rem, 1.5rem)", "1.4"],

			/* heading font-sizes */
			"fs-h-xlarge": ["clamp(2.5rem, 2.294vw + 2.041rem, 4rem)", "1.1"],
			"fs-h-large": ["clamp(2rem, 0.765vw + 1.847rem, 2.5rem)", "1.2"],
			"fs-h-medium": ["clamp(1.75rem, 0.382vw + 1.674rem, 2rem)", "1.2"],
			"fs-h-small": ["clamp(1.125rem, 0.956vw + 0.934rem, 1.75rem)", "1.2"],
			"fs-h-tiny": ["clamp(1.15rem, 1.125, 1.125rem)", "1.3"],
		},
		extend: {},
	},
	
	plugins: [],
}
