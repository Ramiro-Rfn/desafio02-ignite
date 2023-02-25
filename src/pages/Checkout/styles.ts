import styled from 'styled-components'

export const Container = styled.div`
  background: ${({ theme }) => theme['gray-100']};
  width: 100%;

  form {
    display: flex;
    gap: 2rem;
    padding: 2.5rem 0;
  }
`
