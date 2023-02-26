import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { authenticate, isAuthenticated, signIn } from '../../api/userApi'
import Navbar from '../layout/Navbar'

const Login = () => {
    let [email, setEmail] = useState('')
    let [password, setPassword] = useState('')
    let [error, setError] = useState('')
    let [success, setSuccess] = useState(false)

    let navigate = useNavigate()

const handleSignin = (e) => {
    e.preventDefault()
    signIn(email, password)
    .then(data=>{
        if(data.error){
            setError(data.error)
        }
        else{
            authenticate(data)
            setSuccess(true)
        }
    })
} 
const showError = () => {
    if(error){
        return <div className='alert alert-danger'>{error}</div>
    }
}

const redirect = () => {
    if(success){
        if(isAuthenticated() && isAuthenticated().user.role===0){
            navigate('/')
        }
        else{
            navigate('/admin/dashboard')
        }
    }
}

    return (
        <>
            <Navbar />
            {showError()}
            {redirect()}
            <div className='row'>
                <div className='col-md-6 p-5 m-auto shadow-lg my-5'>
                    <main className="form-signin m-auto ">
                        <form>
                            <div className='text-center'>
                            <img className="mb-4" src="./carousel-images/img7.jpg" alt="" width="72" height="57" />
                            </div>
                            <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

                            <div className="form-floating">
                                <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" onChange={e=>setEmail(e.target.value)}/>
                                <label htmlFor="floatingInput">Email address</label>
                            </div>
                            <div className="form-floating">
                                <input type="password" className="form-control" id="floatingPassword" placeholder="Password" onChange={e=>setPassword(e.target.value)}/>
                                <label htmlFor="floatingPassword">Password</label>
                            </div>

                            <div className="checkbox mb-3">
                                <label>
                                    <input type="checkbox" value="remember-me" /> Remember me
                                </label>
                            </div>
                            <button className="w-100 btn btn-lg btn-primary" type="submit" onClick={handleSignin}>Sign in</button>
<div className='d-flex justify-content-between'>
    <span>Do not have an account? <Link to='/register'>Register</Link></span>
    <span><Link to='/forgetpassword'>Forget Password</Link></span>
</div>

                            <p className="mt-5 mb-3 text-muted text-center">&copy; 2017–2022</p>
                        </form>
                    </main>
                </div>
                {/* <div className='col-md-6'></div> */}
            </div>

        </>
    )
}

export default Login