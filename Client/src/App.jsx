import { useState } from 'react'
import './App.css'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './components/Home'
import DashBoard from './components/DashBoard'
import Login from './components/Login'
import Register from './components/Register'

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/dashboard' element={<DashBoard/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/register' element={<Register/>} />
    </Routes>
    </BrowserRouter>
    
  )
}

export default App
