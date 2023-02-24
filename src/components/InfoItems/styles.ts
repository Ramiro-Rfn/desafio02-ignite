import styled from 'styled-components'

interface InfoItemProps {
  color: string
}

export const InfoItemContainer = styled.p<InfoItemProps>`
  font-size: 1rem;
  color: ${(props) => props.theme['gray-700']};
  display: flex;
  align-items: center;

  gap: 4px;

  span {
    width: 2rem;
    height: 2rem;
    border-radius: 99px;
    display: flex;
    color: ${(props) => props.theme.white};
    align-items: center;
    justify-content: center;

    background: ${({ color }) => color};
  }
`
