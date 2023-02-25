import produce from 'immer'
import { Coffe } from '../../../context/CartContext'

interface CartState {
  cartItems: Coffe[]
  totalItems: number
  priceTotal: number
}
export function cartReducer(state: CartState, action: any) {
  if (action.type === 'ADD_ITEM_IN_CART') {
    return produce(state, (draft) => {
      const itemInCart = draft.cartItems.find(
        (item) => item.id === action.payload.coffe.id,
      )

      if (itemInCart?.id) {
        const cartItemIndex = draft.cartItems.findIndex(
          (item) => item.id === action.payload.coffe.id,
        )

        draft.cartItems[cartItemIndex].quantity =
          Number(draft.cartItems[cartItemIndex].quantity) + 1

        draft.totalItems = draft.cartItems.reduce((prevValue, value) => {
          return prevValue + Number(value.quantity)
        }, 0)

        draft.priceTotal = draft.cartItems.reduce((prevValue, value) => {
          return prevValue + Number(value.price) * Number(value.quantity)
        }, 0)
      } else {
        draft.cartItems.push(action.payload.coffe)

        draft.totalItems = draft.cartItems.reduce((prevValue, value) => {
          return prevValue + Number(value.quantity)
        }, 0)

        draft.priceTotal = draft.cartItems.reduce((prevValue, value) => {
          return prevValue + Number(value.price) * Number(value.quantity)
        }, 0)
      }
    })
  }

  if (action.type === 'REMOVE_ITEM_IN_CART') {
    return produce(state, (draft) => {
      const cartItemIndex = draft.cartItems.findIndex(
        (item) => item.id === action.payload.coffe.id,
      )

      draft.cartItems.splice(cartItemIndex, 1)

      draft.totalItems = draft.cartItems.reduce((prevValue, value) => {
        return prevValue + Number(value.quantity)
      }, 0)

      draft.priceTotal = draft.cartItems.reduce((prevValue, value) => {
        return prevValue + Number(value.price) * Number(value.quantity)
      }, 0)
    })
  }

  if (action.type === 'INCREMENT_ITEM_IN_CART') {
    return produce(state, (draft) => {
      const cartItemIndex = draft.cartItems.findIndex(
        (item) => item.id === action.payload.coffe.id,
      )

      draft.cartItems[cartItemIndex].quantity =
        Number(draft.cartItems[cartItemIndex].quantity) + 1

      draft.totalItems = draft.cartItems.reduce((prevValue, value) => {
        return prevValue + Number(value.quantity)
      }, 0)

      draft.priceTotal = draft.cartItems.reduce((prevValue, value) => {
        return prevValue + Number(value.price) * Number(value.quantity)
      }, 0)
    })
  }

  if (action.type === 'DECREMENT_ITEM_IN_CART') {
    return produce(state, (draft) => {
      const cartItemIndex = draft.cartItems.findIndex(
        (item) => item.id === action.payload.coffe.id,
      )

      if (Number(draft.cartItems[cartItemIndex].quantity) === 1) return

      draft.cartItems[cartItemIndex].quantity =
        Number(draft.cartItems[cartItemIndex].quantity) - 1

      draft.totalItems = draft.cartItems.reduce((prevValue, value) => {
        return prevValue + Number(value.quantity)
      }, 0)

      draft.priceTotal = draft.cartItems.reduce((prevValue, value) => {
        return prevValue + Number(value.price) * Number(value.quantity)
      }, 0)
    })
  }

  return state
}
