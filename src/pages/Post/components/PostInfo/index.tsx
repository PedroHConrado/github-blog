import { NavLink } from 'react-router-dom'
import { PosTitle, PostContainer, PostGithubInformation } from './styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faArrowUpRightFromSquare,
  faCalendarDay,
  faChevronLeft,
  faComment,
} from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

export function PostInfo() {
  return (
    <PostContainer>
      <header>
        <NavLink to="/" title="Home">
          <FontAwesomeIcon icon={faChevronLeft} />
          VOLTAR
        </NavLink>
        <NavLink to="github.com" title="Github">
          VER NO GITHUB
          <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
        </NavLink>
      </header>

      <PosTitle>JavaScript data types and data structures</PosTitle>

      <footer>
        <PostGithubInformation>
          <FontAwesomeIcon icon={faGithub} />
          <span>PedroHConrado</span>
        </PostGithubInformation>
        <PostGithubInformation>
          <FontAwesomeIcon icon={faCalendarDay} />
          <span>Há 1 dia</span>
        </PostGithubInformation>
        <PostGithubInformation>
          <FontAwesomeIcon icon={faComment} />
          <span>5 comentários</span>
        </PostGithubInformation>
      </footer>
    </PostContainer>
  )
}
