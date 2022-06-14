import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

import { chooseContactMethod } from "../store/cart/cart.action";
import { clearFinalItem } from "../store/final-item/final-item.action";
import { selectContactMethod } from "../store/cart/cart.selector";
import { hideHamburgerMenu } from "../store/hamburger-menu/hamburger-menu.action";
import { selectShowHamburgerMenu } from "../store/hamburger-menu/hamburger-menu.selector";

const useClearFinalItemContactMethodHideHamburger = () => {
  const contactMethod = useSelector(selectContactMethod);
  const showHamburgerMenu = useSelector(selectShowHamburgerMenu);
  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    return () => {
      if (location.pathname.includes("product")) {
        dispatch(clearFinalItem());
      } else if (location.pathname === "/checkout" && contactMethod) {
        dispatch(dispatch(chooseContactMethod("")));
      } else if (showHamburgerMenu) {
        dispatch(hideHamburgerMenu());
      }
    };
  }, [dispatch, contactMethod, location, showHamburgerMenu]);
};

export default useClearFinalItemContactMethodHideHamburger;
