import React from 'react'
import logo from './logo.svg'
import './App.css'
import { Button } from './components/Button'
import PageRegister from './pages/Register'
import PageLogin from './pages/Login'

function App() {
  return (
    <PageRegister />
    // <Button loading text='Sign in' onClick={alert1}/>
  )
}

export default App
