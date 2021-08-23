import { useState } from "react";
import styled from "styled-components";
import CartHeader from "../../containers/CartHeader";
import CartSummary from "../../containers/CartSummary";
import useWindowSize from "../../hooks/useWindowSize";
import mediaQueries from "../../styles/mediaQueries";
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
  @media ${mediaQueries.tablet} {
    justify-content: flex-start;
  }
`;

const CartHeaderButton = styled.button`
  background: none;
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  cursor: pointer;
`;

function Header() {
  const [isShowCartSummary, setIsShownCartSummary] = useState(false);
  const size = useWindowSize();

  return (
    <HeaderWrapper>
      <HeaderContainer>
        <Logo />
        <CartHeaderButton
          onClick={() => setIsShownCartSummary(!isShowCartSummary)}
        >
          <CartHeader />
        </CartHeaderButton>

        {size.width < 1260 ? (
          isShowCartSummary ? (
            <CartSummary inHeader={true} />
          ) : null
        ) : null}
      </HeaderContainer>
    </HeaderWrapper>
  );
}

export default Header;
