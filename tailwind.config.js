const colors = require('tailwindcss/colors')

module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {},
    colors: {
      ...colors,
      'body': '#F3F2FD',
      'main': '#1C4A5A',
      'white': '#fff',
      'black': '#141414',
      'red': {
        DEFAULT: '#FEBAB6',
        dark: '#D31B11',
      },
      'yellow': {
        DEFAULT: '#FCF6BD',
        dark: '#4E4604',
      },
      'green': {
        DEFAULT: '#D0F4DE',
        dark: '#077506',
      },
      'blue': {
        DEFAULT: '#A9DEF9',
        dark: '#1179AF',
      },
      'purple': {
        DEFAULT: '#8B80F9',
        light: '#e8e6fe',
      },
      'orange': {
        DEFAULT: '#FAC898',
        dark: '#7B5224',
      },
    }
  },
  plugins: [],
}

