import { useState } from "react";

const useHandleCustomerDetailsFormChange = () => {
  const [customerDetails, setCustomerDetails] = useState({
    name: "",
    email: "",
    phoneNumber: null,
  });

  const handleCustomerDetailsFormChange = (event) => {
    const { name, value } = event.target;
    setCustomerDetails({ ...customerDetails, [name]: value });
  };

  return { handleCustomerDetailsFormChange, customerDetails };
};

export default useHandleCustomerDetailsFormChange;
