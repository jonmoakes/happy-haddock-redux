import { Text } from "../../styles/bounce-in-down-div/bounce-in-down-div.styles";

import {
  HamburgerContainer,
  Hamburger,
} from "../../routes/navigation/navbar.styles";

const GoToCheckoutHelp = () => (
  <>
    <h2>going to the checkout:</h2>
    <Text>
      a cart icon will appear in the top right of the screen when you have added
      items to your basket. this will take you to the secure checkout.
    </Text>
    <Text>
      on small screens, you can access the app navigation links using the
    </Text>
    <HamburgerContainer className="help-icon">
      <Hamburger className="help-icon">
        <>
          <span className="help-icon top" />
          <span className="help-icon" />
          <span className="help-icon" />
        </>
      </Hamburger>
    </HamburgerContainer>
    <Text>icon, once again in the top right corner of the screen.</Text>
    <hr />
  </>
);

export default GoToCheckoutHelp;
