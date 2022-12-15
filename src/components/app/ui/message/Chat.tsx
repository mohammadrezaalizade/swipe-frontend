import React from "react";
import ChatLable from "./ChatLable";

const Chat = () => {
  return (
    <div className="mt-[77px] lg:mt-[2px] py-4 px-4 h-full w-full  overflow-y-scroll flex flex-col gap-3 shadow-inner scrollbar-hide bg-chat bg-center  bg-contain lg:bg-transparent">
      <ChatLable isOwner={false} />
      <ChatLable isOwner={true} />
    </div>
  );
};

export default Chat;
