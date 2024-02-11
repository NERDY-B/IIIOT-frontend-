import axios from "axios";
import { STOP_RUN_ITEM, STOP_FAIL, STOP_RUN_SUCCESS } from "../constants/stopConstant";


export const stopBtn = (pin, state) => async (dispatch, getState) => {
   
    
        try {
            dispatch({
                type: STOP_RUN_ITEM,
    
            })
    
            const { userLogin: { data: dataLogin } } = getState()
            const { access_token } = dataLogin.token
    
            const config = {
                headers: {
                    'Authorization': `Bearer ${access_token}`,
                    'Content-Type': 'application/json'
                }
            }
    
            const { data } = await axios.put(
                'https://industrialiot.onrender.com/api/updatepin',
                { pin, state },
                config
            )
    
            dispatch({
                type: STOP_RUN_SUCCESS,
                payload: data
            })
        }
        catch (error) {
            dispatch({
                type: STOP_FAIL,
                payload: error.message
            })
        }
     } 


