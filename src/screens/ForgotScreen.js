import React from 'react'
import {Link, useHistory} from 'react-router-dom'
import { forgotPassword, newSetPassword } from '../actions/forgotPassword'
import {useState, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ForgotPasswordUIOne from '../Helper/forgotPasswordUIOne'
import ForgotPasswordUITwo from '../Helper/forgotPasswordUITwo'
import ForgotPasswordUIThree from '../Helper/ForgotPasswordUIThree'


const ForgotScreen = () => {
    let[emailForgot, setEmailForgot] = useState('')
    const history = useHistory();
    const dispatch = useDispatch()
    // let page,count;
    // let page;
    

    // count = 0;
    // count +=count;
    // page = count;
    let [otpValInput, setOTP] = useState('');
    let [newPass, setNewpass] = useState('')
    let [confirmPass, setConfirmpass] = useState('')
    let [count, setCount] = useState(0);
    const [page, setPage] = useState(0);
    let passStatus;

    localStorage.setItem("count", `${count}`);
    const countLocalStored = localStorage.getItem('count');
    
    const emailDetails =  useSelector((state) => state.forgotPassword);
   let {loading, success, emailInfo} = emailDetails;

    const newSetPass = useSelector((state) => state.newPassword);
    // const {loading:loadingNewPass,  data} = newSetPass;
    // const {loading:loadingNewPass, success:successPassApi, data} = newSetPass;
    let {loading:loadingNewPass, success:successPassApi, data} = newSetPass;

   useEffect(() => {
            if(successPassApi)  {
            //     setTimeout(() => {
            //         history.push('/')
            // }, 3000)
            history.push('/')
            }
                
                    
        },[successPassApi, history])

        if(successPassApi){
            history.push('/')
        }

    const ValidateEmail= (emailForgot) => 
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
        localStorage.setItem('emailForgot', emailForgot)
      
    }

   const otpValInputHandler = (e) => {
                setOTP(e.target.value);
                otpValInput.trim();
                otpValInput += otpValInput;
    }

    const newPassHandler = (e) => {
            setNewpass (e.target.value);
            newPass.trim();
     }

     const confirmPassHandler = (e) => {
            setConfirmpass (e.target.value)
            confirmPass.trim();
         }


    const proceedHandlerBtn = (e ) => {
        e.preventDefault();
        // let count;
        // if(!successPassApi) count = 0;

        emailForgot = emailForgot || localStorage.getItem('emailForgot');
        console.log(emailForgot)
        console.log(count ,'begining of count')
        // console.log('got here in btn handler')
        // if(!page){

            // count = 0;
            // count = (page > 0)? page : 0;
            // console.log('first count after not assigned val', count)
            // console.log('page number  after clicked', page)
        // }
                    // if(page === 0 ){
                        //fisrt displayed page
                    if(count === 0  || countLocalStored ){
                        const emailValid = ValidateEmail(emailForgot);
                        if(emailValid){
                            if(page !== 2){
                                dispatch(forgotPassword(emailForgot))
                                // success = true;
                            }
                            console.log('got here after success set to true')
                           
                        }
                        // console.log(page, 'page', count , 'count')
                        
                        if(success) {
                            console.log('successful dispatch in here')
                            // count++
                              const parameters =   document.querySelector('.test').getBoundingClientRect()
                              const{top, left} = parameters;
                              console.log(top, left , 'values of rect bounding')
                               window.scrollTo({
                                top,
                                left,
                                behavior:'smooth'
                               })
                               //moves to the second page
                               
                            //    page++;
                            //    setPage(page + 1);
                            // window.scrollto element for page2 (the element -use getboundingrect() of the element)
                            setCount(count + 1)
                            setPage(count + 1)
                            console.log(`clicked ${count} times`)
                            success =false;
                        }
                    }
                    console.log(`click is now ${count} time`);
                    // console.log(page, 'page', count , 'count')
                    if(otpValInput.length === 6){
                    // if(page === 1){

                    if(count === 1){
                        console.log('inside logic of 1')
                        // if(otpValInput.length===6){
                        // if(page === 1){
                            // count++;
                            console.log(count ,'count', page , 'page') 
                            const parameters = document.querySelector('.test2').getBoundingClientRect()
                            console.log(parameters)
                            const{top, left} = parameters;
                             window.scrollTo({
                              top:top * 2,
                              left: left * 2,
                              behavior:'smooth'
                             })

                             setCount(count + 1);
                             setPage(count + 1)
                         }
                        //  count = page
                        //  count += page
                         //display third page
                        //  page = count;
                //             window.scrollto element for page 3(the element -use getboundingrect() of the element)
                // temporarily hold otpvalue nothing more
                    }
                    console.log(page);
                    if(page === 2){
                    // if(count === 2){
                        console.log('inside of logic 2')
                    passStatus = (newPass === confirmPass)
                        if(passStatus){

                            // dispatch to the api receiving 
                                dispatch(newSetPassword(otpValInput, newPass));
                                console.log(otpValInput, newPass);
                                successPassApi = true;
                                // history.push('/');
                                setCount(0);
                                setPage(0)

                                const parameters =   document.querySelector('.test-page-0').getBoundingClientRect()
                                const{top, left} = parameters;
                                console.log(top, left , 'values of rect bounding')
                                 window.scrollTo({
                                  top,
                                  left,
                                  behavior:'smooth'
                                 })
                        }
                        
                        // use the destructure from the above api request function the success val used
                        // as a condition in the useEffect and route to login page
                    //    if(successPassApi)
                        // count = 0;	
            //   place loaing val for api to update password , if loading to show sign of success, settime out to route to default lgin page	
                }
                // ++count;
                if(successPassApi) history.push('/')

                
                    // page = count;
                // page = (count === 0)? count: count;    
            console.log(count ,'end of btnhandler', 'page', page)    
        }
    //create an html collection of input tags
    //loops throug individual input to get each value having individual onChange,
    //concatenate all input value onChange in each loop for each element.

    //in proceed btnhandler , if we have success not true ,that is yet to input mail, the dispatch receives mail arg
    //else the proceed btnhandler dispatches to the verify otp api
    // const setOtpInputHandler = (e) =>{

    //     otpInput.trim();
    //     setOtpInput(e.target.value);
    //     otpInput += otpInput;

    //     console.log(otpInput);
    // }

   

    // console.log('got here')
    // const proceedBtnHandler = (e) => {
    //     e.preventDefault();
        
    //     (!successClone)&& ValidateEmail(emailForgot);
    //     if(emailForgot.length >=6){
    //         successClone = true;
            
            
    //         // const { x:x1, y:y1,top:top1 } = page2.getBoundingClientRect()
    //         // const { x:x3, y:y3,top:top3 } = page3.getBoundingClientRect()
    
    //         totalEl.forEach((el, i) => {
    //             const {x,y,top} = el.getBoundingClientRect()
    //             window.scrollTo({
    //                 x,
    //                 y,
    //                 top,
    //                 behavior:'smooth'
                    
    //             })
    //         })

    //     }
    //     if(!otpInput)
    //     dispatch(forgotPassword(emailForgot))
      
    //     console.log( successClone)
       

    // }
// console.log(emailForgot)

    return(
        <>
        {console.log('inside the xml')}
        <div className='forgotPass-container'>
            <div className='test-page-0'>
                <ForgotPasswordUIOne proceed={proceedHandlerBtn}
                    email={emailForgotHandler}
                    signup={signUpHandler}
                    err={ValidateEmail}
                    loading={loading}
                    className='element-one'
                    />
            </div>
                

               
        
            
        {/* <p className='test'>hello and testing dom</p> */}
        <div className='test'>
        <ForgotPasswordUITwo proceed={proceedHandlerBtn}
            otp={otpValInputHandler}
            className='element-two'
            /> 
        </div>
          
            
            
    
        
        {/* <p className='test2'>hello and testing domm</p> */}

           <div className='test2'>
           <ForgotPasswordUIThree proceed={proceedHandlerBtn}
            passOne={newPassHandler}
            passTwo={confirmPassHandler}
            loading={loadingNewPass}
            passOneVal= {newPass}
            passTwoVal = {confirmPass}
            className='element-three'
            />
           </div>
          
      


        </div>  
        
        </>
        
    )
 }


export default ForgotScreen

