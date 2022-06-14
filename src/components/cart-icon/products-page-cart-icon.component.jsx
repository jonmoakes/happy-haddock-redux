import useShowcheckoutPageSwal from "../../hooks/swals/use-show-checkout-page-swal";

import {
  Wrapper,
  ShoppingIcon,
  HappyFaceIcon,
  IconsDiv,
} from "./cart-icon.styles";

const ProductsPageCartIcon = () => {
  const { showCheckoutPageSwal } = useShowcheckoutPageSwal();

  return (
    <Wrapper onClick={showCheckoutPageSwal}>
      <IconsDiv>
        <ShoppingIcon />
        <HappyFaceIcon className="face" />
      </IconsDiv>
    </Wrapper>
  );
};

export default ProductsPageCartIcon;
