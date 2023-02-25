import styled from 'styled-components'

export const Container = styled.main`
  background: ${(props) => props.theme['gray-100']};
  width: 100%;
`

export const HeroContainer = styled.div`
  width: 100%;
  display: flex;
  padding: 5.875rem 0;

  align-items: center;
`

export const LeftSection = styled.div`
  div:first-child {
    margin-bottom: 4rem;
    max-width: 558px;

    h1 {
      font-size: 3rem;
      font-weight: 800;
      color: ${(props) => props.theme['gray-900']};
      margin-bottom: 1rem;
    }

    p {
      font-size: 1.25rem;
      font-weight: 400;
      line-height: 1.3;
      color: ${(props) => props.theme['gray-800']};
    }
  }

  > div:last-child {
    display: grid;
    grid-template-columns: auto auto;
    gap: 2rem;
  }
`

export const RightSection = styled.div`
  max-width: 400px;
  width: 100%;
`
export const CardContainer = styled.div`
  padding-bottom: 5rem;

  > h2 {
    margin: 2rem 0 3.5rem 0;
    font-size: 2rem;
    font-weight: 800;
  }
`

export const CardList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 2rem;
`
