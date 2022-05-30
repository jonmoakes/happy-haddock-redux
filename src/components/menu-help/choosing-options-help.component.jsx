import {
  Text,
  Span,
} from "../../styles/bounce-in-down-div/bounce-in-down-div.styles";

const ChoosingOptionsHelp = () => (
  <>
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
  </>
);

export default ChoosingOptionsHelp;
