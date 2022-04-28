import { createContext, useState } from "react";

export const CartContext = createContext({
  cartItems: [],
  addItemToCart: () => {},
});

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addItemToCart = (productToAdd) => {};
  const value = {};

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
