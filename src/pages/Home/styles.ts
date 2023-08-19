import { styled } from "styled-components";

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
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
  color: ${props => props.theme["base-span"]};
  text-align: right;

  font-size: 14px;
  line-height: 160%;
`

export const Title = styled.span`
  color: ${props => props.theme["base-subtitle"]};

  font-size: 18px;
  font-weight: 700;
  line-height: 160%; 
`