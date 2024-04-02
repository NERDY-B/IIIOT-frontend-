import React from 'react'
import {Link, useHistory} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

const ForgotPasswordUITwo = (props) => {

  const emailDetails =  useSelector((state) => state.forgotPassword);
   let {loading, success, emailInfo} = emailDetails;

   const value = emailInfo

  return (
    <div>
        <div>
                {console.log('got here fr verification')}
                <h2>VERIFICATION</h2>
                <div className='forgotPass-form'>
                    <form onSubmit={props.proceed}>
                        
                        <p>Enter Verification Code </p>
                        
                        <input type='text' className='otp-entered' onChange={props.otp} />
                        {/* {console.log(otpInput)} */}
                       {/* {<input type='submit' value='Confirm' className='proceed' />} */}
                       {(props.otp !== value)? 'Invalid OTP' : <input type='submit' value='Confirm' className='proceed' />}
                    
                    </form>
               </div>
               
            </div>  
    </div>
  )
}

export default ForgotPasswordUITwo