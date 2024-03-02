import { HIDE, SHOW } from "../constants/tableConstant";



export const tableControlReducer = (state = false, action) => {
	switch(action.type){
		case SHOW:
			return {controlData: true, disabled:action.controlBtn};
		case HIDE:
			return {controlData: false, disabled:action.controlBtn};
		default:
			return state;
		}
	}

