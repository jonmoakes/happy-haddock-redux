import { useDispatch } from "react-redux";

import { toggleHamburgerMenu } from "../../store/hamburger-menu/hamburger-menu.action";

import { HamburgerContainer, Hamburger } from "./navbar.styles";

const NavHamburger = ({ showHamburgerMenu }) => {
  const dispatch = useDispatch();
  return (
    <>
      <HamburgerContainer>
        <Hamburger
          onClick={() => dispatch(toggleHamburgerMenu(!showHamburgerMenu))}
        >
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
