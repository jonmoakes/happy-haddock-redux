import { useDispatch, useSelector } from "react-redux";

import { addDonerMeatPrice } from "../../store/final-item/final-item.action";
import { selectHasSizeBeenChosen } from "../../store/final-item/final-item.selector";
import { selectIndividualProduct } from "../../store/products/product.selector";

import {
  OptionsForm,
  Section,
  RadioDiv,
} from "../../styles/options-form/options-form.styles";

const ChooseDonerMeat = () => {
  const product = useSelector(selectIndividualProduct);
  const hasSizeBeenChosen = useSelector(selectHasSizeBeenChosen);
  const dispatch = useDispatch();

  const { hasSizeOption, donerMeatAvailable } = product;

  const handleDonerMeatChange = (event) => {
    const checked = event.target.checked;
    if (checked) {
      dispatch(addDonerMeatPrice(1.7));
    } else {
      dispatch(addDonerMeatPrice(0));
    }
  };

  return (
    <>
      {((hasSizeOption && hasSizeBeenChosen && donerMeatAvailable) ||
        (!hasSizeOption && !hasSizeBeenChosen && donerMeatAvailable)) && (
        <OptionsForm onChange={handleDonerMeatChange}>
          <Section>
            <p>add doner meat?</p>
            <p
              style={{
                fontSize: "16px",
                color: "black",
                textShadow: "none",
                textDecoration: "none",
                marginTop: "-10px",
              }}
            >
              ( + £1.70 )
            </p>
          </Section>

          <RadioDiv>
            <input
              className="checkbox"
              type="checkbox"
              id="donerMeat"
              name="donerMeat"
            />
          </RadioDiv>
        </OptionsForm>
      )}
    </>
  );
};

export default ChooseDonerMeat;
