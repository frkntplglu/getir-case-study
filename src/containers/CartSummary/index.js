import { useEffect } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import CartItem from "../../components/CartItem";
import ScrollableContent from "../../components/ScrollableContent";

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
  const { items, totalPrice } = useSelector((state) => state.cart);
  useEffect(() => {});
  return (
    <CartSummaryWrapper>
      <ScrollableContent maxHeight={225}>
        {items.length === 0
          ? "There is no product in your basket"
          : items.map((item) => (
              <CartItem
                key={item.slug}
                title={item.name}
                price={item.price}
                qty={item.qty}
              />
            ))}
      </ScrollableContent>
    </CartSummaryWrapper>
  );
}

export default CartSummary;
