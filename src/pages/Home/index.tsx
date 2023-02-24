import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import { Container, HeroContainer, LeftSection, RightSection } from './styles'

import { useTheme } from 'styled-components'
import coffe from '../../assets/coffe.png'
import { InfoItem } from '../../components/InfoItems'

export default function Home() {
  const theme = useTheme()

  return (
    <Container>
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
    </Container>
  )
}
