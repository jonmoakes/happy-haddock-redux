import { useSelector } from "react-redux";

import { selectIndividualProduct } from "../../../store/products/product.selector";
import {
  selectDonerKebabType,
  selectSaucesSelected,
  selectQuantity,
} from "../../../store/final-item/final-item.selector";

import { numberOfSaucesChosenCheck } from "../../../reusable-functions/multiple-checkboxes-selectable-checks";

const useDonerKebabTypeSaucesAndQuantityCheck = () => {
  const product = useSelector(selectIndividualProduct);
  const donerKebabType = useSelector(selectDonerKebabType);
  const saucesSelected = useSelector(selectSaucesSelected);
  const quantity = useSelector(selectQuantity);

  const { optionsAvailable } = product;

  const options = optionsAvailable[0];

  const donerKebabTypeSaucesAndQuantityCheck = () => {
    return !options.anyPieAvailable &&
      !options.bottlesAvailable &&
      !options.chickenKebabTypeAvailable &&
      !options.drinkAvailable &&
      !options.mixedKebabTypeAvailable &&
      !options.noOptionsAvailable &&
      !options.gratedCheeseAvailable &&
      !options.donerMeatAvailable &&
      !options.cheeseSliceAvailable &&
      !options.coneOfChipsSauceAvailable &&
      !options.saltAndVinegarAvailable &&
      !options.sizeOptionAvailable &&
      options.meatsAvailable === 0 &&
      options.condimentsAvailable === 0 &&
      options.donerKebabTypeAvailable &&
      donerKebabType !== "" &&
      options.saladAvailable &&
      options.saucesAvailable &&
      numberOfSaucesChosenCheck(saucesSelected) &&
      quantity > 0
      ? true
      : false;
  };

  return { donerKebabTypeSaucesAndQuantityCheck };
};

export default useDonerKebabTypeSaucesAndQuantityCheck;
