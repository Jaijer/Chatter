import React, { useContext } from 'react'
import {CgProfile} from 'react-icons/cg'
import {auth} from '../firebase-config'
import { signOut } from 'firebase/auth'
import { AuthContext } from '../context/AuthContext'
import {MdOutlineClose} from 'react-icons/md'

import Contacts from './Contacts'

function ChatLeftSide() {
    const {setContactedWith, setIsHamburger} = useContext(AuthContext);
    return (
        <>
            <div className="flex justify-between items-center p-3 h-[11%]">
                <div className="hidden md:flex gap-2 items-center text-gray-200 drop-shadow-lg">
                    <CgProfile className='text-4xl' />
                    <h3 className='font-semibold text-lg select-text'>{auth?.currentUser?.email.slice(0, auth?.currentUser?.email.indexOf('@'))}</h3>
                </div>
                <MdOutlineClose onClick={()=>setIsHamburger((prev)=>!prev)}
                className='block md:hidden text-5xl transition-all hover:scale-110 hover:cursor-pointer font-bold text-gray-200 p-1'/>
                <button className='bg-red-600 h-full bg-opacity-60 px-2 rounded-md hover:scale-105 hover:bg-opacity-70 text-gray-200 hover:bg-red-600 transition-all font-semibold'
                onClick={()=> {
                    signOut(auth);
                    setContactedWith('');
                    }}>Log out</button> 
            </div>


            <Contacts />
        </>
    )
}

export default ChatLeftSide