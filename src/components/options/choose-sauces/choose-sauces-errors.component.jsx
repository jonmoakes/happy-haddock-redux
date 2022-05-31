import useShowOneSauceOptionCheck from "../../../hooks/sauces-logic/use-show-one-sauce-option-check";
import useShowMultipleSaucesOptionCheck from "../../../hooks/sauces-logic/use-show-multiple-sauces-option-check";
import useShowNoSauceAndOtherSauceSelectedError from "../../../hooks/sauces-logic/use-show-no-sauce-and-other-sauce-selected-error";

import { Div } from "../../../styles/options-error/options-error.styles";

const ChooseSaucesErrors = () => {
  const { showOneSauceOptionCheck } = useShowOneSauceOptionCheck();
  const { showMultipleSaucesOptionCheck } = useShowMultipleSaucesOptionCheck();
  const { showNoSauceAndOtherSauceSelectedError } =
    useShowNoSauceAndOtherSauceSelectedError();

  return (
    <Div>
      {showOneSauceOptionCheck() ? (
        <p> &uarr; choose one sauce only :) &uarr;</p>
      ) : showMultipleSaucesOptionCheck() ? (
        <p> &uarr; choose up to 3 sauces :) &uarr;</p>
      ) : (
        showNoSauceAndOtherSauceSelectedError() && (
          <p>
            &uarr; you can't choose "no sauce" & along with any other sauce.
            &uarr;
            <br />
            please either select "no sauce" on its own, or up to 3 other sauces.
          </p>
        )
      )}
    </Div>
  );
};

export default ChooseSaucesErrors;
