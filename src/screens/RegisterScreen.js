import React from 'react'
import Modal from 'react-modal';
import {useState, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { genOTP, resendOTP, userRegister, changeEmail } from '../actions/userAction'
import Loader from '../components/Loader'
import { FaFacebook } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { FaGoogle } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
// import video from '../video/IOT.mp4';
import { MdClose } from "react-icons/md";



const RegisterScreen = (defaultProps) => {
    const dispatch = useDispatch();
    const history = useHistory()
    
    let state = false
    let [change, setChangeEmail] = useState(false);
    let [otp, setOTP ] = useState('')
    const [userName, setuserName ] = useState('');
    const [Email, setEmail ] = useState('');
    let [oldEmail, setOldMail] = useState('')
    const [password, setPassword ] = useState('');
    const [confirmPassword, setConPassword ] = useState('');
    let [modalOpen, setModalOpen] = useState(state);
    let [timer, setTimer] = useState(60)
    let inputValidation = undefined;


    // if((userName && Email && password && confirmPassword) === undefined || '') && inputValidation = false;
    // console.log(userName);

   const checkInput = (userName  && Email && password && confirmPassword ) === '';
    
    const checkPassword =  (confirmPassword !== password)

    const userRegistration = useSelector(state => state.userRegister)
    const {loading, error, userInfo, success } = userRegistration

    const OTPvalidation = useSelector( state => state.userOtp);
    const {loading: loadingOTP, success: successOTP, error: errorOTP, otpInfo} = OTPvalidation

    const changeEmailAccount = useSelector( state => state.changeEmailId);
    const {emailInfo} = changeEmailAccount


let otpvalue = [...otp]


        // else setOTP('')

//end of the use effect scope
//all handlers start from here
if(errorOTP){
    let intervalId = null
    if(timer!== 0){
         intervalId = setInterval(() => {
            setTimer(timer => timer -= 1)
        }, 1000)
    }else{
        timer = 0
        clearInterval(intervalId)
    }
}
  
    const registerHandler = (e) => {
        e.preventDefault()
        // console.log(userName, Email, password, 'returned ');
        dispatch(userRegister(Email, userName, password));
        // if((userName && Email && password ) === ''){
        //     inputValidation = false;
        // }else if(inputValidation){
        //     dispatch(userRegister(Email, userName, password));
        // }
        setModalOpen(!state)
        localStorage.setItem('email', Email);
        // setTimer()
    }

    const usernameHandler = (e) => {
        setuserName(e.target.value)
    }
    const emailHandler = (e) => {
        oldEmail = Email;
        setEmail(e.target.value)
    }
    const passwordHandler = (e) => {
        setPassword(e.target.value)
    }
    const confirmPasswordHandler = (e) => {
        setConPassword(e.target.value)
    }

    const closeModal = (e) => {
        e.preventDefault()
        // if(e.key === 'Esc'){
        //     setModalOpen(false)
        // }
        setModalOpen(false)
        console.log(e.key)
        
    }
    const changeEmailHandler = (e) => {
        e.preventDefault();
        setChangeEmail(!change)
        
    }
    
    const oldEmailHandler = () => {
        
        setOldMail()
        
    }

    const inputotpHandler = (e) => {
        setOTP(e.target.value);      
        
    }

    const OtpHandler = (e) => {
        const dispatch = useDispatch()
        if(otpvalue.length === 6){
            dispatch(genOTP((otp), Email))
            // (successOTP && history.push('/testLogin'))
            (successOTP && console.log('otp received'))
            setOTP('')
                // otpvalue = ''
               
            }
        
        
    }
   
   
    const resendHandler = (e) => {
        e.preventDefault()
        dispatch(resendOTP(Email))
    }
    
    const proceedChangeEmailHandler =(e) => {
        e.preventDefault()
        dispatch(changeEmail(oldEmail, Email))
        //place a condition here if it is successful d request setChangeEmail(!change)
        setChangeEmail(!change)
    }

    if(successOTP){
        history.push('/')
    }
      

    if(otpInfo){

        const successOne = JSON.parse(otpInfo);
        console.log(successOne)
    }

  return (
    <>
    <div className='entryanimation'>
        <ul>
            <li></li>
            <li><p className='title'>POWER REV</p></li>
            <li></li>
        </ul>
    </div>
        
        <main className='parent '>
            
            <div className='register-content'>
              <div className='shape-1'></div>
              <div className='shape-2'></div>
               
                <div className='img-banner'>
                    {/* <video width="750" height="500"  autoplay muted style={{width:'15.5rem', height:''}} >
                    <source src={video} type="video/mp4"/>
                    </video> */}
                </div>
                <form className='form-fields' onSubmit={registerHandler}>
                       {checkInput && <p style={{color:"white", textAlign:"center"}}>Fill all Fields</p>}
                            <input type='text' value={userName} onChange={usernameHandler} className='style'  placeholder='Username or id'/>
                            <input type='text' value={Email} onChange={ emailHandler} className='style' placeholder='Email'/>                
                            <input type='password' value={password} onChange={ passwordHandler }  className='style' placeholder='Password'/>
                        
                        { (checkPassword) &&  <p style={{ color : 'white', marginLeft: '32px'}}>Password incorrect</p>}
                         <input type='password' value={confirmPassword} onChange={confirmPasswordHandler}  className='style' placeholder='Confirm Password'/>
                        
                        
                        {(loading) && <div className='loading'></div>}
                        {(!checkInput) && <input type='submit' value='Register' className='transform style' />}
                        {/* <input type='text' value='' placeholder='try here'/> */}
                    </form>

                    <div className='social-media'>
                        <ul>
                            <li><FaXTwitter size='20px'/></li>
                            <li><FaLinkedin size='20px' /></li>
                            <li><FaGoogle size='20px' /></li>
                            <li><FaGithub size='20px' /></li>
                            <li><FaFacebook size='20px' /></li>
                        </ul>
                    </div>
            </div>
                
            
                
                
            
            
            {/* //----custom built modal */}
                { loading ? 
                    
                        <div className='overlay'>
                            <div className='spinner-registration'></div>
                           
                        </div>
                    // </div>
                : 
                <div className={`modal-${modalOpen}`} >
                    <div className='overlay'>

                    </div>

                        <div className="modal-content ">
                            { (!change)? //if false
                                (
                                <form >
                                    <div className='icon-close-btn' onClick={closeModal}><MdClose size='22px'/></div>
                                        <label> Input OTP sent to your mail:</label>
                                    
                                        <div className='input-proceed'>

                                            <input type='text' pattern="[0-9]{1,6}" title='Digits only' value={otp} onChange={inputotpHandler} className='modal-text' />
                                            {/* <input type='text' pattern="[0-9]{1,6}" title='Digits only' value={otp} onChange={otpHandler} className='modal-text' /> */}
                                            <label onClick={(otpvalue.length === 6)&& dispatch(genOTP(otp, Email))}>xxx</label>
                                        </div>
                                        
                                        <div>
                                            { (loadingOTP)&& <div className="loader"></div>} 
            
                                            { (otpInfo)&& <p >{`${otpInfo}`}</p> } 
                                            
                                        </div>
                                        
                                        <button type="submit" className='transform' onClick={resendHandler}>Resend: </button>
                                        <div style={{display:'inline', margin:'0 20px'}}>{timer}</div>
                                        <button type="submit"  className='transform-red' onClick={changeEmailHandler}>Change Email</button>
                                </form>
                                    )
                                :
                                (
                                    <form className='credential-change' >
                                        <div className='icon-close-btn' onClick={closeModal}><MdClose size='22px'/></div>
                                        <input type='text' value={localStorage.getItem('email') } placeholder='Old Email' style={{placeholder:'black'}}   />
                                        <input type='text' placeholder='New Email' value={Email}  onChange={emailHandler} />
                                        <input type='submit' value='Proceed' className='transform' onClick={ proceedChangeEmailHandler}/>
                                    </form>
                                    
            
                                )
                        }
                            
                                
                        </div>
                        </div>
            }        
       </main>
   
    </>
    
    
  )



}

export default RegisterScreen