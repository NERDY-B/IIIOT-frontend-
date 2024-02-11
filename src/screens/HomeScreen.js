import React from 'react'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Image from 'react-bootstrap/Image'
import Row from 'react-bootstrap/Row'
import Loader from '../components/Loader'
import RegisterScreen from './RegisterScreen'
import Test from './LoginScreen'
import '../index.css'
// import { LinkContainer } from 'react-router-bootstrap'
import { Link } from 'react-router-dom'
import { userLogin,userRegister } from '../actions/userAction'
import LoginScreenUpdate from './LoginScreenUpdate'




const HomeScreen = (defaultProps) => {

    const history = useHistory()
    const { location, match, history: historyProps } = defaultProps
    const dispatch = useDispatch();

    const userInfo = useSelector(state => state.userLogin)
    // const { loading, success, data } = userInfo
    const { loading, success, data } = userInfo
   
    
    

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    
    useEffect( () => {
        if(success){
            history.push('/spinner')
        }
    }, [success, history])

    const userHandler = (e) => {
        setEmail(e.target.value)

    }
    const passHandler = (e) => {
        setPassword(e.target.value)

    }
    console.log(email, password)

    const loginHandler = (e) => {
        
        e.preventDefault()
        dispatch(userLogin(email, password))

        // if ( loading ) {
        //     <Loader />
        // }
        
        // if (success) {
        //     history.push('/testLogin')
        // }

        console.log(data)

        
    }
    return (
        <>
        <div className='box'>
            <ul style={{color: 'white'}}>
                <li>
                    <div style={{background:'#85BFFF'}} className='firstone'></div>
                    <div style={{background:'#3C5080'}}></div>
                </li>
                <li>
                    <div style={{background:'#253147'}}></div>
                    <div style={{background: 'radial-gradient(circle, rgb(255,196,118), #FEFFEE)'}}>b</div>
                </li>
                
                
            </ul>
        </div>
            <div className='login-page'>
                <div className='iot-img'></div>
                <h2 className='info'>Power Rev: Infinite possiblities , Max supervision </h2>
            
                <form onSubmit={loginHandler} > 
                  
                  { (success === false) && <div style={{color: 'maroon', textAlign: 'center'}}>Wrong credentials</div>}
                  {/* <label>Email:</label> */}
                  <input type='text' placeholder='Email, User id , Number' value={email} onChange={userHandler} />
                  {/* <label>Password:</label> */}
                  <input type='password' placeholder='Password' value={password} onChange={passHandler} />
                  {(loading)? <div className="loader"></div>: <input type='Submit' value='Log In' className='transform' />}
              </form>
                <div className='footer'>

                    <p onClick={()=>window.location.reload()}> Don't have an account ? <Link to='/register' className='style'>Register</Link> </p> 
                    <p><Link to='/forgotpassword' style={{color:'maroon', textDecoration: 'none'}}> Forgot Password</Link></p>
                </div>
            </div>
      
        

    </>
    )
}


   
export default HomeScreen