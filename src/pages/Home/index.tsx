import { Profile } from '../../components/Profile'
import { Publication } from '../../components/Publication'
import { Search } from '../../components/Search'
import {
  Amount,
  AmountPublications,
  HomeContainer,
  ListPublication,
  Title,
} from './styles'

export function Home() {
  return (
    <HomeContainer>
      <Profile />
      <AmountPublications>
        <Title>Publicações</Title>
        <Amount>6 publicações</Amount>
      </AmountPublications>
      <Search />
      <ListPublication>
        <Publication />
        <Publication />
        <Publication />
        <Publication />
      </ListPublication>
    </HomeContainer>
  )
}
