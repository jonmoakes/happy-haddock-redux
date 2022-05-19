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
