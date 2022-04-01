module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        '3xl': '0 0 15px 1px rgba(0,0,0,0.5)',
        '4xl': '0 0 15px 1px rgba(0,0,0,0.8)',
        'inner-md' : "inset 0 0 5px 1px rgba(0,0,0,0.5)"
      },
      
      screens: {
        'sm': '576px',
        'md': '700px',
        'lg': '1100px',
        'xlg': '1440px',
      },

      
    },
    
  },
  plugins: [],
}