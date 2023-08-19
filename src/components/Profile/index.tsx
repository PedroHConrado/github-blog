import { ProfileBio, ProfileContainer, ProfileContent, ProfileGithubInformation, ProfileImg, ProfileInformation, ProfileName } from "./styles";
import profileImg from '../../assets/goku.jpg'
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare, faBuilding, faUserGroup } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from '@fortawesome/free-brands-svg-icons';


export function Profile() {
  return (
    <ProfileContainer>
      <ProfileImg src={profileImg} />
      <ProfileContent>
        <ProfileInformation>
          <ProfileName>Pedro Conrado</ProfileName>
          <NavLink to="/post" title="Post">
            GITHUB
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </NavLink>
        </ProfileInformation>
        <ProfileBio>Tristique volutpat pulvinar vel massa, pellentesque egestas. 
          Eu viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat pulvinar vel mass.
        </ProfileBio>
        <footer>
          <ProfileGithubInformation>
            <FontAwesomeIcon icon={faGithub} />
            <span>PedroHConrado</span>
          </ProfileGithubInformation>
          <ProfileGithubInformation>
            <FontAwesomeIcon icon={faBuilding} />
            <span>Rocketseat</span>
          </ProfileGithubInformation>
          <ProfileGithubInformation>
            <FontAwesomeIcon icon={faUserGroup} />
            <span>32 seguidores</span>
          </ProfileGithubInformation>
        </footer>
      </ProfileContent>
      
    </ProfileContainer>
  )
}