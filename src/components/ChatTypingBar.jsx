import React, { useContext, useState } from 'react'
import { AuthContext } from '../context/AuthContext'
import {BiSolidSend} from 'react-icons/bi'
import { doc, setDoc } from 'firebase/firestore';
import { db } from '../firebase-config';

function ChatTypingBar() {
    const {contactedWith, currentUser, chat, setChat} = useContext(AuthContext);

    const[text, setText] = useState('');

    const handleSubmit = async (e)=> {
        e.preventDefault();
        if(text) {
            try {
                const newChat = {
                    id: chat.id,
                    messages: [...chat.messages, text],
                    senderId: [...chat.senderId, currentUser.uid]
                }

                setChat(newChat);
                setText('');
                const chatRef = doc(db, 'chats', chat.id);
                await setDoc(chatRef, newChat);
            }catch(err) {
                console.error(err);
            }
        }
    }

    if(contactedWith == '') {
        return
    }
    else {
        return (
            <form onSubmit={handleSubmit} className="">
                <div className="relative">
                    <input type="text" value={text} onChange={(e)=>setText(e.target.value)}
                    className="w-full bg-gray-100 h-12 p-4 pr-12 text-lg rounded-full outline-none" autoFocus={true} placeholder='Message'/>
                    <BiSolidSend onClick={handleSubmit}
                    className='absolute right-2 top-[10px] text-3xl hover:scale-110 transition-all hover:cursor-pointer opacity-90 hover:opacity-100 text-deepBlue'/>
                </div>
            </form>
        )
    }
}

export default ChatTypingBar