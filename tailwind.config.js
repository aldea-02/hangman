/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			gridTemplateColumns: {
				keyboard: 'repeat(auto-fit, minmax(75px, 1fr))'
			}
		}
	},
	plugins: [],
	corePlugins: {
		float: false
	}
}
