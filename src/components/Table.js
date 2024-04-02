import React from 'react'
import { IoMdCloseCircle } from "react-icons/io";
import { hideTable } from '../actions/tableControlAction';
import {useDispatch, useSelector} from 'react-redux'
import { FaCheck } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";

{/* <RxCross2 /> */}

{/* <FaCheck /> */}

const Table = ({display}) => {
    const dispatch = useDispatch();

    const allRegisteredUsers =  useSelector((state) => state.allUsers);
    let {loading, success} = allRegisteredUsers;

    //  const control = useSelector(state => state.showUser);
    // const {controlData} = control;
console.log(success)
let classNameVal = '';
    if(display){
        classNameVal = `nothing`
    }
    else{
        classNameVal = 'hidden'
    }

    console.log(display);

    const closeIconHandler = () => {
        dispatch(hideTable());
    }
  return (
    
    <div className={`table-parent ${classNameVal}`}>
        <div className='closebtn' onClick={closeIconHandler}>
                <IoMdCloseCircle size={32} />
        </div>
    {console.log(classNameVal)}
        <div className='list-header'>
                        <input type='text' placeholder={`Search name, email, or username `} className='search-field' />

                        <div>
                            <label>Active<sup>20</sup></label>
                            <label>Inactive<sup>5</sup></label>
                        </div>
                        
         </div>

            <div className='table-section'>
                     <table className={`content-table `}>
                        <thead>
                        <tr>
                            <th>I.d</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Verified</th>
                        </tr>
                        </thead>
                        <tbody>
                        {/* <tr> */}
                            {success?.registeredUsers.map((objEl) => 
                                        ( 
                                            <tr>
                                                {console.log(objEl)}
                                                {console.log('wetin dey occurs for here now')}
                                                {/* <p> wetin xup </p> */}
                                                <td>{objEl.id}</td>
                                                <td>{objEl.username}</td>
                                                <td>{objEl.email}</td>
                                                <td>
                                                    <select id="roles" disabled value={(objEl.role === 'admin')? 'admin': 'User'}>
                                                        <option value='Admin'>{objEl.role}</option>
                                                        <option value="User" >User</option>
                                                    </select>
                                                </td> 
                                                
                                                <td>{(Object.values(objEl)[4])?<FaCheck />: <RxCross2 />}</td>
                                                {/* <td>${objEl.id}</td>
                                                <td>${objEl.userName}</td>
                                                <td>${objEl.verifiedEmail}</td>
                                                <td>
                                                    <select id="roles" disabled value={(objEl.role === 'admin')? 'admin': 'User'}>
                                                        <option value='Admin'>${objEl.role}</option>
                                                        <option value="User" >User</option>
                                                    </select>
                                                </td> */}
                                            </tr>
                                        )
                            
                               
                                )}               
                           
                            {/* <td>1</td>
                            <td>Domenic</td>
                            <td>88,110</td>
                            <td>
                                <select id="roles" disabled value='User'>
                                            <option value="Admin">Admin</option>
                                            <option value="User" >User</option>
                                    </select>
                            </td>
                            <td>dcode</td> */}
                        {/* </tr> */}
                        {/* <tr className="active-row">
                            <td>2</td>
                            <td>Sally</td>
                            <td>72,400</td>
                            <td>
                                <select id="roles" disabled value='User'>
                                            <option value="Admin">Admin</option>
                                            <option value="User" >User</option>
                                 </select>
                            </td>
                            <td>Students</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Nick</td>
                            <td>52,300</td>
                            <td>
                                <select id="roles" disabled value='User'>
                                            <option value="Admin">Admin</option>
                                            <option value="User">User</option>
                                </select>
                            </td>
                            <td>dcode</td>
                        </tr> */}
                        </tbody>
            </table>

            </div>
           
    </div>
  )
}

export default Table