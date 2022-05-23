import { useSelector, useDispatch } from "react-redux";
import { selectIndividualProduct } from "../../store/products/product.selector";

import {
  addChosenType,
  addTypeSelectedPrice,
} from "../../store/final-item/final-item.action";

import {
  OptionsForm,
  Section,
  RequiredDiv,
  RadioDiv,
} from "../../styles/options-form/options-form.styles";

const ChooseType = () => {
  const product = useSelector(selectIndividualProduct);
  const dispatch = useDispatch();

  const { hasTypeOption, types } = product;

  return (
    <>
      {hasTypeOption && (
        <OptionsForm>
          <RequiredDiv>
            <span>required</span>
          </RequiredDiv>

          <Section>
            <p>type:</p>
          </Section>

          {types.map((type) => {
            const { label, price } = type;
            return (
              <RadioDiv key={label}>
                <label>
                  {label} ( + £{price.toFixed(2)} )
                </label>
                <input
                  type="radio"
                  value={label}
                  onClick={() => {
                    dispatch(addChosenType(label));
                    dispatch(addTypeSelectedPrice(price));
                  }}
                />
                <hr />
              </RadioDiv>
            );
          })}
        </OptionsForm>
      )}
    </>
  );
};

export default ChooseType;
