import { Typography } from '@mui/material'
import React, { useReducer } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import Navbar from '../layout/Navbar'
import { saveShippingInfo } from '../reducers/cartActions'

const Shipping = () => {
    const shippingInfoReducer = (state, event) => {
        console.log(state)
        return {...state, [event.target.name]:event.target.value}
    }

    let [shipping_info, setShippingInfo] = useReducer(shippingInfoReducer,
        localStorage.getItem("shipping_info")?JSON.parse(localStorage.getItem("shipping_info")):{})
      
        let {contact_person, shipping_address, alternate_shipping_address, city, country, zipcode, phone} = shipping_info 
    /*
    let [state, function] = useReducer(reducer, initialData)
    */
   const dispatch = useDispatch()
   const save_shipping = (e) => {
    e.preventDefault()
    dispatch(saveShippingInfo(shipping_info))
   }



  return (
    <>
        <Navbar/>
        <div className='row'>
            <div className='col-md-8'>
            <Typography
                            variant='h3'
                            align='center'
                            paddingTop={'10px'}
                            sx={{ textDecoration: 'underline' }}
                            color='success.dark'
                        >
                            Shipping Information
                        </Typography>
                        <h4>Address: {shipping_address}</h4>
                        <form className='p-5 w-75 m-auto'>
                            <label htmlFor='name'>Contact Person</label>
                            <input type={'text'} id='name' className='form-control' name='contact_person' onChange={setShippingInfo} value={contact_person}/>

                            <label htmlFor='street'>Shipping Address</label>
                            <input type={'text'} id='street' className='form-control' 
                            name='shipping_address' onChange={setShippingInfo} value={shipping_address}/>

                            <label htmlFor='alt_street'>Alternate Shipping Address</label>
                            <input type={'text'} id='alt_street' className='form-control' name='alternate_shipping_address' onChange={setShippingInfo} value={alternate_shipping_address}/>

                            <label htmlFor='city'>City</label>
                            <input type={'text'} id='city' className='form-control' name='city' onChange={setShippingInfo} value={city} /> 

                            <label htmlFor = 'zipcode'>Zipcode</label>
                            <input type={'text'} id='zipcode' className='form-control' name='zipcode' onChange={setShippingInfo} value={zipcode}/>

                            <label htmlFor = 'country'> Country</label>
                            <input type={'text'} id='country' className='form-control' name='country' onChange={setShippingInfo} value={country}/>

                            <label htmlFor='phone'>Phone</label>
                            <input type={'text'} id='phone' className='form-control' name='phone' onChange={setShippingInfo} value={phone}/>

                            <button className='btn btn-warning mt-2' onClick={save_shipping}>Save Shipping Info</button>
                        </form>
            </div>
            <div className='col-md-4'>
            <Typography
                            variant='h3'
                            align='center'
                            paddingTop={'10px'}
                            sx={{ textDecoration: 'underline' }}
                            color='success.dark'
                        >
                            Cart Summary
                        </Typography>
                        <hr />
                        <div className='p-3'>
                            <h3>No. of Items: 
                                {
                                JSON.parse(sessionStorage.getItem('order_summary')).cart_items_number
                                }
                                </h3>
                            <h3>Order Total: Rs. {
                                JSON.parse(sessionStorage.getItem('order_summary')).order_total
                                }</h3>
                        </div>
                        <hr />
                        {
                            localStorage.getItem('shipping_info')?
                            <Link to='/payment' className='btn btn-warning w-100 mt-2' >Proceed to Payment</Link>
                            :
                            <button className='btn btn-warning w-100 mt-2' disabled>Proceed to Payment</button>

                        }
            </div>

        </div>
    </>
  )
}

export default Shipping