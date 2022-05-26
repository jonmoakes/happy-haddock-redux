export const productExistsCheck = (name, description, price) => {
  return name !== undefined && description !== undefined && price !== undefined
    ? true
    : false;
};
