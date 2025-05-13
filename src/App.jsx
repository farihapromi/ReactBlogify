
import './App.css'
import Blogs from './components/Blogs/Blogs.jsx'
import BookMarks from './components/BookMarks/BookMarks.jsx'
import Header from './components/header/Header'

function App() {
 

  return (
    <>
    <Header/>
    <div className='md:flex max-w-7xl mx-auto'>
        <Blogs/>
        <BookMarks/>

    </div>
  
   
     
    </>
  )
}

export default App
