import { zodResolver } from '@hookform/resolvers/zod'
import { ShoppingCartSimple } from 'phosphor-react'
import { FormProvider, useForm } from 'react-hook-form'
import { NavLink, useNavigate } from 'react-router-dom'
import * as zod from 'zod'

import { Cart } from '../../components/Cart'
import { FormContainer } from '../../components/FormContainer'
import { useCart } from '../../context/CartContext'

import { CartEmpty, Container } from './styles'

const checkoutFormValidateSchema = zod.object({
  cpf: zod.string().min(1, 'Informe o seu cpf'),
  street: zod.string().min(1, 'Informe sua rua'),
  phoneNumber: zod.string().min(1, 'Informe o seu número de celular'),
  complement: zod.string().optional(),
  district: zod.string().min(1, 'Informe o seu bairro'),
  city: zod.string().min(1, 'Informe o sua cidade'),
  uf: zod.string().min(1, 'Informe a uf'),
  payMethod: zod.enum(['money', 'creditCard', 'debitCard']),
})

type CheckoutFormData = zod.infer<typeof checkoutFormValidateSchema>

export default function Checkout() {
  const { createCheckout, totalItems } = useCart()
  const navigate = useNavigate()

  const checkoutForm = useForm<CheckoutFormData>({
    resolver: zodResolver(checkoutFormValidateSchema),
  })

  const { handleSubmit } = checkoutForm

  function handleSubmitForm(data: CheckoutFormData) {
    createCheckout(data)

    navigate('/success', {
      state: {
        payMethod: data.payMethod,
        street: data.street,
        district: data.district,
        city: data.city,
        uf: data.uf,
      },
    })
  }

  return (
    <Container>
      <FormProvider {...checkoutForm}>
        {totalItems > 0 ? (
          <form onSubmit={handleSubmit(handleSubmitForm)}>
            <FormContainer />
            <Cart />
          </form>
        ) : (
          <CartEmpty>
            <ShoppingCartSimple size={82} />

            <h3>Seu carrinho de compra está vazio</h3>
            <p>Adicione um item para ver algo aqui</p>

            <NavLink to="/">Voltar para Home</NavLink>
          </CartEmpty>
        )}
      </FormProvider>
    </Container>
  )
}
