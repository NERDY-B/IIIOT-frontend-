import axios from 'axios'
import { 
    FORGOT_PASSWORD_FAIL, 
    FORGOT_PASSWORD_REQUEST, 
    FORGOT_PASSWORD_SUCCESS, 
    NEW_PASSWORD_FAIL, 
    NEW_PASSWORD_REQUEST, 
    NEW_PASSWORD_SUCCESS 
} from "../constants/userConstant"

export const forgotPassword = (email) => async(dispatch, getState) =>{
    try {
        
        // let token = getState().userLogin.data;
        // console.log(token)
        // const {} = getState();
        dispatch({
            type: FORGOT_PASSWORD_REQUEST
        })
    
        console.log(email, 'request')
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        
           const {data} = await axios.get(`https://industrialiot.onrender.com/api/resetpass`, {email}, config)        

    
        dispatch({
            type: FORGOT_PASSWORD_SUCCESS,
            payload: data
        })
        console.log(email, 'after success')
    } catch (error) {
        dispatch({
            type: FORGOT_PASSWORD_FAIL,
            payload: error
        })
    }


    
   
}

export const newSetPassword = (token, newPass) => async(dispatch, getState) =>{
    try {
        
        // let token = getState().userLogin.data;
        // console.log(token)
        // const {} = getState();
        dispatch({
            type: NEW_PASSWORD_REQUEST
        })
    
        // console.log(, 'request')
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        
           const {data} = await axios.put(`https://industrialiot.onrender.com/api/resetouttoken`, {token, newPass}, config)        

    
        dispatch({
            type: NEW_PASSWORD_SUCCESS,
            payload: data
        })
        // console.log(email, 'after success')
    } catch (error) {
        dispatch({
            type: NEW_PASSWORD_FAIL,
            payload: error
        })
    }


    
   
}