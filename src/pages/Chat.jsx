import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../context/AuthContext';
import ChatPanel from '../components/ChatPanel'
import Spinner from '../components/Spinner'

function Chat() {
  const {users} = useContext(AuthContext);


  if(users.length == 0) {
    return (
      <Spinner />
    )
  }

  return (
    <ChatPanel />
  )
}

export default Chat