import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { selectShowHelpText } from "../../store/products/product.selector";
import { setShowHelpText } from "../../store/products/product.action";

import ChooseCategoryHelp from "./choose-category-help.component";
import SearchingProductsHelp from "./searching-products-help.component";
import ChoosingOptionsHelp from "./choosing-options-help.component";
import GoToCheckoutHelp from "./go-to-checkout-help.component";
import HideHelpButton from "./hide-help-button.component";
import ShowHelpButton from "./show-help-button.component";

import { HelpTextDiv } from "../../styles/help-div/help-div.styles";

const MenuHelp = ({ searchField }) => {
  const showHelpText = useSelector(selectShowHelpText);
  const dispatch = useDispatch();

  useEffect(() => {
    return () => {
      if (showHelpText) {
        dispatch(setShowHelpText(false));
      }
    };
  }, [dispatch, showHelpText]);

  return (
    <>
      {searchField ? null : showHelpText ? (
        <HelpTextDiv>
          <ChooseCategoryHelp />
          <SearchingProductsHelp />
          <ChoosingOptionsHelp />
          <GoToCheckoutHelp />
          <HideHelpButton />
        </HelpTextDiv>
      ) : (
        <ShowHelpButton />
      )}
    </>
  );
};

export default MenuHelp;
