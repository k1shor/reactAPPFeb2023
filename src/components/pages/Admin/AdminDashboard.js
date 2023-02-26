import React from 'react'
import AdminSidebar from '../../layout/AdminSidebar'
import Navbar from '../../layout/Navbar'

const AdminDashboard = () => {
  return (
    <>
    <Navbar/>
    <div className='container-fluid'>
        <div className='row'>
            <div className='col-md-3'>
                <AdminSidebar/>
            </div>
            <div className='col-md-9 p-5'>
                <h2>Welcome to Admin Dashboard.</h2>
            </div>
        </div>
    </div>
    </>
  )
}

export default AdminDashboard