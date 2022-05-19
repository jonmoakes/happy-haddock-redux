import { useDispatch, useSelector } from "react-redux";

import { selectIndividualProduct } from "../../store/products/product.selector";
import { addSalad } from "../../store/final-item/final-item.action";

import {
  OptionsForm,
  Section,
  OptionsLabel,
  RadioDiv,
} from "../../styles/options-form/options-form.styles";

const ChooseSalad = () => {
  const product = useSelector(selectIndividualProduct);
  const dispatch = useDispatch();
  const { saladAvailable } = product;

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
      {saladAvailable && (
        <OptionsForm onChange={handleSaladChange}>
          <Section>
            <p>add Salad?</p>
          </Section>

          <RadioDiv>
            <OptionsLabel>( free )</OptionsLabel>
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
