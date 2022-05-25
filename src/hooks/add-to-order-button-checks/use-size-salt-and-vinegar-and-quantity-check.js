import { useSelector } from "react-redux";

import { selectIndividualProduct } from "../../store/products/product.selector";
import {
  selectChosenSize,
  selectSaltAndVinegar,
  selectQuantity,
} from "../../store/final-item/final-item.selector";

const useSizeSaltAndVinegarAndQuantityCheck = () => {
  const product = useSelector(selectIndividualProduct);
  const chosenSize = useSelector(selectChosenSize);
  const saltAndVinegar = useSelector(selectSaltAndVinegar);
  const quantity = useSelector(selectQuantity);

  const { optionsAvailable } = product;

  const options = optionsAvailable[0];

  const sizeSaltAndVinegarAndQuantityCheck = () => {
    return (
      // size salt & vinegar where salad is not available
      (!options.anyPieAvailable &&
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
        !options.saucesAvailable &&
        options.condimentsAvailable === 0 &&
        options.meatsAvailable === 0 &&
        options.sizeOptionAvailable &&
        chosenSize !== "" &&
        options.saltAndVinegarAvailable &&
        saltAndVinegar !== "" &&
        quantity > 0) ||
        // size salt & vinegar where salad is available
        (!options.anyPieAvailable &&
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
          !options.saucesAvailable &&
          options.condimentsAvailable === 0 &&
          options.meatsAvailable === 0 &&
          options.sizeOptionAvailable &&
          chosenSize !== "" &&
          options.saladAvailable &&
          options.saltAndVinegarAvailable &&
          saltAndVinegar !== "" &&
          quantity > 0)
        ? true
        : false
    );
  };

  return { sizeSaltAndVinegarAndQuantityCheck };
};

export default useSizeSaltAndVinegarAndQuantityCheck;
