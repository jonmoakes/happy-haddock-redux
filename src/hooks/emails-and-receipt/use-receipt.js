import { useSelector } from "react-redux";
import { selectCartItems } from "../../store/cart/cart.selector";

const useReceipt = () => {
  const cartItems = useSelector(selectCartItems);

  const receipt = cartItems.map((item) => {
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
      price,
      selectedOptionsCombinedPrice,
      quantity,
    } = item;
    let { specialInstructions } = item;

    if (specialInstructions === "") {
      specialInstructions = "None Provided";
    }

    const sauces = Object.keys(saucesSelected).filter(
      (key) => saucesSelected[key]
    );

    //adds a space between camel case words in it - ie sweetChilli becomes sweet chilli
    const saucesformat = sauces.map((sauce) =>
      sauce.replace(/\B([A-Z])\B/g, " $1")
    );
    const { peas, beans, curry, gravy } = twoCondiments;
    const { doner, tikka, mediterranean } = twoMeats;

    const itemName = `Name:\n${name.toUpperCase()}\n\n`;

    const itemSize = chosenSize ? `Size:\n${chosenSize.toUpperCase()}\n\n` : "";

    const chosenDonerKebabType = donerKebabType
      ? `Type:\n${donerKebabType.toUpperCase()}\n\n`
      : "";
    const chosenChickenKebabType = chickenKebabType
      ? `Type:\n${chickenKebabType.toUpperCase()}\n\n`
      : "";

    const chosenMixedKebabType = mixedKebabType
      ? `Type:\n${mixedKebabType.toUpperCase()}\n\n`
      : "";

    const chosenSaltAndVinegar = saltAndVinegar
      ? `Salt & Vinegar?\n${saltAndVinegar.toUpperCase()}\n\n`
      : "";

    const chosenPie = pie ? `Pie:\n${pie.toUpperCase()}\n\n` : "";

    const chosenAddOns =
      gratedCheesePrice || donerMeatPrice || cheeseSliceSelected
        ? "Add Ons:\n"
        : "";

    const chosenGratedCheese = gratedCheesePrice ? `GRATED CHEESE\n` : "";

    const chosenDonerMeat = donerMeatPrice ? `DONER MEAT\n` : "";

    const chosenCheeseSlice = cheeseSliceSelected ? "CHEESE SLICE\n\n" : "";

    const chosenSalad = saladSelected ? `\nSalad\nYES\n\n` : "";

    const chosenSauces = sauces.length
      ? `Sauces Selected:\n${saucesformat}\n\n`
      : "";

    const chosenCan = can ? `Chosen Can:\n${can.toUpperCase()}\n\n` : "";

    const chosenBottle = bottles
      ? `Chosen Bottle:\n${bottles.toUpperCase()}\n\n`
      : "";

    const chosenConeOfChipsSauce = coneOfChipsSauce
      ? `\nSauce:\n${coneOfChipsSauce.toUpperCase()}\n\n`
      : "";

    const chosenSingleCondiment = singleCondiment
      ? `Condiment:\n${singleCondiment.toUpperCase()}\n\n`
      : "";

    const chosenTwoCondimentsHeading =
      peas || beans || curry || gravy ? "Condiments Selected:\n" : "";

    const chosenPeas = peas ? "PEAS\n" : "";
    const chosenBeans = beans ? "BEANS\n" : "";
    const chosenCurry = curry ? "CURRY\n" : "";
    const chosenGravy = gravy ? "GRAVY\n" : "";

    const chosenMeat = oneMeat ? `MEAT:\n${oneMeat.toUpperCase()}\n\n` : "";

    const chosenTwoMeatsHeading =
      doner || tikka || mediterranean ? "Meats Selected:\n" : "";
    const chosenDoner = doner ? "DONER\n" : "";
    const chosenTikka = tikka ? "TIKKA\n" : "";
    const chosenMed = mediterranean ? "MEDDITERANNEAN\n" : "";

    const itemPrice = (price + selectedOptionsCombinedPrice) * quantity;

    const finalReceipt = `start${itemName}${itemSize}${chosenDonerKebabType}${chosenChickenKebabType}${chosenMixedKebabType}${chosenSaltAndVinegar}${chosenPie}${chosenAddOns}${chosenGratedCheese}${chosenDonerMeat}${chosenCheeseSlice}${chosenSalad}${chosenSauces.toUpperCase()}${chosenCan}${chosenBottle}${chosenConeOfChipsSauce}${chosenSingleCondiment}${chosenMeat}${chosenTwoMeatsHeading}${chosenDoner}${chosenTikka}${chosenMed}${chosenTwoCondimentsHeading}${chosenPeas}${chosenBeans}${chosenCurry}${chosenGravy}\nSpecial Instructions\n${specialInstructions.toUpperCase()}\n\nQuantity\n${quantity}\n\nTotal Product Price [ Inc Any Options If Chosen / Available ]\n${itemPrice.toFixed(
      2
    )}end`;

    const formattedFinalReceipt = finalReceipt
      .toString()
      .replace(/DRINKS /g, " ")
      .replace(/[()]/g, "")
      .replace(/start/g, "\n")
      .replace(/end/g, "\n___________________\n\n");
    // .replace(/,/g, ", ")
    // .replace(/^(\s*\r\n){2,}/, "\r\n");
    return { formattedFinalReceipt };
  });

  return { receipt };
};

export default useReceipt;
