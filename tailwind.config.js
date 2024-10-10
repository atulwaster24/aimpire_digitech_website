/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: ["class"],
  theme: {
  	extend: {
  		animation: {
  			'grow-shrink': 'growAndShrink 3s infinite ease-in-out',
  			'fade-in-up': 'fadeInUp 0.5s ease-in-out'
  		},
  		keyframes: {
  			growAndShrink: {
  				'0%': {
  					height: '0%'
  				},
  				'50%': {
  					height: '100%'
  				},
  				'100%': {
  					height: '0%',
  				}
  			},
        fadeInUp:{
          '0%': {
            opacity: 1, transform: 'translateY(20px)',
          }, 
          '100%': {
            opacity: 1, transform: 'translateY(0px)',
          }
        }
  		},
  		colors: {
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			DeluxeDays: '#8ecae6',
  			ButterflyBlue: '#219ebc',
  			CosmosBlue: '#023047',
  			SunflowerMango: '#ffb703',
  			TheNewBlack: '#fb8500',
  		},
  	}
  },
  plugins: [require('tailwindcss-animated'), require("tailwindcss-animate")],
};
