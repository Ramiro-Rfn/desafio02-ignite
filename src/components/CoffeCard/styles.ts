import styled from 'styled-components'

export const CardContainer = styled.div`
  background: ${({ theme }) => theme['gray-200']};
  border-radius: 0 36px 0 36px;
  padding: 0 1.25rem 1.25rem 1.25rem;
`
export const Header = styled.div`
  margin-top: -1.25rem;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;

  img {
    width: 120px;
    height: 120px;
  }

  div {
    margin-top: 0.75rem;
    margin-bottom: 1rem;
    display: flex;
    gap: 0.5rem;

    span {
      background: ${({ theme }) => theme['yellow-300']};
      color: ${({ theme }) => theme['yellow-700']};
      text-transform: uppercase;
      font-weight: bold;
      font-size: 0.625rem;
      padding: 4px 8px;
      border-radius: 99px;
    }
  }
`

export const Content = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-bottom: 2rem;

  h2 {
    font-size: 1.25rem;
    font-weight: bold;
    color: ${({ theme }) => theme['gray-800']};
    margin-bottom: 1rem;
  }

  p {
    font-size: 0.875rem;
    color: ${({ theme }) => theme['gray-600']};
    line-height: 1.3;
    text-align: center;
  }
`

export const Footer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;

  p {
    font-size: 1rem;
    span {
      font-size: 1.5rem;
      font-weight: 800;
      font-family: 'Baloo 2', sans-serif;
    }
  }

  & > div {
    display: flex;

    & > button {
      padding: 8px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: ${({ theme }) => theme.white};
      background: ${({ theme }) => theme['purple-700']};
      border-radius: 6px;
      margin-left: 0.5rem;
      transition: background-color 0.2s;

      &:hover {
        background: ${({ theme }) => theme['purple-500']};
      }
    }

    div {
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
    }
  }
`
