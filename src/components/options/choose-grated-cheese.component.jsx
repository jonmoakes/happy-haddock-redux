import { useDispatch, useSelector } from "react-redux";

import { addGratedCheesePrice } from "../../store/final-item/final-item.action";
import { selectHasSizeBeenChosen } from "../../store/final-item/final-item.selector";
import { selectIndividualProduct } from "../../store/products/product.selector";

import {
  OptionsForm,
  Section,
  RadioDiv,
} from "../../styles/options-form/options-form.styles";

const ChooseGratedCheese = () => {
  const product = useSelector(selectIndividualProduct);
  const hasSizeBeenChosen = useSelector(selectHasSizeBeenChosen);
  const dispatch = useDispatch();

  const { hasSizeOption, gratedCheeseAvailable } = product;

  const handleGratedCheeseChange = (event) => {
    const checked = event.target.checked;
    if (checked) {
      dispatch(addGratedCheesePrice(1.3));
    } else {
      dispatch(addGratedCheesePrice(0));
    }
  };

  return (
    <>
      {((hasSizeOption && hasSizeBeenChosen && gratedCheeseAvailable) ||
        (!hasSizeOption && !hasSizeBeenChosen && gratedCheeseAvailable)) && (
        <OptionsForm onChange={handleGratedCheeseChange}>
          <Section>
            <p>add grated cheese?</p>
            <p
              style={{
                fontSize: "16px",
                color: "black",
                textShadow: "none",
                textDecoration: "none",
                marginTop: "-10px",
              }}
            >
              ( + £1.30 )
            </p>
          </Section>

          <RadioDiv>
            <input
              className="checkbox"
              type="checkbox"
              id="gratedCheese"
              name="gratedCheese"
            />
          </RadioDiv>
        </OptionsForm>
      )}
    </>
  );
};

export default ChooseGratedCheese;
