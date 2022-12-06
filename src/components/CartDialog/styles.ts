import * as Dialog from '@radix-ui/react-dialog';
import { styled } from "../../styles";

export const CartDialogOverlay = styled(Dialog.Overlay , {
  position: 'fixed',
  inset: 0,
  background: 'rgba(0,0,0,0)',
  zIndex: 99
})

export const CloseButton = styled('button', {
  position: 'absolute',
  top: '1.5rem',
  right: '1.5rem',

  background: 'transparent',
  border: 0,
  borderRadius: 4,

  color: '$gray-icon',
  lineHeight: 0
})

export const CartDialogContainer = styled(Dialog.Content, {
  position: 'fixed',
  top: 0,
  right: 0,
  
  display: 'flex',
  flexDirection: 'column',
  
  width: '100%',
  height: '100vh',
  maxWidth: 480,
  minHeight: 300,
  background: '$gray-elements',
  boxShadow: '4px 0px 30px rgba(0, 0, 0, 0.8)',
  zIndex: 999,
})

export const HeaderContainer = styled('header', {
  paddingTop: '3rem',
  paddingLeft: '3rem',
  paddingRight: '3rem',
})

export const CartItemsContainer = styled('ul', {
  flex: '1',
  overflow: 'auto',

  display: 'flex',
  flexDirection: 'column',
  gap: '1.5rem',
  paddingLeft: '3rem',
  paddingRight: '1rem',
  marginTop: '2rem',
  marginBottom: '2rem',
  marginRight: '0.5rem'
})

export const CartItem = styled('li', {
  flexShrink: 0,
  
  display: 'flex',
  gap: '1.25rem',

  '& > .product-info': {
    width: '100%',

    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',

    span: {
      fontSize: '1.125rem',
      color: '$gray-text',
      lineHeight: 1.6

    },

    strong: {
      fontWeight: '700',
      fontSize: '1.125rem',
      color: '$gray-title',
      lineHeight: 1.6

    },

    button: {
      marginTop: 'auto',
      background: 'transparent',
      border: 0,

      fontWeight: 'bold',
      color: '$green',
      
      '&:hover': {
        color: '$green-light',
      }
    }
  }
})

export const FooterContainer = styled('footer', {
  paddingBottom: '3rem',
  paddingRight: '3rem',
  paddingLeft: '3rem',

  '& > .quantity': {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '0.5rem',
  },

  '& > .total-value': {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '0.5rem', 

    fontSize: '1.125rem',
    color: '$gray-title'
  },

  button: {
    width: '100%',
    padding: '1.25rem',
    marginTop: '3.4375rem',
    borderRadius: 6,
    border: 'none',
    background: '$green',
    
    fontWeight: 'bold',
    color: '$white',

    transition: 'background-color 0.2s',

    '&:disabled': {
      opacity: 0.2
    },
    
    '&:not(:disabled):hover': {
      background: '$green-light',
    },
  },
})

export const ImageContainer = styled('div', {
  width: '100%',
  maxWidth: 100,
  height: 90,
  background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',

  borderRadius: 8,
  padding: '0.25rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  img: {
    objectFit: 'cover'
  }
})