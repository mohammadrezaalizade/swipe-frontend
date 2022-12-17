import { takeEvery, takeLatest, all, put, call } from "redux-saga/effects";
import * as userHandler from "./users";
export default function* root() {
  yield all([userHandler.userRegisterWatcher]);
}
