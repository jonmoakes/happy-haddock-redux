import { useDispatch, useSelector } from "react-redux";

import { setCustomerDetails } from "../store/cart/cart.action";
import { selectCustomerDetails } from "../store/cart/cart.selector";

const useHandleCustomerDetailsFormChange = () => {
  const customerDetails = useSelector(selectCustomerDetails);
  const dispatch = useDispatch();

  const handleCustomerDetailsFormChange = (event) => {
    const { name, value } = event.target;
    dispatch(setCustomerDetails({ ...customerDetails, [name]: value }));
  };

  return { handleCustomerDetailsFormChange };
};

export default useHandleCustomerDetailsFormChange;
