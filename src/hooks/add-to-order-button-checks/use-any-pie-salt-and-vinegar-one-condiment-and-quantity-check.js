import { useSelector } from "react-redux";

import { selectIndividualProduct } from "../../store/products/product.selector";
import {
  selectSaltAndVinegar,
  selectSingleCondiment,
  selectQuantity,
} from "../../store/final-item/final-item.selector";

const useAnyPieSaltAndVinegarCondimentAndQuantityCheck = () => {
  const product = useSelector(selectIndividualProduct);
  const saltAndVinegar = useSelector(selectSaltAndVinegar);
  const singleCondiment = useSelector(selectSingleCondiment);
  const quantity = useSelector(selectQuantity);

  const { optionsAvailable } = product;

  const options = optionsAvailable[0];

  const anyPieSaltAndVinegarCondimentAndQuantityCheck = () => {
    return !options.bottlesAvailable &&
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
      options.anyPieAvailable &&
      options.saltAndVinegarAvailable &&
      saltAndVinegar !== "" &&
      options.condimentsAvailable === 1 &&
      singleCondiment !== "" &&
      quantity > 0
      ? true
      : false;
  };

  return { anyPieSaltAndVinegarCondimentAndQuantityCheck };
};

export default useAnyPieSaltAndVinegarCondimentAndQuantityCheck;
