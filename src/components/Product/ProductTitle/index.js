import styled from "styled-components";

const ProductTitle = styled.h3`
  font-size: 14px;
  font-weight: 600;
  color: ${(props) => props.theme.textColor};
  line-height: 20px;
  min-height: 40px;
  overflow: hidden;
`;

export default ProductTitle;
