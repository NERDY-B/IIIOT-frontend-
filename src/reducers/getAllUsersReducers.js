import { GET_ALL_USERS_FAIL, GET_ALL_USERS_REQUEST, GET_ALL_USERS_SUCCESS } from "../constants/getAllUsesConstant";

export const getAllUsersReducers = (state = {}, action) => {
    switch (action.type) {
        case GET_ALL_USERS_REQUEST:
            return { loading: true }
        case GET_ALL_USERS_SUCCESS:
            return { loading: false, success: action.payload }
        case GET_ALL_USERS_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}