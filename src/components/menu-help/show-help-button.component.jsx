import { useDispatch } from "react-redux";

import { setShowHelpText } from "../../store/products/product.action";

import { Button } from "../../styles/help-div/help-div.styles";

const ShowHelpButton = () => {
  const dispatch = useDispatch();

  return (
    <Button onClick={() => dispatch(setShowHelpText(true))}>
      tap to show help
    </Button>
  );
};

export default ShowHelpButton;
