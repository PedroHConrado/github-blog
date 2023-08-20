import { styled } from 'styled-components'

export const HomeContainer = styled.div`
  width: 54rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
export const AmountPublications = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-top: 4.5rem;
  margin-bottom: 0.75rem;
`
export const Amount = styled.span`
  color: ${(props) => props.theme['base-span']};
  text-align: right;

  font-size: 14px;
  line-height: 160%;
`
export const Title = styled.span`
  color: ${(props) => props.theme['base-subtitle']};

  font-size: 18px;
  font-weight: 700;
  line-height: 160%;
`
export const ListPublication = styled.div`
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
  justify-content: center;

  margin-top: 48px;
`
