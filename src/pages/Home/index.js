import { useState } from "react";
import styled from "styled-components";
import CartSummary from "../../containers/CartSummary";
import Drawer from "../../components/UI/Drawer";
import ProductsList from "../../containers/ProductsList";
import Sidebar from "../../containers/Sidebar";
import useWindowSize from "../../hooks/useWindowSize";
import FilterIcon from "../../components/Icons/Filter";
import MobileFilterButton from "../../components/UI/MobileFilterButton";
import mediaQueries from "../../styles/mediaQueries";

const HomePageContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  @media ${mediaQueries.tablet} {
    flex-wrap: wrap;
  }
`;

function Home() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const handleDrawerOpen = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };
  const size = useWindowSize();
  return (
    <>
      <HomePageContainer>
        {size.width > 768 ? (
          <Sidebar />
        ) : (
          <>
            <Drawer onClose={handleDrawerOpen} isOpen={isDrawerOpen}>
              <Sidebar />
            </Drawer>
            <MobileFilterButton onClick={handleDrawerOpen}>
              <FilterIcon width={16} height={16} /> Filter
            </MobileFilterButton>
          </>
        )}
        <ProductsList />
        {size.width > 1260 ? <CartSummary /> : null}
      </HomePageContainer>
    </>
  );
}

export default Home;
