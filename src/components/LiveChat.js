import React, { useEffect } from 'react'
import ChatMessage from './ChatMessage';
import { useDispatch, useSelector } from 'react-redux';
import { addMessage } from '../utils/chatSlice';

const LiveChat = () =>{
    const dispatch = useDispatch();

    const chatMessages = useSelector((store) => store.chat.messages);
   
    useEffect(()=>{
       const i = setInterval(() => {
       //API Polling
       console.log("API Polling");

       dispatch(addMessage({
        name : "Rutuja Chandgude",
        message : "Lorem Ipsum Dolor Site Amet 🚀",
       }))
        },2000);

        return ()=> clearInterval(i);
    },[]);

    return(
        <div className="w-full h-[600px] ml-2 p-2 border border-black bg-slate-100 rounded-lg overflow-y-scroll">
           {
           chatMessages.map((c, i) =>(
                <ChatMessage key={i} name={c.name}
                message={c.message} />
           ))
           }
        </div>
    );
};
export default LiveChat;