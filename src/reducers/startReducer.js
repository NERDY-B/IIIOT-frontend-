import {
    START_RUN_ITEM,
    START_FAIL,
    START_RUN_SUCCESS
} from "../constants/pinConstant";


export const startRunItem = (state = {}, action) => {
    switch (action.type) {
        case START_RUN_ITEM:
            return { loading: true }
        case START_RUN_SUCCESS:
            return { loading: false, success: action.payload }
        case START_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}