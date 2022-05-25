import { useSelector, useDispatch } from "react-redux";
import { selectIndividualProduct } from "../../store/products/product.selector";

import {
  addMixedKebabType,
  addMixedKebabTypePrice,
} from "../../store/final-item/final-item.action";

import {
  OptionsForm,
  Section,
  RequiredDiv,
  RadioDiv,
} from "../../styles/options-form/options-form.styles";

const ChooseMixedKebabType = () => {
  const product = useSelector(selectIndividualProduct);
  const dispatch = useDispatch();

  const { hasMixedKebabType, mixedKebabTypes } = product;

  return (
    <>
      {hasMixedKebabType && (
        <OptionsForm>
          <RequiredDiv>
            <span>required</span>
          </RequiredDiv>

          <Section>
            <p>type:</p>
          </Section>

          {mixedKebabTypes.map((type) => {
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
                    dispatch(addMixedKebabType(label));
                    dispatch(addMixedKebabTypePrice(price));
                  }}
                  name="type"
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

export default ChooseMixedKebabType;
