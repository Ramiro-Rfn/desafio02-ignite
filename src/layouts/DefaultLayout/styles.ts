import styled from 'styled-components'

export const LayoutContainer = styled.div`
  max-width: 70rem;
  margin: 0 auto;

  background: ${(props) => props.theme['gray-100']};
  border-radius: 8px;

  display: flex;
  flex-direction: column;
`
