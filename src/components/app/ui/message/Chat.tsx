import React from "react";
import ChatLable from "./ChatLable";

const Chat = () => {
  return (
    <div className="mt-[77px] lg:mt-[2px] py-4 px-4 h-full w-full  overflow-y-scroll flex flex-col gap-3 shadow-inner scrollbar-hide bg-chat bg-center  bg-cover bg-no-repeat lg:bg-contain lg:bg-transparent">
      <ChatLable
        contact={{
          message: "Hello",
          profileURL:
            "https://images.unsplash.com/photo-1670681160553-7695645afc40?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=988&q=80",
          timestamp: "2020-12-23",
          usename: "",
        }}
        isOwner={false}
      />
      <ChatLable
        contact={{
          message: "Hey",
          profileURL:
            "https://images.unsplash.com/photo-1670681160553-7695645afc40?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=988&q=80",
          timestamp: "2020-12-23",
          usename: "",
        }}
        isOwner={true}
      />
    </div>
  );
};

export default Chat;
