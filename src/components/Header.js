import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { USER_LOGOUT } from '../constants/userConstant'
import { userLogin, userLogout } from '../actions/userAction'

const Header = () => {
    const user = useSelector((state) => state.userLogin)
    // const {sucess, loading, data} = user

    const dispatch = useDispatch()

    // useEffect(()=> {
    //     if(!data)
    //     dispatch(userLogin())
    // }, [data])
    return (
        <div className='header-container'>
            <h1 className='text'>Power Rev</h1>
            <ul className='header-info'>
                <li>Home</li>
                <li className='about-list'>About</li>
                <li><i className="fa-regular fa-circle-user" style={{color: 'white'}}></i></li>
            </ul>
        <Link className='link-style' to='/' onClick={() => dispatch(userLogout())}>Log Out</Link>
        </div>
    )
}

export default Header