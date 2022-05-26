export const filteredProductsEmptyCheck = (filteredProducts) => {
  return filteredProducts[0].length === 0 &&
    filteredProducts[1].length === 0 &&
    filteredProducts[2].length === 0 &&
    filteredProducts[3].length === 0 &&
    filteredProducts[4].length === 0 &&
    filteredProducts[5].length === 0 &&
    filteredProducts[6].length === 0 &&
    filteredProducts[7].length === 0 &&
    filteredProducts[8].length === 0 &&
    filteredProducts[9].length === 0 &&
    filteredProducts[10].length === 0 &&
    filteredProducts[11].length === 0
    ? true
    : false;
};
