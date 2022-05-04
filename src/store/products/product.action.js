import { PRODUCTS_ACTION_TYPES } from "./product.types";
import { createAction } from "../../utils/reducer/reducer.utils";

export const setProducts = (productsArray) =>
  createAction(PRODUCTS_ACTION_TYPES.SET_PRODUCTS, productsArray);
