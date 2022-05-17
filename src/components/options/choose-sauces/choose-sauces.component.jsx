import { useState, useEffect, Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";

import { addSauces } from "../../../store/final-item/final-item.action";
import { selectIndividualProduct } from "../../../store/products/product.selector";
import {
  selectSaltAndVinegar,
  selectChosenSize,
} from "../../../store/final-item/final-item.selector";

import { defaultSauces } from "./default-sauces";
import { saucesCheckboxes } from "./sauces-checkboxes";

import {
  OptionsForm,
  RequiredDiv,
  Section,
  RadioDiv,
  SaucesChoiceHeading,
  OptionsLabel,
} from "../../../styles/options-form/options-form.styles";

const ChooseSauces = () => {
  const [chosenSauces, setChosenSauces] = useState(defaultSauces);
  const product = useSelector(selectIndividualProduct);
  const saltAndVinegar = useSelector(selectSaltAndVinegar);
  const chosenSize = useSelector(selectChosenSize);

  const { saucesAvailable, hasSizeOption } = product;
  const dispatch = useDispatch();

  const handleSaucesChange = (event) => {
    const { name } = event.target;
    const sauceChecked = event.target.checked;
    setChosenSauces({ ...chosenSauces, [name]: sauceChecked });
  };

  useEffect(() => {
    dispatch(addSauces(chosenSauces));
  }, [dispatch, chosenSauces]);

  return (
    <>
      {((!saucesAvailable && saltAndVinegar) ||
        (saucesAvailable && hasSizeOption && chosenSize)) && (
        <OptionsForm onChange={handleSaucesChange}>
          <RequiredDiv>
            <span>required</span>
          </RequiredDiv>

          <Section>
            <SaucesChoiceHeading>choose up to 3 sauces:</SaucesChoiceHeading>
          </Section>

          <RadioDiv>
            {saucesCheckboxes.map((checkbox) => (
              <Fragment key={checkbox.id}>
                <OptionsLabel>{checkbox.label}</OptionsLabel>
                <input
                  className="checkbox"
                  type="checkbox"
                  id={checkbox.name}
                  name={checkbox.name}
                  checked={checkbox.checked}
                />
                <hr />
              </Fragment>
            ))}
          </RadioDiv>
        </OptionsForm>
      )}
    </>
  );
};

export default ChooseSauces;
