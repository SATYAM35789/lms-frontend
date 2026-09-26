
import { Route, Routes } from 'react-router-dom'
import HomePage from './Pages/HomePage'
import NoteFound from './Pages/NotFound'
import Signup from './Pages/Signup'
import AboutUs from './Pages/AboutUs'
import Login from './Pages/Login'
import CourseList from './Pages/Course/CourseList'

function App() {


  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />} ></Route>
        <Route path='/about' element={<AboutUs />} ></Route>
        <Route path='*' element={<NoteFound />} > </Route>
        <Route path="/signup"  element={<Signup/>}/>
        <Route path="/login"  element={<Login/>}/> 
        <Route path='/courses' element={<CourseList/>}/>

      </Routes>
    </>
  )
}

export default App
