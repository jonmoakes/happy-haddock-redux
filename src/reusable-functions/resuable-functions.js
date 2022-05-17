export const numberOfSaucesChosen = (saucesSelected) => {
  return Object.values(saucesSelected).filter((item) => item === true).length;
};
