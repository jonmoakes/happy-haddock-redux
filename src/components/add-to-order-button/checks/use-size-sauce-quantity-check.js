import { useSelector } from "react-redux";

import { selectIndividualProduct } from "../../../store/products/product.selector";
import {
  selectChosenSize,
  selectSaucesSelected,
  selectQuantity,
} from "../../../store/final-item/final-item.selector";

import { numberOfSaucesChosenCheck } from "../../../reusable-functions/multiple-checkboxes-selectable-checks";

const useSizeSaucesAndQuantityCheck = () => {
  const product = useSelector(selectIndividualProduct);
  const chosenSize = useSelector(selectChosenSize);
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

  const sizeSaucesAndQuantityCheck = () => {
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
      hasSizeOption &&
      chosenSize &&
      saucesAvailable &&
      numberOfSaucesChosenCheck(saucesSelected) &&
      quantity > 0
      ? true
      : false;
  };

  return { sizeSaucesAndQuantityCheck };
};

export default useSizeSaucesAndQuantityCheck;
