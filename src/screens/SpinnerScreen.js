import React, { useState } from 'react'
import { startBtn } from '../actions/startAction'
import { stopBtn } from '../actions/stopAction'
import {useDispatch, useSelector} from 'react-redux'
import Header from '../components/Header'
import { useHistory } from 'react-router-dom';

// import ControlBtn from '../components/ControlBtn'
import { GoGear } from "react-icons/go";


const pin = '26';
const SpinnerScreen = () => {
  
    const history = useHistory();
    const userLogin = useSelector(state => state.userLogin)
    const { data: access_token } = userLogin
    console.log(userLogin);

    const [isSpinning, setIsSpinning] = useState(false);
    let state;
    
    const dispatch = useDispatch()
    
  


    const startBtnHandler = (e) => {

        if(!access_token?.token) {
            alert('you are not logged in')
            history.push('/')
        } else {
            state = '1'
            dispatch(startBtn(pin, state))
            setIsSpinning(true);
            e.preventDefault()
        }

    }

    const stopBtnHandler = (e) => {

        if(!access_token?.token) {
            alert('you are not logged in')
            history.push('/')
        } else {
            state = '0'
            dispatch(stopBtn(pin, state))
            setIsSpinning(false);
            e.preventDefault()
        }

       
    }


    return (

        <>

        
            <Header />

           
                {isSpinning ? (
                   <div className='spinner'>{console.log('spin')}</div>
                ) : (
                    <div className='spinner-stop' >{console.log('stop')}</div>
                )}

              
           

            <div className='controls'>
                    <p className='none'></p>
                    <button className='startBtn' onClick={startBtnHandler} >START</button>
                    <button className='stopBtn'  onClick={stopBtnHandler}>STOP</button>
               
               </div>
            


               {/* #2eb1f8 blue like
               rgb(255,196,118) */}

            {/* <div className={`spinner ${isSpinning ? 'spin' : ''}`}>
      
                    
                    <div className='controls'>
                        <button className='startBtn' onClick={startBtnHandler}>Start</button>
                        <button className='stopBtn' onClick={stopBtnHandler}>Stop</button>
                    </div>
           </div> */}
            
             


            
          

            <footer>
                {/* holds stanley inc as footer check brad footers component  */}
            </footer>

        </>
    )
}

export default SpinnerScreen