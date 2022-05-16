import PaymentFormActionTypes from "./payment-form.types";

const INITIAL_STATE = {
  choosePhone: false,
  chooseEmail: false,
  okButtonClicked: false,
};

const paymentFormReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PaymentFormActionTypes.CHOOSE_PHONE:
      return {
        ...state,
        choosePhone: true,
      };
    case PaymentFormActionTypes.CHOOSE_EMAIL:
      return {
        ...state,
        chooseEmail: true,
      };
    case PaymentFormActionTypes.CLEAR_CONTACT_PREFERENCE_INFO:
      return {
        ...state,
        chooseEmail: false,
        choosePhone: false,
      };
    case PaymentFormActionTypes.OK_BUTTON_CLICKED:
      return {
        ...state,
        okButtonClicked: true,
      };
    case PaymentFormActionTypes.CLEAR_OK_BUTTON_CLICKED:
      return {
        ...state,
        okButtonClicked: false,
      };
    default:
      return state;
  }
};

export default paymentFormReducer;
