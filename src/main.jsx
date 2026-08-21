
import './index.css'

import { createRoot } from 'react-dom/client'
import { Toaster } from 'react-hot-toast'
import { BrowserRouter } from 'react-router-dom'

import App from './App.jsx'
import store from './Redux/Store.js'

createRoot(document.getElementById('root')).render(
  <provider store={store}>
    <BrowserRouter>
      <App />
      <Toaster />
    </BrowserRouter>
  </provider>
)
