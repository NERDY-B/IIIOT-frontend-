import React from 'react'

const ForgotPasswordUIThree = (props) => {
  return (
    <div>
        <div>
               
                {/* <h2>VERIFICATION</h2> */}
                <div className='forgotPass-form'>
                    <form onSubmit={props.proceed}>
                        
                        {/* <p>Enter Verification Code </p> */}
                        <label>Enter New Password</label>
                        <input type='text' className='newPassword' onChange={props.passOne}/>
                        <label>Confirm Password</label>
                        <input type='text' className='newPassword' onChange={props.passTwo}/>
                        {
                          (props.passTwoVal !== props.passOneVal) && <p style={{color: 'rgba(255, 0, 0, .85)'}}>Password Incorrect</p>
                          
                        }
                        {/* <input type='submit'  value='Submit' /> */}
                        {/* {console.log(otpInput)} */}
                        {(props.loading)? <div className="loader"></div>:<input type='submit' value='Confirm' className='proceed' />}
                    
                    </form>
               </div>
               
            </div>  
    </div>
  )
}

export default ForgotPasswordUIThree