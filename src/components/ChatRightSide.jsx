import React from 'react'

import ChatRightNav from './ChatRightNav'

import ChatTypingBar from './ChatTypingBar'
import ChatMessages from './ChatMessages'

function ChatRightSide() {

  return (
    <div className='h-full'>
        <ChatRightNav />

        <div className="m-2 relative h-[85%]">

          <div className="h-[89%]  overflow-y-scroll no-scrollbar">
            <ChatMessages />
          </div>

          <div className="absolute w-full bottom-0">
            <ChatTypingBar />
          </div>

        </div>
    </div>
  )
}

export default ChatRightSide