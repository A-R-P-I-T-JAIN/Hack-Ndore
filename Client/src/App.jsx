import { useState } from 'react'
import './App.css'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './components/Home'
import Login from './components/Login'
import Register from './components/Register'
import Admin from './components/Admin'
import DashBoard2 from './components/Dashboard2'
import Navbar2 from './components/Navbar2'
import Dashboard2 from './components/Dashboard2'
import DashBoard from './components/Dashboard'

function App() {

  return (
    <BrowserRouter>
    
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/dashboard2' element={<DashBoard2/>} />
      <Route path='/dashboard' element={<DashBoard/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/register' element={<Register/>} />
      <Route path='/admin/*' element={<Admin/>}/>
    </Routes>
    </BrowserRouter>
    
  )
}

export default App
