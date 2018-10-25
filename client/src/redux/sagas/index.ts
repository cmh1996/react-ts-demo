import { takeLatest, all } from "redux-saga/effects";
import { currentUserAsync } from "./user";
import { CURRENT_USER } from "../actions/user";

export default function* rootSaga() {
    yield all([takeLatest(CURRENT_USER, currentUserAsync)]);
}
