import { Cart } from '../../components/Cart'
import { FormContainer } from '../../components/FormContainer'

import { Container } from './styles'

export default function Checkout() {
  return (
    <Container>
      <FormContainer />

      <Cart />
    </Container>
  )
}
