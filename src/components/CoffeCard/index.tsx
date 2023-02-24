import { ShoppingCart } from 'phosphor-react'
import { CardContainer, Content, Footer, Header } from './styles'

type Coffe = {
  id: number
  name: string
  description: string
  categories: string[]
  image: string
  price: number
}

interface CoffeCardProps {
  coffe: Coffe
}

export function CoffeCard({ coffe }: CoffeCardProps) {
  return (
    <CardContainer>
      <Header>
        <img src={coffe.image} alt="" />

        <div>
          {coffe.categories.map((category) => {
            return <span key={category}> {category} </span>
          })}
        </div>
      </Header>

      <Content>
        <h2> {coffe.name} </h2>
        <p> {coffe.description} </p>
      </Content>

      <Footer>
        <p>
          R$ <span>{coffe.price}</span>
        </p>

        <div>
          <div>
            <button>-</button>
            <span>1</span>
            <button>+</button>
          </div>

          <button>
            <ShoppingCart weight="fill" />
          </button>
        </div>
      </Footer>
    </CardContainer>
  )
}
