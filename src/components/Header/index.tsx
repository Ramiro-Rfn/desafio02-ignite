import { HeaderContainer, TotalCartItem } from './styles'

import { MapPin, ShoppingCart } from 'phosphor-react'
import { NavLink } from 'react-router-dom'
import logo from '../../assets/logo.svg'
import { useCart } from '../../context/CartContext'

export function Header() {
  const { totalItems } = useCart()

  return (
    <HeaderContainer>
      <NavLink to="/">
        <img src={logo} alt="" />
      </NavLink>

      <div>
        <span>
          <MapPin weight="fill" /> Benguela, BG
        </span>

        <NavLink to="/checkout">
          <ShoppingCart weight="fill" />

          {totalItems > 0 && <TotalCartItem> {totalItems} </TotalCartItem>}
        </NavLink>
      </div>
    </HeaderContainer>
  )
}
