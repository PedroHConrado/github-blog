import styled from "styled-components";

export const ProfileContainer = styled.div`
  display: flex;
  align-items: center;

  width: 54rem;
  height: 13.25rem;
  border-radius: 0.625rem;
  background: ${props => props.theme["base-profile"]};
  box-shadow: 0px 2px 28px 0px rgba(0, 0, 0, 0.20);

  margin-top: -5.5rem;

  a {
    text-decoration: none;
    color: ${props => props.theme.blue};
    font-weight: 700;
    font-size: 0.75rem;

    width: 67px;
    height: 19px;
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
  }
`
export const ProfileContent = styled.main`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin: 0 2rem;

  footer {
    display: inline-flex;
    gap: 1.5rem;
  }
`
export const ProfileInformation = styled.div`
  display: flex;
  justify-content: space-between;
`
export const ProfileImg = styled.img`
  width: 148px;
  height: 148px;
  border-radius: 0.5rem;
  margin-left: 2.5rem;

`
export const ProfileName = styled.span`
  font-size: 1.5rem;
  font-weight: 700;
  color: ${props => props.theme["base-title"]};
`
export const ProfileBio = styled.span`
  font-size: 1rem;
  margin-bottom: 1rem;

  color: ${props => props.theme["base-text"]};
`
export const ProfileGithubInformation = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  color: ${props => props.theme["base-label"]};

  span {
    color: ${props => props.theme["base-subtitle"]};
  }
`