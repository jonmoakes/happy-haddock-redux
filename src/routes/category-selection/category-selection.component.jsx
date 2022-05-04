import { Fragment } from "react";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";

import { selectProductsMap } from "../../store/products/product.selector";

import { Container } from "../../styles/container/container.styles";
import { TitleDiv } from "../../styles/product-item/product-item.styles";
import { HelpDiv } from "../../styles/help-div/help-div.styles";

const CategorySelection = () => {
  const productsMap = useSelector(selectProductsMap);
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <Container>
      <HelpDiv>
        <h1>our menu</h1>
        <p>tap on any category to view its products</p>
      </HelpDiv>
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
