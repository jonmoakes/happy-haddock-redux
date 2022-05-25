import { useSelector } from "react-redux";

import { selectIndividualProduct } from "../../../store/products/product.selector";
import {
  selectSaucesSelected,
  selectQuantity,
} from "../../../store/final-item/final-item.selector";

import { numberOfSaucesChosenCheck } from "../../../reusable-functions/multiple-checkboxes-selectable-checks";

const useSauceAndQuantityCheck = () => {
  const product = useSelector(selectIndividualProduct);
  const saucesSelected = useSelector(selectSaucesSelected);
  const quantity = useSelector(selectQuantity);

  const { optionsAvailable } = product;

  const options = optionsAvailable[0];

  const sauceAndQuantityCheck = () => {
    return !options.anyPieAvailable &&
      !options.bottlesAvailable &&
      !options.chickenKebabTypeAvailable &&
      !options.donerKebabTypeAvailable &&
      !options.drinkAvailable &&
      !options.noOptionsAvailable &&
      !options.gratedCheeseAvailable &&
      !options.donerMeatAvailable &&
      !options.cheeseSliceAvailable &&
      !options.coneOfChipsSauceAvailable &&
      !options.mixedKebabTypeAvailable &&
      !options.saladAvailable &&
      !options.saltAndVinegarAvailable &&
      !options.sizeOptionAvailable &&
      options.condimentsAvailable === 0 &&
      options.meatsAvailable === 0 &&
      options.saucesAvailable &&
      numberOfSaucesChosenCheck(saucesSelected) &&
      quantity > 0
      ? true
      : false;
  };

  return { sauceAndQuantityCheck };
};

export default useSauceAndQuantityCheck;
