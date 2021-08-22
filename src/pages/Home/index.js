import styled from "styled-components";
import CartSummary from "../../containers/CartSummary";
import ProductsList from "../../containers/ProductsList";
import Sidebar from "../../containers/Sidebar";
import useWindowSize from "../../hooks/useWindowSize";

const HomePageContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
`;

function Home() {
  const size = useWindowSize();
  return (
    <HomePageContainer>
      {size.width > 768 ? <Sidebar /> : null}
      <ProductsList />
      {size.width > 1260 ? <CartSummary /> : null}
    </HomePageContainer>
  );
}

export default Home;
