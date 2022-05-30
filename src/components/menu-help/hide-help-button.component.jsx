import { useDispatch } from "react-redux";

import { setShowHelpText } from "../../store/products/product.action";

import { Button } from "../../styles/help-div/help-div.styles";

const HideHelpButton = () => {
  const dispatch = useDispatch();
  return (
    <>
      <Button
        onClick={() => {
          dispatch(setShowHelpText(false));
          window.scrollTo(0, 0);
        }}
      >
        Ok, hide help
      </Button>
      <hr />
    </>
  );
};

export default HideHelpButton;
