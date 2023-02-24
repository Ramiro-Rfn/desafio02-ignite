/* eslint-disable prettier/prettier */
import { Trash } from 'phosphor-react'
import {
    AmountCalculeteContainer,
    ButtonContainer,
    CartCardList,
    CartCoffeCard,
    CartContainer,
    IncrementandDecrementButton,
    SubmitButton
} from './styles'

export function Cart() {
  return (
    <CartContainer>
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
    </CartContainer>
  )
}
