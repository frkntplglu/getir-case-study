import { useSelector } from "react-redux";
import styled from "styled-components";
import CartItem from "../../components/CartItem";
import CartTotalPrice from "../../components/CartTotalPrice";
import SpinnerIcon from "../../components/Icons/Spinner";
import ScrollableContent from "../../components/ScrollableContent";
import theme from "../../styles/theme";

const CartSummaryWrapper = styled.div`
  margin-left: 16px;
  max-width: 100%;
  width: 296px;
  flex-shrink: 0;
  border: 8px solid ${(props) => props.theme.colors.mainColor};
  border-radius: 2px;
  padding: 14px 16px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
`;

function CartSummary() {
  const { items, totalPrice, spinner } = useSelector((state) => state.cart);
  return (
    <CartSummaryWrapper>
      <ScrollableContent maxHeight={225}>
        {items.length === 0
          ? "There is no product in your basket"
          : items.map((item) => (
              <CartItem
                key={item.slug}
                slug={item.slug}
                title={item.name}
                price={item.price}
                qty={item.qty}
              />
            ))}
      </ScrollableContent>
      <CartTotalPrice>
        {spinner ? (
          <SpinnerIcon width="36" height="36" fill={theme.colors.mainColor} />
        ) : (
          "₺" + totalPrice
        )}
      </CartTotalPrice>
    </CartSummaryWrapper>
  );
}

export default CartSummary;
