export const showSaltAndVinegarCheckPassed = (
  product,
  chosenSize,
  saltAndVinegar
) => {
  const { hasSizeOption, saltAndVinegarAvailable } = product;
  return (hasSizeOption && chosenSize && saltAndVinegarAvailable) ||
    (!hasSizeOption && saltAndVinegarAvailable)
    ? true
    : false;
};
