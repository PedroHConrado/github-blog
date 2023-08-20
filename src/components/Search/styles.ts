import { styled } from 'styled-components'

export const SearchInput = styled.input`
  display: flex;
  width: 100%;
  padding: 0.75rem 1rem;
  align-items: center;
  gap: 0.5rem;

  border-radius: 6px;
  border: 1px solid ${(props) => props.theme['base-border']};
  background: ${(props) => props.theme['base-input']};

  color: ${(props) => props.theme['base-label']};
`
