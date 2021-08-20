import styled from "styled-components";
import basket from "../../assets/basket.svg";

const CartHeaderWrapper = styled.div`
  background-color: #147594;
  color: #fff;
  padding-left: 29px;
  padding-right: 25px;
  font-size: 14px;
  font-weight: 600;
  height: 76px;
  display: flex;
  align-items: center;
  position: absolute;
  right: 0;
`;

const CartHeaderImage = styled.img`
  margin-right: 7px;
`;

function CartHeader() {
  return (
    <CartHeaderWrapper>
      <CartHeaderImage src={basket} />₺ 39,97
    </CartHeaderWrapper>
  );
}

export default CartHeader;
