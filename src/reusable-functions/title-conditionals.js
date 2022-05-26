export const displayCategoryTitle = (category) => {
  switch (category) {
    case "jacketpotato":
      category = "jacket potaotes";
      break;
    case "chickencurry":
      category = "chicken curries";
      break;
    default:
      return category;
  }

  return category;
};
