import React, { useState } from "react";
import ChatMessage from "./ChatMessage";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../store/chatSlice";
import generateRandomName from "../helper/randomName";

const LiveChat = () => {
  const [liveMessage, setLiveMessage] = useState("");
  const randomName = generateRandomName();
  const chatMessages = useSelector((store) => store.chat.messages);
  const dispatch = useDispatch();
  useEffect(() => {
    let i = setInterval(() => {
      // console.log("Api Polled in 2ms - ", randomName);
      dispatch(
        addMessage({
          name: randomName,
          message: "ANiket",
        })
      );
    }, 500);
    return () => {
      clearInterval(i);
    };
  }, [randomName]);
  return (
    <>
      <div className=" flex ml-2 p-2 border border-black w-[400px] h-[600px] bg-slate-100 rounded-lg overflow-y-scroll flex-col-reverse">
        {chatMessages.map((chatMessage, index) => (
          <ChatMessage
            key={index}
            name={chatMessage.name}
            message={chatMessage.message}
          />
        ))}
      </div>
      <form
        className="w-full p-2 border border-black"
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(
            addMessage({
              name: "India is Great",
              message: liveMessage,
            })
          );
        }}
      >
        <input
          className="w-92 outline-dashed"
          type="text"
          value={liveMessage}
          onChange={(e) => {
            setLiveMessage(e.target.value);
          }}
        />
        <button className="ml-2 bg-green-200">Submit</button>
      </form>
    </>
  );
};

export default LiveChat;
