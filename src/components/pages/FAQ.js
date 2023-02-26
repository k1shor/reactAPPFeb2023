import { Box, Container, Typography } from '@mui/material'
import React from 'react'
import Navbar from '../layout/Navbar'

const FAQ = () => {
  return (
    <>
    <Navbar/>

    <Container maxWidth='xl' sx={{backgroundColor: "cornsilk" , padding: '25px'}}>
        <Box padding={5} border={3} borderColor={'warning.light'}  borderRadius={5} boxShadow={3}>
            <Typography variant='h3' sx={{textDecoration: 'underline'}} color='success.light' textAlign={'center'}>Frequently Asked Questions</Typography>

            <Typography variant='h4' sx={{textDecoration:'underline'}} color='primary'>Question: </Typography>
            <Typography variant='h5' color='secondary' mb={'25px'}>Answer: </Typography>

            <Typography variant='h4' sx={{textDecoration:'underline'}} color='primary'>Question: </Typography>
            <Typography variant='h5' color='secondary' marginBottom={5}>Answer: </Typography>
            <Typography variant='h4' sx={{textDecoration:'underline'}} color='primary'>Question: </Typography>
            <Typography variant='h5' color='secondary' marginBottom={5}>Answer: </Typography>
            <Typography variant='h4' sx={{textDecoration:'underline'}} color='primary'>Question: </Typography>
            <Typography variant='h5' color='secondary' marginBottom={5}>Answer: </Typography>
            <Typography variant='h4' sx={{textDecoration:'underline'}} color='primary'>Question: </Typography>
            <Typography variant='h5' color='secondary' marginBottom={5}>Answer: </Typography>
            <Typography variant='h4' sx={{textDecoration:'underline'}} color='primary'>Question: </Typography>
            <Typography variant='h5' color='secondary' marginBottom={5}>Answer: </Typography>
        </Box>
    </Container>
    </>
  )
}

export default FAQ