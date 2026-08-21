//  Component imports 
// CSS imports 
import './index.css'

import { createRoot } from 'react-dom/client'
//  Library imports
import { BrowserRouter } from 'react-router-dom'

import App from './App.jsx'
import { Toaster } from 'react-hot-toast'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
    <Toaster />
  </BrowserRouter>
)
