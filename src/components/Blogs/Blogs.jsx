import React, { useEffect, useState } from 'react'
import Blog from './Blog'

const Blogs = () => {
    const [blogs,setBlogs]=useState([])
    useEffect(()=>{
        fetch('blogs.json')
        .then(res=>res.json())
        .then(data=>setBlogs(data))
    },[])
  return (
    <div>
        {
            blogs.map(blog=><Blog></Blog>)

        }
      
    </div>
  )
}

export default Blogs
