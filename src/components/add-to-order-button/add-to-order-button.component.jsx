import { Navigate } from "react-router-dom";
import useShowNoSauceAndOtherSauceSelectedError from "../../hooks/sauces-logic/use-show-no-sauce-and-other-sauce-selected-error";
import useCombinedCheck from "../../hooks/add-to-order-button-checks/use-combined-check";
import useAddCartItemsToFirestore from "../../hooks/use-add-cart-item-to-firestore";

import AddToOrderButtonError from "./add-to-order-button-error";

import { AddToOrderButtonContainer } from "./add-to-order-button.styles";

const AddToOrderButton = ({ children, ...props }) => {
  const { showNoSauceAndOtherSauceSelectedError } =
    useShowNoSauceAndOtherSauceSelectedError();
  const { combinedCheck } = useCombinedCheck();
  const { nav, confirmAddItem } = useAddCartItemsToFirestore();

  return (
    <>
      {nav && <Navigate replace to={"/menu"} />}
      {showNoSauceAndOtherSauceSelectedError() ? (
        <AddToOrderButtonError />
      ) : combinedCheck() ? (
        <AddToOrderButtonContainer onClick={confirmAddItem}>
          add to order
        </AddToOrderButtonContainer>
      ) : (
        <AddToOrderButtonError />
      )}
    </>
  );
};

export default AddToOrderButton;
