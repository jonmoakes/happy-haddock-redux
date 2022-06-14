import { useMemo, useEffect } from "react";
import { useSelector } from "react-redux";

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
  selectChosenTableOrder,
  selectChosenPageSize,
} from "../../store/table/table.selector";

import { ORDERS_TABLE_COLUMNS } from "./orders-table-columns";
import OrdersTableCheckBox from "./orders-table-checkbox";
import OrdersTableHelp from "./orders-table-help.component";
import OrdersTableNoEntriesInfo from "./orders-table-no-entries-info.component";
import OrdersTableSearchBox from "./orders-table-search-box.component";
import OrdersTableSolarisCutInfo from "./orders-table-solaris-cut-info.component";
import OrdersTableOrderChoices from "./orders-table-order-choices.component";
import OrdersTableRenderTable from "./orders-table-render-table.component";
import OrdersTablePagination from "./orders-table-pagination.component";

const CombinedTable = () => {
  const chosenTableOrder = useSelector(selectChosenTableOrder);
  const chosenPageSize = useSelector(selectChosenPageSize);
  let orders = useSelector(selectOrders);

  const columns = useMemo(() => ORDERS_TABLE_COLUMNS, []);
  const data = useMemo(() => orders, [orders]);
  const initialState = useMemo(
    () => ({
      sortBy: [{ id: "orderDate", desc: true }],
      pageSize: chosenPageSize,
    }),
    [chosenPageSize]
  );

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
            Header: ({ getToggleAllRowsSelectedProps }) => (
              <OrdersTableCheckBox {...getToggleAllRowsSelectedProps()} />
            ),
            Cell: ({ row }) => {
              return (
                <OrdersTableCheckBox {...row.getToggleRowSelectedProps()} />
              );
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

  //setting orders to chosen entry makes sure the correct amount is calculated.
  const { globalFilter, pageIndex, pageSize } = state;
  const chosenEntry = selectedFlatRows.map((row) => row.original);
  orders = chosenEntry;

  return (
    <>
      <OrdersTableHelp />
      <OrdersTableNoEntriesInfo {...{ data }} />

      <OrdersTableSearchBox
        {...{
          chosenEntry,
          rows,
          data,
          globalFilter,
          setGlobalFilter,
        }}
      />
      <OrdersTableSolarisCutInfo {...{ orders, chosenEntry }} />
      <OrdersTableOrderChoices {...{ rows }} />
      <OrdersTableRenderTable
        {...{
          initialState,
          headerGroups,
          getTableProps,
          getTableBodyProps,
          page,
          prepareRow,
        }}
      />

      <OrdersTablePagination
        {...{
          data,
          rows,
          pageIndex,
          pageOptions,
          gotoPage,
          canPreviousPage,
          previousPage,
          nextPage,
          canNextPage,
          pageCount,
          pageSize,
          setPageSize,
        }}
      />
    </>
  );
};

export default CombinedTable;
