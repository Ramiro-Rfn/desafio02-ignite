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
export const CartEmpty = styled.div`
  width: 100%;
  height: calc(100vh - 300px);

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h3 {
    font-size: 2.5rem;
    color: ${({ theme }) => theme['yellow-700']};
  }

  p {
    font-size: 1.25rem;
    color: ${({ theme }) => theme['gray-700']};
    margin-bottom: 2rem;
  }

  > svg {
    color: ${({ theme }) => theme['yellow-700']};
  }

  > a {
    display: flex;
    align-items: center;
    justify-content: center;

    text-decoration: none;
    font-size: 1rem;
    font-weight: bold;

    background: ${({ theme }) => theme['purple-500']};
    color: ${({ theme }) => theme['gray-100']};

    padding: 1rem;
    border-radius: 6px;

    transition: background-color 0.2s;

    &:hover {
      background: ${({ theme }) => theme['purple-700']};
    }
  }
`
