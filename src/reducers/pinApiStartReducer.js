import {
    PIN_START_ITEM,
    PIN_START_SUCCESS,
    PIN_START_FAIL
} from "../constants/pinConstant"

export const pinReducerBtn = (state = {}, action) => {
    switch (action.type) {
        case PIN_START_ITEM:
            return { loading: true }
        case PIN_START_SUCCESS:
            return { loading: false, success: action.payload }
        case PIN_START_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}