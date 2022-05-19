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
