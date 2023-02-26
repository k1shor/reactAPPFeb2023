import { Typography } from '@mui/material'
import React from 'react'
import Navbar from '../layout/Navbar'

const Shipping = () => {
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
                        <form className='p-5 w-75 m-auto'>
                            <label htmlFor='name'>Contact Person</label>
                            <input type={'text'} id='name' className='form-control'/>

                            <label htmlFor='street'>Shipping Address</label>
                            <input type={'text'} id='street' className='form-control' />

                            <label htmlFor='alt_street'>Alternate Shipping Address</label>
                            <input type={'text'} id='alt_street' className='form-control'/>

                            <label htmlFor='city'>City</label>
                            <input type={'text'} id='city' className='form-control'/> 

                            <label htmlFor = 'zipcode'>Zipcode</label>
                            <input type={'text'} id='zipcode' className='form-control'/>

                            <label htmlFor = 'country'> Country</label>
                            <input type={'text'} id='country' className='form-control'/>

                            <label htmlFor='phone'>Phone</label>
                            <input type={'text'} id='phone' className='form-control'/>

                            <button className='btn btn-warning mt-2'>Save Shipping Info</button>
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
                        <button className='btn btn-warning w-100 mt-2' >Proceed to Payment</button>
            </div>

        </div>
    </>
  )
}

export default Shipping