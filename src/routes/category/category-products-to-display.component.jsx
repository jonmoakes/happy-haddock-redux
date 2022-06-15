import { useMemo } from "react";
import NoSearchResult from "../../components/no-search-result/no-search-result.component";
import ProductsItem from "../../components/products-item/products-item.component";

import { Div } from "../../styles/div/div.styles";

const CategoryProductsToDisplay = ({
  searchField,
  products,
  resetSearchField,
}) => {
  const filteredProducts = useMemo(
    () =>
      products &&
      products.filter((prod) =>
        prod.name.toLowerCase().includes(searchField.toLowerCase())
      ),
    [products, searchField]
  );

  return (
    <Div className="products-div">
      {!searchField ? (
        <>
          {products &&
            products.map((product) => (
              <ProductsItem key={product.id} product={product} />
            ))}
        </>
      ) : searchField && filteredProducts.length ? (
        filteredProducts.map((product) => (
          <ProductsItem key={product.id} product={product} />
        ))
      ) : (
        <NoSearchResult />
      )}
    </Div>
  );
};

export default CategoryProductsToDisplay;
