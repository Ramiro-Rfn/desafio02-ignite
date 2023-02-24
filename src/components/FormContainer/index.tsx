import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  // eslint-disable-next-line prettier/prettier
  Money
} from 'phosphor-react'
import { useTheme } from 'styled-components'
import {
  FormContent,
  FormLabel,
  Input,
  InputContainer,
  InputGroup,
  // eslint-disable-next-line prettier/prettier
  SelectGroup
} from './styles'

export function FormContainer() {
  const theme = useTheme()
  return (
    <FormContent>
      <h2>Complete seu pedido</h2>

      <InputContainer>
        <header>
          <MapPinLine size={24} color={theme['yellow-700']} />
          <div>
            <p>Endereço de Entrega</p>
            <p>Informe o endereço onde deseja receber seu pedido</p>
          </div>
        </header>

        <div>
          <Input type="text" placeholder="CPF" />
          <Input type="text" placeholder="Rua" />

          <InputGroup>
            <Input type="text" placeholder="Número" />
            <Input type="text" placeholder="Complemento" />
          </InputGroup>
          <InputGroup>
            <Input type="text" placeholder="Bairro" />
            <Input type="text" placeholder="Cidade" />
            <Input type="text" placeholder="UF" />
          </InputGroup>
        </div>
      </InputContainer>

      <InputContainer>
        <header>
          <CurrencyDollar size={24} color={theme['purple-500']} />
          <div>
            <p>Pagamento</p>
            <p>
              O pagamento é feito na entrega. Escolha a forma que deseja pagar
            </p>
          </div>
        </header>

        <div>
          <SelectGroup>
            <FormLabel>
              <input name="payMethod" type="radio" id="creditCard" />
              <label htmlFor="creditCard">
                <CreditCard /> Cartão de crédito
              </label>
            </FormLabel>
            <FormLabel>
              <input name="payMethod" type="radio" id="debitCard" />
              <label htmlFor="debitCard">
                <Bank /> Cartão de debito
              </label>
            </FormLabel>

            <FormLabel>
              <input name="payMethod" type="radio" id="money" />
              <label htmlFor="money">
                <Money /> Dinheiro
              </label>
            </FormLabel>
          </SelectGroup>
        </div>
      </InputContainer>
    </FormContent>
  )
}
