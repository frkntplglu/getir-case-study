import styled from "styled-components";

const CartItemTitle = styled.h3`
  font-size: 14px;
  font-weight: normal;
  width: 120px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  color: ${(props) => props.theme.textColor};
`;

export default CartItemTitle;
