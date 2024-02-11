import {
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_FAIL,
    USER_LOGOUT,
    USER_REGISTER_REQUEST,
    USER_REGISTER_SUCCESS,
    USER_REGISTER_FAIL,
    OTP_REQUEST,
    OTP_SUCCESS,
    OTP_FAIL,
    OTP_RESEND_REQUEST,
    OTP_RESEND_SUCCESS,
    OTP_RESEND_FAIL,
    CHANGE_EMAIL_REQUEST,
    CHANGE_EMAIL_SUCCESS,
    CHANGE_EMAIL_FAIL,
    FORGOT_PASSWORD_REQUEST,
    FORGOT_PASSWORD_SUCCESS,
    FORGOT_PASSWORD_FAIL
} from "../constants/userConstant"

export const userLoginReducer = (state = {}, action) => {
    switch (action.type) {
        case USER_LOGIN_REQUEST:
            return { loading: true }
        case USER_LOGIN_SUCCESS:
            return { loading: false, success: true, data: action.payload }
        case USER_LOGIN_FAIL:
            return { success: false, data: action.payload }
        case USER_LOGOUT:
            return {}
        default:
            return state
    }
}

export const userRegisterReducer = (state = {}, action) => {
    switch(action.type){
        case USER_REGISTER_REQUEST:
            return {loading: true}
        case USER_REGISTER_SUCCESS:
            return {loading: false, userInfo: action.payload, success: true }
        case USER_REGISTER_FAIL: 
            return {loading: false, error: action.payload}
        default: 
            return state
    }
}

export const genOTPReducer = (state ={}, action) => {
    switch(action.type){
        case OTP_REQUEST :
            return{loading: true}
        case OTP_SUCCESS :
            return {loading: false, success: true, otpInfo: action.payload}
        case OTP_FAIL: 
            return {loading: false, error: action.payload}
        default:
            return state
    }
}
export const resendOTPReducer = (state ={}, action) => {
    switch(action.type){
        case OTP_RESEND_REQUEST :
            return{loading: true}
        case OTP_RESEND_SUCCESS :
            return {loading: false, success: true, data:action.payload}
        case OTP_RESEND_FAIL: 
            return {loading: false, error: action.payload}
        default:
            return state
    }
}

export const changeEmailReducer = (state ={}, action) => {
    switch(action.type){
        case CHANGE_EMAIL_REQUEST :
            return{loading: true}
        case CHANGE_EMAIL_SUCCESS :
            return {loading: false, success: true, emailInfo:action.payload}
        case CHANGE_EMAIL_FAIL: 
            return {loading: false, error: action.payload}
        default:
            return state
    }
}

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
