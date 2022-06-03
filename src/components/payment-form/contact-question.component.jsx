import { useDispatch, useSelector } from "react-redux";

import { chooseContactMethod } from "../../store/cart/cart.action";
import { selectContactMethod } from "../../store/cart/cart.selector";
import {
  PaymentFormDiv,
  ContactButtonsDiv,
  ContactButton,
} from "./payment-form.styles";

const ContactQuestion = () => {
  const contactMethod = useSelector(selectContactMethod);
  const dispatch = useDispatch();

  return (
    <>
      {!contactMethod && (
        <PaymentFormDiv>
          <h2>just before you order:</h2>
          <p>if we need to contact you about your order,</p>
          <p>
            ( this is the ONLY thing that we may contact you about &#128522; ),
          </p>
          <p>
            should we use your email address, or would you prefer us to contact
            you by phone?
          </p>

          <ContactButtonsDiv>
            <ContactButton
              onClick={() => dispatch(chooseContactMethod("email"))}
            >
              email
            </ContactButton>

            <ContactButton
              className="phone"
              onClick={() => dispatch(chooseContactMethod("phone"))}
            >
              phone
            </ContactButton>
          </ContactButtonsDiv>
        </PaymentFormDiv>
      )}
    </>
  );
};

export default ContactQuestion;
