import { useSelector } from "react-redux";

import { selectIndividualProduct } from "../../../store/products/product.selector";
import {
  selectSaucesSelected,
  selectQuantity,
} from "../../../store/final-item/final-item.selector";

import { numberOfSaucesChosenCheck } from "../../../reusable-functions/multiple-checkboxes-selectable-checks";

const useSauceQuantityCheck = () => {
  const product = useSelector(selectIndividualProduct);
  const saucesSelected = useSelector(selectSaucesSelected);
  const quantity = useSelector(selectQuantity);

  const {
    anyPiesAvailable,
    bottlesAvailable,
    chickenKebabtypeAvailable,
    condimentsAvailable,
    donerKebabTypeAvailable,
    drinkAvailable,
    hasSizeOption,
    meatsAvailable,
    mixedKebabTypeAvailable,
    noOptionsAvailable,
    saltAndVinegarAvailable,
    saucesAvailable,
  } = product;

  const sauceQuantityCheck = () => {
    return !anyPiesAvailable &&
      !bottlesAvailable &&
      !chickenKebabtypeAvailable &&
      !condimentsAvailable &&
      !donerKebabTypeAvailable &&
      !drinkAvailable &&
      !meatsAvailable &&
      !mixedKebabTypeAvailable &&
      !noOptionsAvailable &&
      !saltAndVinegarAvailable &&
      !hasSizeOption &&
      saucesAvailable &&
      numberOfSaucesChosenCheck(saucesSelected) &&
      quantity > 0
      ? true
      : false;
  };

  return { sauceQuantityCheck };
};

export default useSauceQuantityCheck;
