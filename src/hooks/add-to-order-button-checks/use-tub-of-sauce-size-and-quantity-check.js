import { useSelector } from "react-redux";

import { selectIndividualProduct } from "../../store/products/product.selector";
import {
  selectChosenSize,
  selectSaucesSelected,
  selectQuantity,
} from "../../store/final-item/final-item.selector";

import { oneSauceChosenCheck } from "../../reusable-functions/multiple-checkboxes-selectable-checks";

const useTubOfSauceSizeAndQuantityCheck = () => {
  const product = useSelector(selectIndividualProduct);
  const chosenSize = useSelector(selectChosenSize);
  const saucesSelected = useSelector(selectSaucesSelected);
  const quantity = useSelector(selectQuantity);

  const { optionsAvailable } = product;

  const options = optionsAvailable[0];

  const tubOfSauceSizeAndQuantityCheck = () => {
    return !options.anyPieAvailable &&
      !options.bottlesAvailable &&
      !options.chickenKebabTypeAvailable &&
      !options.donerKebabTypeAvailable &&
      !options.drinkAvailable &&
      !options.mixedKebabTypeAvailable &&
      !options.noOptionsAvailable &&
      !options.gratedCheeseAvailable &&
      !options.donerMeatAvailable &&
      !options.cheeseSliceAvailable &&
      !options.saladAvailable &&
      !options.coneOfChipsSauceAvailable &&
      !options.saltAndVinegarAvailable &&
      options.meatsAvailable === 0 &&
      options.condimentsAvailable === 0 &&
      options.sizeOptionAvailable &&
      chosenSize !== "" &&
      options.saucesAvailable &&
      oneSauceChosenCheck(saucesSelected) &&
      quantity > 0
      ? true
      : false;
  };

  return { tubOfSauceSizeAndQuantityCheck };
};

export default useTubOfSauceSizeAndQuantityCheck;
