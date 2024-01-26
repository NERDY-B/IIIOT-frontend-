import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
// import { userReducer } from './reducers/userReducer'
import { changeEmailReducer, genOTPReducer, userLoginReducer, userRegisterReducer } from './reducers/userReducers'
import {pinReducerBtn} from './reducers/pinApiStartReducer'
import { stopRunItem } from './reducers/stopReducer'
import { startRunItem } from './reducers/startReducer'

const reducer = combineReducers({
    userLogin: userLoginReducer,
    userRegister: userRegisterReducer,
    userOtp: genOTPReducer,
    changeEmailId: changeEmailReducer,
    pinMotor: pinReducerBtn,
    startButton: startRunItem,
    stopButton: stopRunItem


})

const initialState = {

}
//initial state for the store, when we also want anything to load up
// or run automatically when the store runs we fix it in in our initial state

const middleWare = [thunk]


const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleWare)))
export default store