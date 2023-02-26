import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { addCategory } from '../../../api/categoryapi'
import { isAuthenticated } from '../../../api/userApi'
import AdminSidebar from '../../layout/AdminSidebar'
import Navbar from '../../layout/Navbar'

const AddCategory = () => {
    let [category_name, setCategoryName] = useState('')
    let {token} = isAuthenticated()
    let [error, setError] = useState('')
    let [success, setSuccess] =useState(false)

    const handleSubmit = e => {
        e.preventDefault()
        addCategory(category_name, token)
        .then(data=>{
            if(data.error){
                setError(data.error)
                setSuccess(false)
            }
            else{
                setSuccess(true)
                setError('')
                setCategoryName('')
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
            return <div className='alert alert-success'>Category Added Successfully.</div>
        }
    }

  return (
    <>
    <Navbar/>
    <div className='container-fluid'>
        <div className='row'>
            <div className='col-md-3'>
                <AdminSidebar/>
            </div>
            <div className='col-md-9 p-5'>
                <h2>Add Category</h2>
                {showSuccess()}
                {showError()}
                <form className='p-5 mt-3 shadow-lg w-50'>
                    <label htmlFor='category_name'>Category Name</label>
                    <input type={'text'} id='category_name' className='form-control' onChange={e=>setCategoryName(e.target.value)} value={category_name}/>
                    <button className='btn btn-warning w-100 mt-3' onClick={handleSubmit}>Add New Category</button>

                    <Link to='/admin/category'>Go Back</Link>
                </form>
            </div>
        </div>
    </div>
    </>
  )
}

export default AddCategory