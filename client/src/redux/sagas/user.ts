import { select, put, call } from "redux-saga/effects";
import { currentUserFailureAction, currentUserSuccessAction } from "../actions/user";
import { currentUser } from "../../api/user/user";

export function* currentUserAsync() {
    const user = yield select((state: any) => state.user);
    const token = user.get("token");

    const json = yield call(currentUser, token);
    if (json.success) {
        yield put(currentUserSuccessAction(json.data));
    } else {
        console.log("currentUserAsync", json.error);
        yield put(currentUserFailureAction(json.error));
    }
}
