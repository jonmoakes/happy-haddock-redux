export const phoneNumberError = (phoneNumber) => {
  return phoneNumber && phoneNumber.length !== 11 ? true : false;
};
