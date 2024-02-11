import React, { useState } from 'react'
import { startBtn } from '../actions/startAction'
import { stopBtn } from '../actions/stopAction'
import {useDispatch, useSelector} from 'react-redux'
import Header from '../components/Header'
import { GoGear } from "react-icons/go";


const SpinnerScreen = () => {

    const pin = 26;
    let state;
   
    const dispatch = useDispatch()

    const startBtnHandler = (e) => {
      state = 1
      dispatch(startBtn(pin, state))
      e.preventDefault()
    }

    const stopBtnHandler = (e) => {
        state = 0
        dispatch(stopBtn(pin, state))
        e.preventDefault()
    }

    return (

        <>

        
            <Header />
            <div className='spinner'></div>
            <div className='wrapper'>
               <div className='feature1'></div>
               <div className='feature2'></div>
               <div className='feature3'></div>
               <div className='feature4'></div>
          </div>  
            <div className='controls'>

                <button className='startBtn' onClick={startBtnHandler} >START</button>
                <button className='stopBtn'  onClick={stopBtnHandler}>STOP</button>
                {/* <button className='startBtn' >START</button> */}
                
            </div>
            
        

            <footer>
                {/* holds stanley inc as footer check brad footers component  */}
            </footer>

        </>
    )
}

export default SpinnerScreen