// import { useState } from "react";

// import useNoSearchResultFound from "../../custom-hooks/use-no-search-result-found";
import ProductsItem from "../products-item/products-item.component";

// import { TitleDiv } from "./products-all.styles";

const ProductsAll = ({ product }) => {
  console.log(product);
  // const [showProducts, setShowProducts] = useState(false);

  // if (title === "chickencurry") {
  //   title = "chicken curry";
  // } else if (title === "jacketpotato") {
  //   title = "jacket potato";
  // }
  // const { searchField } = useNoSearchResultFound();

  // const filteredItems = useMemo(
  //   () =>
  //     items.filter((item) =>
  //       item.name.toLowerCase().includes(searchField.toLowerCase())
  //     ),
  //   [items, searchField]
  // );

  return <ProductsItem product={product} />;
};

export default ProductsAll;
