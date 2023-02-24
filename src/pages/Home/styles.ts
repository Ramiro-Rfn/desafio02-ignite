import styled from 'styled-components'

export const Container = styled.div`
  background: ${(props) => props.theme['gray-100']};
  width: 100%;

  h1 {
    color: ${(props) => props.theme['yellow-500']};
  }
`
