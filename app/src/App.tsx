import React from 'react'
import logo from './logo.svg'
import './App.css'
import { Button } from './components/Button'
import PageRegister from './pages/Register'
import PageLogin from './pages/Login'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function App() {
  
  return (
    <div>
      

      <PageLogin />
      {/* <Button loading text='Sign in' onClick={alert1}/> */}
      <ToastContainer theme='colored' />
    </div>
  )
}

export default App
