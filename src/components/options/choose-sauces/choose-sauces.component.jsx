import { useState, useEffect, Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";

import { addSauces } from "../../../store/final-item/final-item.action";
import { selectSaucesSelected } from "../../../store/final-item/final-item.selector";
import { selectIndividualProduct } from "../../../store/products/product.selector";

import ChooseOneSauce from "./choose-one-sauce.component";
import ChooseMultipleSauces from "./choose-multiple-sauces.component";
import ChooseSaucesInfo from "./choose-sauces-info.component";

import { defaultSauces } from "./default-sauces";

import { tubOfSauce, megaSnackBox } from "../../../strings/strings";

import {
  OptionsForm,
  RequiredDiv,
} from "../../../styles/options-form/options-form.styles";

const ChooseSauces = () => {
  const [chosenSauces, setChosenSauces] = useState(defaultSauces);
  const product = useSelector(selectIndividualProduct);
  const saucesSelected = useSelector(selectSaucesSelected);

  const { name, optionsAvailable } = product;
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
      {optionsAvailable[0].saucesAvailable && (
        <>
          <OptionsForm onChange={handleSaucesChange}>
            <RequiredDiv>
              <span>required</span>
            </RequiredDiv>

            {name === tubOfSauce || name === megaSnackBox ? (
              <ChooseOneSauce />
            ) : (
              <ChooseMultipleSauces />
            )}
          </OptionsForm>
          <ChooseSaucesInfo {...{ saucesSelected }} />
        </>
      )}
    </>
  );
};

export default ChooseSauces;
