
import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs.jsx'
import BookMarks from './components/BookMarks/BookMarks.jsx'
import Header from './components/header/Header'

function App() {
  //bookark state habdle
  const [bookMarks,setBookMarks]=useState([])
  const[readingTime,setReadingTime]=useState(0);
  const handleAddToBookMarks=blog=>{
    const newBooksMarks=[...bookMarks,blog];
    setBookMarks(newBooksMarks)

  }
  const handleReadingTime=time=>{
    setReadingTime(readingTime+time)

  }
 

  return (
    <>
    <Header/>
    <div className='md:flex max-w-7xl mx-auto'>
        <Blogs handleAddToBookMarks={handleAddToBookMarks}
        handleReadingTime={handleReadingTime}
        />
        <BookMarks bookMarks={bookMarks} readingTime={readingTime}/>

    </div>
  
   
     
    </>
  )
}

export default App
