import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';


import { AuthProvider } from './context/AuthContext'

import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Chat from './pages/Chat'


function App() {

  return (
    <Router>
      <AuthProvider>
        <div className="bg-wheat w-screen h-screen flex justify-center items-center relative">

          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='login' element={<Login />} />
            <Route path='signup' element={<Signup />} />
            <Route path='chat' element={<Chat />} />
          </Routes>
        </div>
      </AuthProvider>
      <ToastContainer />
    </Router>
  )
}

export default App
