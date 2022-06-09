import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const usePaymentResultErrorSwal = () => {
  const swal = withReactContent(Swal);

  const paymentResultErrorSwal = (paymentResult) => {
    swal.fire({
      title: `Sorry, There Was An Error Submitting Payment.\nYour Card Has Not Been Charged.\nPlease Try Again.`,
      text: `${paymentResult.error.message}
            Please Contact The App Owner Via the Contact Form If You Require More Help.`,
      background: "black",
      backdrop: `
            rgba(0,0,123,0.8)`,
      icon: "error",
      showCancelButton: false,
      confirmButtonColor: "#3085d6",
      confirmButtonText: "Ok",
      customClass: "confirm",
      allowOutsideClick: false,
      reverseButtons: true,
    });
  };

  return { paymentResultErrorSwal };
};

export default usePaymentResultErrorSwal;
