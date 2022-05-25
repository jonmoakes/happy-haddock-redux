import { useSelector } from "react-redux";

import { selectIndividualProduct } from "../../store/products/product.selector";
import {
  selectMixedKebabType,
  selectTwoMeats,
  selectSaucesSelected,
  selectQuantity,
} from "../../store/final-item/final-item.selector";

import {
  numberOfMeatsChosenCheck,
  numberOfSaucesChosenCheck,
} from "../../reusable-functions/multiple-checkboxes-selectable-checks";

const useMixedKebabTypeTwoMeatSaucesAndQuantityCheck = () => {
  const product = useSelector(selectIndividualProduct);
  const mixedKebabType = useSelector(selectMixedKebabType);
  const twoMeatsSelected = useSelector(selectTwoMeats);
  const saucesSelected = useSelector(selectSaucesSelected);
  const quantity = useSelector(selectQuantity);

  const { optionsAvailable } = product;

  const options = optionsAvailable[0];

  const mixedKebabTypeTwoMeatSaucesAndQuantityCheck = () => {
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
      !options.saltAndVinegarAvailable &&
      !options.sizeOptionAvailable &&
      options.condimentsAvailable === 0 &&
      options.mixedKebabTypeAvailable &&
      mixedKebabType !== "" &&
      options.meatsAvailable === 2 &&
      numberOfMeatsChosenCheck(twoMeatsSelected) &&
      options.saladAvailable &&
      options.saucesAvailable &&
      numberOfSaucesChosenCheck(saucesSelected) &&
      quantity > 0
      ? true
      : false;
  };

  return { mixedKebabTypeTwoMeatSaucesAndQuantityCheck };
};

export default useMixedKebabTypeTwoMeatSaucesAndQuantityCheck;
