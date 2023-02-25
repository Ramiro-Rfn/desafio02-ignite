import { zodResolver } from '@hookform/resolvers/zod'
import { FormProvider, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import * as zod from 'zod'

import { Cart } from '../../components/Cart'
import { FormContainer } from '../../components/FormContainer'
import { useCart } from '../../context/CartContext'

import { Container } from './styles'

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
  const { createCheckout } = useCart()
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
        <form onSubmit={handleSubmit(handleSubmitForm)}>
          <FormContainer />
          <Cart />
        </form>
      </FormProvider>
    </Container>
  )
}
