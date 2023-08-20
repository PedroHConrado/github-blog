import { styled } from 'styled-components'

export const PublicationContainer = styled.div`
  width: 26rem;
  height: 16.25rem;

  display: flex;
  flex-direction: column;
  gap: 1.25rem;

  background: ${(props) => props.theme['base-post']};
  border-radius: 10px;
  padding: 2rem;

  div {
    display: flex;
  }
`
export const Title = styled.span`
  width: 283px;
  color: ${(props) => props.theme['base-title']};

  font-size: 20px;
  font-weight: 700;
  line-height: 160%;
`
export const Description = styled.span`
  overflow: hidden;
  color: ${(props) => props.theme['base-text']};
  text-overflow: ellipsis;

  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 160%;
`
export const CreatedAt = styled.span`
  color: ${(props) => props.theme['base-span']};

  font-size: 14px;
  line-height: 160%;
`
