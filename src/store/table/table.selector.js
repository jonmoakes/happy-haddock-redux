import { createSelector } from "reselect";

const selectTable = (state) => state.table;

export const selectOrders = createSelector(
  [selectTable],
  (table) => table.orders
);

export const selectChosenTableOrder = createSelector(
  [selectTable],
  (table) => table.tableOrder
);

export const selectChosenPageSize = createSelector(
  [selectTable],
  (table) => table.chosenPageSize
);
