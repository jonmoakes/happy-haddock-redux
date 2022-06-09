import { useState } from "react";
import { useSelector } from "react-redux";

import {
  BounceInDownDiv,
  Text,
} from "../styles/bounce-in-down-div/bounce-in-down-div.styles";

import { HelpDiv, Button } from "../styles/help-div/help-div.styles";

import { ContactLink } from "./orders-table.styles";

const TableHelp = ({ errorMessage }) => {
  const [showHelp, setShowHelp] = useState(false);
  let displayName = useSelector((state) => state.user.currentUser.displayName);

  if (displayName === null) {
    displayName = "";
  }

  return (
    <>
      {!errorMessage && (
        <>
          <p>welcome {displayName}!</p>
          <HelpDiv>
            {!showHelp && (
              <Button className="dashboard" onClick={() => setShowHelp(true)}>
                tap to show help
              </Button>
            )}

            {showHelp && (
              <BounceInDownDiv className="dashboard">
                <hr />
                <h2>sorting the table:</h2>
                <Text>
                  tap on any table header ( ie email, customer name etc ) to
                  sort the table in either ascending, descending or unsorted
                  order.
                </Text>
                <Text>
                  the ⬇️ icon will indicate which direction the table is being
                  sorted in. no icon will show if the table is unsorted.
                </Text>
                <Text>
                  by default, the table is sorted by order date & time, newest
                  orders first.
                </Text>
                <hr />
                <h2>reordering the table columns:</h2>
                <Text>
                  should you wish to reorder the table columns, tap the{" "}
                  <span className="table-order-span">
                    show table ordering choices
                  </span>{" "}
                  button and then press whichever button matches how you would
                  like the data to be presented.
                </Text>
                <Text>
                  this data is then saved and will remain the same until you
                  change it.
                </Text>
                <hr />
                <h2>selecting table rows:</h2>
                <Text>
                  please note the small checkbox on the left hand side of the
                  table. selecting more than one of these checkboxes will show
                  the calculated total of all of the solaris apps cut entries
                  added together.
                  <br />
                  <span className="info">
                    you can scroll to the top of this page to find the
                    information when you have selected more than one checkbox.
                  </span>
                </Text>
                <Text>
                  tapping the checkbox in the{" "}
                  <span className="checkbox-info">green</span> table header will
                  select all entries at once.
                </Text>
                <Text>
                  note that this selects every entry in the table ( including
                  unseen pages that you can select via the pagination buttons at
                  the bottom of the table ).
                </Text>
                <Text>
                  you can therefore easily calculate all of the selected entries
                  together ( say for the week or the month depending on when
                  you've chosen to be invoiced ).
                </Text>
                <Text>
                  you can then compare them to your invoice for your piece of
                  mind and of course{" "}
                  <ContactLink to="/contact">contact me</ContactLink> if you
                  have any questions!
                </Text>
                <hr />
                <h2>selecting the amount of visible rows per page:</h2>
                <Text>
                  the default amount of entries shown in the table is 5. once
                  you have more than 5 entries, a new page will be created which
                  you can access with the pagination buttons that will appear
                  underneath the table.
                </Text>
                <Text>
                  you can choose to show 5, 10, 25, 50, 75, 100, 150 or 200 rows
                  depending on your preference.
                </Text>
                <Button
                  onClick={() => {
                    setShowHelp(false);
                    window.scrollTo(0, 0);
                  }}
                >
                  ok, hide help
                </Button>
              </BounceInDownDiv>
            )}
          </HelpDiv>
        </>
      )}
    </>
  );
};

export default TableHelp;
