import React, { useContext, useEffect, useState } from 'react'
import Contact from './Contact'
import { AuthContext } from '../context/AuthContext'
import {auth} from '../firebase-config'



function Contacts() {
  
  const search = (str)=> {
    if(str?.indexOf(searchText) != -1) {
      return true;
    }
    return false;
  }

  const[searchText, setSearchText] = useState('');
  const {users} = useContext(AuthContext);
  const filteredUsers = users.filter((user)=>user.name != auth?.currentUser?.email.slice(0, auth?.currentUser?.email.indexOf('@')) && search(user.name) && user.name);

  return (
    <div className='h-full'>
      <div className="flex justify-center items-center w-[full] h-[12%]">
        <input value={searchText} onChange={(e)=>{
          setSearchText(e.target.value);
        }}
         type="text" className="bg-gray-200 outline-none m-2 py-1 px-3 text-lg rounded-full w-full" placeholder='Search' />
      </div>
      {filteredUsers.length? <div className="flex flex-col h-[88%] overflow-y-scroll no-scrollbar">
        {filteredUsers.map((user, i)=><Contact key={i} name={user.name} />)}
      </div> : <div className='flex justify-center items-center text-gray-200 text-lg'>No users</div>}
    </div>
  )
}

export default Contacts