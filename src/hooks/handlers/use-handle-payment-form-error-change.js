import { useState } from "react";

import {
  pleaseEnterYourCardDetails,
  formNotCompleteWarning,
} from "../../strings/strings";

const useHandlePaymentFormErrorChange = () => {
  const [checkoutErrorMessage, setCheckoutErrorMessage] = useState("");
  const [warningMessage, setWarningMessage] = useState("");
  const [showPayButton, setShowPayButton] = useState(false);

  const handlePaymentFormErrorChange = (e) => {
    if (e.empty) {
      setShowPayButton(false);
      setWarningMessage("");
      setCheckoutErrorMessage(pleaseEnterYourCardDetails);
    } else if (e.error === undefined && e.complete === false) {
      setShowPayButton(false);
      setWarningMessage(formNotCompleteWarning);
      setCheckoutErrorMessage("");
    } else if (e.error !== undefined && e.complete === false) {
      setWarningMessage("");
      setShowPayButton(false);
      setCheckoutErrorMessage(e.error.message);
    } else if (!e.empty && e.error === undefined && e.complete === true) {
      setWarningMessage("");
      setShowPayButton(true);
      setCheckoutErrorMessage("");
    }
  };

  return {
    handlePaymentFormErrorChange,
    checkoutErrorMessage,
    warningMessage,
    showPayButton,
  };
};

export default useHandlePaymentFormErrorChange;
