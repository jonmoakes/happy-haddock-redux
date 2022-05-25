import { useSelector } from "react-redux";

import { selectIndividualProduct } from "../../../store/products/product.selector";
import {
  selectChickenKebabType,
  selectOneMeat,
  selectSaucesSelected,
  selectQuantity,
} from "../../../store/final-item/final-item.selector";

import { numberOfSaucesChosenCheck } from "../../../reusable-functions/multiple-checkboxes-selectable-checks";

const useChickenKebabTypeMeatSaucesAndQuantityCheck = () => {
  const product = useSelector(selectIndividualProduct);
  const chickenKebabType = useSelector(selectChickenKebabType);
  const oneMeat = useSelector(selectOneMeat);
  const saucesSelected = useSelector(selectSaucesSelected);
  const quantity = useSelector(selectQuantity);

  const { optionsAvailable } = product;

  const options = optionsAvailable[0];

  const chickenKebabTypeMeatSaucesAndQuantityCheck = () => {
    return !options.anyPieAvailable &&
      !options.bottlesAvailable &&
      !options.donerKebabTypeAvailable &&
      !options.drinkAvailable &&
      !options.mixedKebabTypeAvailable &&
      !options.noOptionsAvailable &&
      !options.gratedCheeseAvailable &&
      !options.donerMeatAvailable &&
      !options.cheeseSliceAvailable &&
      !options.coneOfChipsSauceAvailable &&
      !options.saltAndVinegarAvailable &&
      !options.sizeOptionAvailable &&
      options.condimentsAvailable === 0 &&
      options.chickenKebabTypeAvailable &&
      chickenKebabType !== "" &&
      options.meatsAvailable === 1 &&
      oneMeat !== "" &&
      options.saladAvailable &&
      options.saucesAvailable &&
      numberOfSaucesChosenCheck(saucesSelected) &&
      quantity > 0
      ? true
      : false;
  };

  return { chickenKebabTypeMeatSaucesAndQuantityCheck };
};

export default useChickenKebabTypeMeatSaucesAndQuantityCheck;
