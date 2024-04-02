import React, { useState } from 'react'
import { startBtn } from '../actions/startAction'
import { stopBtn } from '../actions/stopAction'
import {useDispatch, useSelector} from 'react-redux'
import Header from '../components/Header'
import { useHistory } from 'react-router-dom';


// import ControlBtn from '../components/ControlBtn'
// eslint-disable-next-line

import Table from '../components/Table'
import { GoGear } from "react-icons/go";


   



const pin = '26';

const SpinnerScreen = () => {
    console.log(window.scrollY, window.scrollX);
    console.log(window.innerHeight, window.innerWidth);

    window.scrollTo({
        y:-50,
        x:0
    })
  
    const history = useHistory();

    const userLogin = useSelector(state => state.userLogin)
    const { data: access_token } = userLogin
    console.log(userLogin);

    const allUsers = useSelector(state => state.allUsers);
    const {loading} = allUsers;

    const control = useSelector(state => state.showUsers);
    const {controlData, disabled} = control;

    const [isSpinning, setIsSpinning] = useState(false);
    let state;
    
    const allRegisteredUsers =  useSelector((state) => state.allUsers);
    let {loading: loadingRegUsers, success} = allRegisteredUsers;

    const dispatch = useDispatch()
    
  

console.log(disabled);
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
    // console.log(`this is the screenval`, showTable)

    return (

        <>

        {};
            <Header />

           
                {isSpinning ? (
                   <div className='spinner'>{console.log('spin')}</div>
                ) : (
                    <div className='spinner-stop' >{console.log('stop')}</div>
                )}

{/* #474859 */}
{/* rgb(71,72,89) */}

              <div className='registered-user'>
                {/* console.log(DISPLAYHIDDEN); */}
               
                   {(loading)?<div className="loader-big"></div> : <Table display={controlData} className='table-data' />} 

                

              </div>
           
{/* {console.log(disabled)} */}
            <div className={`controls ${(controlData) && 'hidden'}`} >
                    <p className='none'></p>
                    <button className='startBtn' onClick={startBtnHandler} >START</button>
                    <button className='stopBtn'  onClick={stopBtnHandler} >STOP</button>
               
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