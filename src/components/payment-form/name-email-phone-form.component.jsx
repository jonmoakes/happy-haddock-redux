import { useEffect } from "react";
import { useSelector } from "react-redux";

import { selectChoosePhone } from "../../redux/payment-form/payment-form.selectors";

import EmailLabel from "./email-label.component";
import EmailError from "../email-error/email-error.component";
import PhoneNumberErrorMessage from "./phone-number-error-message.component";
import PaymentFormPayNowInstructions from "./payment-form-pay-now-instructions.component";
import ConfirmPayment from "./confirm-payment.component";

import useCustomerDetailsChange from "../../custom-hooks/use-customer-details-change";

import { Form } from "../styles/form/form.styles";

import {
  name,
  text,
  email,
  phoneNumber,
  number,
} from "../../strings/options-strings";

const NameEmailPhoneForm = () => {
  const {
    orderDetails,
    emailError,
    showPhoneErrorMessage,
    showPayInput,
    handleChange,
  } = useCustomerDetailsChange();

  const choosePhone = useSelector(selectChoosePhone);

  const scrollToForm = () => {
    document.body.scrollTop = 600;
    document.documentElement.scrollTop = 600;
  };

  useEffect(() => {
    scrollToForm();
  }, []);

  return (
    <div>
      <Form className="name-email-phone" autoComplete="off">
        <label>Name:</label>
        <input name={name} type={text} required onChange={handleChange} />
        <EmailLabel />

        <input
          name={email}
          type={email}
          required
          onChange={handleChange}
          className={email}
        />

        {emailError && <EmailError />}

        {choosePhone && (
          <>
            <label>Phone Number:</label>
            <input
              name={phoneNumber}
              type={number}
              pattern="\d*"
              required
              onChange={handleChange}
            />
          </>
        )}

        {showPhoneErrorMessage && (
          <PhoneNumberErrorMessage
            showPhoneErrorMessage={showPhoneErrorMessage}
          />
        )}

        {showPayInput && (
          <>
            <PaymentFormPayNowInstructions />
            <ConfirmPayment orderDetails={orderDetails} />
          </>
        )}
      </Form>
    </div>
  );
};

export default NameEmailPhoneForm;
