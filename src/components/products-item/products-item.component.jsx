import { useState } from "react";
import { useDispatch } from "react-redux";
import { Navigate } from "react-router-dom";

import { addIndividualProduct } from "../../store/products/product.action";

import {
  ProductItemDiv,
  Name,
  Description,
  Price,
  ChooseOptionsButton,
} from "../../styles/product-item/product-item.styles";

import "../../styles/confirm.css";

const ProductsItem = ({ product }) => {
  const [nav, setNav] = useState(false);
  const { name, description, price } = product;
  const dispatch = useDispatch();

  function showItemOptions() {
    return [dispatch(addIndividualProduct(product)), setNav(true)];
  }

  return (
    <>
      {nav && <Navigate to={`/product/${product.name}`} />}
      <ProductItemDiv>
        <Name>{name}</Name>
        {description !== "" && <Description>{description}</Description>}
        <Price> £{price.toFixed(2)}</Price>
        <ChooseOptionsButton onClick={() => showItemOptions()}>
          Select & Choose Options
        </ChooseOptionsButton>
      </ProductItemDiv>
    </>
  );
};

export default ProductsItem;
