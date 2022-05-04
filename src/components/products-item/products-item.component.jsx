// import { useDispatch } from "react-redux";
// import { useNavigate } from "react-router-dom";

import {
  ProductItemDiv,
  Name,
  Description,
  Price,
  ChooseOptionsButton,
} from "../../styles/product-item/product-item.styles";

import "../../styles/confirm.css";

const ProductsItem = ({ product }) => {
  const { name, description, price } = product;

  // const dispatch = useDispatch();
  // const navigate = useNavigate();

  // function showItemOptions() {
  //   return [
  //     dispatch({ type: "ADD_SELECTED_ITEM", payload: item }),
  //     navigate(`/products/${item.name}`),
  //   ];
  // }

  return (
    <ProductItemDiv>
      <Name>{name}</Name>
      {description !== "" && <Description>{description}</Description>}
      <Price> £{price.toFixed(2)}</Price>
      <ChooseOptionsButton>Select & Choose Options</ChooseOptionsButton>
    </ProductItemDiv>
  );
};

export default ProductsItem;
