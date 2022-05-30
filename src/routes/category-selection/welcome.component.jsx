import { useSelector } from "react-redux";

import { selectCurrentUser } from "../../store/user/user.selector";

import { WelcomeDiv } from "./category-selection.styles";

const CategoryWelcome = ({ searchField }) => {
  const currentUser = useSelector(selectCurrentUser);

  return (
    <WelcomeDiv>
      {!searchField && (
        <>
          <h1>our menu</h1>
          <p>
            welcome {currentUser.displayName}!
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
