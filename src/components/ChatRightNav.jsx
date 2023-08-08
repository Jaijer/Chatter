import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import {IoMdMenu} from 'react-icons/io'


function ChatRightNav() {
    const {contactedWith, setIsHamburger} = useContext(AuthContext);

  return (
    <div className='h-[11%]'>
      <div className="flex justify-between md:justify-center items-center p-3 h-full bg-grayBlue rounded-t-2xl md:rounded-l-none">
          <IoMdMenu onClick={()=>setIsHamburger((prev)=>!prev)}
          className='block md:hidden text-5xl transition-all hover:scale-110 hover:cursor-pointer text-gray-200 p-1'/>

          <h3 className='text-gray-200 drop-shadow-lg font-semibold text-xl select-text'>{contactedWith}</h3>

          <IoMdMenu className='md:hidden text-5xl opacity-0'/>
      </div>
      <div className="border-t-2 border-gray-200"></div>
    </div>
  )
}

export default ChatRightNav