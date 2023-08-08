import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import {auth, db} from '../firebase-config'
import { toast } from 'react-toastify';
import Spinner from '../components/Spinner';
import { addDoc, collection, doc, setDoc } from 'firebase/firestore';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import {v4 as uuidv4} from 'uuid';
import {RiChatSmile2Line} from 'react-icons/ri'



function Signup() {
  const navigate = useNavigate();

  const {users, setContactedWith, setSigningUp} = useContext(AuthContext);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const usersCollectionRef = collection(db, 'users');

  const signUp = async (e) => {
    try {
      e.preventDefault();
      setSigningUp(true);
      setLoading(true);
      await createUserWithEmailAndPassword(auth, email, password);
      
      const uid = uuidv4();
      await addDoc(usersCollectionRef, {
        name: email.slice(0, email.indexOf('@')),
        uid: uid,
      })

      let i = 0;
      await users.map(async (user)=> {
        const chat = doc(db, 'chats', user.uid + uid);
        await setDoc(chat, 
          {
            id: user.uid + uid,
            messages: [],
            senderId: [],
        })
  
        i++;
        if(users.length == i) {
          navigate('/')
          setSigningUp(false);
          location.reload();
        }
      })
      
    } catch (error) {
      console.log(error)
      setLoading(false);
      toast.error("Invalid email & password")
    }
  }

  if(loading) {
    return <Spinner />;
  }

  return (
    <>
    <div className="absolute top-4 left-4 text-5xl text-deepBlue">{<RiChatSmile2Line />}</div>

    <form onSubmit={signUp} className='flex flex-col justify-center items-center hover:cursor-default'>
      <div className='p-4 w-full sm:w-96 flex flex-col items-center justify-center bg-grayBlue rounded-lg mb-4'>
        <h2 className="text-4xl font-bold mb-6">Sign up</h2>
        
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

        }}>Sign up</button>
      </div>

      <h3 className="text-lg hover:underline hover:scale-105 transition-all hover:text-deepBlue hover:cursor-pointer underline-offset-[5px] select-none"
      onClick={()=> {navigate('/login')}}>Log In Instead</h3>
    </form>
    </>
  )
}

export default Signup