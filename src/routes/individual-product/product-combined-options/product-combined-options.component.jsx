import ChooseSize from "../../../components/options/choose-size.component";
import ChooseDonerKebabType from "../../../components/options/choose-doner-kebab-type.component";
import ChooseChickenKebabType from "../../../components/options/choose-chicken-kebab-type.component";
import ChooseMixedKebabType from "../../../components/options/choose-mixed-kebab-type.component";
import ChooseGratedCheese from "../../../components/options/choose-grated-cheese.component";
import ChooseDonerMeat from "../../../components/options/choose-doner-meat.component";
import ChooseCheeseSlice from "../../../components/options/choose-cheese-slice.component";
import ChooseSalad from "../../../components/options/choose-salad.component";
import ChooseSauces from "../../../components/options/choose-sauces/choose-sauces.component";
import ChoosePie from "../../../components/options/choose-pie.component";
import ChooseSaltAndVinegar from "../../../components/options/choose-salt-and-vinegar.component";
import ChooseSpecialInstructionsAndQuantity from "../../../components/options/choose-special-instructions-and-quantity.component";
import ChooseCans from "../../../components/options/choose-cans.component";
import ChooseBottles from "../../../components/options/choose-bottles.component";
import ChooseSingleCondiment from "../../../components/options/choose-single-condiment.component";
import ChooseTwoCondiments from "../../../components/options/choose-two-condiments/choose-two-condiments.component";
import ChooseConeOfChipsSauce from "../../../components/options/choose-cone-of-chips-sauce.component";
import ChooseOneMeat from "../../../components/options/choose-one-meat.component";
import ChooseTwoMeats from "../../../components/options/choose-two-meats/choose-two-meats.component";

const ProductCombinedOptions = () => (
  <>
    <ChooseSize />
    <ChooseDonerKebabType />
    <ChooseChickenKebabType />
    <ChooseMixedKebabType />
    <ChooseOneMeat />
    <ChooseTwoMeats />
    <ChooseGratedCheese />
    <ChooseDonerMeat />
    <ChooseCheeseSlice />
    <ChooseSalad />
    <ChooseSauces />
    <ChoosePie />
    <ChooseSaltAndVinegar />
    <ChooseCans />
    <ChooseBottles />
    <ChooseSingleCondiment />
    <ChooseTwoCondiments />
    <ChooseConeOfChipsSauce />
    <ChooseSpecialInstructionsAndQuantity />
  </>
);

export default ProductCombinedOptions;
