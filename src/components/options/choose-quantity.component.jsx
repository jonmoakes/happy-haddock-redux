import { useDispatch, useSelector } from "react-redux";

import { addQuantity } from "../../store/final-item/final-item.action";
import {
  selectQuantity,
  selectSaucesSelected,
} from "../../store/final-item/final-item.selector";

import { numberOfSaucesChosenCheck } from "../../reusable-functions/resuable-functions";

import {
  OptionsForm,
  RequiredDiv,
  Section,
  RadioDiv,
  QuantityInput,
} from "../../styles/options-form/options-form.styles";

const ChooseQuantity = () => {
  const saucesSelected = useSelector(selectSaucesSelected);
  const quantity = useSelector(selectQuantity);
  const dispatch = useDispatch();

  const handleQuantityChange = (event) => {
    dispatch(addQuantity(Number(event.target.value)));
  };

  return (
    <>
      {numberOfSaucesChosenCheck(saucesSelected) && (
        <OptionsForm className="quantity-div">
          <RequiredDiv>
            <span>required</span>
          </RequiredDiv>
          <Section>
            <p>quantity:</p>
          </Section>

          <RadioDiv>
            <QuantityInput
              type="number"
              pattern="\d*"
              name="quantity"
              onChange={handleQuantityChange}
              placeholder="Ie '2' Not 'Two' :)"
              defaultValue={quantity}
            />
          </RadioDiv>
        </OptionsForm>
      )}
    </>
  );
};

export default ChooseQuantity;
