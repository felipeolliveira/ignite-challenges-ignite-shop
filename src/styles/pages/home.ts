import { styled } from "..";

export const HomeContainer = styled('main', {
  display: 'flex',
  width: '100%',
  marginLeft: 'auto',
  maxWidth: 'calc(100vw - ((100vw - 1180px) / 2))',
  minHeight: 656
});

export const Product = styled('div', {
  background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
  borderRadius: 8,
  cursor: 'pointer',
  position: 'relative',
  overflow: 'hidden',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  textDecoration: 'none',
  color: '$gray-text',

  img: {
    objectFit: 'cover',
    objectPosition: 'center'
  },

  footer: {
    position: 'absolute',
    bottom: '0.25rem',
    left: '0.25rem',
    right: '0.25rem',
    padding: '2rem',
    backgroundColor: 'rgba(0,0,0,0.6)',

    borderRadius: 6,

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',

    transform: 'translateY(110%)',
    opacity: 0,
    transition: 'all 0.2s ease-in-out',

    '& .product-info': {
      display: 'flex',
      flexDirection: 'column',
      
      strong: {
        fontSize: '$lg',
        marginBottom: '.25rem'
      },
  
      span: {
        fontSize: '$xl',
        fontWeight: 'bold',
        color: '$green-light'
      }
    },

    button: {
      padding: '.75rem',
      border: 'none',
      backgroundColor: '$green',
      borderRadius: '6px',
         
      color: '$white',
      lineHeight: 0,
      
      transition: 'background-color 0.2s',

      '&:hover': {
        backgroundColor: '$green-light',
      }
    }
  },

  '&:hover': {
    footer: {
      transform: 'translateY(0)',
      opacity: 1
    }
  }
});