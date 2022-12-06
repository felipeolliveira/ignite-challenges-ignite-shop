import { ItemsInCartActions, ItemsInCartActionType } from "./actions"

export interface ProductInCart {
  id: string
  name: string
  imageUrl: string
  price: number
  description: string,
  defaultPriceId: string
}

export interface ItemsInCartData {
  cartId: string,
  product: ProductInCart
}

export function itemsInCartReducer(state: ItemsInCartData[], action: ItemsInCartActionType) {
  switch (action.type) {
    case ItemsInCartActions.ADD_PRODUCT_TO_CART: {      
      const isProductExistsInCart = state.find(item => item.product.id === action.payload.id)
      
      if(isProductExistsInCart) {
        alert('Infelizmente só podemos fazer pedido de apenas uma camiseta por modelo.\n\nEstamos melhorando nossa logistica para te atender melhor!\n\n🤓')
        
        return state
      }
      
      return [{
        cartId: new Date().getTime().toString(),
        product: action.payload
      },...state]
    }
    
    case ItemsInCartActions.REMOVE_PRODUCT_TO_CART: {
      return state.filter(item => item.cartId !== action.payload)
    }
  
    default:
      return state
  }  
}