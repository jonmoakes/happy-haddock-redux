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
