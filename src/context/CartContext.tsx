import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useReducer,
  // eslint-disable-next-line prettier/prettier
  useState
} from 'react'
import { toast } from 'react-toastify'
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

  const [cart, dispatch] = useReducer(
    cartReducer,
    {
      cartItems: [],
      totalItems: 0,
      priceTotal: 0,
    },
    (initialState) => {
      const storedStateAsJSON = localStorage.getItem(
        '@coffedelivery:cartstate.1.0.0',
      )

      if (storedStateAsJSON) {
        return JSON.parse(storedStateAsJSON)
      }
      return initialState
    },
  )

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

    toast.info('Novo Item adicionado ao carrinho', {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'light',
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

  function resetCart() {
    dispatch({
      type: 'RESET_CART',
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

    resetCart()
  }

  useEffect(() => {
    const stateJSON = JSON.stringify(cart)

    localStorage.setItem('@coffedelivery:cartstate.1.0.0', stateJSON)
  }, [cart])

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
