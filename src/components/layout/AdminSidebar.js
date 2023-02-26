import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { isAuthenticated, signout } from '../../api/userApi'

const AdminSidebar = ({ category, product, users, order }) => {
    const { user } = isAuthenticated()
    const navigate = useNavigate()

    const handleSignout = () => {
        signout()
            .then(() => {
                localStorage.removeItem('jwt')
                navigate('/')
            })
    }
    return (
        <>
            <div className="d-flex flex-column flex-shrink-0 p-3 bg-light">
                <Link to="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
                    <span className="fs-4">
                        <i className='bi bi-speedometer2 me-2'></i>
                        Admin Dashboard</span>
                </Link>
                <hr />
                <ul className="nav nav-pills flex-column mb-auto">
                    <li>
                        {
                            category ?
                                <Link to="/admin/category" className="nav-link active text-white" >
                                    <i className='bi bi-grid me-2'></i>
                                    Category
                                </Link>
                                :
                                <Link to="/admin/category" className="nav-link link-dark" >
                                    <i className='bi bi-grid me-2'></i>
                                    Category
                                </Link>

                        }
                        {/* <svg className="bi pe-none me-2" width="16" height="16"><use xlink:to="#grid"/></svg> */}

                    </li>
                    <li>
                        {
                            product ?
                                <Link to="/admin/products" className="nav-link text-white active">
                                    <i className='bi bi-grid me-2'></i>
                                    Products
                                </Link>
                                :
                                <Link to="/admin/products" className="nav-link link-dark">
                                    <i className='bi bi-grid me-2'></i>
                                    Products
                                </Link>

                        }
                    </li>

                    <li>
                        {
                            order ?
                                <Link to="#" className="nav-link text-white active">

                                    <i className='bi bi-table me-2'></i>
                                    Orders
                                </Link>
                                :
                                <Link to="#" className="nav-link link-dark">

                                    <i className='bi bi-table me-2'></i>
                                    Orders
                                </Link>

                        }
                    </li>

                    <li>{
                        users ?
                            <Link to="/admin/users" className="nav-link text-white active">
                                <i className='bi bi-person-circle me-2'></i>
                                Users
                            </Link>
                            :
                            <Link to="/admin/users" className="nav-link link-dark">
                                <i className='bi bi-person-circle me-2'></i>
                                Users
                            </Link>
                    }
                    </li>
                </ul>
                <hr />
                <div className="dropdown">
                    <Link to="#" className="d-flex align-items-center link-dark text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                        <img src="https://github.com/mdo.png" alt="" width="32" height="32" className="rounded-circle me-2" />
                        <strong>{user.username}</strong>
                    </Link>
                    <ul className="dropdown-menu text-small shadow">
                        <li><Link className="dropdown-item" to="#">{user.email}</Link></li>
                        <li><hr className="dropdown-divider" /></li>
                        <li><span className="dropdown-item" onClick={handleSignout}>Sign out</span></li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default AdminSidebar