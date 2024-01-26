import axios from "axios";
import request from 'superagent';
import { START_RUN_ITEM, START_FAIL, START_RUN_SUCCESS } from "../constants/pinConstant";


export const startBtn = (pin, state) => async (dispatch, getState) => {
    try {
        dispatch({
            type: START_RUN_ITEM,
        })

        const { userLogin: { data: dataLogin } } = getState()
        const { access_token } = dataLogin.token

        
        const config = {
            headers: {
                // 'Authorization': `Bearer ${access_token}`,
                'Content-Type': 'application/json',
                // withCredentials: true
        
            }
        }

        // const dataToSend = {
        //    pin,
        //    state 
        //   };
          
        //   // Example PUT request
        //     const data = request
        //     .put('https://industrialiot.onrender.com/api/updatepin')
        //     .send(dataToSend) // Include the data in the request body
        //     .set('Content-Type', 'application/json') // Set the content type (if needed)
        //     .then(response => {
        //       console.log('PUT Request Successful:', response.body);
        //       return response
        //     })
        //     .catch(error => {
        //       console.error('PUT Request Error:', error);
        //     });


        // const data = await superagent.post('https://industrialiot.onrender.com/api/updatepin',{ pin, state }, config);
        //1100077438
        //Refuge mortgage       


        const { data } = await axios.put('http://serveo.net:4567/api/updatepin',{ pin, state }, config )
       
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

