import './App.css'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { BrowserRouter } from 'react-router-dom'
import AppRoutes from './route'

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
      <ToastContainer theme="colored" />
    </BrowserRouter>
  )
}

export default App
