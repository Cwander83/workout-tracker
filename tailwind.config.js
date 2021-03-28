//const colors = require('tailwindcss/colors');

module.exports = {
	purge: ['./src/**/*.html', './src/**/*.js'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		colors: {
			primary: '#5d5c61',
			secondary: '#557a95',
			blueish: '#7395ae',
			brownish: '#b1a296',
			grayish: '#938e93',

			black: '#000000',
			white: '#ffffff',
		},
		fontFamily: {
			// title: ['Comfortaa', 'cursive'],
			// body: ['Poppins', 'sans-serif'],
		},
		extend: {
			// height: {
			// 	108: '36rem',
			// 	120: '40rem',
			// },
			// lineHeight: {
			// 	0: '0',
			// },
		},
	},
	variants: {
		extend: {
			textColor: ['hover', 'focus', 'active'],
			backgroundColor: ['hover', 'focus', 'active'],
			scale: ['hover', 'focus', 'active'],
			textDecoration: ['hover', 'focus', 'active'],
			transform: ['hover', 'focus', 'active'],
			backgroundOpacity: ['hover', 'focus', 'active'],
			outline: ['hover', 'focus', 'active'],
			borderColor: ['hover', 'focus', 'active'],
			borderWidth: ['hover', 'focus', 'active'],
			ringColor: ['focus'],
			ringWidth: ['focus'],
			fontSize: ['focus'],
		},
	},
	plugins: [require('@tailwindcss/forms')],
};
