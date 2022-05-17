import { useDispatch, useSelector } from "react-redux";

import { addQuantity } from "../../store/final-item/final-item.action";
import { selectSaucesSelected } from "../../store/final-item/final-item.selector";

import { numberOfSaucesChosen } from "../../reusable-functions/resuable-functions";

import {
  OptionsForm,
  RequiredDiv,
  Section,
  RadioDiv,
  QuantityInput,
} from "../../styles/options-form/options-form.styles";

const ChooseQuantity = () => {
  const saucesSelected = useSelector(selectSaucesSelected);
  const dispatch = useDispatch();

  const handleQuantityChange = (event) => {
    dispatch(addQuantity(Number(event.target.value)));
  };

  return (
    <>
      {numberOfSaucesChosen(saucesSelected) > 0 &&
        numberOfSaucesChosen(saucesSelected) <= 3 && (
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
              />
            </RadioDiv>
          </OptionsForm>
        )}
    </>
  );
};

export default ChooseQuantity;
