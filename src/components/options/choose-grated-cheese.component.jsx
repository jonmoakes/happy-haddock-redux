import { useDispatch } from "react-redux";

import { addGratedCheesePrice } from "../../store/final-item/final-item.action";

import {
  OptionsForm,
  Section,
  RadioDiv,
} from "../../styles/options-form/options-form.styles";

const ChooseGratedCheese = () => {
  const dispatch = useDispatch();

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
    </>
  );
};

export default ChooseGratedCheese;
