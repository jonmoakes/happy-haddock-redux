import { useSelector } from "react-redux";

import { selectIndividualProduct } from "../../../store/products/product.selector";
import {
  selectSaltAndVinegar,
  selectCan,
  selectQuantity,
} from "../../../store/final-item/final-item.selector";

const useSaltAndVinegarDrinkAndQuantityCheck = () => {
  const product = useSelector(selectIndividualProduct);
  const saltAndVinegar = useSelector(selectSaltAndVinegar);
  const can = useSelector(selectCan);
  const quantity = useSelector(selectQuantity);

  const { optionsAvailable } = product;

  const options = optionsAvailable[0];

  const saltAndVinegarDrinkAndQuantityCheck = () => {
    return (
      // salt & vinegar can & quantity where salad is available
      !options.anyPieAvailable &&
        !options.bottlesAvailable &&
        !options.chickenKebabTypeAvailable &&
        !options.coneOfChipsSauceAvailable &&
        !options.donerKebabTypeAvailable &&
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
        options.drinkAvailable &&
        can !== "" &&
        quantity > 0
        ? true
        : false
    );
  };

  return { saltAndVinegarDrinkAndQuantityCheck };
};

export default useSaltAndVinegarDrinkAndQuantityCheck;
