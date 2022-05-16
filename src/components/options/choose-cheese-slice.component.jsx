import { useDispatch, useSelector } from "react-redux";

import { addCheeseSlice } from "../../store/final-item/final-item.action";
import { selectHasSizeBeenChosen } from "../../store/final-item/final-item.selector";
import { selectIndividualProduct } from "../../store/products/product.selector";

import {
  OptionsForm,
  Section,
  RadioDiv,
} from "../../styles/options-form/options-form.styles";

const ChooseCheeseSlice = () => {
  const product = useSelector(selectIndividualProduct);
  const hasSizeBeenChosen = useSelector(selectHasSizeBeenChosen);
  const dispatch = useDispatch();

  const { hasSizeOption, cheeseSliceAvailable } = product;

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
      {((hasSizeOption && hasSizeBeenChosen && cheeseSliceAvailable) ||
        (!hasSizeOption && !hasSizeBeenChosen && cheeseSliceAvailable)) && (
        <OptionsForm onChange={handleCheeseSliceChange}>
          <Section>
            <p>add a cheese slice?</p>
            <p
              style={{
                fontSize: "16px",
                color: "black",
                textShadow: "none",
                textDecoration: "none",
                marginTop: "-10px",
              }}
            ></p>
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
