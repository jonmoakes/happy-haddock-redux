import { useSelector, useDispatch } from "react-redux";
import { selectIndividualProduct } from "../../store/products/product.selector";

import {
  addChickenKebabType,
  addChickenKebabTypePrice,
} from "../../store/final-item/final-item.action";

import {
  OptionsForm,
  Section,
  RequiredDiv,
  RadioDiv,
} from "../../styles/options-form/options-form.styles";

const ChooseChickenKebabType = () => {
  const product = useSelector(selectIndividualProduct);
  const dispatch = useDispatch();

  const { hasChickenKebabType, chickenKebabTypes } = product;

  return (
    <>
      {hasChickenKebabType && (
        <OptionsForm>
          <RequiredDiv>
            <span>required</span>
          </RequiredDiv>

          <Section>
            <p>type:</p>
          </Section>

          {chickenKebabTypes.map((type) => {
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
                    dispatch(addChickenKebabType(label));
                    dispatch(addChickenKebabTypePrice(price));
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

export default ChooseChickenKebabType;
