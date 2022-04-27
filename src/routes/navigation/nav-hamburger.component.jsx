import { useDispatch } from "react-redux";

import { HamburgerContainer, Hamburger } from "./navbar.styles";

const NavHamburger = ({ showHamburgerMenu }) => {
  const dispatch = useDispatch();
  return (
    <>
      <HamburgerContainer>
        <Hamburger onClick={() => dispatch({ type: "TOGGLE_HAMBURGER_MENU" })}>
          {!showHamburgerMenu ? (
            <>
              <span />
              <span />
              <span />
            </>
          ) : (
            <>
              <span className="close-menu" />
              <span className="close-menu" />
              <span className="close-menu" />
            </>
          )}
        </Hamburger>
        )
      </HamburgerContainer>
    </>
  );
};

export default NavHamburger;
