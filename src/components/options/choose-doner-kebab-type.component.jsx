import { useSelector, useDispatch } from "react-redux";
import { selectIndividualProduct } from "../../store/products/product.selector";

import {
  addDonerKebabType,
  addDonerKebabTypePrice,
} from "../../store/final-item/final-item.action";

import {
  OptionsForm,
  Section,
  RequiredDiv,
  RadioDiv,
} from "../../styles/options-form/options-form.styles";

const ChooseDonerKebabType = () => {
  const product = useSelector(selectIndividualProduct);
  const dispatch = useDispatch();

  const { hasDonerKebabType, donerKebabTypes } = product;

  return (
    <>
      {hasDonerKebabType && (
        <OptionsForm>
          <RequiredDiv>
            <span>required</span>
          </RequiredDiv>

          <Section>
            <p>type:</p>
          </Section>

          {donerKebabTypes.map((type) => {
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
                    dispatch(addDonerKebabType(label));
                    dispatch(addDonerKebabTypePrice(price));
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

export default ChooseDonerKebabType;
