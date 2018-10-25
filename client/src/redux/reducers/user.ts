import Immutable from "immutable";
import { CURRENT_USER, CURRENT_USER_FAILURE, CURRENT_USER_SUCCESS, PLUS } from "../actions/user";

const initialState = Immutable.fromJS({
    newUser: null,
    error: null,
    saveSuccess: false,
    token: null,
    currentUser: null,
    num: 0
});

interface IAction {
    type: string;
    data: any;
}

export const user = (state = initialState, action: IAction) => {
    switch (action.type) {
        case CURRENT_USER:
            return state.merge({
                token: action.data,
                error: null
            });
        case CURRENT_USER_SUCCESS:
            return state.set("currentUser", action.data);
        case CURRENT_USER_FAILURE:
            return state.set("error", action.data);
        case PLUS:
            return state.set("num", state.get("num") + 1);
        default:
            return state;
    }
};
