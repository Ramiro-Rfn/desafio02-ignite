import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
  // eslint-disable-next-line prettier/prettier
  Trash
} from 'phosphor-react'

import { useTheme } from 'styled-components'

import {
  AmountCalculeteContainer,
  ButtonContainer,
  Cart,
  CartCardList,
  CartCoffeCard,
  Container,
  FormContainer,
  FormLabel,
  IncrementandDecrementButton,
  Input,
  InputContainer,
  InputGroup,
  SelectGroup,
  // eslint-disable-next-line prettier/prettier
  SubmitButton
} from './styles'

export default function Checkout() {
  const theme = useTheme()

  return (
    <Container>
      <FormContainer>
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
      </FormContainer>

      <Cart>
        <h2>Cafés selecionados</h2>

        <div>
          <CartCardList>
            {[1, 2, 3].map((value) => {
              return (
                <CartCoffeCard key={value}>
                  <img src="/images/Americano.png" alt="" />

                  <div>
                    <header>
                      <p>Expresso Tradicional</p>
                      <p>
                        R$ <span>9,90</span>
                      </p>
                    </header>

                    <ButtonContainer>
                      <IncrementandDecrementButton>
                        <button>-</button>
                        <span>1</span>
                        <button>+</button>
                      </IncrementandDecrementButton>

                      <button>
                        <Trash /> Remover
                      </button>
                    </ButtonContainer>
                  </div>
                </CartCoffeCard>
              )
            })}
          </CartCardList>

          <AmountCalculeteContainer>
            <div>
              <p>Total de itens</p>
              <p>R$ 9,90</p>
            </div>

            <div>
              <p>Entrega</p>
              <p>R$ 9,90</p>
            </div>

            <div>
              <p>Total</p>
              <p>R$ 9,90</p>
            </div>
          </AmountCalculeteContainer>

          <SubmitButton>Confirmar pedido</SubmitButton>
        </div>
      </Cart>
    </Container>
  )
}
