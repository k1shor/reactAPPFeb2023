import React, { useState } from 'react'
import Navbar from '../layout/Navbar'
import { Link } from 'react-router-dom'
import { userRegister } from '../../api/userApi'

const Register = () => {
    let [username, setUsername] = useState('')
    let [email, setEmail] = useState('')
    let [password, setPassword] = useState('')
    let [error, setError] = useState('')
    let [success, setSuccess] = useState(false)


    const handleSubmit = (e) => {
        e.preventDefault()
        userRegister(username, email, password)
        .then(data=>{
            if(data.error){
                setError(data.error)
                setSuccess(false)
            }
            else{
                setSuccess(true)
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
            return <div className='alert alert-success'>User Registered Successfully. Check email for verification.</div>
        }
    }
 
  return (
    <>
            <Navbar />
            {showError()}
            {showSuccess()}
            <div className='row'>
                <div className='col-md-6 p-5 m-auto shadow-lg my-5'>
                    <main className="form-signin m-auto ">
                        <form>
                            <div className='text-center'>
                            <img className="mb-4" src="./carousel-images/img7.jpg" alt="" width="72" height="57" />
                            </div>
                            <h1 className="h3 mb-3 fw-normal">Register</h1>

                            <div className="form-floating">
                                <input type="text" className="form-control" id="fname" placeholder="first name" onChange={(e)=>{setUsername(e.target.value)}}/>
                                <label htmlFor="fname">User Name</label>
                            </div>
                            {/* <div className="form-floating">
                                <input type="text" className="form-control" id="lname" placeholder="last name" />
                                <label htmlFor="lname">Last Name</label>
                            </div>
                            <div className="form-floating">
                                <input type="date" className="form-control" id="dob" placeholder="date of birsth" />
                                <label htmlFor="dob">Date of Birth</label>
                            </div>

                            <div className='form-floating'>
                                <div className='gender form-control d-flex justify-content-evenly'>
                                    <div className='gender-member'>
                                        <input type={'radio'} id='male' name='gender' className='me-2'/>
                                        <label htmlFor='male'>Male</label>
                                    </div>
                                    <div className='gender-member'>
                                        <input type={'radio'} id='female' name='gender' className='me-2'/>
                                        <label htmlFor='female'>Female</label>
                                    </div>
                                    <div className='gender-member'>
                                        <input type={'radio'} id='other' name='gender' className='me-2' />
                                        <label htmlFor='other'>Other</label>
                                    </div>
                                </div>
                                <label>Gender</label>
                            </div> */}

                            <div className="form-floating">
                                <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" onChange={e=>setEmail(e.target.value)}/>
                                <label htmlFor="floatingInput">Email address</label>
                            </div>
                            <div className="form-floating">
                                <input type="password" className="form-control" id="floatingPassword" placeholder="Password" onChange={e=>setPassword(e.target.value)}/>
                                <label htmlFor="floatingPassword">Password</label>
                            </div>
                            {/* <div className="form-floating">
                                <input type="password" className="form-control" id="cfloatingPassword" placeholder="Confirm Password" />
                                <label htmlFor="cfloatingPassword">Confirm Password</label>
                            </div> */}

                            <div className="checkbox mb-3">
                                <label>
                                    <input type="checkbox" value="remember-me" /> I accept the terms and conditions.
                                </label>
                            </div>
                            <button className="w-100 btn btn-lg btn-primary" type="submit" onClick={handleSubmit}>Register</button>
    <span>Already have an account? <Link to='/signin'>Login</Link></span>

                            <p className="mt-5 mb-3 text-muted text-center">&copy; 2017–2022</p>
                        </form>
                    </main>
                </div>
                {/* <div className='col-md-6'></div> */}
            </div>

        </>
  )
}

export default Register