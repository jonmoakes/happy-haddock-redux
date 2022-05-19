import { numberOfSaucesChosenCheck } from "./resuable-functions";

export const sizeSaucesAndQuantityRequiredCheck = (
  chosenSize,
  saucesSelected,
  quantity
) => {
  return chosenSize && numberOfSaucesChosenCheck(saucesSelected) && quantity > 0
    ? true
    : false;
};

export const saucesAndQuantityRequiredCheck = (saucesSelected, quantity) => {
  return numberOfSaucesChosenCheck(saucesSelected) && quantity > 0
    ? true
    : false;
};

export const noOptionsAvailableCheck = (noOptionsAvailable, quantity) => {
  return noOptionsAvailable && quantity > 0 ? true : false;
};

export const sizeSaltAndVinegarAndQuantityRequiredCheck = (
  hasSizeOption,
  chosenSize,
  saltAndVinegarAvailable,
  saltAndVinegar,
  quantity
) => {
  return hasSizeOption &&
    chosenSize &&
    saltAndVinegarAvailable &&
    saltAndVinegar &&
    quantity > 0
    ? true
    : false;
};

export const sizeAndQuantityRequiredCheck = (chosenSize, quantity) => {
  return chosenSize && quantity > 0 ? true : false;
};

export const saltAndVinegarAndQuantityRequiredCheck = (
  saltAndVinegar,
  quantity
) => {
  return saltAndVinegar && quantity > 0 ? true : false;
};
