
import { Route, Routes } from 'react-router-dom'
import HomePage from './Pages/HomePage'
import NoteFound from './Pages/NotFound'
import Signup from './Pages/Signup'
import AboutUs from './Pages/AboutUs'
import Login from './Pages/Login'
import CourseList from './Pages/Course/CourseList'
import Contact from './Pages/Contact'
import Denied from './Pages/Denied'
import CourseDescription from './Pages/Course/CourseDescription'
import RequireAuth from './Components/Auth/RequireAuth'
import CreateCourse from './Pages/Course/CreateCourse'
import Profile from './Pages/User/Profile'
import EditProfile from './Pages/User/EditProfile'

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
        <Route path='contact' element={<Contact/>}/>
        <Route path='denied' element={<Denied/>}/>
        <Route path='course/description' element={<CourseDescription/>}/>
        <Route element= {<RequireAuth allowedRoles={["ADMIN"]}/>}>
          {/* The child routes will be rendered if fullfilled RequireAuth */}
          <Route path="/course/create"  element={<CreateCourse/>}/> 
        </Route>

        <Route element= {<RequireAuth allowedRoles={["ADMIN" , "USER"]}/>}>
          <Route path='/user/profile' element = {<Profile/>}/>
          <Route path='/user/editprofile' element = {<EditProfile/>}/>
                    
        </Route>

      </Routes>
    </>
  )
}

export default App
