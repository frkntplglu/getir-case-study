import styled from "styled-components";
import CartItem from "../../components/CartItem";

const CartSummaryWrapper = styled.div`
  margin-left: 16px;
  max-width: 100%;
  width: 296px;
  flex-shrink: 0;
  border: 8px solid ${(props) => props.theme.colors.mainColor};
  border-radius: 2px;
  padding: 16px;
  box-sizing: border-box;
`;

function CartSummary() {
  return (
    <CartSummaryWrapper>
      <CartItem title="Example Product" price="₺14,99" />
      <CartItem title="New Product" price="₺26,99" />
      <CartItem title="Refurbished Product" price="₺19,99" />
    </CartSummaryWrapper>
  );
}

export default CartSummary;
