import axios from "axios";

import useHandleIsProcessing from "../../hooks/use-handle-is-processing";
import useContactEmailSuccess from "../../hooks/swals/use-contact-email-success";
import useContactEmailError from "../../hooks/swals/use-contact-email-error";

import Loader from "../loader/loader.component";

import {
  ContactFormButton,
  DisabledContactButton,
} from "../../styles/form/form.styles";

import { emailToSend } from "../../reusable-functions/email-to-send";

const SendMessage = ({ formDetails, setFormDetails }) => {
  const { isProcessing, startIsProcessing, startIsNotProcessing } =
    useHandleIsProcessing();
  const { contactEmailSuccess } = useContactEmailSuccess();
  const { contactEmailError } = useContactEmailError();

  const { name, email, message } = formDetails;

  const handleEmailSendSuccess = () => {
    return [
      contactEmailSuccess(),
      document.getElementById("contact-form").reset(),
      setFormDetails({ name: "", email: "", message: "" }),
    ];
  };

  const sendEmail = async () => {
    startIsProcessing();
    await axios
      .post("/.netlify/functions/send-contact-form-message", {
        message: emailToSend(name, email, message),
      })
      .then(
        (response) => {
          startIsNotProcessing();
          if (response.status === 202) {
            handleEmailSendSuccess();
          }
        },
        (error) => {
          const errorMessage = error.message;
          startIsNotProcessing();
          contactEmailError(errorMessage);
        }
      );
  };

  return (
    <div>
      {!isProcessing ? (
        <ContactFormButton onClick={sendEmail}>Send Message</ContactFormButton>
      ) : (
        <>
          <Loader />
          <DisabledContactButton>please wait...</DisabledContactButton>
        </>
      )}
    </div>
  );
};

export default SendMessage;
