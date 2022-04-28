import { createContext, useState } from "react";

export const HamburgerMenuContext = createContext({
  showHamburgerMenu: false,
  setShowHamburgerMenu: () => false,
});

export const HamburgerMenuProvider = ({ children }) => {
  const [showHamburgerMenu, setShowHamburgerMenu] = useState(false);
  const value = { showHamburgerMenu, setShowHamburgerMenu };

  return (
    <HamburgerMenuContext.Provider value={value}>
      {children}
    </HamburgerMenuContext.Provider>
  );
};
