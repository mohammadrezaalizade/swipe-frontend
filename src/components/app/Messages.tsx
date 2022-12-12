import React, { useState } from "react";
import Input from "./ui/Input";
import Title from "./ui/HeadLine";
import ContentLayout from "./layouts/ContentLayout";
import UserLabel from "./ui/UserLabel";
import { status } from "../../types/user";
import { motion } from "framer-motion";
import { fadeInOut } from "../../utils/animations";
type SwitchBtn = "Direct" | "Groups";

const mockUser = {
  profile:
    "https://images.unsplash.com/photo-1670681160553-7695645afc40?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=988&q=80",
  lastMessage:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos ullam aliquam eveniet quibusdam, totam, perspiciatis ea laudantium quas esse, est voluptatum rerum accusamus ducimus ipsa quae repellat excepturi. Dignissimos, quasi.",
  name: "Mohammareza Alizadeh",
  status: "online",
};

const Messages = () => {
  const [switchValue, setSwitchValue] = useState<SwitchBtn>("Direct");

  const handleDirectBtn = () => {
    setSwitchValue("Direct");
  };
  const handleGroupsBtn = () => {
    setSwitchValue("Groups");
  };

  return (
    <motion.div
      variants={fadeInOut}
      initial="hide"
      animate="animate"
      exit="exit"
      className="flex flex-col gap-4 overflow-hidden"
      key="MessagesScreen"
    >
      <Input />
      {/* Switch Btns */}
      <div className="relative  py-2 px-2 flex justify-between items-center gap-4 bg-gray-200/60 rounded-md">
        <button
          onClick={handleDirectBtn}
          className={`h-9 w-full  font-semibold transition-all duration-200 ${
            switchValue === "Direct"
              ? "text-blue-500 shadow-sm bg-white rounded-md"
              : "text-gray-500"
          }`}
        >
          Direct
        </button>
        <button
          onClick={handleGroupsBtn}
          className={`h-9 w-full  font-semibold  transition-all duration-200 ${
            switchValue === "Groups"
              ? "text-blue-500 shadow-sm bg-white rounded-md"
              : "text-gray-500"
          }`}
          disabled={true}
        >
          Groups
        </button>
      </div>
      <Title title="Discussions" />
      <ContentLayout>
        <UserLabel
          lastMessage={mockUser.lastMessage}
          name={mockUser.name}
          profileURL={mockUser.profile}
          status={mockUser.status as status}
        />
        <UserLabel
          lastMessage={mockUser.lastMessage}
          name={mockUser.name}
          profileURL={mockUser.profile}
          status="offline"
        />
      </ContentLayout>
    </motion.div>
  );
};

export default Messages;
