import { useDispatch, useSelector } from "react-redux";

import { selectIndividualProduct } from "../../store/products/product.selector";
import { addCheeseSlice } from "../../store/final-item/final-item.action";

import {
  OptionsForm,
  Section,
  RadioDiv,
} from "../../styles/options-form/options-form.styles";

const ChooseCheeseSlice = () => {
  const product = useSelector(selectIndividualProduct);
  const dispatch = useDispatch();
  const { optionsAvailable } = product;

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
      {optionsAvailable[0].cheeseSliceAvailable && (
        <OptionsForm onChange={handleCheeseSliceChange}>
          <Section>
            <p>add a cheese slice?</p>
            <p className="price">( free )</p>
          </Section>

          <RadioDiv>
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
