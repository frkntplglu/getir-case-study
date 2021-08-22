import styled from "styled-components";
import mediaQueries from "../../styles/mediaQueries";

const MainContainer = styled.div`
  width: 100%;
  max-width: 1232px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 40px;
  box-sizing: border-box;
  flex: 1 1 0%;

  @media ${mediaQueries.desktop} {
    max-width: 100%;
    padding-left: 15px;
    padding-right: 15px;
  }
`;

export default MainContainer;
