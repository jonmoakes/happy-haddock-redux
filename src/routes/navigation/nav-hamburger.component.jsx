import { useContext } from "react";
// import { useDispatch } from "react-redux";
import { HamburgerMenuContext } from "../../contexts/hamburger-menu.context";

import { HamburgerContainer, Hamburger } from "./navbar.styles";

const NavHamburger = ({ showHamburgerMenu }) => {
  const { setShowHamburgerMenu } = useContext(HamburgerMenuContext);

  // const dispatch = useDispatch();
  return (
    <>
      <HamburgerContainer>
        <Hamburger onClick={() => setShowHamburgerMenu(!showHamburgerMenu)}>
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
