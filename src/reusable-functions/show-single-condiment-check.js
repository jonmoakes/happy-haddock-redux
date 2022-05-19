export const showSingleCondimentCheckPassed = (product, saltAndVinegar) => {
  const { saltAndVinegarAvailable, condimentsAvailable } = product;
  return (saltAndVinegarAvailable, saltAndVinegar && condimentsAvailable === 1)
    ? true
    : false;
};
