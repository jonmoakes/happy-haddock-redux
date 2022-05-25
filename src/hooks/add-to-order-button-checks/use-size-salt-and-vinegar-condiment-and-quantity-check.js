import { useSelector } from "react-redux";

import { selectIndividualProduct } from "../../store/products/product.selector";
import {
  selectChosenSize,
  selectSaltAndVinegar,
  selectSingleCondiment,
  selectTwoCondiments,
  selectQuantity,
} from "../../store/final-item/final-item.selector";

import { numberOfCondimentsChosenCheck } from "../../reusable-functions/multiple-checkboxes-selectable-checks";

const useSizeSaltAndVinegarCondimentAndQuantityCheck = () => {
  const product = useSelector(selectIndividualProduct);
  const chosenSize = useSelector(selectChosenSize);
  const saltAndVinegar = useSelector(selectSaltAndVinegar);
  const singleCondiment = useSelector(selectSingleCondiment);
  const twoCondiments = useSelector(selectTwoCondiments);
  const quantity = useSelector(selectQuantity);

  const { optionsAvailable } = product;

  const options = optionsAvailable[0];

  const sizeSaltAndVinegarCondimentAndQuantityCheck = () => {
    return (
      //  with no salad available
      (!options.anyPieAvailable &&
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
        !options.saucesAvailable &&
        !options.coneOfChipsSauceAvailable &&
        options.meatsAvailable === 0 &&
        options.sizeOptionAvailable &&
        chosenSize !== "" &&
        options.saltAndVinegarAvailable &&
        saltAndVinegar !== "" &&
        options.condimentsAvailable === 1 &&
        singleCondiment !== "" &&
        quantity > 0) ||
        // with one condiment && no salad available
        (!options.anyPieAvailable &&
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
          !options.saucesAvailable &&
          !options.sizeOptionAvailable &&
          !options.coneOfChipsSauceAvailable &&
          options.meatsAvailable === 0 &&
          options.saltAndVinegarAvailable &&
          saltAndVinegar !== "" &&
          options.condimentsAvailable === 1 &&
          singleCondiment !== "" &&
          quantity > 0) ||
        // with two condiments && no salad available
        (!options.anyPieAvailable &&
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
          !options.saucesAvailable &&
          !options.coneOfChipsSauceAvailable &&
          options.meatsAvailable === 0 &&
          options.sizeOptionAvailable &&
          chosenSize !== "" &&
          options.saltAndVinegarAvailable &&
          saltAndVinegar !== "" &&
          options.condimentsAvailable === 2 &&
          numberOfCondimentsChosenCheck(twoCondiments) &&
          quantity > 0)
        ? true
        : false
    );
  };

  return { sizeSaltAndVinegarCondimentAndQuantityCheck };
};

export default useSizeSaltAndVinegarCondimentAndQuantityCheck;
