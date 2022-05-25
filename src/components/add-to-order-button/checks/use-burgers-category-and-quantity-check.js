import { useSelector } from "react-redux";

import { selectIndividualProduct } from "../../../store/products/product.selector";
import {
  selectChosenSize,
  selectSaucesSelected,
  selectQuantity,
} from "../../../store/final-item/final-item.selector";

import { numberOfSaucesChosenCheck } from "../../../reusable-functions/multiple-checkboxes-selectable-checks";

const useBurgersCategoryAndQuantityCheck = () => {
  const product = useSelector(selectIndividualProduct);
  const chosenSize = useSelector(selectChosenSize);
  const saucesSelected = useSelector(selectSaucesSelected);
  const quantity = useSelector(selectQuantity);

  const { optionsAvailable } = product;

  const options = optionsAvailable[0];

  const burgersCategoryAndQuantityCheck = () => {
    return (
      //burgers will all burger options
      (!options.anyPieAvailable &&
        !options.bottlesAvailable &&
        !options.chickenKebabTypeAvailable &&
        !options.coneOfChipsSauceAvailable &&
        !options.donerKebabTypeAvailable &&
        !options.drinkAvailable &&
        !options.mixedKebabTypeAvailable &&
        !options.saltAndVinegarAvailable &&
        !options.noOptionsAvailable &&
        options.condimentsAvailable === 0 &&
        options.meatsAvailable === 0 &&
        options.sizeOptionAvailable &&
        chosenSize !== "" &&
        options.gratedCheeseAvailable &&
        options.donerMeatAvailable &&
        options.cheeseSliceAvailable &&
        options.saladAvailable &&
        options.saucesAvailable &&
        numberOfSaucesChosenCheck(saucesSelected) &&
        quantity > 0) ||
        // burgers with no size option but all other options
        (!options.anyPieAvailable &&
          !options.bottlesAvailable &&
          !options.chickenKebabTypeAvailable &&
          !options.coneOfChipsSauceAvailable &&
          !options.donerKebabTypeAvailable &&
          !options.drinkAvailable &&
          !options.mixedKebabTypeAvailable &&
          !options.saltAndVinegarAvailable &&
          !options.noOptionsAvailable &&
          !options.sizeOptionAvailable &&
          options.condimentsAvailable === 0 &&
          options.meatsAvailable === 0 &&
          options.gratedCheeseAvailable &&
          options.donerMeatAvailable &&
          options.cheeseSliceAvailable &&
          options.saladAvailable &&
          options.saucesAvailable &&
          numberOfSaucesChosenCheck(saucesSelected) &&
          quantity > 0) ||
        // veggie option burgers
        (!options.anyPieAvailable &&
          !options.bottlesAvailable &&
          !options.chickenKebabTypeAvailable &&
          !options.coneOfChipsSauceAvailable &&
          !options.donerKebabTypeAvailable &&
          !options.drinkAvailable &&
          !options.mixedKebabTypeAvailable &&
          !options.saltAndVinegarAvailable &&
          !options.noOptionsAvailable &&
          !options.sizeOptionAvailable &&
          !options.donerMeatAvailable &&
          options.condimentsAvailable === 0 &&
          options.meatsAvailable === 0 &&
          options.gratedCheeseAvailable &&
          options.cheeseSliceAvailable &&
          options.saladAvailable &&
          options.saucesAvailable &&
          numberOfSaucesChosenCheck(saucesSelected) &&
          quantity > 0)
        ? true
        : false
    );
  };

  return { burgersCategoryAndQuantityCheck };
};

export default useBurgersCategoryAndQuantityCheck;
