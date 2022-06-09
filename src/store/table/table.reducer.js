import { TABLE_ACTION_TYPES } from "./table.types";

const INITIAL_STATE = {
  orders: [],
  tableOrder: [],
  chosenPageSize: 5,
};

export const tableReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case TABLE_ACTION_TYPES.UPDATE_ORDERS:
      return {
        ...state,
        orders: payload,
      };
    case TABLE_ACTION_TYPES.UPDATE_CHOSEN_TABLE_ORDER:
      return {
        ...state,
        tableOrder: payload,
      };
    case TABLE_ACTION_TYPES.UPDATE_CHOSEN_PAGE_SIZE:
      return {
        ...state,
        chosenPageSize: payload,
      };
    default:
      return state;
  }
};
