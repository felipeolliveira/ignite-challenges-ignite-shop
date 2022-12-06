import * as Dialog from '@radix-ui/react-dialog';
import Image from 'next/image';
import { useState } from 'react';
import { useCartContext } from '../../providers/CartProvider';
import { currencyFormatter } from '../../utils';
import { Icon } from '../Icon';
import { CartDialogContainer, CartDialogOverlay, CartItem, CartItemsContainer, CloseButton, FooterContainer, HeaderContainer, ImageContainer } from './styles';


export function CartDialog() {
  const [isCheckingOut, setIsCheckingOut] = useState(false)
  
  const items = useCartContext(context => context.items)
  const removeProductFromCart = useCartContext(context => context.removeProductFromCart)
  const sendToCheckout = useCartContext(context => context.sendToCheckout)

  const sumItems= items.reduce((acc, item) => {
    acc.amount += 1
    acc.totalPrice = Math.round((acc.totalPrice + item.product.price + Number.EPSILON) * 100) / 100
    
    return acc
  }, {
    amount: 0,
    totalPrice: 0
  })

  function handleRemoveItem(id: string) {
    return () => {
      removeProductFromCart(id)
    }
  }

  async function handleClickInFinishOrder() {
    if(!items.length) {
      alert('Você precisa adicinonar items no carrinho primeiro!')
      return;
    }
    
    const priceIds = items.map(item => item.product.defaultPriceId)

    try {
      setIsCheckingOut(true)
      await sendToCheckout(priceIds)
    } catch(err) {
      alert('Falha ao redirecionar ao checkout')
      setIsCheckingOut(false)
    }
  }
  
  return (
    <Dialog.Portal>
      <CartDialogOverlay />
      <CartDialogContainer>
        <HeaderContainer>
          <Dialog.Title asChild>
            <h3>Sacola de compras</h3>
          </Dialog.Title>
          <Dialog.Close asChild>
            <CloseButton>
              <Icon.Close />
            </CloseButton>
          </Dialog.Close>
        </HeaderContainer>

        <CartItemsContainer>
          {items.map(item => (
            <CartItem key={item.cartId}>
              <ImageContainer>
                <Image src={item.product.imageUrl} alt="" width={100} height={90} />
              </ImageContainer>

              <div className="product-info">
                <span>{item.product.name}</span>
                <strong>{currencyFormatter.format(item.product.price)}</strong>
                <button
                  type="button"
                  onClick={handleRemoveItem(item.cartId)}
                >
                  Remover
                </button>
              </div>
            </CartItem>
          ))}
        </CartItemsContainer>

        <FooterContainer>
          <div className='quantity'>
            <span>Quantidade</span>
            <span>{sumItems.amount} itens</span>
          </div>

          <div className='total-value'>
            <strong>Valor total</strong>
            <strong>{currencyFormatter.format(sumItems.totalPrice)}</strong>
          </div>

          <button
            type="button"
            onClick={handleClickInFinishOrder}
            disabled={!items.length || isCheckingOut}
          >
            {isCheckingOut && 'Aguarde um momento...'}
            {!isCheckingOut && 'Finalizar compra'}
          </button>
        </FooterContainer>
      </CartDialogContainer>
    </Dialog.Portal>
  )
}