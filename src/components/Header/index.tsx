import { HeaderContainer } from './styles'

import { MapPin, ShoppingCart } from 'phosphor-react'
import { NavLink } from 'react-router-dom'
import logo from '../../assets/logo.svg'

export function Header() {
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
        </NavLink>
      </div>
    </HeaderContainer>
  )
}
