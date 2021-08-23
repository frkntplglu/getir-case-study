import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import styled from "styled-components";
import CartItem from "../../components/CartItem";
import CartTotalPrice from "../../components/CartTotalPrice";
import SpinnerIcon from "../../components/Icons/Spinner";
import theme from "../../styles/theme";

const CartSummaryWrapper = styled.div`
  background: #fff;
  flex: 1 0 auto;
  margin-left: 16px;
  max-width: 100%;
  width: 296px;
  flex-shrink: 0;
  border: 8px solid ${(props) => props.theme.colors.mainColor};
  border-radius: ${(props) => props.theme.commonRadius};
  padding: 14px 16px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  ${(props) =>
    !props.inHeader
      ? "position: sticky; top:116px;"
      : "position:absolute; top:76px; right:0;"}
`;

function CartSummary({ inHeader }) {
  const { items, totalPrice, spinner } = useSelector((state) => state.cart);
  return (
    <CartSummaryWrapper inHeader={inHeader}>
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

CartSummary.propTypes = {
  inHeader: PropTypes.bool,
};

CartSummary.defaultProps = {
  inHeader: false,
};

export default CartSummary;
