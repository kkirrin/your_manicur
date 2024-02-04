/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './*.html',
  ],
  theme: {
    screens: {
      'esm':'376px',
      'sm': '769px',
      'md': '1024px',
      'lg': '1280px',
      'xl': '1440px',
    },

    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'dark': '#595959',
      'white': '#fff',
      'red': '#d2323e',
      'gray': '#c2c3ca',
      'light-gray': '#f2f3f8',
      'bg-black': 'rgb(36,36,36)'
  

    },

    container: {
      padding: '20px',
      center: true
    },
    extend: {
      fontFamily: {
        'Monsteratt': ['Monsteratt', 'regular'],
      }
    }
  },
  plugins: [],
}

