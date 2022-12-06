import { ProductInCart } from "./reducer"


export enum ItemsInCartActions {
  ADD_PRODUCT_TO_CART = 'ADD_PRODUCT_TO_CART',
  REMOVE_PRODUCT_TO_CART = 'REMOVE_PRODUCT_TO_CART',
}

type AddProductToCard = {
  type: ItemsInCartActions.ADD_PRODUCT_TO_CART,
  payload: ProductInCart
}

type RemoveProductToCard = {
  type: ItemsInCartActions.REMOVE_PRODUCT_TO_CART,
  payload: string
}

export type ItemsInCartActionType = AddProductToCard | RemoveProductToCard

export function addProductToCardAction(product: ProductInCart): AddProductToCard {
  return {
    type: ItemsInCartActions.ADD_PRODUCT_TO_CART,
    payload: product
  }
}

export function removeProductFromCardAction(cartId: string): RemoveProductToCard {
  return {
    type: ItemsInCartActions.REMOVE_PRODUCT_TO_CART,
    payload: cartId
  }
}