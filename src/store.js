import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
// import { userReducer } from './reducers/userReducer'
import { changeEmailReducer, genOTPReducer, userLoginReducer, userRegisterReducer } from './reducers/userReducers'
import { forgotPasswordReducer, newSetPasswordReducer } from './reducers/forgotPasswordReducer'
import { pinReducerBtn } from './reducers/pinApiStartReducer'
import { stopRunItem } from './reducers/stopReducer'
import { startRunItem } from './reducers/startReducer'
import { tableControlReducer } from './reducers/tableControlReducer'
import { getAllUsersReducers } from './reducers/getAllUsersReducers'

const reducer = combineReducers({
    userLogin: userLoginReducer,
    userRegister: userRegisterReducer,
    userOtp: genOTPReducer,
    changeEmailId: changeEmailReducer,
    pinMotor: pinReducerBtn,
    startButton: startRunItem,
    stopButton: stopRunItem,
    forgotPassword: forgotPasswordReducer,
    newPassword: newSetPasswordReducer,
    showUsers: tableControlReducer,
    allUsers: getAllUsersReducers

})

const initialState = {

}
//initial state for the store, when we also want anything to load up
// or run automatically when the store runs we fix it in in our initial state

const middleWare = [thunk]


const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleWare)))
export default store