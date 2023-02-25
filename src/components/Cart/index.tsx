/* eslint-disable prettier/prettier */
import { Trash } from 'phosphor-react'
import { useCart } from '../../context/CartContext'
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
  const { cartItems, priceTotal, deliveryPrice, totalAmount, removeToCart, decrementCartItem, incrementCartItem } = useCart()

  return (
    <CartContainer>
      <h2>Cafés selecionados</h2>

      <div>
        <CartCardList>
          {cartItems.map((cartItem) => {
            return (
              <CartCoffeCard key={cartItem.id}>
                <img src={cartItem.image} alt="" />

                <div>
                  <header>
                    <p> {cartItem.name} </p>
                    <p>
                      R$ <span> {cartItem.price.toFixed(2)} </span>
                    </p>
                  </header>

                  <ButtonContainer>
                    <IncrementandDecrementButton>
                      <button onClick={()=> decrementCartItem(cartItem)}>-</button>
                      <span> {cartItem.quantity} </span>
                      <button  onClick={()=> incrementCartItem(cartItem)}>+</button>
                    </IncrementandDecrementButton>

                    <button onClick={()=> removeToCart(cartItem)}>
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
            <p>R$ {priceTotal.toFixed(2)} </p>
          </div>

          <div>
            <p>Entrega</p>
            <p>R$ {deliveryPrice.toFixed(2)} </p>
          </div>

          <div>
            <p>Total</p>
            <p>R$ {totalAmount.toFixed(2)} </p>
          </div>
        </AmountCalculeteContainer>

        <SubmitButton type='submit'>Confirmar pedido</SubmitButton>
      </div>
    </CartContainer>
  )
}
