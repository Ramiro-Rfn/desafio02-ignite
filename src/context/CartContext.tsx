import {
  createContext,
  ReactNode,
  useContext,
  useReducer,
  // eslint-disable-next-line prettier/prettier
  useState
} from 'react'
import { cartReducer } from '../components/reducers/cart/cartReducer'

import coffesData from '../util/coffe.json'

export type Coffe = {
  id: number
  name: string
  description: string
  categories: string[]
  image: string
  price: number
  quantity?: number
}

interface CheckoutData {
  cpf: string
  street: string
  phoneNumber: string
  complement?: string
  district: string
  city: string
  uf: string
  payMethod: 'money' | 'creditCard' | 'debitCard'
}

interface CartContextData {
  coffes: Coffe[]
  totalItems: number
  priceTotal: number
  cartItems: Coffe[]
  totalAmount: number
  deliveryPrice: number
  addToCart: (coffe: Coffe) => void
  removeToCart: (coffe: Coffe) => void
  incrementCartItem: (coffe: Coffe) => void
  decrementCartItem: (coffe: Coffe) => void
  createCheckout: (data: CheckoutData) => void
}

interface CartContextProviderProps {
  children: ReactNode
}

const CartContex = createContext({} as CartContextData)

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [coffes, setCoffes] = useState(coffesData)

  const [cart, dispatch] = useReducer(cartReducer, {
    cartItems: [],
    totalItems: 0,
    priceTotal: 0,
  })

  const { cartItems, totalItems, priceTotal } = cart

  const deliveryPrice = 6

  const totalAmount = priceTotal + deliveryPrice

  function addToCart(coffe: Coffe) {
    dispatch({
      type: 'ADD_ITEM_IN_CART',
      payload: {
        coffe,
      },
    })
  }

  function removeToCart(coffe: Coffe) {
    dispatch({
      type: 'REMOVE_ITEM_IN_CART',
      payload: {
        coffe,
      },
    })
  }

  function incrementCartItem(coffe: Coffe) {
    dispatch({
      type: 'INCREMENT_ITEM_IN_CART',
      payload: {
        coffe,
      },
    })
  }

  function decrementCartItem(coffe: Coffe) {
    dispatch({
      type: 'DECREMENT_ITEM_IN_CART',
      payload: {
        coffe,
      },
    })
  }

  function createCheckout(data: CheckoutData) {
    const newData = {
      ...data,
      cartItems,
    }

    console.log(newData)
  }

  return (
    <CartContex.Provider
      value={{
        coffes,
        totalItems,
        priceTotal,
        totalAmount,
        deliveryPrice,
        cartItems,
        addToCart,
        removeToCart,
        decrementCartItem,
        incrementCartItem,
        createCheckout,
      }}
    >
      {children}
    </CartContex.Provider>
  )
}

export const useCart = () => useContext(CartContex)
