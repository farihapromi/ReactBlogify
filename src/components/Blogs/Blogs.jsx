import React, { useEffect, useState } from 'react'
import Blog from './Blog'
import PropTypes from 'prop-types'


const Blogs = ({handleAddToBookMarks,handleReadingTime}) => {
    const [blogs,setBlogs]=useState([])
    useEffect(()=>{
        fetch('blogs.json')
        .then(res=>res.json())
        .then(data=>setBlogs(data))
    },[])
  return (
    <div className='md:w-2/3'>
        {
            blogs.map(blog=><Blog 
                key={blog.id}
                blog={blog}
                handleAddToBookMarks={handleAddToBookMarks}
                handleReadingTime={handleReadingTime}
                >

                </Blog>)

        }
      
    </div>
  )
}

Blogs.propTypes={
 
    handleAddToBookMarks:PropTypes.func,
    handleReadingTime:PropTypes.func,
}

export default Blogs
