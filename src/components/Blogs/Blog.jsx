import React from 'react'
import PropTypes from 'prop-types'
import { FaBookmark } from "react-icons/fa";

const Blog = ({blog,handleAddToBookMarks, handleReadingTime}) => {
    const {id,title,cover,author,author_img,reading_time,posted_date,hashtags}=blog;
  return (
    <div className='mb-20 space-y-4'>
         <img  className='w-full mb-8 mt-4 border rounded-xl' src={cover} alt="blog-cover" />
      
       
        <div className="flex justify-between mb-4 ">
            <div className='flex'>

           
            <img  className='w-16'src={author_img} alt=""  />
            <div className='ml-6'>
                <h3 className="text-2xl">{author}</h3>
                <p>{posted_date}</p>
            </div>
          </div>

             <div>
                <span>{reading_time} minute read</span>
                <button 
                className='ml-2 text-red-400'
                onClick={()=>handleAddToBookMarks(blog)}
                ><FaBookmark /></button>
             </div>
             </div>

           <h2 className='text-4xl'>{title}</h2>
          <p>
            {
                hashtags.map((hash,idx)=><span key={idx}><a href=''>#{hash}</a></span>)
            }
          </p>
          <button 
          className='text-green-400 font-bold underline'
          onClick={()=>handleReadingTime(id,reading_time)}
          >Marks as Read</button>

      
    </div>
  )
}
Blog.propTypes={
    blog:PropTypes.object.isRequired,
    handleAddToBookMarks:PropTypes.function,
    handleReadingTime:PropTypes.function,
}

export default Blog
