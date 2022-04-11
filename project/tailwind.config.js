module.exports = {
  content: ["./src/**/*.{html,js,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        'header-shadow': '0 8px 24px rgb(149 157 165 / 40%)',
      },
      colors: {
        'header-color': 'rgba(255, 255, 255, 0.9)',
        'input-color': '#767676',
        'card-color': 'rgb(224 242 254)',
        'modal-color': 'rgba(0, 0, 0, .6)',
      }
    },
  },
  plugins: [],
}
