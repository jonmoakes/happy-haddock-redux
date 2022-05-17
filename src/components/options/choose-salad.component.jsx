import { useDispatch } from "react-redux";

import { addSalad } from "../../store/final-item/final-item.action";

import {
  OptionsForm,
  Section,
  OptionsLabel,
  RadioDiv,
} from "../../styles/options-form/options-form.styles";

const ChooseSalad = () => {
  const dispatch = useDispatch();

  const handleSaladChange = (event) => {
    const checked = event.target.checked;
    if (checked) {
      dispatch(addSalad(true));
    } else {
      dispatch(addSalad(false));
    }
  };

  return (
    <>
      <OptionsForm onChange={handleSaladChange}>
        <Section>
          <p>add Salad?</p>
        </Section>

        <RadioDiv>
          <OptionsLabel>( free )</OptionsLabel>
          <input className="checkbox" type="checkbox" id="salad" name="salad" />
        </RadioDiv>
      </OptionsForm>
    </>
  );
};

export default ChooseSalad;
