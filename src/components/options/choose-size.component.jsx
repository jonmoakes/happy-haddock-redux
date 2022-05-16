import { useSelector } from "react-redux";
import { selectIndividualProduct } from "../../store/products/product.selector";

import useHandleSizeSelection from "../../hooks/use-handle-size-selection";
import SingleSize from "../options/choose-product-size/single-size.component";
import DoubleSize from "../options/choose-product-size/double-size.component";
import SmallSize from "../options/choose-product-size/small-size.component";
import MediumSize from "../options/choose-product-size/medium-size.component";
import LargeSize from "../options/choose-product-size/large-size.component";
import SixNuggetsSize from "../options/choose-product-size/six-nuggets-size.component";
import NineNuggetsSize from "../options/choose-product-size/nine-nuggets.component";
import TwelveNuggetsSize from "../options/choose-product-size/twelve-nuggets-size.component";
import TwentyNuggetsSize from "../options/choose-product-size/twenty-nuggets-size.component";
import OnePieceSize from "../options/choose-product-size/one-piece-size.component";
import TwoPieceSize from "../options/choose-product-size/two-piece-price.component";
import ThreePieceSize from "../options/choose-product-size/three-piece-size.component";
import FourPieceSize from "../options/choose-product-size/four-piece-size.component";

import {
  OptionsForm,
  Section,
  RequiredDiv,
} from "../../styles/options-form/options-form.styles";

const ChooseSize = () => {
  const { handleSizeChange } = useHandleSizeSelection();
  const product = useSelector(selectIndividualProduct);

  const { hasSizeOption } = product;

  return (
    <>
      {hasSizeOption && (
        <OptionsForm onChange={handleSizeChange}>
          <RequiredDiv>
            <span>required</span>
          </RequiredDiv>

          <Section>
            <p>size:</p>
          </Section>

          <SingleSize />
          <DoubleSize />
          <SmallSize />
          <MediumSize />
          <LargeSize />
          <SixNuggetsSize />
          <NineNuggetsSize />
          <TwelveNuggetsSize />
          <TwentyNuggetsSize />
          <OnePieceSize />
          <TwoPieceSize />
          <ThreePieceSize />
          <FourPieceSize />
        </OptionsForm>
      )}
    </>
  );
};

export default ChooseSize;
