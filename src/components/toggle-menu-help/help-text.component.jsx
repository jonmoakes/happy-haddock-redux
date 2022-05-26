import { useDispatch } from "react-redux";

import { setShowHelpText } from "../../store/products/product.action";
import {
  Text,
  Span,
} from "../../styles/bounce-in-down-div/bounce-in-down-div.styles.jsx";

import {
  HamburgerContainer,
  Hamburger,
} from "../../routes/navigation/navbar.styles";
import { Button, HelpTextDiv } from "../../styles/help-div/help-div.styles";

const HelpText = () => {
  const dispatch = useDispatch();
  return (
    <HelpTextDiv>
      <hr />

      <h2>searching products:</h2>
      <Text>
        you can type a search query in the box below to filter products.
      </Text>
      <Text>if there is no match found, you can:</Text>
      <Text>refine your search text to try again</Text>
      <Text>or</Text>
      <Text>
        tap the <Span className="button-text">Clear search field</Span> button
        to show all of the categories again.
      </Text>
      <hr />
      <h2>choosing options:</h2>
      <Text>
        tap <Span className="choose-options">select & choose options</Span> on
        your chosen product to go to the product page.
      </Text>
      <Text>
        whilst there, choose your options for each product by tapping on the
        respective buttons / checkboxes next to each option.
      </Text>
      <Text>
        please note that some options are required ( these are noted with{" "}
        <Span>required</Span> above the option ).{" "}
      </Text>
      <Text>
        once all fields that are required have been entered, the add to order
        button will appear at the bottom.
      </Text>
      <Text>
        tap the <Span className="button-text">add to order</Span> button to add
        products to your cart.
      </Text>
      <hr />
      <h2>going to the checkout:</h2>
      <Text>
        a cart icon will appear in the top right of the screen when you have
        added items to your basket. this will take you to the secure checkout.
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
      <Button
        onClick={() => {
          dispatch(setShowHelpText(false));

          window.scrollTo(0, 0);
        }}
      >
        Ok, hide help
      </Button>
      <hr />
    </HelpTextDiv>
  );
};

export default HelpText;
