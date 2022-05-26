import { useNavigate, useLocation } from "react-router-dom";
import { TitleDiv } from "../../styles/product-item/product-item.styles";

const CategoryTitles = ({ title }) => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <TitleDiv
      key={title}
      onClick={() => navigate(`${location.pathname}/${title}`)}
    >
      <h1>
        view{" "}
        {title === "chickencurry" ? (
          <span>chicken curry</span>
        ) : title === "jacketpotato" ? (
          <span>jacket potato</span>
        ) : (
          <span>{title}</span>
        )}
      </h1>
    </TitleDiv>
  );
};

export default CategoryTitles;
