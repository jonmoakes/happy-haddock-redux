import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import useEmailAlreadyInUseSwal from "./swals/use-email-already-in-use-swal";
import useWeakPasswordSwal from "./swals/use-weak-password-swal";
import useGenericErrorSwal from "./swals/use-genereic-error-swal";

import { resetErrorMessage } from "../store/user/user.action";
import { selectUserError } from "../store/user/user.selector";

const useHandleSignUpFormError = (resetFormFields) => {
  const { emailAlreadyInUseSwal } = useEmailAlreadyInUseSwal();
  const { weakPasswordSwal } = useWeakPasswordSwal();
  const { genericErrorSwal } = useGenericErrorSwal();

  const error = useSelector(selectUserError);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!error) return;
    if (error.code.includes("auth/email-already-in-use")) {
      emailAlreadyInUseSwal();
      dispatch(resetErrorMessage());
      resetFormFields();
      return;
    } else if (error.code.includes("weak-password")) {
      weakPasswordSwal();
      dispatch(resetErrorMessage());
    } else {
      genericErrorSwal(error);
      dispatch(resetErrorMessage());
      resetFormFields();
    }
  }, [
    error,
    emailAlreadyInUseSwal,
    weakPasswordSwal,
    genericErrorSwal,
    dispatch,
    resetFormFields,
  ]);
};

export default useHandleSignUpFormError;
