import { useContext } from "react";

import { ProductsContext } from "../../contexts/products.context";

import ProductsItem from "../../components/products-item/products-item.component";

import { Container } from "../../styles/container/container.styles";
import { Div } from "../../styles/div/div.styles";

const Menu = () => {
  const { products } = useContext(ProductsContext);

  return (
    <Container>
      <Div className="products-overview-div">
        {products.map((product) => (
          <ProductsItem key={product.id} product={product} />
        ))}
      </Div>
    </Container>
  );
};

export default Menu;
