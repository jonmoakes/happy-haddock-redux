import { useSelector } from "react-redux";

import { selectIndividualProduct } from "../../../store/products/product.selector";
import {
  selectChosenSize,
  selectQuantity,
} from "../../../store/final-item/final-item.selector";

const useSizeAndQuantityCheck = () => {
  const product = useSelector(selectIndividualProduct);
  const chosenSize = useSelector(selectChosenSize);
  const quantity = useSelector(selectQuantity);

  const { optionsAvailable } = product;

  const options = optionsAvailable[0];

  const sizeAndQuantityCheck = () => {
    return !options.anyPieAvailable &&
      !options.bottlesAvailable &&
      !options.chickenKebabTypeAvailable &&
      !options.coneOfChipsSauceAvailable &&
      !options.donerKebabTypeAvailable &&
      !options.drinkAvailable &&
      !options.mixedKebabTypeAvailable &&
      !options.noOptionsAvailable &&
      !options.gratedCheeseAvailable &&
      !options.donerMeatAvailable &&
      !options.cheeseSliceAvailable &&
      !options.saladAvailable &&
      !options.saltAndVinegarAvailable &&
      !options.saucesAvailable &&
      options.condimentsAvailable === 0 &&
      options.meatsAvailable === 0 &&
      options.sizeOptionAvailable &&
      chosenSize !== "" &&
      quantity > 0
      ? true
      : false;
  };

  return { sizeAndQuantityCheck };
};

export default useSizeAndQuantityCheck;
