import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import GlobalContextProviderr from './context/GlobalContext'
import { Toaster } from 'react-hot-toast'

ReactDOM.createRoot(document.getElementById('root')).render(
   <GlobalContextProviderr>
        <App />
        <Toaster />
   </GlobalContextProviderr>,
    
)
