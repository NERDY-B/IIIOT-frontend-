
import { STOP_RUN_ITEM, STOP_FAIL, STOP_RUN_SUCCESS } from "../constants/pinConstant";


export const stopRunItem = (state = {}, action) => {
    switch (action.type) {
        case STOP_RUN_ITEM:
            return { loading: true }
        case STOP_RUN_SUCCESS:
            return { loading: false, success: action.payload }
        case STOP_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}