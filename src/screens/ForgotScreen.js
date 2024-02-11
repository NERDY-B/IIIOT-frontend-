import React from 'react'
import {Link, useHistory} from 'react-router-dom'
import { forgotPassword } from '../actions/userAction'
import {useState, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'


const ForgotScreen = () => {
    let[emailForgot, setEmailForgot] = useState()
    const history = useHistory();
    const dispatch = useDispatch()
    let check;
    let errMsg;

    const ValidateEmail= (email) => 
            {
            if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailForgot))
            {
                return (true)
            }
                alert("You have entered an invalid email address!")
                return (false)
            }

    const signUpHandler = () => {
        history.push('/register')
    }

    const emailForgotHandler = (e) => {
        // console.log(e);
        setEmailForgot(e.target.value);
    }

    console.log('got here')
    const proceedBtnHandler = (e) => {
        e.preventDefault()
        ValidateEmail(emailForgot);
        // check = (!(emailForgot.includes('@')) || emailForgot === undefined);
        // console.log(typeof emailForgot)

        dispatch(forgotPassword(emailForgot))
        

    }
// console.log(emailForgot.includes('@'))

    return(
        <>
        <div className='forgotPass-container'>
            <h2>Forgot Password</h2>
            <div className='forgotPass-form'>
                <form onSubmit={proceedBtnHandler}>
                    {(errMsg)? <label>{errMsg}</label>: <label>Enter Email Address</label>}
                     <input type='text' placeholder='Enter Email' onChange={emailForgotHandler} />
                     <p>Back to <Link to='/'>Sign in </Link></p>
                     <input type='submit' value='Proceed' className='proceed' />
                
                     <p>Don't have an account? </p>
                <p className='sign-up' onClick={signUpHandler}>Sign Up</p>
                </form>




                

            </div>


            
        </div>
        
        </>
        
    )
}

export default ForgotScreen