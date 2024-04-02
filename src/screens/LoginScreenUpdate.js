import React from 'react'
import Header from '../components/Header'
import { useDispatch, useSelector } from 'react-redux'
import { startBtn } from '../actions/startAction'
import { stopBtn } from '../actions/stopAction'
import { useNavigate } from 'react-router-dom'
// import { pinStart } from '../actions/pinApiStartAction'


const LoginScreenUpdate = () => {
    const history = useNavigate()
    const pin = 26;
    let state;

   

    const dispatch = useDispatch()

    const startBtnHandler = () => {
        state = 1;
        dispatch(startBtn(pin, state))
    }


    const buttonInfo = useSelector(state => state.startButton);
    const {loading, success} = buttonInfo;

    const userInfo = useSelector(state => state.userLogin)
    // const { loading, success, data } = userInfo
    const { loading:loadingInfo, success:successInfo, data } = userInfo

    const bodyStyle = document.getElementsByTagName('body');
    const elName = Array.from(bodyStyle)[0];
    // console.log(window.getComputedStyle(elName).background)
    



    if(successInfo){
        
    }
    const stopBtnHandler = () => {
        state = 0;
        dispatch(stopBtn(pin, state))
    }

// console.log(success)

    return (
        <>
            <Header />


            <div className="body">
                {/* import a react bootstrap container for the control and display to aid responsiveness, use Row and Col */}
                <section className="display-screen">

                </section>
                <section className="control-keys">
                    <div className='fan-icon spin'></div>
                    <div className='parent-btn'>
                        <p className='start-btn' onClick={startBtnHandler}>
                            Start
                        </p>
                        <p className='stop-btn' onClick={stopBtnHandler}>Stop</p>
                        <p className='status-btn'>Status</p>
                    </div>

                </section>
            </div>

            <footer>
                {/* holds stanley inc as footer check brad footers component  */}
            </footer>

        </>
    )
}

export default LoginScreenUpdate