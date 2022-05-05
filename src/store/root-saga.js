import { all, call } from "redux-saga/effects";

import { productsSaga } from "./products/product.saga";
// import { userSagas } from "./user/user.sagas";

// gets an array of invoked generator functions. Can Add multiple functions to the array
export default function* rootSaga() {
  yield all([call(productsSaga)]);
}
