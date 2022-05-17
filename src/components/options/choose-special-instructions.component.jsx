import { useDispatch, useSelector } from "react-redux";

import { addSpecialInstructions } from "../../store/final-item/final-item.action";
import { selectSaucesSelected } from "../../store/final-item/final-item.selector";

import { numberOfSaucesChosen } from "../../reusable-functions/resuable-functions";

import {
  OptionsForm,
  Section,
  TextAreaDiv,
} from "../../styles/options-form/options-form.styles";

const ChooseSpecialInstructions = () => {
  const saucesSelected = useSelector(selectSaucesSelected);
  const dispatch = useDispatch();

  const handleInstructionsChange = (event) => {
    dispatch(addSpecialInstructions(event.target.value));
  };

  return (
    <>
      {numberOfSaucesChosen(saucesSelected) > 0 &&
        numberOfSaucesChosen(saucesSelected) <= 3 && (
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
        )}
    </>
  );
};

export default ChooseSpecialInstructions;
