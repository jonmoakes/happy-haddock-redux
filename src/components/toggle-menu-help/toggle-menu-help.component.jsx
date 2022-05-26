import { useDispatch, useSelector } from "react-redux";

import { selectShowHelpText } from "../../store/products/product.selector";
import { setShowHelpText } from "../../store/products/product.action";

import HelpText from "./help-text.component";

import { Button } from "../../styles/help-div/help-div.styles";
const ToggleMenuHelp = () => {
  const showHelpText = useSelector(selectShowHelpText);
  const dispatch = useDispatch();

  return (
    <>
      {showHelpText ? (
        <>
          <Button onClick={() => dispatch(setShowHelpText(false))}>
            hide help
          </Button>
          <HelpText />
        </>
      ) : (
        <Button onClick={() => dispatch(setShowHelpText(true))}>
          tap to show help
        </Button>
      )}

      <hr />
    </>
  );
};

export default ToggleMenuHelp;
