import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import {
  selectProductsMap,
  selectProductsIsLoading,
} from "../../store/products/product.selector";

import Loader from "../../components/loader/loader.component";
import Titles from "./titles.component";
import ProductsItem from "../../components/products-item/products-item.component";

import { Container } from "../../styles/container/container.styles";
import { Div } from "../../styles/div/div.styles";

const Category = () => {
  const { category } = useParams();
  const productsMap = useSelector(selectProductsMap);
  const isLoading = useSelector(selectProductsIsLoading);
  const [products, setProducts] = useState(productsMap[category]);

  useEffect(() => {
    setProducts(productsMap[category]);
  }, [category, productsMap]);

  return (
    <Container>
      <Titles {...{ category }} />

      {isLoading && <Loader />}

      <Div className="products-overview-div">
        {products &&
          products.map((product) => (
            <ProductsItem key={product.id} product={product} />
          ))}
      </Div>
    </Container>
  );
};

export default Category;
