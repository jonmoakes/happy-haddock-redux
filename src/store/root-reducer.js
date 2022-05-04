import { combineReducers } from "redux";

import { userReducer } from "./user/user.reducer";
import { hamburgerMenuReducer } from "./hamburger-menu/hamburger-menu.reducer";
import { productsReducer } from "./products/product.reducer";
import { cartReducer } from "./cart/cart.reducer";

export const rootReducer = combineReducers({
  user: userReducer,
  hamburgerMenu: hamburgerMenuReducer,
  products: productsReducer,
  cart: cartReducer,
});
