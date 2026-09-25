
import { Route, Routes } from 'react-router-dom'
import HomePage from './Pages/HomePage'
import NoteFound from './Pages/NotFound'
import Signup from './Pages/Signup'

function App() {


  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />} ></Route>
        <Route path='/about' element={<AboutUs />} ></Route>
        <Route path='*' element={<NoteFound />} > </Route>
        <Route path="/signup"  element={<Signup/>}> </Route>

      </Routes>
    </>
  )
}

export default App
