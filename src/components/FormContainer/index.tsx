import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  // eslint-disable-next-line prettier/prettier
  Money
} from 'phosphor-react'
import { useFormContext } from 'react-hook-form'
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

  const { register } = useFormContext()
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
          <Input type="text" placeholder="CPF" {...register('cpf')} />
          <Input type="text" placeholder="Rua" {...register('street')} />

          <InputGroup>
            <Input
              type="text"
              placeholder="Número"
              {...register('phoneNumber')}
            />
            <Input
              type="text"
              placeholder="Complemento"
              {...register('complement')}
            />
          </InputGroup>
          <InputGroup>
            <Input type="text" placeholder="Bairro" {...register('district')} />
            <Input type="text" placeholder="Cidade" {...register('city')} />
            <Input type="text" placeholder="UF" {...register('uf')} />
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
              <input
                {...register('payMethod')}
                value="creditCard"
                type="radio"
                id="creditCard"
              />
              <label htmlFor="creditCard">
                <CreditCard /> Cartão de crédito
              </label>
            </FormLabel>
            <FormLabel>
              <input
                {...register('payMethod')}
                value="debitCard"
                type="radio"
                id="debitCard"
              />
              <label htmlFor="debitCard">
                <Bank /> Cartão de debito
              </label>
            </FormLabel>

            <FormLabel>
              <input
                {...register('payMethod')}
                value="money"
                type="radio"
                id="money"
              />
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
