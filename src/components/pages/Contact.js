import { IosShare } from '@mui/icons-material'
import { Box, TextField, Typography, Button } from '@mui/material'
import React from 'react'
import Navbar from '../layout/Navbar'

const Contact = () => {
    return (
        <>
            <Navbar />
            <Box className='container bg-light p-5 m-auto mt-5'>
                <Box display='flex' backgroundColor='cornsilk' className='m-5' borderRadius={3} boxShadow={3} p={5}>
                    <Box className='address' width={'50%'} p={5} backgroundColor={'cornsilk'}>
                        <Typography variant='h4' color={'secondary'} sx={{ textDecoration: 'underline' }}>
                            Address
                        </Typography>
                        <Typography variant='h4' color={'secondary'}>
                            Our Store
                        </Typography>
                        <Typography variant='h5' color={'secondary'}>
                            Kathmandu, Nepal
                        </Typography>
                        <Typography variant='h5' color={'secondary'}>
                            Phone: 01 - 5123456
                        </Typography>
                        <Typography variant='h5' color={'secondary'}>
                            Email: info@ourstore.com
                        </Typography>
                        <Typography variant='h5' color={'secondary'}>
                            Website: www.ourstore.com
                        </Typography>

                    </Box>
                    <Box className='contact-form' width={'50%'} p={5} backgroundColor={'cornsilk'} borderLeft={3} borderColor={'warning.light'}>
                        <Typography variant='h4' color={'secondary'} sx={{ textDecoration: 'underline' }}>
                            Contact Form
                        </Typography>
                        <form>
                            <TextField label="Email" variant="outlined" placeholder='enter your email' fullWidth autoComplete='off' helperText='*required' color='primary' multiline required size='small' margin='normal' />
                            <TextField label="Subject" variant="outlined" placeholder='enter your email' fullWidth autoComplete='off' color='primary' multiline required size='small' margin='normal' />
                            <TextField label="Body" variant="outlined" placeholder='enter your email' fullWidth autoComplete='off' color='primary' multiline required size='small' margin='normal' maxRows={5} minRows={5} />
                            <Button variant='contained' color='success' fullWidth startIcon={<IosShare />}>Submit</Button>
                        </form>
                    </Box>
                </Box>
                <Box backgroundColor='cornsilk' className='m-5' borderRadius={3} boxShadow={3} p={5}>
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14128.186677392765!2d85.28259279999999!3d27.715845299999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2snp!4v1671509118765!5m2!1sen!2snp" width="100%" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </Box>
            </Box>
        </>
    )
}

export default Contact