import { useMemo, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { selectCurrentUser } from "../../redux/user/user.selectors";
import { selectChosenPageSize } from "../../redux/table/table.selectors.js";

import {
  useTable,
  useSortBy,
  useGlobalFilter,
  usePagination,
  useRowSelect,
  useColumnOrder,
} from "react-table";

import {
  selectOrders,
  selectTableOrder,
} from "../../redux/table/table.selectors";

import { firestore } from "../../firebase/firebase.utils";

import TableHelp from "./table-help.component";
import { COLUMNS } from "./columns";
import SearchBox from "./search-box.component";
import CheckBox from "./checkbox";
import NoEntriesInfo from "./no-entries-info.component";
import Loader from "../loader/loader.component";
import SolarisCutInfo from "./solaris-cut-info.component";
import FetchError from "./fetch-error.component";
import ChooseTableOrderChoice from "./choose-table-order-choice.component";

import {
  TableContainer,
  Table,
  TableDiv,
  PaginationDiv,
  PaginationTextDiv,
  PaginationText,
  PaginationSelect,
  PaginationInput,
  PageButton,
} from "./orders-table.styles";

import alert from "../../assets/alert.mp3";

const OrdersTable = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const currentUser = useSelector(selectCurrentUser);
  let orders = useSelector(selectOrders);

  const chosenTableOrder = useSelector(selectTableOrder);
  const chosenPageSize = useSelector(selectChosenPageSize);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!currentUser) return;
    setIsLoading(true);
    let unsubscribeFromSnapshot = null;
    const userRef = firestore.doc(
      `users/${process.env.REACT_APP_APP_OWNER_ID}`
    );

    try {
      unsubscribeFromSnapshot = userRef.onSnapshot((snapshot) => {
        if (snapshot.exists) {
          const { orders, chosenTableOrder, newOrder } = snapshot.data();
          if (newOrder === true) {
            const alertSound = new Audio(alert);
            alertSound.play();
          }
          dispatch({ type: "UPDATE_ORDERS", payload: orders });
          dispatch({
            type: "UPDATE_CHOSEN_TABLE_ORDER",
            payload: chosenTableOrder,
          });

          setIsLoading(false);
        } else {
          setErrorMessage("snapshot error");
          setIsLoading(false);
        }
      });
    } catch (error) {
      setIsLoading(false);
      setErrorMessage(error.message);
    }

    return () => {
      unsubscribeFromSnapshot();
    };
  }, [dispatch, currentUser]);

  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => orders, [orders]);
  const initialState = useMemo(
    () => ({
      sortBy: [{ id: "orderDate", desc: true }],
      pageSize: chosenPageSize,
    }),
    [chosenPageSize]
  );

  const scrollToTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    rows,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    pageOptions,
    gotoPage,
    pageCount,
    setPageSize,
    prepareRow,
    state,
    setGlobalFilter,
    selectedFlatRows,
    setColumnOrder,
  } = useTable(
    {
      columns,
      data,
      initialState,
    },
    useGlobalFilter,
    useSortBy,
    usePagination,
    useRowSelect,
    useColumnOrder,
    (hooks) => {
      hooks.visibleColumns.push((columns) => {
        return [
          {
            id: "selection",
            Header: ({ getToggleAllRowsSelectedProps }) => (
              <CheckBox {...getToggleAllRowsSelectedProps()} />
            ),
            Cell: ({ row }) => {
              return <CheckBox {...row.getToggleRowSelectedProps()} />;
            },
          },
          ...columns,
        ];
      });
    }
  );

  useEffect(() => {
    setColumnOrder(chosenTableOrder);
  }, [setColumnOrder, chosenTableOrder]);

  const { globalFilter, pageIndex, pageSize } = state;
  const chosenEntry = selectedFlatRows.map((row) => row.original);
  //setting orders to chosen entry makes sure the correct amount is calculated.
  orders = chosenEntry;

  return (
    <>
      {isLoading && <Loader />}

      {errorMessage ? (
        <TableContainer>
          <FetchError errorMessage={errorMessage} />{" "}
        </TableContainer>
      ) : (
        <TableContainer>
          <TableHelp errorMessage={errorMessage} />
          <NoEntriesInfo data={data} errorMessage={errorMessage} />

          <SearchBox
            chosenEntry={chosenEntry}
            errorMessage={errorMessage}
            rows={rows}
            data={data}
            filter={globalFilter}
            setFilter={setGlobalFilter}
          />
          <SolarisCutInfo orders={orders} chosenEntry={chosenEntry} />
          <ChooseTableOrderChoice rows={rows} />

          <TableDiv>
            <Table initialState={initialState} {...getTableProps()}>
              <thead>
                {headerGroups.map((headerGroup) => (
                  <tr {...headerGroup.getHeaderGroupProps()}>
                    {headerGroup.headers.map((column) => (
                      <th
                        {...column.getHeaderProps(
                          column.getSortByToggleProps()
                        )}
                      >
                        {column.render("Header")}
                        <span>
                          {column.isSorted
                            ? column.isSortedDesc
                              ? " ⬇️"
                              : " ⬆️"
                            : ""}
                        </span>
                      </th>
                    ))}
                  </tr>
                ))}
              </thead>
              <tbody {...getTableBodyProps()}>
                {page.map((row) => {
                  prepareRow(row);
                  return (
                    <tr {...row.getRowProps()}>
                      {row.cells.map((cell) => {
                        return (
                          <td {...cell.getCellProps()}>
                            {cell.render("Cell")}
                          </td>
                        );
                      })}
                    </tr>
                  );
                })}
              </tbody>
            </Table>
          </TableDiv>

          {data.length > 5 && rows.length > 0 && (
            <PaginationDiv>
              <hr />

              <PaginationText>
                Page {pageIndex + 1} Of {pageOptions.length}
              </PaginationText>

              <PageButton
                className="back-button"
                onClick={() => {
                  gotoPage(0);
                  scrollToTop();
                }}
                disabled={!canPreviousPage}
              >
                &#10094;&#10094;
              </PageButton>

              <PageButton
                className="back-button"
                onClick={() => {
                  previousPage();
                  scrollToTop();
                }}
                disabled={!canPreviousPage}
              >
                &#10094;
              </PageButton>
              <PageButton
                onClick={() => {
                  nextPage();
                  scrollToTop();
                }}
                disabled={!canNextPage}
              >
                &#10095;
              </PageButton>

              <PageButton
                onClick={() => {
                  gotoPage(pageCount - 1);
                  scrollToTop();
                }}
                disabled={!canNextPage}
              >
                &#10095;&#10095;
              </PageButton>

              <PaginationTextDiv>
                <PaginationText>Or Go To Page: </PaginationText>
                <PaginationInput
                  type="number"
                  defaultValue={pageIndex + 1}
                  onChange={(e) => {
                    const pageNumber = e.target.value
                      ? Number(e.target.value) - 1
                      : 0;
                    gotoPage(pageNumber);
                  }}
                />
              </PaginationTextDiv>

              <PaginationSelect
                value={pageSize}
                onChange={(e) => {
                  setPageSize(Number(e.target.value));
                  dispatch({
                    type: "UPDATE_CHOSEN_PAGE_SIZE",
                    payload: Number(e.target.value),
                  });
                }}
              >
                {[5, 10, 25, 50, 75, 100, 150, 200].map((pageSize) => (
                  <option key={pageSize} value={pageSize}>
                    Show {pageSize} Rows
                  </option>
                ))}
              </PaginationSelect>
              <hr className="page-end" />
            </PaginationDiv>
          )}
        </TableContainer>
      )}
    </>
  );
};

export default OrdersTable;
