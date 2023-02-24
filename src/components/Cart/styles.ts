import styled from 'styled-components'

export const CartContainer = styled.div`
  width: 448px;

  h2 {
    margin-bottom: 1rem;
  }

  > div {
    width: 100%;

    border-radius: 6px 44px 6px 44px;
    padding: 2.5rem;

    background: ${({ theme }) => theme['gray-200']};
  }
`

export const CartCardList = styled.div``

export const CartCoffeCard = styled.div`
  width: 100%;

  display: flex;

  padding: 1.5rem 0;
  border-bottom: 1px solid ${({ theme }) => theme['gray-300']};

  img {
    width: 4rem;
    height: 4rem;

    margin-right: 1.25rem;
  }

  > div {
    width: 100%;

    display: flex;
    flex-direction: column;

    header {
      width: 100%;

      display: flex;
      align-items: center;
      justify-content: space-between;

      margin-bottom: 0.5rem;

      p {
        font-size: 1rem;
        line-height: 1.3;
        color: ${({ theme }) => theme['gray-700']};
        font-weight: bold;
      }
    }
  }
`

export const ButtonContainer = styled.div`
  display: flex;
  gap: 0.5rem;

  > button {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;

    color: ${({ theme }) => theme['gray-700']};
    background: ${({ theme }) => theme['gray-400']};

    padding: 0.5rem;
    border: 1px solid transparent;
    border-radius: 6px;

    cursor: pointer;
    transition: all 0.2s;

    &:hover {
      background: ${({ theme }) => theme['gray-500']};
    }

    svg {
      color: ${({ theme }) => theme['purple-500']};
    }
  }
`

export const IncrementandDecrementButton = styled.div`
  background: ${({ theme }) => theme['gray-400']};
  padding: 0.5rem;
  border-radius: 6px;

  display: flex;
  align-items: center;
  gap: 8px;

  span {
    color: ${({ theme }) => theme['gray-900']};
    font-size: 1rem;
  }

  button {
    width: 14px;
    height: 14px;

    display: flex;
    align-items: center;
    justify-content: center;

    background: transparent;
    color: ${({ theme }) => theme['purple-500']};
    border-radius: 99px;
    transition: color 0.2s;

    &:hover {
      color: ${({ theme }) => theme['purple-700']};
      background: ${({ theme }) => theme['gray-500']};
    }
  }
`
export const AmountCalculeteContainer = styled.div`
  width: 100%;
  margin: 1.5rem 0;

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    & + div {
      margin-top: 0.75rem;
    }

    p {
      font-size: 0.875rem;
      line-height: 1.3;
      color: ${({ theme }) => theme['gray-700']};

      & + p {
        font-size: 1rem;
      }
    }

    &:last-child {
      font-weight: bold;

      p {
        font-size: 1.25rem;
      }
    }
  }
`

export const SubmitButton = styled.button`
  width: 100%;
  height: 2.5rem;

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 0.875rem;
  line-height: 1.6;
  font-weight: bold;
  text-transform: uppercase;
  color: ${({ theme }) => theme.white};

  background: ${({ theme }) => theme['yellow-500']};
  border-radius: 6px;
  transition: background-color 0.2s;

  &:hover {
    background: ${({ theme }) => theme['yellow-700']};
  }
`
