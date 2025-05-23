import React from 'react'
import BookMark from './BookMark'
import PropTypes from 'prop-types'

const BookMarks = ({bookMarks,readingTime}) => {
  return (
    <div className='md:w-1/3 bg-gray-300 ml-4 pt-4 mt-2 rounded-lg'>
        <div>
            <h3 className='text-2xl'>Spend reading Time:{readingTime}</h3>
        </div>
        <h1>Bookmarks:{bookMarks.length}</h1>
        {
            bookMarks.map((bookmark,idx)=><BookMark key={idx} bookmark={bookmark}/>)
        }
      
    </div>
  )
}
BookMarks.propTypes={
    bookMark:PropTypes.array,
    readingTime:PropTypes.number,
}

export default BookMarks
