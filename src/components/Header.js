import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { USER_LOGOUT } from '../constants/userConstant'
import { userLogin, userLogout } from '../actions/userAction'
import { IoMdMenu } from "react-icons/io"
import { IoMdClose } from "react-icons/io";

const Header = () => {
    const user = useSelector((state) => state.userLogin)
    // const {sucess, loading, data} = user
    // const hamburger = document.querySelector('.harmburgerdropdown').style.display = 'none';

    const dispatch = useDispatch()

    const showSidebar = () => {
        const harmburger = document.querySelector('.harmburgerdropdown')
        const close = document.querySelector('.close');
        harmburger.style.display = 'flex';
        close.style.opacity = '1';
        
        
        console.log(harmburger)
    }
    

    const hideSidebar = () => {
        const harmburger = document.querySelector('.harmburgerdropdown')
        const close = document.querySelector('.close');
        harmburger.style.display = 'none';
        close.style.opacity = 0;
    }

    return (
        <div className='header-container'>
            <h1 className='text'><span>Power Rev</span></h1>
            
            <div className='navbar'>
                 <ul>
                    <li className='main-menu'><a href="#"></a>User
                        <div className='dropdown-menu'>
                            <ul >
                                <li className='lists'>Profile settings</li>
                                <li className='lists'>Registered users</li>
                                {/* <li className='lists'>Switch to owner</li>
                                <li className='lists'>Delete account</li> */}
                            </ul>

                           

                        </div>
                    </li>
                 </ul>

                 
            </div>

            <div className='harmbugerNav'>
                <ul>
                    <li className='close' onClick={hideSidebar}> <IoMdClose size={40}/> </li>
                    <li className='harmburger' onClick={showSidebar}>
                        <IoMdMenu size={40} />
                        <div className='harmburgerdropdown hidden' >
                       
                           <ul className='harmbugersidebars'>
                                <li className='lists'>Profile settings</li>
                                <li className='lists'>Registered users</li>
                                {/* <li className='lists'>All users</li>
                                <li className='lists'>Switch to owner</li>
                                <li className='lists'>Delete account</li> */}
                                <Link  className='logout-style' to='/' onClick={() => dispatch(userLogout())}>LOGOUT </Link>
                            </ul>

                        
                         
                        </div>
                    </li>
                 </ul>
                 
                
                    
                 

                 
            </div>
                <Link  className='logger' to='/' onClick={() => dispatch(userLogout())}>LOGOUT </Link>
        
        
        </div>
    )
}

export default Header