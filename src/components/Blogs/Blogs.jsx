import React, { useEffect, useState } from 'react'
import Blog from './Blog'
import PropTypes from 'prop-types'


const Blogs = ({handleAddToBookMarks}) => {
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
                >

                </Blog>)

        }
      
    </div>
  )
}

Blogs.propTypes={
 
    handleAddToBookMarks:PropTypes.function
}

export default Blogs
