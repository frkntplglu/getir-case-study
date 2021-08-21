import styled from "styled-components";

const ScrollableContent = styled.div`
  max-height: ${(props) =>
    props.maxHeight ? props.maxHeight + "px" : "130px"};
  overflow-x: visible;
  overflow-y: auto;
  padding-top: 5px;
  padding-left: 5px;
  margin-left: -5px;
`;

export default ScrollableContent;
