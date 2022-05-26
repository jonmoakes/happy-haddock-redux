import { createSelector } from "reselect";

const selectProductReducer = (state) => state.products;

export const selectProducts = createSelector(
  [selectProductReducer],
  (productsSlice) => productsSlice.products
);

export const selectProductsMap = createSelector([selectProducts], (products) =>
  products.reduce((acc, product) => {
    const { title, items } = product;
    acc[title.toLowerCase()] = items;
    return acc;
  }, {})
);

export const selectProductsIsLoading = createSelector(
  [selectProductReducer],
  (productsSlice) => productsSlice.isLoading
);

export const selectIndividualProduct = (state) =>
  state.products.individualProduct;

export const selectShowHelpText = (state) => state.products.showHelpText;
