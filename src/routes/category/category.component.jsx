import { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { ProductsContext } from "../../contexts/products.context";

import ProductsItem from "../../components/products-item/products-item.component";

import { Container } from "../../styles/container/container.styles";
import { TitleDiv } from "../../styles/product-item/product-item.styles";
import { Div } from "../../styles/div/div.styles";

const Category = () => {
  const { category } = useParams();
  const { productsMap } = useContext(ProductsContext);
  const [products, setProducts] = useState(productsMap[category]);

  useEffect(() => {
    setProducts(productsMap[category]);
  }, [category, productsMap]);

  return (
    <Container>
      <TitleDiv>
        {category === "jacketpotato" ? (
          <h1>our jacket potatoes</h1>
        ) : category === "chickencurry" ? (
          <h1>our chicken curries</h1>
        ) : (
          <h1>our {category}</h1>
        )}
      </TitleDiv>
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
