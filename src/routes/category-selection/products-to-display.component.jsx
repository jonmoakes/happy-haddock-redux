import { useMemo } from "react";
import ProductsItem from "../../components/products-item/products-item.component";
import NoSearchResult from "../../components/no-search-result/no-search-result.component";

import { filteredProductsEmptyCheck } from "../../reusable-functions/is-filtered-products-empty-check";

import { Div } from "../../styles/div/div.styles";

const ProductsToDisplay = ({ searchField, products, resetSearchField }) => {
  const filteredProducts = useMemo(
    () =>
      products &&
      Object.values(products).map((items) =>
        items.filter((item) =>
          item.name.toLowerCase().includes(searchField.toLowerCase())
        )
      ),
    [products, searchField]
  );

  return (
    <>
      <Div className="products-div">
        {!searchField ? (
          <>
            {Object.values(products).map((items) => {
              return items.map((product) => (
                <ProductsItem key={product.id} {...{ product }} />
              ));
            })}
          </>
        ) : searchField && !filteredProductsEmptyCheck(filteredProducts) ? (
          <>
            {filteredProducts &&
              Object.values(filteredProducts).map((items) => {
                return items.map((product) => (
                  <ProductsItem key={product.id} {...{ product }} />
                ));
              })}
          </>
        ) : (
          searchField &&
          filteredProductsEmptyCheck(filteredProducts) && <NoSearchResult />
        )}
      </Div>
    </>
  );
};

export default ProductsToDisplay;
