import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {auth} from '../firebase-config'
import { signInWithEmailAndPassword } from 'firebase/auth';
import { toast } from 'react-toastify';
import Spinner from '../components/Spinner';
import {RiChatSmile2Line} from 'react-icons/ri'

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const signIn = async (e) => {
    try {
      e.preventDefault();
      setLoading(true);
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/');
    } catch (error) {
      setLoading(false);
      toast.error("Incorrect email & password")
    }
  }

  if(loading) {
    return <Spinner />;
  }

  return (
    <>
    <div className="absolute top-4 left-4 text-5xl text-deepBlue">{<RiChatSmile2Line />}</div>

    <form onSubmit={signIn} className='flex flex-col justify-center items-center hover:cursor-default'>
      <div className='p-4 w-[300px] sm:w-96 flex flex-col items-center justify-center bg-grayBlue rounded-lg mb-4'>
        <h2 className="text-4xl font-bold mb-6">Login</h2>
        
        <div className="w-full mb-4">
          <h3 className='text-lg'>Email:</h3>
          <input type="text" className="text-xl p-2 rounded-lg w-full outline-none"
          value={email} onChange={(e)=>setEmail(e.target.value.toLowerCase())} />
        </div>

        <div className="w-full mb-9">
          <h3 className='text-lg'>Password:</h3>
          <input type="password" className="text-xl p-2 rounded-lg w-full outline-none"
          value={password} onChange={(e)=>setPassword(e.target.value)} />
        </div>

        <button className="px-4 py-2 rounded-lg font-bold text-lg bg-blue-600 w-full text-white transition-all hover:scale-105 bg-opacity-80 hover:bg-opacity-100 select-none"
        onClick={()=> {
          //Sign up using firebase;
          
        }}>Login</button>  

      </div>

      <h3 className="text-lg hover:underline hover:scale-105 transition-all hover:text-deepBlue hover:cursor-pointer underline-offset-[5px] select-none"
      onClick={()=> {navigate('/signup')}}>Sign Up Instead</h3>
    </form>
    </>
  )
}

export default Login