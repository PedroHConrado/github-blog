
import { IPost } from '../../../../models/post.model'
import { dateFormatter } from '../../../../utils/formatter'
import { CreatedAt, Description, PublicationContainer, Title } from './styles'


export function PostSummary({title, body, created_at, number}: IPost) {

  return (
    <PublicationContainer to={`/post/${number}`}>
      <div>
        <Title>{title}</Title>
        <CreatedAt>{dateFormatter(created_at!)}</CreatedAt>
      </div>
      <Description>
        {body}
      </Description>
    </PublicationContainer>
  )
}
