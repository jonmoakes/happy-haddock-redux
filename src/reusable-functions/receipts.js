export const chosenTwoCondimentsHeading = (peas, beans, curry, gravy) => {
  return peas || beans || curry || gravy ? "Condiments Selected:" : "";
};

export const getPeasValue = (peas) => {
  return peas ? "PEAS" : "";
};

export const getBeansValue = (beans) => {
  return beans ? "BEANS" : "";
};

export const getCurryValue = (curry) => {
  return curry ? "CURRY" : "";
};

export const getGravyValue = (gravy) => {
  return gravy ? "GRAVY" : "";
};

export const chosenTwoMeatsHeading = (doner, tikka, mediterranean) => {
  return doner || tikka || mediterranean ? "Meats Selected:" : "";
};

export const getDonerValue = (doner) => {
  return doner ? "DONER" : "";
};

export const getTikkaValue = (tikka) => {
  return tikka ? "TIKKA" : "";
};

export const getMedValue = (mediterranean) => {
  return mediterranean ? "MEDITERRANEAN" : "";
};
