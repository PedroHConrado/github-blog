import { HeaderContainer, Logo } from './styles'
import logoImg from '../../assets/Logo.svg'

export function Header() {
  return (
    <HeaderContainer>
      <Logo src={logoImg} />
    </HeaderContainer>
  )
}
