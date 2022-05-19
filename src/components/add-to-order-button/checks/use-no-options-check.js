import { useSelector } from "react-redux";

import { selectIndividualProduct } from "../../../store/products/product.selector";
import { selectQuantity } from "../../../store/final-item/final-item.selector";

const useNoOptionsCheck = () => {
  const product = useSelector(selectIndividualProduct);
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

  const noOptionsCheck = () => {
    return !anyPiesAvailable &&
      !bottlesAvailable &&
      !chickenKebabtypeAvailable &&
      !condimentsAvailable &&
      !donerKebabTypeAvailable &&
      !drinkAvailable &&
      !meatsAvailable &&
      !mixedKebabTypeAvailable &&
      !saltAndVinegarAvailable &&
      !saucesAvailable &&
      !hasSizeOption &&
      noOptionsAvailable &&
      quantity > 0
      ? true
      : false;
  };

  return { noOptionsCheck };
};

export default useNoOptionsCheck;
