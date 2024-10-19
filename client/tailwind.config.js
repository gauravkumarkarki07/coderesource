/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
  	extend: {
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		colors: {
        primary:'#FF4B3E',
      },
      fontFamily:{
        Montserrat:['Montserrat','sans-serif'],
        Poppins:['Poppins','sans-serif'],
        Roboto:['Roboto','sans-serif']
      }
  	}
  },
  plugins: [require("tailwindcss-animate")],
}