import { useSelector } from "react-redux";

import useConfirmSignOutSwal from "../../hooks/swals/use-confirm-sign-out-swal";
import { selectCurrentUser } from "../../store/user/user.selector";

import { MenuLink } from "./navbar.styles";

const NavSignOut = () => {
  const { confirmSignOutswal } = useConfirmSignOutSwal();
  const currentUser = useSelector(selectCurrentUser);

  return (
    <>
      {currentUser && (
        <MenuLink onClick={confirmSignOutswal}>sign out</MenuLink>
      )}
    </>
  );
};

export default NavSignOut;
