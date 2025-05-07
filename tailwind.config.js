/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        'shade-1': '#000000', 
        'shade-2': '#222222', 
        'shade-3': '#1DCD9F', 
        'shade-4': '#169976', 
        'shade-5': '#FFEEAD',
      },
      fontFamily: {
        'lato': ['Lato-Regular'],
        'lato-black': ['Lato-Black'],
        'lato-black-italic': ['Lato-BlackItalic'],
        'lato-bold': ['Lato-Bold'],
        'lato-bold-italic': ['Lato-BoldItalic'],
        'lato-italic': ['Lato-Italic'],
        'lato-light': ['Lato-Light'],
        'lato-light-italic': ['Lato-LightItalic'],
        'lato-thin': ['Lato-Thin'],
        'lato-thin-italic': ['Lato-ThinItalic'],
        'lato-regular': ['Lato-Regular'],
      },
    },
  },
  plugins: [],
}