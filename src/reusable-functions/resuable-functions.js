export const numberOfSaucesChosenCheck = (saucesSelected) => {
  const numberChosen = Object.values(saucesSelected).filter(
    (item) => item === true
  ).length;

  if (numberChosen > 0 && numberChosen <= 3) {
    return true;
  } else {
    return false;
  }
};

export const showSaucesOptionCheck = (
  saucesAvailable,
  hasSizeOption,
  chosenSize
) => {
  if (
    (saucesAvailable && !hasSizeOption) ||
    (saucesAvailable && hasSizeOption && chosenSize)
  ) {
    return true;
  } else {
    return false;
  }
};

export const sizeSaucesAndQuantityCheck = (
  sizeSelected,
  saucesSelected,
  numberOfSaucesChosenCheck,
  quantity
) => {
  if (
    sizeSelected &&
    numberOfSaucesChosenCheck(saucesSelected) &&
    quantity > 0
  ) {
    return true;
  } else {
    return false;
  }
};

// export const numberOfSaucesCheckPassed = (
//   saucesSelected,
//   numberOfSaucesChosen
// ) => {
//   if (numberOfSaucesChosen > 0 && numberOfSaucesChosen <= 3) {
//     return true;
//   } else {
//     return false;
//   }
// };
