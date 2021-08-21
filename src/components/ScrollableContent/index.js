import styled from "styled-components";

const ScrollableContent = styled.div`
  max-height: ${(props) =>
    props.maxHeight ? props.maxHeight + "px" : "130px"};
  overflow-x: visible;
  overflow-y: auto;
  padding-left: 10px;
  margin-left: -10px;
  padding-top: 10px;
  margin-top: -10px;
`;

export default ScrollableContent;
