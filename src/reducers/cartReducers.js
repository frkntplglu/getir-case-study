import {
  CART_ADD_ITEM,
  CART_INCREASE_QTY,
  CART_DECREASE_QTY,
  CART_TOTAL,
  CART_SET_SPINNER,
  CART_UNSET_SPINNER,
} from "../actions/types";

const cartReducer = (state = { items: [], totalPrice: 0 }, action) => {
  switch (action.type) {
    case CART_ADD_ITEM:
      console.log(state.spinner);
      const isExistInCart = state.items.find(
        (item) => item.slug === action.payload.slug
      )
        ? true
        : false;
      return {
        ...state,
        items: isExistInCart
          ? state.items.map((item) =>
              item.slug === action.payload.slug
                ? { ...item, qty: item.qty + 1 }
                : item
            )
          : [...state.items, { ...action.payload, qty: 1 }],
      };
    case CART_TOTAL:
      return {
        ...state,
        totalPrice: state.items
          .reduce((acc, cum) => acc + cum.price * cum.qty, 0)
          .toFixed(2),
      };
    case CART_INCREASE_QTY:
      return {
        ...state,
        items: state.items.map((item) =>
          item.slug === action.payload ? { ...item, qty: item.qty + 1 } : item
        ),
      };
    case CART_DECREASE_QTY:
      const isOnlyOne =
        state.items.find((item) => item.slug === action.payload).qty === 1
          ? true
          : false;

      if (isOnlyOne) {
        return {
          ...state,
          items: state.items.filter((item) => item.slug !== action.payload),
        };
      }
      return {
        ...state,
        items: state.items.map((item) =>
          item.slug === action.payload ? { ...item, qty: item.qty - 1 } : item
        ),
      };
    case CART_SET_SPINNER:
      return {
        ...state,
        spinner: true,
      };
    case CART_UNSET_SPINNER:
      return {
        ...state,
        spinner: false,
      };
    default:
      return state;
  }
};

export { cartReducer };
