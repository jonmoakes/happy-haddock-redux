import { useDispatch, useSelector } from "react-redux";

import { selectIndividualProduct } from "../../store/products/product.selector";
import { selectChosenSize } from "../../store/final-item/final-item.selector";
import { addCheeseSlice } from "../../store/final-item/final-item.action";

import {
  OptionsForm,
  Section,
  OptionsLabel,
  RadioDiv,
} from "../../styles/options-form/options-form.styles";

const ChooseCheeseSlice = () => {
  const product = useSelector(selectIndividualProduct);
  const chosenSize = useSelector(selectChosenSize);
  const dispatch = useDispatch();
  const { cheeseSliceAvailable, hasSizeOption } = product;

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
      {((cheeseSliceAvailable && !hasSizeOption) ||
        (cheeseSliceAvailable && hasSizeOption && chosenSize)) && (
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
      )}
    </>
  );
};

export default ChooseCheeseSlice;
