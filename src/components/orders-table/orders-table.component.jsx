import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../../utils/firebase/firebase.utils";

import { selectCurrentUser } from "../../store/user/user.selector";

import { updateOrders } from "../../store/table/table.action";

import Loader from "../loader/loader.component";
import OrdersTableFetchError from "./orders-table-fetch-error.component";
import CombinedTable from "./combined-table.component";

import { TableContainer } from "./orders-table.styles";

import { noDatabaseDocFoundMessage } from "../../strings/strings";
import alert from "../../assets/alert-sound.mp3";

const OrdersTable = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const currentUser = useSelector(selectCurrentUser);

  const dispatch = useDispatch();

  useEffect(() => {
    if (!currentUser) return;
    setIsLoading(true);
    let unsubscribeFromSnapshot = null;

    try {
      unsubscribeFromSnapshot = onSnapshot(
        doc(db, "users", process.env.REACT_APP_APP_OWNER_ID),
        (doc) => {
          const { orders, newOrder } = doc.data();
          if (doc.exists) {
            dispatch(updateOrders(orders));
            setIsLoading(false);
            if (newOrder === true) {
              const alertSound = new Audio(alert);
              alertSound.play();
            }
          } else {
            setIsLoading(false);
            setErrorMessage(noDatabaseDocFoundMessage);
          }
        }
      );
    } catch (error) {
      setIsLoading(false);
      setErrorMessage(error.message);
    }

    return () => {
      unsubscribeFromSnapshot();
    };
  }, [currentUser, dispatch]);

  return (
    <TableContainer>
      {isLoading && <Loader />}

      {errorMessage ? (
        <OrdersTableFetchError {...{ errorMessage }} />
      ) : (
        <CombinedTable />
      )}
    </TableContainer>
  );
};

export default OrdersTable;
