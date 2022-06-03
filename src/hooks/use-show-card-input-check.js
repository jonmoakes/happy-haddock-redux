import { useDispatch, useSelector } from "react-redux";

import {
  selectContactMethod,
  selectShowCardInput,
} from "../store/cart/cart.selector";
import { handleShowCardInput } from "../store/cart/cart.action";

import {
  emailCheckPassed,
  phoneCheckPassed,
} from "../reusable-functions/show-card-input-check";

const useShowCardInputCheck = () => {
  const contactMethod = useSelector(selectContactMethod);
  const showCardInput = useSelector(selectShowCardInput);
  const dispatch = useDispatch();

  const showCardInputCheck = (name, email, phoneNumber) => {
    if (
      (!showCardInput &&
        contactMethod === "email" &&
        emailCheckPassed(name, email)) ||
      (!showCardInput &&
        contactMethod === "phone" &&
        phoneCheckPassed(name, email, phoneNumber))
    ) {
      dispatch(handleShowCardInput(true));
    } else if (
      (showCardInput &&
        contactMethod === "email" &&
        !emailCheckPassed(name, email)) ||
      (showCardInput &&
        contactMethod === "phone" &&
        !phoneCheckPassed(name, email, phoneNumber))
    ) {
      dispatch(handleShowCardInput(false));
    }
  };

  return { showCardInputCheck };
};

export default useShowCardInputCheck;
