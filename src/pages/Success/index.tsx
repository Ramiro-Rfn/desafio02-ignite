import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import { useTheme } from 'styled-components'

import { InfoItem } from '../../components/InfoItems'

import illustration from '../../assets/Illustration.svg'

import { useLocation } from 'react-router-dom'
import { Container } from './styles'

interface LocationState {
  street: string
  city: string
  district: string
  uf: string
  payMethod: string
}

interface IDictionary<TValue> {
  [id: string]: TValue
}

export function Success() {
  const theme = useTheme()
  const { state } = useLocation()

  const { street, city, district, payMethod, uf } = state as LocationState

  const PAY_METHODS: IDictionary<string> = {
    // eslint-disable-next-line prettier/prettier
    "money": 'Dinheiro',
    // eslint-disable-next-line prettier/prettier
    "creditCard": 'Cartão de crédito',
    // eslint-disable-next-line prettier/prettier
    "debitCard": 'Cartão de debito',
  }

  return (
    <Container>
      <div>
        <h2>Uhu! Seu pedido foi confimado</h2>
        <p>Agora é só aguardar que logo o café chegará até você</p>

        <div>
          <InfoItem color={theme['purple-500']} Icon={MapPin}>
            Entrega em <strong>{street}</strong>, {district} - {city},{state.uf}
          </InfoItem>

          <InfoItem color={theme['yellow-500']} Icon={Timer}>
            <p>Previsão de entrega</p> <strong>20 min - 30 min</strong>
          </InfoItem>

          <InfoItem color={theme['yellow-500']} Icon={CurrencyDollar}>
            <p>Pagamento na entrega</p>
            <strong>{PAY_METHODS[payMethod]}</strong>
          </InfoItem>
        </div>
      </div>

      <img src={illustration} alt="" />
    </Container>
  )
}
