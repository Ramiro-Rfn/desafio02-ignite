import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  display: flex;
  gap: 7rem;
  margin-top: 5rem;

  > div {
    h2 {
      font-size: 2rem;
      font-weight: 800;
      color: ${({ theme }) => theme['yellow-700']};
    }

    > p {
      font-size: 1.25rem;
      color: ${({ theme }) => theme['gray-700']};
      line-height: 1.3;

      margin-bottom: 2.5rem;
    }

    > div {
      width: 32.875rem;

      display: flex;
      flex-direction: column;
      gap: 2rem;

      padding: 2.5rem;

      border-radius: 0 36px 0 36px;
      border: 1px solid ${({ theme }) => theme['yellow-300']};
    }
  }
`
