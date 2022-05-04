import { useContext, Fragment } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { ProductsContext } from "../../contexts/products.context";

import { Container } from "../../styles/container/container.styles";
import { TitleDiv } from "../../styles/product-item/product-item.styles";

const CategorySelection = () => {
  const { productsMap } = useContext(ProductsContext);
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <Container>
      {Object.keys(productsMap).map((title) => (
        <Fragment key={title}>
          <TitleDiv
            key={title}
            onClick={() => navigate(`${location.pathname}/${title}`)}
          >
            <h1>
              show{" "}
              {title === "chickencurry" ? (
                <span>chicken curry</span>
              ) : title === "jacketpotato" ? (
                <span>jacket potato</span>
              ) : (
                <span>{title}</span>
              )}
            </h1>
          </TitleDiv>
        </Fragment>
      ))}
    </Container>
  );
};

export default CategorySelection;
