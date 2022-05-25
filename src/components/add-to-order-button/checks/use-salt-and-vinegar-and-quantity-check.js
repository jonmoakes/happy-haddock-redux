import { useSelector } from "react-redux";

import { selectIndividualProduct } from "../../../store/products/product.selector";
import {
  selectSaltAndVinegar,
  selectQuantity,
} from "../../../store/final-item/final-item.selector";

const useSaltAndVinegarAndQuantityCheck = () => {
  const product = useSelector(selectIndividualProduct);
  const saltAndVinegar = useSelector(selectSaltAndVinegar);
  const quantity = useSelector(selectQuantity);

  const { optionsAvailable } = product;

  const options = optionsAvailable[0];

  const saltAndVinegarAndQuantityCheck = () => {
    return (
      // salt & vinegar & quantity where salad is not available
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
        !options.sizeOptionAvailable &&
        options.condimentsAvailable === 0 &&
        options.meatsAvailable === 0 &&
        options.saltAndVinegarAvailable &&
        saltAndVinegar !== "" &&
        quantity > 0) ||
        // salt & vinegar & quantity where salad is  available
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
          !options.sizeOptionAvailable &&
          options.condimentsAvailable === 0 &&
          options.meatsAvailable === 0 &&
          options.saladAvailable &&
          options.saltAndVinegarAvailable &&
          saltAndVinegar !== "" &&
          quantity > 0)
        ? true
        : false
    );
  };

  return { saltAndVinegarAndQuantityCheck };
};

export default useSaltAndVinegarAndQuantityCheck;
