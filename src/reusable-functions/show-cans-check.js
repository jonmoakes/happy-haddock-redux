export const showCansCheckPassed = (product, saltAndVinegar) => {
  const { saltAndVinegarAvailable, drinkAvailable } = product;
  return (saltAndVinegarAvailable, saltAndVinegar && drinkAvailable)
    ? true
    : false;
};
