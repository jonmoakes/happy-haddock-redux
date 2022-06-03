import { useEffect } from "react";
import { useSelector } from "react-redux";

import useHandleCustomerDetailsChange from "../../hooks/use-handle-customer-details-form-change";
import useShowCardInputCheck from "../../hooks/use-show-card-input-check";

import {
  selectContactMethod,
  selectShowCardInput,
} from "../../store/cart/cart.selector";

import EmailLabel from "./email-label.component";
import EmailError from "./email-error.component";
import PhoneNumberError from "./phone-number-error.component";
import PaymentFormPayNowInstructions from "./payment-form-pay-now-instructions.component";
import ConfirmPayment from "./confirm-payment.component";

import { validateEmail } from "../../reusable-functions/email-to-send";
import { phoneNumberError } from "../../reusable-functions/phone-number-error-check";

import { PaymentFormDiv } from "./payment-form.styles";
import { Form } from "../../styles/form/form.styles";

const NameEmailPhoneForm = () => {
  const { handleCustomerDetailsFormChange, customerDetails } =
    useHandleCustomerDetailsChange();
  const { showCardInputCheck } = useShowCardInputCheck();
  const showCardInput = useSelector(selectShowCardInput);

  const contactMethod = useSelector(selectContactMethod);
  const { name, email, phoneNumber } = customerDetails;

  useEffect(() => {
    showCardInputCheck(name, email, phoneNumber);
  }, [showCardInputCheck, name, email, phoneNumber]);

  return (
    <>
      {contactMethod && (
        <>
          <PaymentFormDiv>
            <Form className="name-email-phone" autoComplete="off">
              <label>Name:</label>
              <input
                name="name"
                type="text"
                required
                onChange={handleCustomerDetailsFormChange}
              />

              <EmailLabel {...{ contactMethod }} />
              <input
                name="email"
                type="email"
                required
                onChange={handleCustomerDetailsFormChange}
                className="email"
              />

              {!validateEmail(email) && <EmailError {...{ email }} />}

              {contactMethod === "phone" && (
                <>
                  <label>Phone Number:</label>
                  <input
                    name="phoneNumber"
                    type="number"
                    pattern="\d*"
                    required
                    onChange={handleCustomerDetailsFormChange}
                  />
                </>
              )}

              {phoneNumberError(phoneNumber) && <PhoneNumberError />}
              {showCardInput && (
                <>
                  <PaymentFormPayNowInstructions />
                  <ConfirmPayment {...{ customerDetails }} />
                </>
              )}
            </Form>
          </PaymentFormDiv>
        </>
      )}
    </>
  );
};

export default NameEmailPhoneForm;
