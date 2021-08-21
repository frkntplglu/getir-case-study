import { CART_ADD_ITEM, CART_REMOVE_ITEM } from "../actions/types";

const cartReducer = (state = { items: [], totalPrice: 0 }, action) => {
  switch (action.type) {
    case CART_ADD_ITEM:
      const isExistInCart = state.items.find(
        (item) => item.slug === action.payload.slug
      )
        ? true
        : false;
      return {
        items: isExistInCart
          ? state.items.map((item) =>
              item.slug === action.payload.slug
                ? { ...item, qty: item.qty + 1 }
                : item
            )
          : [...state.items, { ...action.payload, qty: 1 }],
      };
    default:
      return state;
  }
};

export { cartReducer };
