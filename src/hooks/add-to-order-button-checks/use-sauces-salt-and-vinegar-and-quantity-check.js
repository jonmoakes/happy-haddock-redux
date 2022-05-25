import { useSelector } from "react-redux";

import { selectIndividualProduct } from "../../store/products/product.selector";
import {
  selectOneMeat,
  selectTwoMeats,
  selectSaucesSelected,
  selectSaltAndVinegar,
  selectQuantity,
} from "../../store/final-item/final-item.selector";

import {
  numberOfSaucesChosenCheck,
  numberOfMeatsChosenCheck,
} from "../../reusable-functions/multiple-checkboxes-selectable-checks";

const useSaucesSaltAndVinegarAndQuantityCheck = () => {
  const product = useSelector(selectIndividualProduct);
  const saucesSelected = useSelector(selectSaucesSelected);
  const saltAndVinegar = useSelector(selectSaltAndVinegar);
  const meat = useSelector(selectOneMeat);
  const twoMeatsSelected = useSelector(selectTwoMeats);
  const quantity = useSelector(selectQuantity);

  const { optionsAvailable } = product;

  const options = optionsAvailable[0];

  const saucesSaltAndVinegarAndQuantityCheck = () => {
    // where grated / doner / cheese slice & salad is also available
    return (!options.anyPieAvailable &&
      !options.bottlesAvailable &&
      !options.chickenKebabTypeAvailable &&
      !options.donerKebabTypeAvailable &&
      !options.drinkAvailable &&
      !options.noOptionsAvailable &&
      !options.coneOfChipsSauceAvailable &&
      !options.mixedKebabTypeAvailable &&
      !options.sizeOptionAvailable &&
      options.meatsAvailable === 0 &&
      options.condimentsAvailable === 0 &&
      options.gratedCheeseAvailable &&
      options.donerMeatAvailable &&
      options.cheeseSliceAvailable &&
      options.saladAvailable &&
      options.saucesAvailable &&
      numberOfSaucesChosenCheck(saucesSelected) &&
      options.saltAndVinegarAvailable &&
      saltAndVinegar !== "" &&
      quantity > 0) ||
      // where grated / cheese slice & salad is also available
      (!options.anyPieAvailable &&
        !options.bottlesAvailable &&
        !options.chickenKebabTypeAvailable &&
        !options.donerKebabTypeAvailable &&
        !options.drinkAvailable &&
        !options.donerMeatAvailable &&
        !options.noOptionsAvailable &&
        !options.coneOfChipsSauceAvailable &&
        !options.mixedKebabTypeAvailable &&
        !options.sizeOptionAvailable &&
        options.meatsAvailable === 0 &&
        options.condimentsAvailable === 0 &&
        options.gratedCheeseAvailable &&
        options.cheeseSliceAvailable &&
        options.saladAvailable &&
        options.saucesAvailable &&
        numberOfSaucesChosenCheck(saucesSelected) &&
        options.saltAndVinegarAvailable &&
        saltAndVinegar !== "" &&
        quantity > 0) ||
      // where & salad is also available
      (!options.anyPieAvailable &&
        !options.bottlesAvailable &&
        !options.chickenKebabTypeAvailable &&
        !options.donerKebabTypeAvailable &&
        !options.drinkAvailable &&
        !options.gratedCheeseAvailable &&
        !options.cheeseSliceAvailable &&
        !options.donerMeatAvailable &&
        !options.noOptionsAvailable &&
        !options.coneOfChipsSauceAvailable &&
        !options.mixedKebabTypeAvailable &&
        !options.sizeOptionAvailable &&
        options.meatsAvailable === 0 &&
        options.condimentsAvailable === 0 &&
        options.saladAvailable &&
        options.saucesAvailable &&
        numberOfSaucesChosenCheck(saucesSelected) &&
        options.saltAndVinegarAvailable &&
        saltAndVinegar !== "" &&
        quantity > 0) ||
      // where one meat & salad is also available
      (!options.anyPieAvailable &&
        !options.bottlesAvailable &&
        !options.chickenKebabTypeAvailable &&
        !options.donerKebabTypeAvailable &&
        !options.drinkAvailable &&
        !options.gratedCheeseAvailable &&
        !options.cheeseSliceAvailable &&
        !options.donerMeatAvailable &&
        !options.noOptionsAvailable &&
        !options.coneOfChipsSauceAvailable &&
        !options.mixedKebabTypeAvailable &&
        !options.sizeOptionAvailable &&
        options.condimentsAvailable === 0 &&
        options.meatsAvailable === 1 &&
        meat !== "" &&
        options.saladAvailable &&
        options.saucesAvailable &&
        numberOfSaucesChosenCheck(saucesSelected) &&
        options.saltAndVinegarAvailable &&
        saltAndVinegar !== "" &&
        quantity > 0) ||
      // where 2 meats & salad is also available
      (!options.anyPieAvailable &&
        !options.bottlesAvailable &&
        !options.chickenKebabTypeAvailable &&
        !options.donerKebabTypeAvailable &&
        !options.drinkAvailable &&
        !options.gratedCheeseAvailable &&
        !options.cheeseSliceAvailable &&
        !options.donerMeatAvailable &&
        !options.noOptionsAvailable &&
        !options.coneOfChipsSauceAvailable &&
        !options.mixedKebabTypeAvailable &&
        !options.sizeOptionAvailable &&
        options.condimentsAvailable === 0 &&
        options.meatsAvailable === 2 &&
        numberOfMeatsChosenCheck(twoMeatsSelected) &&
        options.saladAvailable &&
        options.saucesAvailable &&
        numberOfSaucesChosenCheck(saucesSelected) &&
        options.saltAndVinegarAvailable &&
        saltAndVinegar !== "" &&
        quantity > 0)
      ? true
      : false;
  };

  return { saucesSaltAndVinegarAndQuantityCheck };
};

export default useSaucesSaltAndVinegarAndQuantityCheck;
