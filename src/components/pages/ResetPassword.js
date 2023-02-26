import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { resetPassword } from '../../api/userApi'
import Navbar from '../layout/Navbar'

const ResetPassword = () => {
    let [password, setPassword] = useState('')
    let [success, setSuccess] = useState('')
    let [error, setError] = useState('')

    let {token} = useParams()

    const handleSubmit = (e) => {
        e.preventDefault()
        resetPassword(password, token)
        .then(data=>{
            if(data.error){
                setError(data.error)
                setSuccess('')
            }
            else{
                setSuccess(data.message)
                setError('')
            }
        })
    }
    const showError = () => {
        if(error){
            return <div className='alert alert-danger'>{error}</div>
        }
    }
    const showSuccess = () => {
        if(success){
            return <div className='alert alert-success'>{success}</div>
        }
    }
  return (
    <>
        <Navbar/>
        {showError()}
        {showSuccess()}
        <form className='w-50 my-5 p-5 m-auto shadow-lg'>
            <label htmlFor='pwd'>Password</label>
            <input type='text' id='pwd' className='form-control' onChange={event=>setPassword(event.target.value)}/>
            <button className='btn btn-warning w-100 mt-3' onClick={handleSubmit}>Reset Password</button>
        </form>
    </>
  )
}

export default ResetPassword