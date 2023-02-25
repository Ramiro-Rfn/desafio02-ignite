import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import {
  CardContainer,
  CardList,
  Container,
  HeroContainer,
  LeftSection,
  // eslint-disable-next-line prettier/prettier
  RightSection
} from './styles'

import { ToastContainer } from 'react-toastify'
import { useTheme } from 'styled-components'
import coffe from '../../assets/coffe.png'
import { CoffeCard } from '../../components/CoffeCard'
import { InfoItem } from '../../components/InfoItems'
import { useCart } from '../../context/CartContext'

export default function Home() {
  const theme = useTheme()
  const { coffes } = useCart()

  return (
    <Container>
      <ToastContainer
        icon={
          <ShoppingCart weight="fill" size={24} color={theme['yellow-700']} />
        }
        bodyStyle={{ color: theme['gray-700'] }}
        progressStyle={{ background: theme['yellow-500'] }}
      />

      <HeroContainer>
        <LeftSection>
          <div>
            <h1>Encontre o café perfeito para qualquer hora do dia</h1>
            <p>
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </p>
          </div>

          <div>
            <InfoItem color={theme['yellow-700']} Icon={ShoppingCart}>
              Compra simples e segura
            </InfoItem>

            <InfoItem color={theme['gray-700']} Icon={Package}>
              Embalagem mantém o café intacto
            </InfoItem>

            <InfoItem color={theme['yellow-500']} Icon={Timer}>
              Entrega rápida e rastreada
            </InfoItem>

            <InfoItem color={theme['purple-500']} Icon={Coffee}>
              O café chega fresquinho até você
            </InfoItem>
          </div>
        </LeftSection>

        <RightSection>
          <img src={coffe} alt="" />
        </RightSection>
      </HeroContainer>
      <CardContainer>
        <h2>Nossos cafés</h2>

        <CardList>
          {coffes.map((coffe) => {
            return <CoffeCard coffe={coffe} key={coffe.id} />
          })}
        </CardList>
      </CardContainer>
    </Container>
  )
}
