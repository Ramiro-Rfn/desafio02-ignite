import styled from 'styled-components'

export const FormContent = styled.div`
  width: 640px;

  > h2 {
    margin-bottom: 1rem;
  }
`

export const InputContainer = styled.div`
  width: 100%;
  background: ${({ theme }) => theme['gray-200']};
  padding: 2.5rem;
  border-radius: 6px;

  & + div {
    margin-top: 0.75rem;
  }

  header {
    display: flex;

    gap: 0.5rem;
    margin-bottom: 2rem;

    div p {
      color: ${({ theme }) => theme['gray-700']};
      font-size: 1rem;
      line-height: 1.3;

      & + {
        font-size: 0.875rem;
      }
    }
  }
`

const InputBase = styled.input`
  width: 100%;
  height: 2.5rem;
  border-radius: 4px;
  background: ${({ theme }) => theme['gray-400']};
  padding: 0 0.75rem;

  &:focus {
    box-shadow: 0 0 0 1px ${({ theme }) => theme['yellow-500']};
  }
`

export const Input = styled(InputBase)`
  margin-bottom: 1rem;

  &:first-child {
    width: 12.5rem;
  }
`

export const InputGroup = styled.div`
  display: grid;
  gap: 0.5rem;
  align-items: center;
  grid-template-columns: 12.5rem 1fr;

  &:last-child {
    grid-template-columns: 12.5rem 2fr 3rem;
  }
`

export const SelectGroup = styled.div`
  display: grid;
  gap: 0.5rem;
  align-items: center;
  grid-template-columns: 1fr 1fr 1fr;

  input[type='radio'] {
    display: none;

    &:checked ~ label {
      border-color: ${({ theme }) => theme['purple-500']};
    }
  }

  label {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;

    padding: 1rem;
    border: 1px solid transparent;
    border-radius: 6px;

    color: ${({ theme }) => theme['gray-700']};
    background: ${({ theme }) => theme['gray-400']};

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

export const FormLabel = styled.div``
