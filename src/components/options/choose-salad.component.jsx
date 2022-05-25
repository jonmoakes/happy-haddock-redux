import { useDispatch, useSelector } from "react-redux";

import { selectIndividualProduct } from "../../store/products/product.selector";
import { addSalad } from "../../store/final-item/final-item.action";

import {
  OptionsForm,
  Section,
  RadioDiv,
} from "../../styles/options-form/options-form.styles";

const ChooseSalad = () => {
  const product = useSelector(selectIndividualProduct);
  const dispatch = useDispatch();
  const { optionsAvailable } = product;

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
      {optionsAvailable[0].saladAvailable && (
        <OptionsForm onChange={handleSaladChange}>
          <Section>
            <p>add Salad?</p>
            <p className="price">( free )</p>
          </Section>

          <RadioDiv>
            <input
              className="checkbox"
              type="checkbox"
              id="salad"
              name="salad"
            />
          </RadioDiv>
        </OptionsForm>
      )}
    </>
  );
};

export default ChooseSalad;
