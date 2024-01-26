import axios from 'axios'
import { 
    USER_LOGIN_REQUEST,
     USER_LOGIN_SUCCESS, 
     USER_LOGOUT, 
     USER_LOGIN_FAIL, 
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
     CHANGE_EMAIL_FAIL} from "../constants/userConstant";

export const userLogin = (email, password) => async (dispatch) => {
    try {
        dispatch({ type: USER_LOGIN_REQUEST })

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        

        const { data } = await axios.post(`https://industrialiot.onrender.com/api/login`, { email, password }, config)
        dispatch({ 
            type: USER_LOGIN_SUCCESS,
            payload: data
         })

        console.log(data)


    } catch (err) {
        dispatch({
            type: USER_LOGIN_FAIL,
            payload: err.message
        })
    }
}

export const userRegister = (email, username, password) => async (dispatch) => {
    try {
        dispatch({
            type: USER_REGISTER_REQUEST
        })
    
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
    
        const { data } = await axios.post('https://industrialiot.onrender.com/api/register', {email, username, password}, config)
    
        dispatch({
            type: USER_REGISTER_SUCCESS,
            payload: data
        })
    
    } catch (err) {
        dispatch({
            type: USER_REGISTER_FAIL,
            payload: err.message
        })
    }

}

export const userLogout = () => (dispatch) => {
    try {
        dispatch({
            type: USER_LOGOUT
        })
    } catch (error) {
        
    }
}

export const genOTP = (otp, email) => async (dispatch) => {
    try {
        dispatch({
            type: OTP_REQUEST
        })
    
        // eslint-disable-next-line
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        
        const {data} =  axios.post(`https://industrialiot.onrender.com/api/verifyemail`,{otp, email}, config)
        
     
    
        dispatch({
            type: OTP_SUCCESS,
            payload: data
            // payload: info
        })
    
    } catch (err) {
        dispatch({
            type:OTP_FAIL,
            payload: err.message
        })
    }

}




export const resendOTP = (email) => async(dispatch) =>{
    try {
        dispatch({
            type: OTP_RESEND_REQUEST
        })
    
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        const {data} = await axios.get(`https://industrialiot.onrender.com/api/verifyemail`, {email}, config)
    
        dispatch({
            type: OTP_RESEND_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: OTP_RESEND_FAIL,
            payload: error.message
        })
    }
   
}

export const changeEmail = (email, newEmail) => async(dispatch) =>{
    try {
        dispatch({
            type: CHANGE_EMAIL_REQUEST
        })
    
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        const {data} = await axios.put(`https://industrialiot.onrender.com/api/verifyemail`, {email, newEmail}, config)
    
        dispatch({
            type: CHANGE_EMAIL_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: CHANGE_EMAIL_FAIL,
            payload: error.message
        })
    }
   
}