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
import ChatIcon from './components/ChatIcon'; // Ensure correct path
import ChatBox from './components/Chatbox';
import PaymentComponent from "./components/PaymentComponent"
import Receipt from "./components/Receipt"
import HelpAndSupport from './components/HelpAndSupport'
import Transaction from './components/Transaction_History'
import { AuthProvider } from "./components/AuthContext";
import FeedbackForm from './components/FeedbackForm'

function App() {

  const [isChatBoxVisible, setIsChatBoxVisible] = useState(false);
  return (
    <BrowserRouter>
    <AuthProvider>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/dashboard2' element={<DashBoard2/>} />
      <Route path='/dashboard' element={<DashBoard/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/register' element={<Register/>} />
      <Route path='/admin/*' element={<Admin/>}/>
      <Route path='/payment' element={<PaymentComponent/>}/>
      <Route path='/receipt' element={<Receipt/>}/>
      <Route path='/help' element={<HelpAndSupport/>}/>
      <Route path='/transaction-history' element={<Transaction/>}/>
      <Route path='/feedback' element={<FeedbackForm/>}/>
    </Routes>
    {isChatBoxVisible && <ChatBox onClose={() => setIsChatBoxVisible(false)} />}
    <ChatIcon onClick={() => setIsChatBoxVisible(true)} />
    </AuthProvider>
    </BrowserRouter>
    
  )
}

export default App
