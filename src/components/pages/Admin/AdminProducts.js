import React, { useEffect, useState } from 'react'
import { deleteproduct, getAllProducts } from '../../../api/productApi'
import AdminSidebar from '../../layout/AdminSidebar'
import Navbar from '../../layout/Navbar'
import { API } from '../../../config'
import { Link } from 'react-router-dom'
import swal from 'sweetalert'
import { isAuthenticated } from '../../../api/userApi'

const AdminProducts = () => {
    const [products, setProducts] = useState([])
    const [success, setSuccess] = useState(false)
    const {token} = isAuthenticated()

    useEffect(()=>{
        getAllProducts()
        .then(data=>{
            if(data.error){
                console.log(data.error)
            }
            else{
                setProducts(data)
            }
        })
    },[success])

    const handleDelete = id => e => {
        e.preventDefault()
        setSuccess(false)
        swal("Delete Product","Are you sure you want to delete this product?", {
            buttons: {
              Cancel: "Cancel",
              Delete: "Delete"
            },
            icon: "warning"
          })
          .then((value) => {
            switch (value) {          
              case "Cancel":
                swal("Cancel!", "Delete Canceled!", "warning");
                break;

            case "Delete":
                deleteproduct(id, token)
                .then(data=>{
                    if(data.error){
                        swal("Error!", data.error, "error");
                    }
                    else{
                        setSuccess(true)
                        swal("Success !", data.message , "success")
                    }
                })
                .catch(
                    swal("Something went wrong!")
                )
                break
           
              default:
                swal("Something went wrong!");
            }
          });
    }

  return (
    <>
    <Navbar/>
    <div className='container-fluid'>
        <div className='row'>
            <div className='col-md-3'>
                <AdminSidebar product/>
            </div>
            <div className='col-md-9 p-5'>
                <h2>Products.</h2>
    <table className='table text-center table-hover table-bordered'>
        <thead className='table-dark'>
            <tr>
                <td>S.No.</td>
                <td>Product Image</td>
                <td>Product Name</td>
                <td>Quantity</td>
                <td>Unit Price</td>
                <td>Action</td>
            </tr>
        </thead>
        <tbody>
            {
                products && products.map((product,i)=>{
                    return <tr key={product._id}>
                        <td>{i+1}</td>
                        <td>
                            <img src={`${API}/${product.product_image}`} alt={product.product_image} style={{height:"100px"}}/>
                        </td>
                        <td>{product.product_name}</td>
                        <td>{product.count_in_stock}</td>
                        <td>{product.product_price}</td>
                        <td>
                            <div className='btn-group'>
                                <Link to={`/admin/product/update/${product._id}`} className='btn btn-warning'>Update</Link>
                                <button className='btn btn-danger' onClick={handleDelete(product._id)}>Remove</button>
                            </div>
                        </td>
                    </tr>
                })
            }
        </tbody>
    </table>
    <Link to='/admin/product/add'>Add New Product</Link>

            </div>
        </div>
    </div>
    </>
  )
}

export default AdminProducts