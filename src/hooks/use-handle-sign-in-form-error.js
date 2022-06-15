import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import useNetworkErrorSwal from "./swals/use-network-error-swal";
import useErrorSigningInSwal from "./swals/use-error-signing-in-swal";

import { resetErrorMessage } from "../store/user/user.action";
import { selectUserError } from "../store/user/user.selector";

import { networkRequestFailedError } from "../strings/strings";

const useHandleSignInFormError = (resetFormFields) => {
  const { networkErrorSwal } = useNetworkErrorSwal();
  const { errorSigningInSwal } = useErrorSigningInSwal();

  const error = useSelector(selectUserError);
  const dispatch = useDispatch();

  useEffect(() => {
    if (error && error.code.includes(networkRequestFailedError)) {
      networkErrorSwal();
      dispatch(resetErrorMessage());
    } else if (error && !error.code.includes(networkRequestFailedError)) {
      resetFormFields();
      errorSigningInSwal();
      dispatch(resetErrorMessage());
    }
  }, [error, errorSigningInSwal, networkErrorSwal, dispatch, resetFormFields]);
};

export default useHandleSignInFormError;
