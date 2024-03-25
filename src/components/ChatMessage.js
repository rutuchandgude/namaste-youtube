import React from 'react'


const ChatMessage = ({name , message}) => {
  return (
    <div className="flex items-center shadow-sm p-2">
                <img className='h-8' alt="user" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnP7z4eskALryqEiK8X47vkR9-wpDMXwcVGZAWLbrPrDR4JM_tiDyZyTJhrsFyX8kRvRM&usqp=CAU" />

                <span className="font-bold px-2">{name}</span>
                <span>{message}</span>
    </div>
    
  )
}

export default ChatMessage