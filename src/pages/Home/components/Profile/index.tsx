import {
  ProfileBio,
  ProfileContainer,
  ProfileContent,
  ProfileGithubInformation,
  ProfileImg,
  ProfileInformation,
  ProfileName,
} from './styles'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faArrowUpRightFromSquare,
  faBuilding,
  faUserGroup,
} from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { useEffect, useState } from 'react'
import { api } from '../../../../libs/axios'
import { IUser } from '../../../../models/user.model'


export function Profile() {
  const [userData, setUserData] = useState<IUser>()

  async function getUserData() {
    const res = await api.get('users/pedrohconrado')

    setUserData(res.data)
  }

  useEffect(() => {
    getUserData()
  }, [])

  return (
    <ProfileContainer>
      <ProfileImg src={userData?.avatar_url} />
      <ProfileContent>
        <ProfileInformation>
          <ProfileName>{userData?.name}</ProfileName>
          <Link to={userData?.html_url ?? '/'} title="Post">
            GITHUB
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </Link>
        </ProfileInformation>
        <ProfileBio>
        {userData?.bio}
        </ProfileBio>
        <footer>
          <ProfileGithubInformation>
            <FontAwesomeIcon icon={faGithub} />
            <span>{userData?.login}</span>
          </ProfileGithubInformation>
          <ProfileGithubInformation>
            <FontAwesomeIcon icon={faBuilding} />
            <span>{userData?.company.slice(1)}</span>
          </ProfileGithubInformation>
          <ProfileGithubInformation>
            <FontAwesomeIcon icon={faUserGroup} />
            <span>{userData?.followers} seguidores</span>
          </ProfileGithubInformation>
        </footer>
      </ProfileContent>
    </ProfileContainer>
  )
}
