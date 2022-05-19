import { numberOfSaucesChosenCheck } from "./sauces-checks";

export const sizeAndSaucesRequiredCheck = (
  product,
  chosenSize,
  saucesSelected
) => {
  const { hasSizeOption, saucesAvailable } = product;
  return hasSizeOption &&
    chosenSize &&
    saucesAvailable &&
    numberOfSaucesChosenCheck(saucesSelected)
    ? true
    : false;
};

// sauces only required
export const onlySaucesRequiredCheck = (product, saucesSelected) => {
  const { saucesAvailable } = product;
  return saucesAvailable && numberOfSaucesChosenCheck(saucesSelected)
    ? true
    : false;
};

//no options available required
export const noOptionsAvailableCheck = (product) => {
  const { noOptionsAvailable } = product;
  return noOptionsAvailable ? true : false;
};

// size and salt and vinegar required
export const sizeAndSaltAndVinegarRequiredCheck = (
  product,
  chosenSize,
  saltAndVinegar
) => {
  const { hasSizeOption, saltAndVinegarAvailable, condimentsAvailable } =
    product;
  return hasSizeOption &&
    chosenSize &&
    saltAndVinegarAvailable &&
    saltAndVinegar &&
    condimentsAvailable === 0
    ? true
    : false;
};

//size only required
export const onlySizeRequiredCheck = (product, chosenSize) => {
  const {
    hasSizeOption,
    anyPieAvailable,
    bottlesAvailable,
    cheeseSliceAvailable,
    chickenKebabTypeAvailable,
    donerKebabTypeAvailable,
    donerMeatAvailable,
    drinkAvailable,
    gratedCheeseAvailable,
    mixedKebabTypeAvailable,
    saladAvailable,
    saltAndVinegarAvailable,
    saucesAvailable,
    noOptionsAvailable,
    condimentsAvailable,
  } = product;

  return chosenSize &&
    hasSizeOption &&
    !anyPieAvailable &&
    !bottlesAvailable &&
    !cheeseSliceAvailable &&
    !chickenKebabTypeAvailable &&
    !donerKebabTypeAvailable &&
    !donerMeatAvailable &&
    !drinkAvailable &&
    !gratedCheeseAvailable &&
    !mixedKebabTypeAvailable &&
    !saladAvailable &&
    !saltAndVinegarAvailable &&
    !saucesAvailable &&
    !noOptionsAvailable &&
    condimentsAvailable === 0
    ? true
    : false;
};

//salt and vinegar only required
export const onlySaltAndVinegarRequiredCheck = (product, saltAndVinegar) => {
  const {
    hasSizeOption,
    anyPieAvailable,
    bottlesAvailable,
    cheeseSliceAvailable,
    chickenKebabTypeAvailable,
    donerKebabTypeAvailable,
    donerMeatAvailable,
    drinkAvailable,
    gratedCheeseAvailable,
    mixedKebabTypeAvailable,
    saladAvailable,
    saltAndVinegarAvailable,
    saucesAvailable,
    noOptionsAvailable,
    condimentsAvailable,
  } = product;
  return (saltAndVinegarAvailable &&
    saltAndVinegar &&
    !hasSizeOption &&
    !anyPieAvailable &&
    !bottlesAvailable &&
    !cheeseSliceAvailable &&
    !chickenKebabTypeAvailable &&
    !donerKebabTypeAvailable &&
    !donerMeatAvailable &&
    !drinkAvailable &&
    !gratedCheeseAvailable &&
    !mixedKebabTypeAvailable &&
    !saladAvailable &&
    !saucesAvailable &&
    !noOptionsAvailable) ||
    (saltAndVinegarAvailable &&
      saltAndVinegar &&
      !hasSizeOption &&
      !anyPieAvailable &&
      !bottlesAvailable &&
      !cheeseSliceAvailable &&
      !chickenKebabTypeAvailable &&
      !donerKebabTypeAvailable &&
      !donerMeatAvailable &&
      !drinkAvailable &&
      !gratedCheeseAvailable &&
      !mixedKebabTypeAvailable &&
      saladAvailable &&
      !saucesAvailable &&
      condimentsAvailable === 0)
    ? true
    : false;
};

// salt and vinegar and cans required
export const saltAndVinegarAndCansRequiredCheck = (
  product,
  saltAndVinegar,
  chosenCan
) => {
  const { saltAndVinegarAvailable, drinkAvailable, saladAvailable } = product;
  return saltAndVinegarAvailable &&
    saltAndVinegar &&
    saladAvailable &&
    drinkAvailable &&
    chosenCan
    ? true
    : false;
};

export const sizeSaltAndVinegarAndSingleCondimentRequiredCheck = (
  product,
  chosenSize,
  saltAndVinegar,
  singleCondiment
) => {
  const { hasSizeOption, saltAndVinegarAvailable, condimentsAvailable } =
    product;
  return hasSizeOption &&
    chosenSize &&
    saltAndVinegarAvailable &&
    saltAndVinegar &&
    condimentsAvailable === 1 &&
    singleCondiment
    ? true
    : false;
};
