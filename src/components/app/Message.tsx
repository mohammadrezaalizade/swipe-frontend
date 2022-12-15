import React from "react";
import DetailLayout from "./layouts/DetailLayout";
import { Header, Footer, Chat } from "./ui/message";

const Message = () => {
  return (
    <DetailLayout>
      <div className="flex flex-col justify-between flex-1 overflow-hidden">
        {" "}
        {/* HERDER */}
        <Header />
        {/* CHATS*/}
        <Chat />
      </div>
      {/* FOOTER */}
      <Footer />
    </DetailLayout>
  );
};

export default Message;
