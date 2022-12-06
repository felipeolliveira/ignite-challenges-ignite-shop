import type { AppProps } from 'next/app'
import { Header } from '../components/Header'
import { CartProvider } from '../providers/CartProvider'
import { globalStyles } from '../styles/global'
import { Container } from '../styles/pages/app'

globalStyles()

export default function App({ Component, pageProps }: AppProps) {  
  return (
    <CartProvider>
      <Container>
        <Header />
        <Component {...pageProps} />
      </Container>
    </CartProvider>
  )
  }