import { GetStaticPaths, GetStaticProps } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'
import Stripe from 'stripe'

import { stripe } from '../../lib/stripe'
import { useCartContext } from '../../providers/CartProvider'
import { ImageContainer, ProductContainer, ProductDetails } from '../../styles/pages/product'
import { currencyFormatter } from '../../utils'

interface ProductProps {
  product: {
    id: string
    name: string
    imageUrl: string
    price: number
    description: string,
    defaultPriceId: string
  }
}

export default function Product({product}: ProductProps) {
  const addProductInCart = useCartContext(context => context.addProductInCart)
  const {isFallback} = useRouter()

  if(isFallback) {
    return <p>Loading...</p>
  }

  function handleAddProductInCart() {
    addProductInCart(product)
  }
  
  
  return (
    <>
      <Head>
        <title>{product.name} | Ignite Shop</title>
      </Head>

      <ProductContainer>
        <ImageContainer>
          <Image src={product.imageUrl} alt="" width={520} height={480}/>
        </ImageContainer>

        <ProductDetails>
          <h1>{product.name}</h1>
          <span>{currencyFormatter.format(product.price)}</span>
          <p>{product.description}</p>

          <button onClick={handleAddProductInCart}>Colocar na sacola</button>
        </ProductDetails>
      </ProductContainer>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async ({}) => {  
  return {
    paths: [],
    fallback: true
  }
}

export const getStaticProps: GetStaticProps<any, {id: string}> = async ({params}) => {
  const productId = params?.id

  if(!productId) {
    throw new Error('id not found')
  }

  const product  = await stripe.products.retrieve(productId, {
    expand: ['default_price']
  })

  const defaultPrice = product.default_price as Stripe.Price
  const price = defaultPrice.unit_amount || 0

  
  return {
    props: {
      product: {
        id: product.id,
        name: product.name,
        imageUrl: product.images[0],
        price: price / 100,
        description: product.description,
        defaultPriceId: defaultPrice.id
      } 
    },
    revalidate: 60 * 60 * 1 // 1 hour
  }
}