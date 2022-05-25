import { useDispatch, useSelector } from "react-redux";

import { selectIndividualProduct } from "../../store/products/product.selector";
import { addDonerMeatPrice } from "../../store/final-item/final-item.action";

import {
  OptionsForm,
  Section,
  RadioDiv,
} from "../../styles/options-form/options-form.styles";

const ChooseDonerMeat = () => {
  const product = useSelector(selectIndividualProduct);
  const dispatch = useDispatch();
  const { optionsAvailable } = product;

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
      {optionsAvailable[0].donerMeatAvailable && (
        <OptionsForm onChange={handleDonerMeatChange}>
          <Section>
            <p>add doner meat?</p>
            <p className="price">( + £1.70 )</p>
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
