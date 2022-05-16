import { createSelector } from "reselect";

const selectPaymentForm = (state) => state.paymentForm;

export const selectChoosePhone = createSelector(
  [selectPaymentForm],
  (paymentForm) => paymentForm.choosePhone
);

export const selectChooseEmail = createSelector(
  [selectPaymentForm],
  (paymentForm) => paymentForm.chooseEmail
);

export const selectOkButtonClicked = createSelector(
  [selectPaymentForm],
  (paymentForm) => paymentForm.okButtonClicked
);
