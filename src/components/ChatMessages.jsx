import React, { createRef, useEffect } from 'react'
import { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import { auth } from '../firebase-config'

function ChatMessages() { 
  const {contactedWith, users, chats, chat, setChat, setCurrentUser, setContactedWithUser} = useContext(AuthContext);

  const currentName = auth.currentUser.email.slice(0, auth.currentUser.email.indexOf('@'));
  const currentUser = users.find((user) => user.name == currentName);

  const endRef = createRef();

  const scrollToBottom = () => {
    endRef.current?.scrollIntoView({ behavior: 'instant' });
  }
  const scrollToBottomSmooth = () => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' });
  }

  useEffect(()=>{
    scrollToBottomSmooth();
  }, [chat])


  useEffect(()=>{
    const contactedWithUser = users.find((user) => user.name == contactedWith);

    const selectedChat = chats.find((chat) => (chat.id == contactedWithUser?.uid + currentUser?.uid || chat.id == currentUser?.uid + contactedWithUser?.uid));
    
    setChat(selectedChat);
    setCurrentUser(currentUser);
    setContactedWithUser(contactedWithUser);
    scrollToBottom();
  }, [contactedWith])


  if(contactedWith) {
    return (
      <div className='flex flex-col gap-3'>{chat?.messages?.map((message, i)=> (
        <div key={i} className={'flex flex-col' 
        + (currentUser?.uid == chat.senderId[i]? ' items-end':'')}>
          <h3 className={"text-lg text-gray-200 py-1 px-3 w-fit max-w-[60%] select-text break-words " + (currentUser?.uid == chat.senderId[i]? 'bg-deepBlue rounded-b-xl rounded-l-xl':'bg-[#394867] bg-opacity-[87%] rounded-b-xl rounded-r-xl')}>
            {message}</h3>
        </div>
      ))}
      <div ref={endRef}></div>
      </div>
    )
  }
}

export default ChatMessages