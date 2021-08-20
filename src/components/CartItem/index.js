import styled from "styled-components";
import CartItemContent from "./CartItemContent";
import CartItemTitle from "./CartItemTitle";
import CartItemPrice from "./CartItemPrice";

const CartItemWrapper = styled.div`
  padding-top: 18px;
  padding-bottom: 18px;
  border-bottom: 1px solid #f4f4f4;
`;

function CartItem({ title, price }) {
  return (
    <CartItemWrapper>
      <CartItemContent>
        <CartItemTitle>{title}</CartItemTitle>
        <CartItemPrice>{price}</CartItemPrice>
      </CartItemContent>
    </CartItemWrapper>
  );
}

export default CartItem;
