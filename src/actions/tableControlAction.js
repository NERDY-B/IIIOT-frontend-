import { HIDE,SHOW } from "../constants/tableConstant";

export const showTable=() => async (dispatch) =>  {
    dispatch({
        type:SHOW,
        controlBtn: 'disabled',
        payload: true
    })
}

export const hideTable = () => async (dispatch) => {
    dispatch({
        type: HIDE,
        controlBtn:'',
        Payload: false
    })
}