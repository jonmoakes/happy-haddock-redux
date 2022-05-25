import { useSelector } from "react-redux";

import { selectIndividualProduct } from "../../store/products/product.selector";
import {
  selectMixedKebabType,
  selectSaucesSelected,
  selectQuantity,
} from "../../store/final-item/final-item.selector";

import { numberOfSaucesChosenCheck } from "../../reusable-functions/multiple-checkboxes-selectable-checks";

const useMixedKebabTypeThreeMeatSaucesAndQuantityCheck = () => {
  const product = useSelector(selectIndividualProduct);
  const mixedKebabType = useSelector(selectMixedKebabType);
  const saucesSelected = useSelector(selectSaucesSelected);
  const quantity = useSelector(selectQuantity);

  const { optionsAvailable } = product;

  const options = optionsAvailable[0];

  const mixedKebabTypeThreeMeatSaucesAndQuantityCheck = () => {
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
      options.meatsAvailable === 0 &&
      options.condimentsAvailable === 0 &&
      options.mixedKebabTypeAvailable &&
      mixedKebabType !== "" &&
      options.saladAvailable &&
      options.saucesAvailable &&
      numberOfSaucesChosenCheck(saucesSelected) &&
      quantity > 0
      ? true
      : false;
  };

  return { mixedKebabTypeThreeMeatSaucesAndQuantityCheck };
};

export default useMixedKebabTypeThreeMeatSaucesAndQuantityCheck;
