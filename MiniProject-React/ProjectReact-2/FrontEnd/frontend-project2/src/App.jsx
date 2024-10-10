import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button } from '@mui/material'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Loginuser from './pages/login'
import Homepage from './pages/home'
import FromRegister from './pages/register'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <BrowserRouter>
          <Routes>
            <Route path='/' element={<Loginuser/>}/>
            <Route path='/login' element={<Loginuser/>}/>
            <Route path='/home' element={<Homepage/>}/>
            <Route path='/register' element={<FromRegister/>}/>
          </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
