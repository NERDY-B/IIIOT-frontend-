import axios from 'axios'
import { GET_ALL_USERS_FAIL, GET_ALL_USERS_REQUEST, GET_ALL_USERS_SUCCESS } from '../constants/getAllUsesConstant'


export const getAllUsers = () => async(dispatch, getState) =>{
    try {
        dispatch({
            type: GET_ALL_USERS_REQUEST
        })
        
        const { userLogin: { data: dataLogin } } = getState()
        const { access_token } = dataLogin.token

        const config = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${access_token}`

            }
        }

        // const {data} = await axios.put(`https://industrialiot.onrender.com/api/verifyemail`, {email, newEmail}, config)
        const {data} = await axios.get(`https://industrialiot.onrender.com/api/users`, config)
    
        dispatch({
            type: GET_ALL_USERS_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: GET_ALL_USERS_FAIL,
            payload: error.message
        })
    }


}

