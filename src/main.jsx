//  Component imports 
import App from './App.jsx'
// CSS imports 
import './index.css'
//  Library imports
import { BrowserRouter } from 'react-router-dom'
import { createRoot } from 'react-dom/client'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
)
