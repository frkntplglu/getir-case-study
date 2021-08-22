import styled from "styled-components";

const ProductTitle = styled.h3`
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  min-height: 40px;
  overflow: hidden;
  color: ${(props) => props.theme.textColor};
  a {
    color: inherit;
  }
`;

export default ProductTitle;
