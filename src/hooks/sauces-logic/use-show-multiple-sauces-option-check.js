import { useSelector } from "react-redux";
import { numberOfSaucesChosenCheck } from "../../reusable-functions/multiple-checkboxes-selectable-checks";

import { selectIndividualProduct } from "../../store/products/product.selector";
import { selectSaucesSelected } from "../../store/final-item/final-item.selector";

import {
  tubOfSauce,
  fiveHalloumiSticksAndSmallSauce,
  megaSnackBox,
} from "../../strings/strings";

const useShowMultipleSaucesOptionCheck = () => {
  const product = useSelector(selectIndividualProduct);
  const saucesSelected = useSelector(selectSaucesSelected);
  const { name } = product;

  // find all products with multiple sauces options
  const getProductsWithMoreThanOneSauceOption = () => {
    return name !== tubOfSauce ||
      name !== fiveHalloumiSticksAndSmallSauce ||
      name !== megaSnackBox
      ? true
      : false;
  };

  // if the products only have multiple sauces options and  if amount of sauces selected is between 1 and 3
  const showMultipleSaucesOptionCheck = () => {
    return getProductsWithMoreThanOneSauceOption() &&
      !numberOfSaucesChosenCheck(saucesSelected)
      ? true
      : false;
  };

  return { showMultipleSaucesOptionCheck };
};

export default useShowMultipleSaucesOptionCheck;
