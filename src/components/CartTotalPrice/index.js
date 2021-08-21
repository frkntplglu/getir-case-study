import styled from "styled-components";

const CartTotalPrice = styled.div`
  border: 2px solid currentColor;
  border-radius: 2px;
  font-weight: 600;
  color: ${(props) => props.theme.colors.mainColor};
  display: inline-flex;
  margin-left: auto;
  align-items: center;
  justify-content: center;
  justify-self: flex-end;
  box-sizing: border-box;
  height: 51px;
  padding-left: 21px;
  padding-right: 21px;
  line-height: 16px;
  margin-top: 16px;
  min-width: 100px;
`;

export default CartTotalPrice;
