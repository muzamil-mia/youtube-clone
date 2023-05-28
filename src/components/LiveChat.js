import React, { useEffect, useState } from 'react'
import ChatMessage from './ChatMessage'
import { useDispatch, useSelector } from 'react-redux'
import { addMessage } from '../utils/chatSlice'
import { generateRandomNames } from '../utils/Helper'
import { makeRandomMessages } from '../utils/Helper'

const LiveChat = () => {

  const [liveMessage, setLiveMessage] = useState("");

  const dispatch = useDispatch();

  const chatMessages = useSelector(store => store.chat.messages);

  useEffect(() => {
    const i = setInterval(() => {
      //API POLLING
      console.log("Api polling")

      dispatch(addMessage({
        name: generateRandomNames(),
        message: makeRandomMessages(20) + "hello"
      }))
    }, 2000)

    return () => clearInterval(i);
  }, [])


  return (
    <>
      <div className='ml-2 p-2 w-full h-[400px] border border-black bg-slate-100 rounded-lg overflow-y-scroll flex  flex-col-reverse'>
        <div>
          { //Don't use indexes as keys
            chatMessages.map((c, i) => (<ChatMessage key={i} name={c.name} message={c.message} />))
          }

        </div>
      </div>

      <form className='w-full p-2 ml-2 border border-black' onSubmit={(e) => {
        e.preventDefault();
        //console.log("on submit form" + liveMessage)
        dispatch(addMessage({
          name: "Muzamil",
          message:  liveMessage ,
        }))
        setLiveMessage("")
      }}
      >
        <input type="text" value={liveMessage} onChange={(e) => {
          setLiveMessage(e.target.value);
        }} className='w-96' /><button className='px-2 mx-2 bg-green-200'>Send</button>
      </form>
    </>
  );
};

export default LiveChat