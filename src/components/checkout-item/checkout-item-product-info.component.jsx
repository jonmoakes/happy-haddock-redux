import ProductName from "./sections/product-name.component";
// import Sizes from "./sections/sizes.component";
// import KebabType from "./sections/kebab-type.component";
// import Meat from "./sections/meat.component";
// import TwoMeatsOptions from "./sections/two-meats-options.component";
// import AddOns from "./sections/add-ons.component";
// import Salad from "./sections/salad.component";
// import Sauces from "./sections/sauces.component";
// import ConeOfChipsWithSauce from "./sections/cone-of-chips-with-sauce.component";
// import SaltAndVinegar from "./sections/salt-and-vinegar.component";
// import OneCondimentOption from "./sections/one-condiment-option.component";
// import TwoCondimentsOptions from "./sections/two-condiments-options.component";
// import Cans from "./sections/cans.component";
// import Bottles from "./sections/bottles.component";
// import SpecialInstructions from "./sections/special-instructions.component";
// import BreadedFish from "./sections/breaded-fish.component";
// import SmallCod from "./sections/small-cod.component";
// import SmallBreadedCod from "./sections/small-breaded-cod.component";
// import SmallBatteredSausage from "./sections/small-battered-sausage.component";
// import PieOption from "./sections/pie.component";
import { Text } from "./checkout-item.styles";

// Gets cart item from CheckoutItem component.
// This component decides what to render in the left hand side of the top section in the checkout page.
// Sections will only render if they exist on the product - Ie cans won't appear in a burger meal etc.
// Split into own components for readability and passed their appropriate props that have been destructured from the cartItem.
// In each section we check to see if the value exists and render something if it does.
const CheckoutItemProductInfo = ({ cartItem }) => {
  const {
    name,
    // pie,
    // condiment,
    // saltAndVinegar,
    // specialInstructions,
    // size,
    // gratedCheese,
    // donerMeat,
    // cheeseSlice,
    // salad,
    // sauces,
    // bottles,
    // cans,
    // meat,
    // type,
    // coneOfChipsSauce,
    // smallBatteredSausage,
    // breadedFish,
    // smallCod,
    // smallBreadedCod,
    // twoMeats,
    // twoCondiments,
  } = cartItem;

  return (
    <>
      <Text>
        <ProductName name={name} />
        {/* <Sizes size={size} />
        <AddOns
          gratedCheese={gratedCheese}
          donerMeat={donerMeat}
          cheeseSlice={cheeseSlice}
        />
        <KebabType type={type} />
        <Meat name={name} meat={meat} />
        <TwoMeatsOptions twoMeats={twoMeats} />
        <Salad salad={salad} />
        <PieOption name={name} pie={pie} />
        <SaltAndVinegar saltAndVinegar={saltAndVinegar} />
        <Sauces sauces={sauces} />
        <OneCondimentOption condiment={condiment} />
        <TwoCondimentsOptions twoCondiments={twoCondiments} />
        <SmallBatteredSausage smallBatteredSausage={smallBatteredSausage} />
        <BreadedFish breadedFish={breadedFish} />
        <SmallCod smallCod={smallCod} />
        <SmallBreadedCod smallBreadedCod={smallBreadedCod} />
        <ConeOfChipsWithSauce coneOfChipsSauce={coneOfChipsSauce} />
        <Bottles bottles={bottles} />
        <Cans name={name} cans={cans} />
        <SpecialInstructions specialInstructions={specialInstructions} /> */}
      </Text>
    </>
  );
};

export default CheckoutItemProductInfo;
