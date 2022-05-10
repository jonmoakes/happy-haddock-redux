import { useSelector } from "react-redux";

import { selectChoosePhone } from "../../redux/payment-form/payment-form.selectors";

const EmailLabel = () => {
  const choosePhone = useSelector(selectChoosePhone);
  return (
    <>
      {!choosePhone ? (
        <label>Email:</label>
      ) : (
        <label>
          Email: <span>( For your receipt )</span>
        </label>
      )}
    </>
  );
};

export default EmailLabel;
