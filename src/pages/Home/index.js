import styled from "styled-components";
import CartSummary from "../../containers/CartSummary";
import ProductsList from "../../containers/ProductsList";
import Sidebar from "../../containers/Sidebar";

const HomePageContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
`;

function Home() {
  return (
    <HomePageContainer>
      <Sidebar />
      <ProductsList />
      <CartSummary />
    </HomePageContainer>
  );
}

export default Home;
