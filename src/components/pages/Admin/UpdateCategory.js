import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { getCategoryDetails, updateCategory } from '../../../api/categoryapi'
// import { addCategory } from '../../../api/categoryapi'
import { isAuthenticated } from '../../../api/userApi'
import AdminSidebar from '../../layout/AdminSidebar'
import Navbar from '../../layout/Navbar'

const UpdateCategory = () => {
    let [category_name, setCategoryName] = useState('')
    let {token} = isAuthenticated()
    let [error, setError] = useState('')
    let [success, setSuccess] =useState(false)

    let {id} = useParams()

    useEffect(()=>{
        getCategoryDetails(id).then(data=>setCategoryName(data.category_name))
    },[])

    const handleSubmit = e => {
        e.preventDefault()
        updateCategory(id, category_name, token)
        // addCategory(category_name, token)
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
            return <div className='alert alert-success'>Category Updated Successfully.</div>
        }
    }

  return (
    <>
    <Navbar/>
    <div className='container-fluid'>
        <div className='row'>
            <div className='col-md-3'>
                <AdminSidebar category/>
            </div>
            <div className='col-md-9 p-5'>
                <h2>Update Category</h2>
                {showSuccess()}
                {showError()}
                <form className='p-5 mt-3 shadow-lg w-50'>
                    <label htmlFor='category_name'>Category Name</label>
                    <input type={'text'} id='category_name' className='form-control' onChange={e=>setCategoryName(e.target.value)} value={category_name}/>
                    <button className='btn btn-warning w-100 mt-3' onClick={handleSubmit}>Update Category</button>

                    <Link to='/admin/category'>Go Back</Link>
                </form>
            </div>
        </div>
    </div>
    </>
  )
}

export default UpdateCategory