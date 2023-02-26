import React from 'react'
import { Link } from 'react-router-dom'
import './index.css'


const First = () => {
    const mystyle = {
        backgroundColor: "yellow",
        textAlign: "center"
    }

  return (
    <>
    {/* <h1 style={{backgroundColor:"red",textAlign: "right"}}>This is first component</h1> */}
    <h1 style={mystyle}>This is first component</h1>
    <h1>First page</h1>
    <Link to = '/second'>Second page</Link>
    </>
  )
}

export default First