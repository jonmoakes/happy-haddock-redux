import { WelcomeDiv } from "./category-selection.styles";

const CategoryWelcome = ({ searchField }) => {
  return (
    <WelcomeDiv>
      {!searchField && (
        <>
          <h1>our menu</h1>
          <p>
            welcome!
            <br />
            Tap on any category to view its products,
            <br />
            or search for any product by typing a search query into the search
            bar..
          </p>
        </>
      )}
    </WelcomeDiv>
  );
};

export default CategoryWelcome;
