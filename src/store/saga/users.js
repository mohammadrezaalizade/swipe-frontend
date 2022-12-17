import { takeLatest, put, call } from "redux-saga/effects";
import { userAction } from "../actions/userAction";
const userRegisterWorker = function* (action) {};
export const userRegisterWatcher = function* () {
  yield takeLatest(userAction.USER_REGISTER, userRegisterWorker);
};
