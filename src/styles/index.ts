import { createStitches } from '@stitches/react'

export const {
  config,
  styled,
  globalCss,
  getCssText,
  keyframes,
  theme,
  css
} = createStitches({
  theme: {
    colors: {
      white: '#fff',
      
      'gray-background': '#121214',
      'gray-elements': '#202024',
      'gray-icon': '#8D8D99',
      'gray-text': '#C4C4CC',
      'gray-title': '#E1E1E6',

      'green': '#00875f',
      'green-light': '#00b37e'
    },
    fontSizes: {
      sm: '0.875rem',
      md: '1.125rem',
      lg: '1.25rem',
      xl: '1.5rem',
      '2xl': '2rem',
    }
  }
})

