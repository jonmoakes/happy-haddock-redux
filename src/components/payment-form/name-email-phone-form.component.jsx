import { useEffect } from "react";
import { useSelector } from "react-redux";

import useHandleCustomerDetailsChange from "../../hooks/handle-customer-details-form-change/use-handle-customer-details-form-change";
import useShowCardInputCheck from "../../hooks/use-show-card-input-check";

import { selectContactMethod } from "../../store/cart/cart.selector";

import EmailLabel from "./email-label.component";
import EmailError from "./email-error.component";
import PhoneNumberError from "./phone-number-error.component";

import { validateEmail } from "../../reusable-functions/email-to-send";
import { phoneNumberError } from "../../reusable-functions/phone-number-error-check";

import { PaymentFormDiv } from "./payment-form.styles";
import { Form } from "../../styles/form/form.styles";

const NameEmailPhoneForm = () => {
  const { handleCustomerDetailsFormChange, customerDetails } =
    useHandleCustomerDetailsChange();
  const { showCardInputCheck } = useShowCardInputCheck();

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
            </Form>
          </PaymentFormDiv>
        </>
      )}
    </>
  );
};

export default NameEmailPhoneForm;
