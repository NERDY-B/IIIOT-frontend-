import axios from 'axios'
import {
    PIN_START_ITEM,
    PIN_START_SUCCESS,
    PIN_START_FAIL
} from "../constants/pinApiStartConstant"

export const pinStart = (pin) => async (dispatch, getState) => {
    try {
        dispatch({
            type: PIN_START_ITEM
        })

        const { userLogin: { data: dataLogin } } = getState()
        const { access_token } = dataLogin.token

        const config = {
            headers: {
                'Authorization': `Bearer ${access_token}`,
                'Content-Type': 'application/json'
            }
        }

        const { data } = await axios.post(
            'https://industrialiot.onrender.com/api/status',
            pin,
            config
        )

        dispatch({
            type: PIN_START_SUCCESS,
            payload: data
        })
    }

    catch (error) {
        dispatch({
            type: PIN_START_FAIL,
            payload: error.message
        })
    }
}