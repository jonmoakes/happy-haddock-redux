import axios from "axios";

import useHandleIsProcessing from "../../hooks/handlers/use-handle-is-processing";
import useMissingEmailFieldsErrorSwal from "../../hooks/swals/use-missing-email-fields-error-swal";
import useInvalidEmailErrorSwal from "../../hooks/swals/use-invalid-email-error-swal";
import useContactEmailSuccessSwal from "../../hooks/swals/use-contact-email-success-swal";
import useContactEmailErrorSwal from "../../hooks/swals/use-contact-email-error-swal";

import Loader from "../loader/loader.component";

import {
  ContactFormButton,
  DisabledContactButton,
} from "../../styles/form/form.styles";

import {
  emailToSend,
  validateEmail,
} from "../../reusable-functions/email-to-send";

const SendMessage = ({ formDetails, setFormDetails }) => {
  const { isProcessing, startIsProcessing, startIsNotProcessing } =
    useHandleIsProcessing();
  const { missingEmailFieldsErrorSwal } = useMissingEmailFieldsErrorSwal();
  const { invalidEmailErrorSwal } = useInvalidEmailErrorSwal();
  const { contactEmailSuccessSwal } = useContactEmailSuccessSwal();
  const { contactEmailErrorSwal } = useContactEmailErrorSwal();

  const { name, email, message } = formDetails;

  const handleEmailSendSuccess = () => {
    return [
      contactEmailSuccessSwal(),
      document.getElementById("contact-form").reset(),
      setFormDetails({ name: "", email: "", message: "" }),
    ];
  };

  const sendEmail = async () => {
    if (!name || !email || !message) {
      missingEmailFieldsErrorSwal();
      return;
    } else if (!validateEmail(email)) {
      invalidEmailErrorSwal();
      return;
    }
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
          contactEmailErrorSwal(errorMessage);
        }
      );
  };

  return (
    <div>
      {!isProcessing ? (
        <ContactFormButton type="submit" onClick={sendEmail}>
          Send Message
        </ContactFormButton>
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
