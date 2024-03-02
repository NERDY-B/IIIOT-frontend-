import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { USER_LOGOUT } from '../constants/userConstant'
import { userLogin, userLogout } from '../actions/userAction'
import { IoMdMenu } from "react-icons/io"
import { IoMdClose } from "react-icons/io";
import Table from '../components/Table'
import { showTable } from '../actions/tableControlAction'
import { getAllUsers } from '../actions/getAllUsersAction'






// export let[controlT, setControlT] = useState(false);


const Header = () => {
   
    // const control = useSelector(state => state.showUser);
    // const {controlData} = control;
   
   

    const user = useSelector((state) => state.userLogin);
    // const {sucess, loading, data} = user
   
    const allUsers = useSelector(state => state.allUsers);
    const {loading, success} = allUsers;
    
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
    const showRegisteredUser = () => {
        //do a validation here to see if a user is logged in already
        //if not route to login 
        
        dispatch(getAllUsers());

        console.log(success)
        // if(success){
        //     dispatch(showTable());
        // }
        if(!loading){
            dispatch(showTable())
        }
    }

    return (
        <div className='header-container'>
            
            <h1 className='text'><span>Power IIOT</span></h1>
            
            <div className='navbar'>
                 <ul>
                    <li className='main-menu'><a href="#"></a>User
                        <div className='dropdown-menu'>
                            <ul >
                                <li className='lists'>Profile settings</li>
                                <li className='lists reg' onClick={showRegisteredUser}>Registered users</li>
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
                                <li className='lists' onClick={showRegisteredUser}>Registered users</li>
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
                
                
                {/* <Table /> */}
        
        </div>

    
    )
}

// export {showTable};
export default Header