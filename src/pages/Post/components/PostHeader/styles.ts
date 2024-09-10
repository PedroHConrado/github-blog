import styled from 'styled-components'

export const PostContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  border-radius: 0.625rem;
  background: ${(props) => props.theme['base-post']};
  box-shadow: 0px 2px 28px 0px rgba(0, 0, 0, 0.2);

  margin-top: -5.5rem;
  padding: 2rem;

  header {
    display: flex;
    justify-content: space-between;

    margin-bottom: 1.25rem;
  }

  footer {
    margin-top: 0.5rem;
    display: flex;
    gap: 2rem;
  }

  a {
    text-decoration: none;
    color: ${(props) => props.theme.blue};
    font-weight: 700;
    font-size: 0.75rem;

    height: 19px;
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
  }
`
export const PosTitle = styled.span`
  font-size: 1.5rem;
  font-weight: 700;
  color: ${(props) => props.theme['base-title']};
`
export const PostGithubInformation = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  color: ${(props) => props.theme['base-label']};

  span {
    color: ${(props) => props.theme['base-subtitle']};
  }
`
