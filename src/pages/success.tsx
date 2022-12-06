import { GetServerSideProps } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Stripe from "stripe";
import { stripe } from "../lib/stripe";
import { ImageContent, ImagesContainer, SuccessContainer } from "../styles/pages/success";

interface SuccessProps {
  customerName?: string
  products: {
    name?: string
    imageUrl: string
  }[]
}

export default function Success({products, customerName}: SuccessProps) {
  return (
    <>
      <Head>
        <title>Compra efetuada | Ignite Shop</title>
        <meta name="robots" content="noindex" />
      </Head>
      
      <SuccessContainer>
        <ImagesContainer>
          {products.map(product => (
          <ImageContent key={product.name}>
            <Image src={product.imageUrl} alt="" width={140} height={140}/>

          </ImageContent>

          ))}
        </ImagesContainer>
        
        <h1>Compra efetuada</h1>

        <p>
          Uhull <strong>{customerName}</strong>, sua compra de {products.length} camisetas já está a caminho da sua casa.
        </p>

        <Link href="/">
          Voltar a o inicio
        </Link>
      </SuccessContainer>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async ({query}) => {
  
  if(!query.session_id) {
    return {
      redirect: {
        destination: '/',
        permanent: false
      }
    }
  }

  const sessionId = String(query.session_id)

  const session = await stripe.checkout.sessions.retrieve(sessionId, {
    expand: ['line_items', 'line_items.data.price.product']
  })

  const customerName = session.customer_details?.name
  const sessionProducts = session.line_items?.data.map(item => item.price?.product as (Stripe.Product | undefined))

  const products = sessionProducts?.map(sessionProduct => ({
    name: sessionProduct?.name || '',
    imageUrl: sessionProduct?.images[0] || ''
  }))

  return {
    props: {
      customerName,
      products: products || []
    }
  }
}
