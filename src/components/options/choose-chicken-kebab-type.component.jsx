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

  const { optionsAvailable, chickenKebabtypes } = product;

  return (
    <>
      {optionsAvailable[0].chickenKebabTypeAvailable && (
        <OptionsForm>
          <RequiredDiv>
            <span>required</span>
          </RequiredDiv>

          <Section className="type">
            <p>type:</p>
          </Section>

          {chickenKebabtypes.map((type) => {
            const { label, price } = type;
            return (
              <RadioDiv key={label}>
                <label>{label}</label>
                <label className="price">( + £{price.toFixed(2)} )</label>
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
