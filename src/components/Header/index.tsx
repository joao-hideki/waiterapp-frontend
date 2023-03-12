import logo from '../../assets/images/logo.svg';
import { HeaderContainer, HeaderContent } from './styles';

export function Header() {
  return(
    <HeaderContainer>
      <HeaderContent>
        <div className="page-details">
          <h1>Pedidos</h1>
          <h2>Acompanhe os pedidos dos clientes</h2>
        </div>

        <img src={logo} alt="" />
      </HeaderContent>
    </HeaderContainer>
  );
}