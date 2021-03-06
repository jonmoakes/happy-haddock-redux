import { TABLE_ACTION_TYPES } from "./table.types";
import { createAction } from "../../utils/reducer/reducer.utils";

export const updateOrders = (payload) => {
  return createAction(TABLE_ACTION_TYPES.UPDATE_ORDERS, payload);
};

export const setChosenTableOrder = (payload) => {
  return createAction(TABLE_ACTION_TYPES.UPDATE_CHOSEN_TABLE_ORDER, payload);
};

export const setChosenPageSize = (payload) => {
  return createAction(TABLE_ACTION_TYPES.UPDATE_CHOSEN_PAGE_SIZE, payload);
};
