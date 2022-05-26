import { useSelector } from "react-redux";
import { oneSauceChosenCheck } from "../../reusable-functions/multiple-checkboxes-selectable-checks";

import { selectIndividualProduct } from "../../store/products/product.selector";
import { selectSaucesSelected } from "../../store/final-item/final-item.selector";

import {
  tubOfSauce,
  fiveHalloumiSticksAndSmallSauce,
  megaSnackBox,
} from "../../strings/strings";

const useShowOneSauceOptionCheck = () => {
  const product = useSelector(selectIndividualProduct);
  const saucesSelected = useSelector(selectSaucesSelected);
  const { name } = product;

  // find all products with only one sauce option
  const getProductsWithOneSauceOption = () => {
    return name === tubOfSauce ||
      name === fiveHalloumiSticksAndSmallSauce ||
      name === megaSnackBox
      ? true
      : false;
  };

  // if the products only have one sauce option and  if amount of sauces selected !== 1
  const showOneSauceOptionCheck = () => {
    return getProductsWithOneSauceOption() &&
      !oneSauceChosenCheck(saucesSelected)
      ? true
      : false;
  };

  return { showOneSauceOptionCheck };
};

export default useShowOneSauceOptionCheck;
