import axios from "axios";
import { ReactNode, useCallback, useReducer } from "react";
import { createContext, useContextSelector } from "use-context-selector";
import { addProductToCardAction, ItemsInCartData, itemsInCartReducer, ProductInCart, removeProductFromCardAction } from "../reducers/itemsInCart";

interface CartContextData {
  items: ItemsInCartData[]
  addProductInCart: (product: ProductInCart) => void
  removeProductFromCart: (cartId: string) => void
  sendToCheckout: (priceIds: string[]) => Promise<void>
}

interface CartProviderProps {
  children: ReactNode
}

const CartContext = createContext<CartContextData>({} as CartContextData)

export function CartProvider({children}: CartProviderProps) {
  const [items, itemsDispatch] = useReducer(itemsInCartReducer, [])

  const addProductInCart = useCallback(
    (product: ProductInCart) => {
      itemsDispatch(addProductToCardAction(product))
    },
    []
  )

  function removeProductFromCart(cartId: string) {
    itemsDispatch(removeProductFromCardAction(cartId))
  }


  async function sendToCheckout(priceIds: string[]) {
    
    try {
      const response = await axios.post('/api/checkout', {
        priceIds
      })
      
      const {checkoutUrl} = response.data;

      window.location.replace(checkoutUrl)
    } catch(err) {
      // Conectar com uma ferramenta de observabilidade (DatatDog / Sentry)
      throw new Error('Falha ao redirecionar ao checkout')
    }
  }
  
  return (
    <CartContext.Provider value={{
      items,
      addProductInCart,
      removeProductFromCart,
      sendToCheckout
    }}>
      {children}
    </CartContext.Provider>
  )
}

export function useCartContext<Selector>(selector: (value: CartContextData) => Selector) {
  return useContextSelector<CartContextData, Selector>(CartContext, selector)
}