/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {},
  },
  plugins: [function({addUtilities}){
    const newUtilities = {
      '.scrollbar-thin': {
        scrollbarWidth: 'none', // This is for Firefox and supports only 'auto', 'thin', and 'none'.
        scrollbarColor: 'rgb(31 41 55)', // First color is for the thumb, second is for the track
      },
      '.scrollbar-webkit': {
        "&::-webkit-scrollbar": {
          width: '2px', // Consider this as the smallest practical width for usability
          height: '2px', // Adjust height for horizontal scrollbars, if necessary
        },
        "&::-webkit-scrollbar-track": {
          background:"green", // Track color
        },
        "&::-webkit-scrollbar-thumb": {
          backgroundColor: 'rgb(31 41 55)', // Thumb color
          borderRadius: '10px', // Thumb border radius
          // Consider uncommenting the border for better visibility at smaller sizes
          border: '1px solid white',
        },
      },
    };
      addUtilities(newUtilities,['responsive','hover']);
  },
    require('daisyui'),
  ],
}