import styled from "styled-components";
import CartHeader from "../../containers/CartHeader";
import MainContainer from "../MainContainer";
import Logo from "./Logo";

const HeaderWrapper = styled.header`
  background-color: ${(props) => props.theme.colors.mainColor};
  height: 76px;
  position: sticky;
  top: 0;
  z-index: 9999;
`;

const HeaderContainer = styled(MainContainer)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 76px;
  margin-top: 0;
  position: relative;
`;

function Header() {
  return (
    <HeaderWrapper>
      <HeaderContainer>
        <Logo />
        <CartHeader />
      </HeaderContainer>
    </HeaderWrapper>
  );
}

export default Header;
