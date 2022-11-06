/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			gridTemplateColumns: {
				keyboardSmall: 'repeat(auto-fit, minmax(60px, 1fr))',
				keyboardBig: 'repeat(auto-fit, minmax(85px, 1fr))'
			}
		}
	},
	plugins: [],
	corePlugins: {
		float: false
	}
}
