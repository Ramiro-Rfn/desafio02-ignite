import { ShoppingCart } from 'phosphor-react'
import { useState } from 'react'
import { useCart } from '../../context/CartContext'
import { CardContainer, Content, Footer, Header } from './styles'

type Coffe = {
  id: number
  name: string
  description: string
  categories: string[]
  image: string
  price: number
  quantity?: number
}

interface CoffeCardProps {
  coffe: Coffe
}

export function CoffeCard({ coffe }: CoffeCardProps) {
  const [coffeState, setCoffeState] = useState({ ...coffe, quantity: 1 })

  const { addToCart } = useCart()

  function incrementQuantity() {
    setCoffeState((prevState) => {
      return {
        ...prevState,
        quantity: prevState.quantity + 1,
      }
    })
  }

  function decrementQuantity() {
    if (coffeState.quantity <= 1) return

    setCoffeState((prevState) => {
      return {
        ...prevState,
        quantity: prevState.quantity - 1,
      }
    })
  }

  return (
    <CardContainer>
      <Header>
        <img src={coffeState.image} alt="" />

        <div>
          {coffeState.categories.map((category) => {
            return <span key={category}> {category} </span>
          })}
        </div>
      </Header>

      <Content>
        <h2> {coffeState.name} </h2>
        <p> {coffeState.description} </p>
      </Content>

      <Footer>
        <p>
          R$ <span>{coffeState.price}</span>
        </p>

        <div>
          <div>
            <button onClick={decrementQuantity}> - </button>
            <span> {coffeState.quantity} </span>
            <button onClick={incrementQuantity}>+</button>
          </div>

          <button onClick={() => addToCart(coffeState)}>
            <ShoppingCart weight="fill" />
          </button>
        </div>
      </Footer>
    </CardContainer>
  )
}
