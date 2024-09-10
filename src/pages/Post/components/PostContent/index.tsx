import { IPost } from '../../../../models/post.model'
import { PostContentContainer } from './styles'
import Markdown from 'react-markdown'

export function PostContent({ body }: IPost) {
  return (
    <PostContentContainer>
      <Markdown>
        {body}
      </Markdown>
    </PostContentContainer>
  )
}
