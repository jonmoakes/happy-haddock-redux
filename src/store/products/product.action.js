import { PRODUCTS_ACTION_TYPES } from "./product.types";
import { createAction } from "../../utils/reducer/reducer.utils";

export const fetchProductsStart = () =>
  createAction(PRODUCTS_ACTION_TYPES.FETCH_PRODUCTS_START);

export const fetchProductsSuccess = (productsArray) =>
  createAction(PRODUCTS_ACTION_TYPES.FETCH_PRODUCTS_SUCCESS, productsArray);

export const fetchProductsFailed = (error) =>
  createAction(PRODUCTS_ACTION_TYPES.FETCH_PRODUCTS_FAILED, error);

export const addIndividualProduct = (product) =>
  createAction(PRODUCTS_ACTION_TYPES.ADD_INDIVIDUAL_PRODUCT, product);

export const clearIndividualProduct = () =>
  createAction(PRODUCTS_ACTION_TYPES.CLEAR_INDIVIDUAL_PRODUCT);

export const setShowHelpText = (payload) =>
  createAction(PRODUCTS_ACTION_TYPES.SET_SHOW_HELP_TEXT, payload);
