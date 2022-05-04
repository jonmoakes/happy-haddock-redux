import { useState, useEffect } from "react";

const AddOns = ({ gratedCheese, donerMeat, cheeseSlice }) => {
  const [gratedCheeseChosen, setGratedCheeseChosen] = useState(undefined);
  const [donerMeatChosen, setDonerMeatChosen] = useState(undefined);
  const [cheeseSliceChosen, setCheeseSliceChosen] = useState(undefined);

  useEffect(() => {
    if (gratedCheese) {
      const chosenGratedCheese = Object.keys(gratedCheese).filter(
        (grated) => gratedCheese[grated] === true
      );
      setGratedCheeseChosen(chosenGratedCheese);
    }
  }, [gratedCheese]);

  useEffect(() => {
    if (donerMeat) {
      const chosenDonerMeat = Object.keys(donerMeat).filter(
        (doner) => donerMeat[doner] === true
      );
      setDonerMeatChosen(chosenDonerMeat);
    }
  }, [donerMeat]);

  useEffect(() => {
    if (cheeseSlice) {
      const chosenCheeseSlice = Object.keys(cheeseSlice).filter(
        (slice) => cheeseSlice[slice] === true
      );
      setCheeseSliceChosen(chosenCheeseSlice);
    }
  }, [cheeseSlice]);

  return (
    <>
      {((gratedCheeseChosen && Object.keys(gratedCheeseChosen).length > 0) ||
        (donerMeatChosen && Object.keys(donerMeatChosen).length > 0) ||
        (cheeseSliceChosen && Object.keys(cheeseSliceChosen).length > 0)) && (
        <span>add ons:</span>
      )}

      {gratedCheeseChosen && Object.keys(gratedCheeseChosen).length > 0 && (
        <p>grated cheese</p>
      )}

      {donerMeatChosen && Object.keys(donerMeatChosen).length > 0 && (
        <p>doner meat</p>
      )}

      {cheeseSliceChosen && Object.keys(cheeseSliceChosen).length > 0 && (
        <p>cheese slice</p>
      )}
    </>
  );
};

export default AddOns;
