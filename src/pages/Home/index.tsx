import { Profile } from "../../components/Profile";
import { Search } from "../../components/Search";
import { Amount, AmountPublications, HomeContainer, Title } from "./styles";

export function Home() {
  return (
    <HomeContainer> 
      <Profile />
      <AmountPublications>
        <Title>Publicações</Title>
        <Amount>6 publicações</Amount>
      </AmountPublications>
      <Search />
    </HomeContainer>
  )
}