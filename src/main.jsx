//  Component imports 
// CSS imports 
import './index.css'

import { createRoot } from 'react-dom/client'
//  Library imports
import { BrowserRouter } from 'react-router-dom'

import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
)
