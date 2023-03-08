import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../layout/Navbar'

const PaymentSuccess = () => {
  return (
    <div>
        <Navbar/>
        <div className='alert alert-success'>
            <h3>Your order has been placed successfully. Go to <Link to={'/userprofile'}>Profile</Link></h3>
        </div>
    </div>
  )
}

export default PaymentSuccess