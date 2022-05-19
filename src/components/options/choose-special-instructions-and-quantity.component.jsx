import { useDispatch, useSelector } from "react-redux";

import { addQuantity } from "../../store/final-item/final-item.action";
import { selectQuantity } from "../../store/final-item/final-item.selector";
import { addSpecialInstructions } from "../../store/final-item/final-item.action";

import {
  OptionsForm,
  Section,
  TextAreaDiv,
  RequiredDiv,
  RadioDiv,
  QuantityInput,
} from "../../styles/options-form/options-form.styles";

const ChooseSpecialInstructionsAndQuantity = () => {
  const quantity = useSelector(selectQuantity);
  const dispatch = useDispatch();

  const handleInstructionsChange = (event) => {
    dispatch(addSpecialInstructions(event.target.value));
  };

  const handleQuantityChange = (event) => {
    dispatch(addQuantity(Number(event.target.value)));
  };

  return (
    <>
      <OptionsForm>
        <Section>
          <p>special instructions</p>
        </Section>

        <TextAreaDiv>
          <textarea
            type="text"
            name="specialInstructions"
            placeholder="Anything We Need To Know?"
            onChange={handleInstructionsChange}
          />
        </TextAreaDiv>
      </OptionsForm>
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
    </>
  );
};

export default ChooseSpecialInstructionsAndQuantity;
