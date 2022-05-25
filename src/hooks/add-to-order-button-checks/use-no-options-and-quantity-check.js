import { useSelector } from "react-redux";

import { selectIndividualProduct } from "../../store/products/product.selector";
import { selectQuantity } from "../../store/final-item/final-item.selector";

const useNoOptionsAndQuantityCheck = () => {
  const product = useSelector(selectIndividualProduct);
  const quantity = useSelector(selectQuantity);

  const { optionsAvailable } = product;

  const options = optionsAvailable[0];

  const noOptionsAndQuantityCheck = () => {
    return !options.anyPieAvailable &&
      !options.bottlesAvailable &&
      !options.cheeseSliceAvailable &&
      !options.chickenKebabTypeAvailable &&
      !options.coneOfChipsSauceAvailable &&
      !options.donerKebabTypeAvailable &&
      !options.donerMeatAvailable &&
      !options.drinkAvailable &&
      !options.gratedCheeseAvailable &&
      !options.mixedKebabTypeAvailable &&
      !options.saladAvailable &&
      !options.saltAndVinegarAvailable &&
      !options.saucesAvailable &&
      !options.sizeOptionAvailable &&
      options.condimentsAvailable === 0 &&
      options.meatsAvailable === 0 &&
      options.noOptionsAvailable &&
      quantity > 0
      ? true
      : false;
  };

  return { noOptionsAndQuantityCheck };
};

export default useNoOptionsAndQuantityCheck;
