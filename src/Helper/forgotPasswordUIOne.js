import React from 'react'
import {Link, useHistory} from 'react-router-dom'

const ForgotPasswordUIOne = (props) => {
  return (
    <div>
         <div>
                        <h2>Forgot Password</h2>
                            <div className='forgotPass-form'>
                                <form onSubmit={props.proceed}>
                                    {(props.err)? <label>{props.err}</label>: <label>Enter Email Address</label>}
                                    <input type='text' placeholder='Enter Registered Email' onChange={props.email} />
                                    <p>Back to <Link to='/'><span style={{color:'white', borderBottom:'2px dotted #2eb1f8'}}>Sign in </span></Link></p>
                                    {(props.loading)? <div className="loader"></div>:<input type='submit' value='Proceed' className='proceed' />}
                                {/* {console.log(emailForgot)} */}
                                    <p>Don't have an account? </p>
                                <p className='sign-up' onClick={props.signup}>Sign Up</p>
                                </form>
        
                            </div>
                    </div>
    </div>
  )
}

export default ForgotPasswordUIOne;