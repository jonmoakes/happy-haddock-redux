import { useSelector } from "react-redux";

import { selectIndividualProduct } from "../../../store/products/product.selector";

import {
  numberOfSaucesChosenCheck,
  oneSauceChosenCheck,
} from "../../../reusable-functions/multiple-checkboxes-selectable-checks";

import {
  tubOfSauce,
  fiveHalloumiSticksAndSmallSauce,
  megaSnackBox,
} from "../../../strings/strings";

import { Div } from "../../../styles/options-error/options-error.styles";

const ChooseSaucesInfo = ({ saucesSelected }) => {
  const product = useSelector(selectIndividualProduct);
  const { name } = product;

  return (
    <Div>
      {(name === tubOfSauce ||
        name === fiveHalloumiSticksAndSmallSauce ||
        name === megaSnackBox) &&
      !oneSauceChosenCheck(saucesSelected) ? (
        <p> &uarr; choose one sauce :) &uarr;</p>
      ) : (
        (name !== tubOfSauce ||
          name !== fiveHalloumiSticksAndSmallSauce ||
          name !== megaSnackBox) &&
        !numberOfSaucesChosenCheck(saucesSelected) && (
          <p> &uarr; choose up to 3 sauces :) &uarr;</p>
        )
      )}
    </Div>
  );
};

export default ChooseSaucesInfo;
