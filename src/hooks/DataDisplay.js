import React from 'react'

const DataDisplay = ({post}) => {
  return (
    <>
    <div className='m-5 p-5 border border-3 shadow-lg'>
        <h3>Post Id: {post.id}</h3>
        <h3>Title: {post.title}</h3>
        <p>Body: {post.body}</p>
        <h4>User: {post.userId}</h4>
    </div>
    </>
  )
}

export default DataDisplay