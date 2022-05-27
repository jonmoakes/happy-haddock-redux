import ProductName from "./sections/product-name.component";
import Sizes from "./sections/sizes.component";
import DonerKebabType from "./sections/doner-kebab-type.component";
import ChickenKebabType from "./sections/chicken-kebab-type.component";
import MixedKebabType from "./sections/mixed-kebab-type.component";
import Meat from "./sections/meat.component";
import TwoMeatsOptions from "./sections/two-meats-options.component";
import AddOns from "./sections/add-ons.component";
import Salad from "./sections/salad.component";
import Sauces from "./sections/sauces.component";
import PieOption from "./sections/pie-option.component";
import SaltAndVinegar from "./sections/salt-and-vinegar.component";
import Can from "./sections/can.component";
import Bottles from "./sections/bottles.component";
import SingleCondiment from "./sections/single-condiment.component";
import TwoCondiments from "./sections/two-condiments.component";
import ConeOfChipsWithSauce from "./sections/cone-of-chips-with-sauce.component";
import SpecialInstructions from "./sections/special-instructions.component";

import { Text } from "./checkout-item.styles";

const CheckoutItemProductInfo = ({ cartItem }) => {
  const {
    name,
    chosenSize,
    donerKebabType,
    chickenKebabType,
    mixedKebabType,
    oneMeat,
    twoMeats,
    gratedCheesePrice,
    donerMeatPrice,
    cheeseSliceSelected,
    saladSelected,
    saucesSelected,
    pie,
    saltAndVinegar,
    can,
    bottles,
    singleCondiment,
    twoCondiments,
    coneOfChipsSauce,
    specialInstructions,
  } = cartItem;

  return (
    <>
      <Text>
        <ProductName {...{ name }} />
        <Sizes {...{ chosenSize }} />
        <DonerKebabType {...{ donerKebabType }} />
        <ChickenKebabType {...{ chickenKebabType }} />
        <MixedKebabType {...{ mixedKebabType }} />
        <Meat {...{ name, oneMeat }} />
        <TwoMeatsOptions {...{ twoMeats }} />
        <AddOns
          {...{ gratedCheesePrice, donerMeatPrice, cheeseSliceSelected }}
        />
        <Salad {...{ saladSelected }} />
        <Sauces {...{ saucesSelected }} />
        <PieOption {...{ pie }} />
        <SaltAndVinegar {...{ saltAndVinegar }} />
        <Can {...{ name, can }} />
        <Bottles {...{ bottles }} />
        <SingleCondiment {...{ singleCondiment }} />
        <TwoCondiments {...{ twoCondiments }} />
        <ConeOfChipsWithSauce {...{ coneOfChipsSauce }} />
        <SpecialInstructions {...{ specialInstructions }} />
      </Text>
    </>
  );
};

export default CheckoutItemProductInfo;
