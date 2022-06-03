import { CART_ACTION_TYPES } from "./cart.types";
import { createAction } from "../../utils/reducer/reducer.utils";

const increaseCartItemQuantityByOne = (cartItems, productToAdd) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const decreaseCartItemQuantityByOne = (cartItems, cartItemToRemove) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToRemove.id
  );

  if (existingCartItem.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
  }
  return cartItems.map((cartItem) =>
    cartItem.id === cartItemToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};

export const increaseItemQuantity = (cartItems, productToAdd) => {
  const newCartItems = increaseCartItemQuantityByOne(cartItems, productToAdd);
  return createAction(
    CART_ACTION_TYPES.CHANGE_CART_ITEM_QUANTITY,
    newCartItems
  );
};

export const decreaseItemQuantity = (cartItems, cartItemToRemove) => {
  const newCartItems = decreaseCartItemQuantityByOne(
    cartItems,
    cartItemToRemove
  );
  return createAction(
    CART_ACTION_TYPES.CHANGE_CART_ITEM_QUANTITY,
    newCartItems
  );
};

export const updateCartItems = (cartItems) => {
  return createAction(CART_ACTION_TYPES.UPDATE_CART_ITEMS, cartItems);
};

export const clearCartItems = () => {
  return createAction(CART_ACTION_TYPES.CLEAR_CART_ITEMS);
};

export const chooseContactMethod = (payload) => {
  return createAction(CART_ACTION_TYPES.CHOOSE_CONTACT_METHOD, payload);
};

export const handleShowCardInput = (payload) => {
  return createAction(CART_ACTION_TYPES.HANDLE_SHOW_CARD_INPUT, payload);
};
