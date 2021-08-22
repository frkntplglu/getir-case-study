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
  &::-webkit-scrollbar {
    width: 4px;
    border-radius: 4px;
  }

  &::-webkit-scrollbar-track {
    background: #fff;
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb {
    background: #e0e0e0;
    border-radius: 4px;
  }
`;

export default ScrollableContent;
