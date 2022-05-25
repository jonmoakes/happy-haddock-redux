import { useSelector } from "react-redux";

import { selectIndividualProduct } from "../../../store/products/product.selector";
import { selectQuantity } from "../../../store/final-item/final-item.selector";

const useNoOptionsAndQuantityCheck = () => {
  const product = useSelector(selectIndividualProduct);
  const quantity = useSelector(selectQuantity);

  const { optionsAvailable } = product;

  const noOptionsAndQuantityCheck = () => {
    return !optionsAvailable[0].anyPieAvailable &&
      !optionsAvailable[0].bottlesAvailable &&
      !optionsAvailable[0].cheeseSliceAvailable &&
      !optionsAvailable[0].chickenKebabTypeAvailable &&
      !optionsAvailable[0].coneOfChipsSauceAvailable &&
      !optionsAvailable[0].donerKebabTypeAvailable &&
      !optionsAvailable[0].donerMeatAvailable &&
      !optionsAvailable[0].drinkAvailable &&
      !optionsAvailable[0].gratedCheeseAvailable &&
      !optionsAvailable[0].mixedKebabTypeAvailable &&
      !optionsAvailable[0].saladAvailable &&
      !optionsAvailable[0].saltAndVinegarAvailable &&
      !optionsAvailable[0].saucesAvailable &&
      !optionsAvailable[0].sizeOptionAvailable &&
      optionsAvailable[0].condimentsAvailable === 0 &&
      optionsAvailable[0].meatsAvailable === 0 &&
      optionsAvailable[0].noOptionsAvailable &&
      quantity > 0
      ? true
      : false;
  };

  return { noOptionsAndQuantityCheck };
};

export default useNoOptionsAndQuantityCheck;
