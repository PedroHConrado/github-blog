import { useContext } from 'react'
import {
  Amount,
  AmountPublications,
  HomeContainer,
  ListPublication,
  Title,
} from './styles'
import { Profile } from './components/Profile'
import { PostSummary } from './components/PostSummary'
import { PostsContext } from '../../contexts/PostsContext'
import { Search } from './components/Search'

export function Home() {
  const { posts } = useContext(PostsContext)

  return (
    <HomeContainer>
      <Profile />
      <AmountPublications>
        <Title>Publicações</Title>
        <Amount>
          {
            posts.total_count === 1 
            ? posts.total_count + ' publicação' 
            : posts.total_count + ' publicações'
          }
        </Amount>
      </AmountPublications>
      <Search />
      <ListPublication>
        {posts?.items.map(post => {
          return (
            <PostSummary
            key={post.id}
            title={post.title}
            body={post.body}
            created_at={post.created_at}
            number={post.number}
          />
          )
        })}
      </ListPublication>
    </HomeContainer>
  )
}
