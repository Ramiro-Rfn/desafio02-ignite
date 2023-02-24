import styled from 'styled-components'

export const HeaderContainer = styled.header`
  width: 100%;
  padding: 2rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;

  img {
    width: auto;
    height: 2.5rem;
  }

  div {
    display: flex;
    align-items: center;
    gap: 1.25rem;

    span {
      height: 2.375rem;
      color: ${(props) => props.theme['purple-500']};
      background: ${(props) => props.theme['purple-300']};
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0.625rem;
      gap: 4px;
      border-radius: 6px;
    }

    a {
      height: 2.375rem;
      color: ${(props) => props.theme['yellow-700']};
      background: ${(props) => props.theme['yellow-300']};
      display: flex;
      align-items: center;
      justify-content: center;
      outline: none;
      padding: 0.625rem;
      border-radius: 6px;
      gap: 4px;
    }
  }
`
