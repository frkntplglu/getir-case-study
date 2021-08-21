import { useSelector } from "react-redux";
import styled from "styled-components";
import BasketIcon from "../../components/Icons/Basket";
import SpinnerIcon from "../../components/Icons/Spinner";

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

const CartHeaderImage = styled.div`
  margin-right: 7px;
`;

function CartHeader() {
  const { totalPrice, spinner } = useSelector((state) => state.cart);
  return (
    <CartHeaderWrapper>
      <CartHeaderImage>
        <BasketIcon />
      </CartHeaderImage>
      {spinner ? <SpinnerIcon width="36" height="36" /> : "₺" + totalPrice}
    </CartHeaderWrapper>
  );
}

export default CartHeader;
