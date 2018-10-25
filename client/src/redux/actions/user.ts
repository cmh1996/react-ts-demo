export const CURRENT_USER = "CURRENT_USER";
export const CURRENT_USER_SUCCESS = "CURRENT_USER_SUCCESS";
export const CURRENT_USER_FAILURE = "CURRENT_USER_FAILURE";
export const PLUS = "PLUS";

export const currentUserAction = (token: string) => {
    return {
        type: CURRENT_USER,
        data: token
    };
};

export const currentUserSuccessAction = (currentUser: string) => {
    return {
        type: CURRENT_USER_SUCCESS,
        data: currentUser
    };
};

export const currentUserFailureAction = (error: string) => {
    return {
        type: CURRENT_USER_FAILURE,
        data: error
    };
};

export const plusAction = () => {
    return {
        type: PLUS
    };
};
