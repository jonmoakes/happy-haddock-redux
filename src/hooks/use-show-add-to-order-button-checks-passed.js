import { useSelector } from "react-redux";

import {
  selectQuantity,
  selectSaucesSelected,
  selectChosenSize,
} from "../store/final-item/final-item.selector";

import {
  sizeSaucesAndQuantityRequiredCheck,
  saucesAndQuantityRequiredCheck,
} from "../reusable-functions/add-to-order-checks";

const useShowAddToOrderButtonChecksPassed = () => {
  const quantity = useSelector(selectQuantity);
  const saucesSelected = useSelector(selectSaucesSelected);
  const chosenSize = useSelector(selectChosenSize);

  const showAddToOrderButtonChecksPassed = () => {
    return sizeSaucesAndQuantityRequiredCheck(
      chosenSize,
      saucesSelected,
      quantity
    ) || saucesAndQuantityRequiredCheck(saucesSelected, quantity)
      ? true
      : false;
  };

  return { showAddToOrderButtonChecksPassed };
};

export default useShowAddToOrderButtonChecksPassed;
