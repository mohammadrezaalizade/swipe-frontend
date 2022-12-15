import React from "react";
import DetailLayout from "./layouts/DetailLayout";
import { Header, Footer } from "./ui/message";

const Message = () => {
  return (
    <DetailLayout>
      <div className="flex flex-col justify-between flex-1">
        {" "}
        {/* HERDER */}
        <Header />
        {/* CHATS*/}
      </div>
      {/* FOOTER */}
      <Footer />
    </DetailLayout>
  );
};

export default Message;
