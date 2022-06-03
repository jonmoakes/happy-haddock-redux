import { createSelector } from "reselect";

const selectCartReducer = (state) => state.cart;

export const selectCartItems = createSelector(
  [selectCartReducer],
  (cart) => cart.cartItems
);

export const selectCartTotal = createSelector([selectCartItems], (cartItems) =>
  cartItems.reduce(
    (total, cartItem) =>
      total +
      cartItem.quantity *
        (cartItem.price + cartItem.selectedOptionsCombinedPrice),
    0
  )
);

export const selectContactMethod = (state) => state.cart.contactMethod;

export const selectShowCardInput = (state) => state.cart.showCardInput;
