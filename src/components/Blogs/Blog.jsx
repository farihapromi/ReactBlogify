import React from 'react'
import PropTypes from 'prop-types'

const Blog = ({blog}) => {
  return (
    <div className=''>
        <img src={blog.cover} alt="blog-cover" />
        <div className="flex gap-2 m-4">
            <div className='flex gap-4'>

           
            <img  className='p-2'src={blog.author_img} alt="" height='50px' width="50px" />
           <div className='flex flex-col '>
             <p>{blog.author}</p>
               <p>{blog.posted_date}</p>

           </div>

             <p className='mx-28'>{blog.reading_time} minute read</p>
          
             </div>
             {/* reading time
              */}
            

        </div>

      
    </div>
  )
}
Blog.propTypes={
    blog:PropTypes.object.isRequired
}

export default Blog
