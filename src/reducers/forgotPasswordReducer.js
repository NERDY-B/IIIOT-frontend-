import { 
    FORGOT_PASSWORD_FAIL, 
    FORGOT_PASSWORD_REQUEST, 
    FORGOT_PASSWORD_SUCCESS, 
    NEW_PASSWORD_FAIL,
    NEW_PASSWORD_REQUEST,
    NEW_PASSWORD_SUCCESS
} from "../constants/userConstant"

export const forgotPasswordReducer = (state ={}, action) => {
    switch(action.type){
        case FORGOT_PASSWORD_REQUEST:
            return{loading: true}
        case FORGOT_PASSWORD_SUCCESS:
            return {loading: false, success: true, emailInfo:action.payload}
        case FORGOT_PASSWORD_FAIL: 
            return {loading: false, error: action.payload}
        default:
            return state
    }
}

export const newSetPasswordReducer = (state ={}, action) => {
    switch(action.type){
        case NEW_PASSWORD_REQUEST:
            return{loading: true}
        case NEW_PASSWORD_SUCCESS:
            return {loading: false, success: true, data:action.payload}
        case NEW_PASSWORD_FAIL: 
            return {loading: false, error: action.payload}
        default:
            return state
    }
}