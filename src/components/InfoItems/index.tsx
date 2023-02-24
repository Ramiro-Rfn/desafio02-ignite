import { Icon } from 'phosphor-react'
import { ReactNode } from 'react'
import { InfoItemContainer } from './styles'

interface InfoItemProps {
  children: ReactNode
  Icon: Icon
  color: string
}

export function InfoItem({ Icon, color, children }: InfoItemProps) {
  console.log(color)
  return (
    <InfoItemContainer color={color}>
      <span>
        <Icon weight="fill" />
      </span>
      {children}
    </InfoItemContainer>
  )
}
