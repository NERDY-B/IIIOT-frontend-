import axios from "axios";
import { START_RUN_ITEM, START_FAIL, START_RUN_SUCCESS } from "../constants/startConstant";




export const startBtn = (pin, state) => async (dispatch, getState) => {
   
        try {

            dispatch({
               type: START_RUN_ITEM,
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
               type: START_RUN_SUCCESS,
               payload: data
           })
       }
       catch (error) {
           dispatch({
               type: START_FAIL,
               payload: error
           })
       }
    
   
}

