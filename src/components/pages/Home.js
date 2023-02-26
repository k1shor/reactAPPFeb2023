import React from 'react'
import Carousel from '../Carousel'
import Departments from '../Departments'
import Footer from '../layout/Footer'
import Navbar from '../layout/Navbar'

const Home = () => {
  return (
    <>
        <Navbar/>
        <Carousel/>
        <Departments/>

        {/* <Footer/> */}
    </>
  )
}

export default Home