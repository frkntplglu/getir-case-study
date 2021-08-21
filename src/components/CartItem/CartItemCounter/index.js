import { useSelector } from "react-redux";
import PropTypes from "prop-types";
import styled from "styled-components";
import TrashIcon from "../../Icons/Trash";
import SpinnerIcon from "../../Icons/Spinner";

const CartItemCounterWrapper = styled.div`
  display: flex;
`;

const CartItemCounterButton = styled.button`
  background: transparent;
  appearance: none;
  cursor: pointer;
  width: 32px;
  height: 32px;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  font-weight: 600;
  color: ${(props) => props.theme.colors.mainColor};

  svg {
    display: block;
    margin: 7px auto 0 auto;
  }
  span {
    display: block;
    width: 100%;
    height: 100%;
  }
`;

const CartItemCounterQty = styled.div`
  background-color: ${(props) => props.theme.colors.mainColor};
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 15px;
  font-weight: 700;
`;

function CartItemCounter({ qty, updateCart }) {
  const { spinner } = useSelector((state) => state.cart);
  return (
    <CartItemCounterWrapper>
      <CartItemCounterButton onClick={() => updateCart("decrease")}>
        <span>{qty > 1 ? "-" : <TrashIcon width={18} height={18} />}</span>
      </CartItemCounterButton>
      <CartItemCounterQty>
        {spinner ? <SpinnerIcon width="24" height="24" /> : qty}
      </CartItemCounterQty>
      <CartItemCounterButton onClick={() => updateCart("increase")}>
        <span>+</span>
      </CartItemCounterButton>
    </CartItemCounterWrapper>
  );
}

CartItemCounter.propTypes = {
  qty: PropTypes.number.isRequired,
  updateCart: PropTypes.func.isRequired,
};

export default CartItemCounter;
