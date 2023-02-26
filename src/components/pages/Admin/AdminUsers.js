import React, { useEffect, useState } from 'react'
import { getAllUsers } from '../../../api/userApi'
import AdminSidebar from '../../layout/AdminSidebar'
import Navbar from '../../layout/Navbar'

const AdminUsers = () => {
    let [users, setUsers] = useState([])

    useEffect(()=>{
        getAllUsers()
        .then(data=>{
            if(data.error){
                console.log(data.error)
            }
            else{
                setUsers(data)
            }
        })
    },[])

  return (
    <>
        <Navbar/>
    <div className='container-fluid'>
        <div className='row'>
            <div className='col-md-3'>
                <AdminSidebar users/>
            </div>
            <div className='col-md-9 p-5'>
                <h2>Users.</h2>
                <table className='table'>
                    <thead>
                        <tr>
                            <td>S.No.</td>
                            <td>Username</td>
                            <td>Email</td>
                            <td>Is Admin</td>
                            <td>Action</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users && users.map((user,i)=>{
                                return <tr key={user._id}>
                                    <td>{i+1}</td>
                                    <td>{user.username}</td>
                                    <td>{user.email}</td>
                                    <td>
                                        {
                                            user.role === 1 ?
                                            <input type='checkbox' id={`${user._id}`} className='me-2' checked/>
                                            :
                                            <input type='checkbox' id={`${user._id}`} className='me-2'/>

                                        }
                                        <label htmlFor={`${user._id}`}>Yes</label>
                                    </td>
                                    <td>
                                        <button className='btn btn-info'>
                                        <i className='bi bi-pencil-square'></i>
                                        </button>
                                    </td>
                                </tr>
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    </div>
    </>
  )
}

export default AdminUsers