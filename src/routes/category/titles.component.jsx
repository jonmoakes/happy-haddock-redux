import { TitleDiv } from "../../styles/product-item/product-item.styles";

const Titles = ({ category }) => {
  return (
    <TitleDiv className="products">
      {category === "jacketpotato" ? (
        <h1>our jacket potatoes</h1>
      ) : category === "chickencurry" ? (
        <h1>our chicken curries</h1>
      ) : (
        <h1>our {category}</h1>
      )}
    </TitleDiv>
  );
};

export default Titles;
