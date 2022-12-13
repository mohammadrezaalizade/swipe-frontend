import React from "react";
import DetailLayout from "./layouts/DetailLayout";
import { Header, Footer } from "./ui/message";

const Message = () => {
  return (
    <DetailLayout>
      {/* HERDER */}
      <Header />
      {/* CHATS*/}

      {/* FOOTER */}
      <Footer />
    </DetailLayout>
  );
};

export default Message;
