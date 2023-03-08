import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getMyorders } from '../../api/ordersApi'
import { isAuthenticated } from '../../api/userApi'
import Navbar from '../layout/Navbar'

const UserProfile = () => {
  const {user} = isAuthenticated()
    const [myOrders, setMyOrders] = useState([])

    useEffect(()=>{
        getMyorders(user._id)
        .then(data=>{
            setMyOrders(data)
        })
    },[])
    return (
    <>
     <Navbar/>
     <h2 className='text-end pe-5'>Welcome {user.username}</h2>

     <br/>
     <br/>
     <div className='container'>
     <h3><u>My Orders</u></h3>
     <table className='table text-center'>
        <thead>
            <tr>
                <td>S.NO.</td>
                <td>Products</td>
                <td>Order Total</td>
                <td>Order Date</td>
                <td>Order Status</td>
                <td>View Details</td>
            </tr>
        </thead>
        <tbody>
     {
        myOrders && myOrders.map((order,i)=>{
            console.log(order)
            return <tr key={i}>
<td>{i+1}</td>
<td>
{    order.orderItems && order.orderItems.map(item=> <li>{item.product.product_name}</li>)}
</td>
<td>{order.total_price}</td>
<td>{order.createdAt}</td>
<td>{order.status}</td>
<td>
    <Link to={`/order/${order._id}`}>View Details</Link>
</td>
            </tr>
        })
     }

        </tbody>
     </table>

     </div>

    </>
  )
}

export default UserProfile