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
    align-items: baseline;
  }
`
export const Title = styled.span`
  flex: 1;
  color: ${(props) => props.theme['base-title']};

  font-size: 20px;
  font-weight: 700;
`
export const CreatedAt = styled.span`
  width: max-content;
  color: ${(props) => props.theme['base-span']};

  font-size: 14px;
`
export const Description = styled.span`
  color: ${(props) => props.theme['base-text']};

  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 160%;

  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 4;
`

