import { globalCss } from ".";

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
    
    scrollbarWidth: '0.5rem',
    scrollbarColor: '#121214 rgba(0,0,0,0)',

    '&::-webkit-scrollbar': {
      width: '0.5rem',
    },
  
    '&::-webkit-scrollbar-track': {
      background: 'rgba(0,0,0,0)',
    },
  
    
    '&::-webkit-scrollbar-thumb': {
      backgroundColor: '#121214',
      borderRadius:' 99px',
      border: 'none',
    },
  },

  ':focus-visible': {
    outline: 0,
    boxShadow: '0 0 0 2px #00875f'
  },

  body: {
    backgroundColor: '$gray-background',
    color: '$gray-text',
    '-webkit-font-smoothing': 'antialiased',
  },

  'body, input, textarea, button': {
    fontFamily: 'Roboto',
    fontSize: '1rem',
  },

  'button, a': {
    cursor: 'pointer',

    '&:disabled': {
      cursor: 'not-allowed'
    }
  },

  'ul, ol, li': {
    listStyle: 'none'
  }
})