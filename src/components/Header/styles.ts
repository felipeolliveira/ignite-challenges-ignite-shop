import { styled } from "../../styles";

export const HeaderContainer = styled('header', {
  padding: '2rem 0',
  width: '100%',
  maxWidth: 1180,
  margin: '0 auto',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',

  '.home-link': {
    lineHeight: 0
  }
})

export const BagIconButton = styled('button',  {
  position: 'relative',
  padding: '.75rem',
  border: 'none',
  backgroundColor: '$gray-elements',
  borderRadius: '6px',
     
  color: '$gray-text',
  lineHeight: 0,
  
  transition: 'background-color 0.2s',
  
  '&:hover': {
    backgroundColor: '$green-light', 
    color: '$white', 
  },

  span: {
    position:'absolute',
    top: '-0.75rem',
    right: '-0.75rem',
    
    minWidth: '1.5rem',
    height: '1.5rem',
    backgroundColor: '$green',
    boxShadow: '0 0 0 3px #121214',
    borderRadius: 999,
    
    display: 'flex',
    alignItems: 'center',
    justifyContent:'center',

    fontWeight: 'bold',
    fontSize: '$sm',
    color: '$white',
  },

  variants: {
    hasItem: {
      true: {
        color: '$white',
      }
    }
  },
  defaultVariants: {
    hasItem: false
  }
})