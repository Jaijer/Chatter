import React, { useContext } from 'react'
import {FcBusinessContact} from 'react-icons/fc'
import { AuthContext } from '../context/AuthContext'


function Contact(props) {
    const {setContactedWith, setIsHamburger} = useContext(AuthContext);


    if(props.name) {

      return (
        <div>
            <div onClick={()=>{
              setContactedWith(props.name);
              setIsHamburger((prev)=>!prev)
            }}
            className='flex items-center bg-skyBlue bg-opacity-30 border-t-2 border-gray-200 gap-2 group p-2 hover:cursor-pointer'>
                <FcBusinessContact className='text-4xl group-hover:scale-110 transition-all' />
                <h3 className="text-gray-200 text-lg group-hover:scale-110 transition-all">{props.name}</h3>
            </div>
        </div>
      )
    }
}

export default Contact