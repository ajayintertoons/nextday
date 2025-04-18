/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-green': '#1BA169', 
        "custom-light-green" : "#1DBA36",
        "custom-blue" :"#3D455E",
        "custom-white": "#FFFFFF",
        "custom-black" : "#101218",
        "custom-gray"  : "#F6F7F9",
        "custom-orange" : "#FA7503",
        "custom-light-blue":"#EBFFF6"

      },
      fontFamily: {
        sansation: ['MyCustomFont', 'sans-serif'],
        
      },
      fontSize: {
        'xss': ['0.7rem', { lineHeight: '1rem' }], 
       
      },
      
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.bold-sansation': {
          fontFamily: 'MyCustomFont, sans-serif',
          fontWeight: 'bold',
        },
      });
    },
  ],
}
