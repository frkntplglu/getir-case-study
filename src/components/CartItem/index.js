import styled from "styled-components";
import CartItemContent from "./CartItemContent";
import CartItemTitle from "./CartItemTitle";
import CartItemPrice from "./CartItemPrice";
import CartItemCounter from "./CartItemCounter";
import { updateItemInCart } from "../../actions/cartActions";
import { useDispatch } from "react-redux";

const CartItemWrapper = styled.div`
  padding-top: 18px;
  padding-bottom: 18px;
  border-bottom: 1px solid #f4f4f4;
  display: flex;
  justify-content: space-between;
`;

function CartItem({ slug, title, price, qty }) {
  const dispatch = useDispatch();
  const handleUpdateCart = (type) => {
    dispatch(updateItemInCart(type, slug));
  };

  return (
    <CartItemWrapper>
      <CartItemContent>
        <CartItemTitle>{title}</CartItemTitle>
        <CartItemPrice>₺ {price}</CartItemPrice>
      </CartItemContent>
      <CartItemCounter updateCart={handleUpdateCart} qty={qty} />
    </CartItemWrapper>
  );
}

export default CartItem;
