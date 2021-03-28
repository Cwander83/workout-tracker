const tailwindcss = require('tailwindcss');
//const purgeCSS = require('@fullhuman/postcss-purgecss');

module.exports = {
	plugins: [
		tailwindcss('./tailwind.config.js'),
		require('autoprefixer'),
		// purgeCSS({
		// 	content: ['./src/**/*.js', './src/**/*.jsx'],
		// 	css: ['./src/**/*.css'],
		// }),
	],
};
