import { styled } from 'styled-components'

export const SearchFormContainer = styled.form`
  width: 100%;

  input {  
    display: flex;
    width: 100%;
    padding: 0.75rem 1rem;
    align-items: center;
    gap: 0.5rem;
    border-radius: 6px;
    border: 1px solid ${(props) => props.theme['base-border']};
    background: ${(props) => props.theme['base-input']};
  
    color: ${(props) => props.theme['base-label']};
  }
`
