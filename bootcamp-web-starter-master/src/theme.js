import WebFont from 'webfontloader'

WebFont.load({
  google: {
    families: ['Muli', 'sans-serif'],
  },
})

const theme = {
  colors: {
    layout: {
      background: '#30739B',
      accent: '#706CC1',
      darkAccent: '#008E66',
      secondary: '#F7F9F9',
    },
    fonts: {
      header: 'white',
      body: 'rgba(0,0,0,0.8)',
      placeholder: 'rgba(0,0,0,0.6)',
      accent: '#FFC285',
      button: '#ffffff',
    },
  },
  fonts: {
    header: {
      family: 'Muli',
      weight: 700,
    },
    body: {
      family: 'Muli',
      weight: 400,
    },
  },
}

export default theme
