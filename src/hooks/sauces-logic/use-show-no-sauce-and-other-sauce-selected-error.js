import { useSelector } from "react-redux";

import { selectSaucesSelected } from "../../store/final-item/final-item.selector";

import { getNumberOfSaucesSelected } from "../../reusable-functions/multiple-checkboxes-selectable-checks";

const useShowNoSauceAndOtherSauceSelectedError = () => {
  const saucesSelected = useSelector(selectSaucesSelected);
  const { noSauce } = saucesSelected;
  const showNoSauceAndOtherSauceSelectedError = () => {
    return noSauce && getNumberOfSaucesSelected(saucesSelected) > 1
      ? true
      : false;
  };

  return { showNoSauceAndOtherSauceSelectedError };
};

export default useShowNoSauceAndOtherSauceSelectedError;
