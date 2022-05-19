import { useDispatch, useSelector } from "react-redux";

import { addQuantity } from "../../store/final-item/final-item.action";
import {
  selectQuantity,
  selectSaucesSelected,
  selectChosenSize,
  selectSaltAndVinegar,
} from "../../store/final-item/final-item.selector";
import { selectIndividualProduct } from "../../store/products/product.selector";

import { numberOfSaucesChosenCheck } from "../../reusable-functions/resuable-functions";

import {
  OptionsForm,
  RequiredDiv,
  Section,
  RadioDiv,
  QuantityInput,
} from "../../styles/options-form/options-form.styles";

const ChooseQuantity = () => {
  const saucesSelected = useSelector(selectSaucesSelected);
  const product = useSelector(selectIndividualProduct);
  const quantity = useSelector(selectQuantity);
  const chosenSize = useSelector(selectChosenSize);
  const saltAndVinegar = useSelector(selectSaltAndVinegar);
  const dispatch = useDispatch();

  const { noOptionsAvailable, hasSizeOption, saltAndVinegarAvailable } =
    product;

  const handleQuantityChange = (event) => {
    dispatch(addQuantity(Number(event.target.value)));
  };

  return (
    <>
      {(numberOfSaucesChosenCheck(saucesSelected) ||
        noOptionsAvailable ||
        (hasSizeOption &&
          chosenSize &&
          saltAndVinegarAvailable &&
          saltAndVinegar)) && (
        <OptionsForm className="quantity-div">
          <RequiredDiv>
            <span>required</span>
          </RequiredDiv>
          <Section>
            <p>quantity:</p>
          </Section>

          <RadioDiv>
            <QuantityInput
              type="number"
              pattern="\d*"
              name="quantity"
              onChange={handleQuantityChange}
              placeholder="Ie '2' Not 'Two' :)"
              defaultValue={quantity}
            />
          </RadioDiv>
        </OptionsForm>
      )}
    </>
  );
};

export default ChooseQuantity;
