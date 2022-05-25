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
  const { name, saucesAvailable } = product;

  return (
    <Div>
      {((saucesAvailable && name === tubOfSauce) ||
        (saucesAvailable && name === fiveHalloumiSticksAndSmallSauce) ||
        (saucesAvailable && name === megaSnackBox)) &&
      !oneSauceChosenCheck(saucesSelected) ? (
        <p>choose one sauce :)</p>
      ) : (
        ((saucesAvailable && name !== tubOfSauce) ||
          (saucesAvailable && name !== fiveHalloumiSticksAndSmallSauce) ||
          (saucesAvailable && name !== megaSnackBox)) &&
        !numberOfSaucesChosenCheck(saucesSelected) && (
          <p>choose up to 3 sauces :)</p>
        )
      )}
    </Div>
  );
};

export default ChooseSaucesInfo;
