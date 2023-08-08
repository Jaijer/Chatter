import React, { useContext } from 'react'
import ChatLeftSide from './ChatLeftSide'
import ChatRightSide from './ChatRightSide'
import { auth } from '../firebase-config'
import Spinner from './Spinner'
import { AuthContext } from '../context/AuthContext'


function ChatPanel() {
    const {isHamburger, signingUp} = useContext(AuthContext);
    const user = auth.currentUser;

    if(!user?.email || signingUp) {
        return <Spinner />
    }


    return (

        <div className="bg-opacity-80 h-[90%] md:h-[600px] w-96 md:w-[700px] lg:w-[900px] select-none flex">
            <div className={(isHamburger?'block':'hidden md:block') + (" w-full md:w-1/3 h-full bg-deepBlue rounded-2xl md:rounded-r-none border-r-4 border-gray-200")}>
                <ChatLeftSide />
            </div>

            <div className={(isHamburger?'hidden md:block':'block') + " w-full rounded-2xl md:w-2/3 h-full bg-grayBlue bg-opacity-40 md:rounded-l-none"}>
                <ChatRightSide />
            </div>
        </div>
    )
}

export default ChatPanel