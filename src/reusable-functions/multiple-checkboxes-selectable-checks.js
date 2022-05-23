// returns true if sauces selected === 3
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

// returns true if sauces selected === 1
export const oneSauceChosenCheck = (saucesSelected) => {
  const numberChosen = Object.values(saucesSelected).filter(
    (item) => item === true
  ).length;

  if (numberChosen > 0 && numberChosen <= 1) {
    return true;
  } else {
    return false;
  }
};

// returns true if condiments chosen === 2
export const numberOfCondimentsChosenCheck = (twoCondimentsSelected) => {
  const numberChosen = Object.values(twoCondimentsSelected).filter(
    (item) => item === true
  ).length;

  if (numberChosen === 2) {
    return true;
  } else {
    return false;
  }
};

// return true if number of meats chosen === 2
export const numberOfMeatsChosenCheck = (twoMeatsSelected) => {
  const numberChosen = Object.values(twoMeatsSelected).filter(
    (item) => item === true
  ).length;

  if (numberChosen === 2) {
    return true;
  } else {
    return false;
  }
};
