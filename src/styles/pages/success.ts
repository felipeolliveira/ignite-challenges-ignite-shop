import { styled } from "..";

export const SuccessContainer = styled('main', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  margin: '0 auto',
  height: 656,

  h1: {
    fontSize: '$2xl',
    color: '$gray-text'
  },
  
  p: {
    marginTop: '2rem',
    fontSize: '$xl',
    maxWidth: 560,
    textAlign: 'center',
    color: '$gray-text'
  },
  
  a: {
    marginTop: '5rem',
    display: 'block',
    fontSize: '$lg',
    color: '$green',
    textDecoration: 'none',
    fontWeight: 'bold',
    
    '&:hover': {
      color: '$green-light'
    }
  }
})

export const ImagesContainer = styled('ul', {
  display: 'flex',
  marginBottom: '4rem',

  '& > li:not(:first-child)': {
    marginLeft: '-50px',
  }
})

export const ImageContent = styled('li', {
  width: '100%',
  maxWidth: 140,
  height: 140,
  background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',

  borderRadius: 999,
  padding: '0.25rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  boxShadow: '0px 0px 60px rgba(0, 0, 0, 0.8)',


  img: {
    objectFit: 'cover'
  }
})