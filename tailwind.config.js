module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  media: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#082E4E",
        dark: "#0E273C",
        info: "#D4EAE9",
        highlight: "#EAB41E",
        muted: "#A0A7A5",
        light: "#FFFFFF"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
