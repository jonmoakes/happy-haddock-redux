import { useSelector } from "react-redux";

import useGetFinalItem from "../../hooks/use-get-final-item";

import { selectIndividualProduct } from "../../store/products/product.selector";

import {
  Hr,
  TotalPriceInfo,
  PriceWithOptions,
} from "../../styles/product-item/product-item.styles";

const ProductTotalInfo = () => {
  const { finalItem } = useGetFinalItem();
  const product = useSelector(selectIndividualProduct);

  const { selectedOptionsCombinedPrice, quantity } = finalItem;
  const { price } = product;
  const updatedPrice = (price + selectedOptionsCombinedPrice) * quantity;
  return (
    <>
      {updatedPrice && (
        <>
          <Hr />
          <TotalPriceInfo>
            total price with chosen options ( if available ) and quantity:
          </TotalPriceInfo>

          <PriceWithOptions>£{updatedPrice.toFixed(2)}</PriceWithOptions>
          <Hr />
        </>
      )}
    </>
  );
};

export default ProductTotalInfo;
