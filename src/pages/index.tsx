import { useKeenSlider } from 'keen-slider/react';
import { GetStaticProps } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Stripe from 'stripe';

import 'keen-slider/keen-slider.min.css';
import { MouseEvent } from 'react';
import { Icon } from '../components/Icon';
import { stripe } from '../lib/stripe';
import { useCartContext } from '../providers/CartProvider';
import { HomeContainer, Product } from "../styles/pages/home";
import { currencyFormatter } from '../utils';

interface ProductsType {
  id: string
  name: string
  imageUrl: string
  price: number,
  description: string,
  defaultPriceId: string
}

interface HomeProps {
  products: ProductsType[]
}

export default function Home(props: HomeProps) {
  const addProductInCart = useCartContext(context => context.addProductInCart)

  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 2,
      spacing: 48,
    },
  })
  
  function handleClickAddToBag(product: ProductsType) {

    return (event: MouseEvent<HTMLButtonElement>) => {
      event.stopPropagation()
      event.preventDefault()
      
      addProductInCart(product)
    }
  }
  
  return (
    <>
    <Head>
      <title>Ignite Shop</title>
    </Head>

    <HomeContainer ref={sliderRef} className="keen-slider">
      {props.products.map(product => {
        return (
          <Link key={product.id} href={`/product/${product.id}`} prefetch={false}>
            <Product className='keen-slider__slide'>
              <Image src={product.imageUrl} alt="" width={520} height={520} blurDataURL={product.imageUrl} />

              <footer>
                <div className='product-info'>
                  <strong>{product.name}</strong>
                  <span>{currencyFormatter.format(product.price)}</span>
                </div>

                <button type="button" onClick={handleClickAddToBag(product)}>
                  <Icon.Bag />
                </button>
              </footer>
            </Product>
          </Link>
      )})}
    </HomeContainer>
    </>
    
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await stripe.products.list({
    expand: ['data.default_price']
  })

  const products = response.data.map(product => {
    const defaultPrice = product.default_price as Stripe.Price
    const price = defaultPrice.unit_amount || 0

    return ({
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      price: price / 100,
      defaultPriceId: defaultPrice.id,
      description: product.description
    } as ProductsType)
    
  })
  
  return {
    props: {
      products
    },
    revalidate: 60 * 60 * 2 // 2 hours
  }
}
