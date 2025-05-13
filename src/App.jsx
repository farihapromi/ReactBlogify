
import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs.jsx'
import BookMarks from './components/BookMarks/BookMarks.jsx'
import Header from './components/header/Header'

function App() {
  //bookark state habdle
  const [bookMarks,setBookMarks]=useState([])
  const handleAddToBookMarks=blog=>{
    const newBooksMarks=[...bookMarks,blog];
    setBookMarks(newBooksMarks)

  }
 

  return (
    <>
    <Header/>
    <div className='md:flex max-w-7xl mx-auto'>
        <Blogs handleAddToBookMarks={handleAddToBookMarks}/>
        <BookMarks/>

    </div>
  
   
     
    </>
  )
}

export default App
