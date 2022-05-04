// import { useDispatch, useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";

// import { selectCartItems } from "../../store/cart/cart.selector";
// import { addItemToCart } from "../../store/cart/cart.action";

import AddItemToOrder from "../add-item-to-order/add-item-to-order.component";
// import AddToOrderButton from "../add-to-order-button/add-to-order-button.component";

import {
  ProductItemDiv,
  Name,
  Description,
  Price,
  // ChooseOptionsButton,
} from "../../styles/product-item/product-item.styles";

import "../../styles/confirm.css";

const ProductsItem = ({ product }) => {
  const { name, description, price } = product;
  // const dispatch = useDispatch();
  // const cartItems = useSelector(selectCartItems);

  // const addProductToCart = () => dispatch(addItemToCart(cartItems, product));

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
      <AddItemToOrder product={product} />
      {/* <AddToOrderButton onClick={addProductToCart}>
        add to order
      </AddToOrderButton> */}
      {/* <ChooseOptionsButton>Select & Choose Options</ChooseOptionsButton> */}
    </ProductItemDiv>
  );
};

export default ProductsItem;
