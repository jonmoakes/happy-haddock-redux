import { useDispatch } from "react-redux";

import { addCheeseSlice } from "../../store/final-item/final-item.action";

import {
  OptionsForm,
  Section,
  OptionsLabel,
  RadioDiv,
} from "../../styles/options-form/options-form.styles";

const ChooseCheeseSlice = () => {
  const dispatch = useDispatch();

  const handleCheeseSliceChange = (event) => {
    const checked = event.target.checked;
    if (checked) {
      dispatch(addCheeseSlice(true));
    } else {
      dispatch(addCheeseSlice(false));
    }
  };

  return (
    <>
      <OptionsForm onChange={handleCheeseSliceChange}>
        <Section>
          <p>add a cheese slice?</p>
        </Section>

        <RadioDiv>
          <OptionsLabel> ( free )</OptionsLabel>
          <input
            className="checkbox"
            type="checkbox"
            id="cheeseSlice"
            name="cheeseSlice"
          />
        </RadioDiv>
      </OptionsForm>
    </>
  );
};

export default ChooseCheeseSlice;
