import styled from "styled-components";
import CartItem from "../../components/CartItem";

const CartSummaryWrapper = styled.div`
  margin-left: 16px;
  max-width: 100%;
  width: 300px;
  border: 8px solid ${(props) => props.theme.colors.mainColor};
  border-radius: 2px;
  padding: 16px;
`;

function CartSummary() {
  return (
    <CartSummaryWrapper>
      <CartItem title="Example Product" price="₺14,99" />
      <CartItem title="New Product" price="₺26,99" />
      <CartItem title="Refurbished Product" price="₺19,99" />
      <CartItem title="Last Product" price="₺104,99" />
    </CartSummaryWrapper>
  );
}

export default CartSummary;
