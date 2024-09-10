import { Link } from 'react-router-dom'
import { PosTitle, PostContainer, PostGithubInformation } from './styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faArrowUpRightFromSquare,
  faCalendarDay,
  faChevronLeft,
  faComment,
} from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { IPost } from '../../../../models/post.model'


export function PostHeader({ title, user, comments, created_at, html_url }: IPost) {
  return (
    <PostContainer>
      <header>
        <Link to="/" title="Home">
          <FontAwesomeIcon icon={faChevronLeft} />
          VOLTAR
        </Link>
        <Link to={html_url!} title="Github">
          VER NO GITHUB
          <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
        </Link>
      </header>

      <PosTitle>{title}</PosTitle>

      <footer>
        <PostGithubInformation>
          <FontAwesomeIcon icon={faGithub} />
          <span>{user?.login}</span>
        </PostGithubInformation>
        <PostGithubInformation>
          <FontAwesomeIcon icon={faCalendarDay} />
          <span>{created_at}</span>
        </PostGithubInformation>
        <PostGithubInformation>
          <FontAwesomeIcon icon={faComment} />
          <span>
          {
            comments === 1 
            ? comments + ' comentário' 
            : comments + ' comentários'
          }

          </span>
        </PostGithubInformation>
      </footer>
    </PostContainer>
  )
}
