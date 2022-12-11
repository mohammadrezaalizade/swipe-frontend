import React, { useState } from "react";
import Input from "./ui/Input";
import Title from "./ui/HeadLine";
import ContentLayout from "./layouts/ContentLayout";

type SwitchBtn = "Direct" | "Groups";

const Messages = () => {
  const [switchValue, setSwitchValue] = useState<SwitchBtn>("Direct");

  const handleDirectBtn = () => {
    setSwitchValue("Direct");
  };
  const handleGroupsBtn = () => {
    setSwitchValue("Groups");
  };

  return (
    <div className="flex flex-col gap-4 overflow-hidden">
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
        >
          Groups
        </button>
      </div>
      <Title title="Discussions" />
      <ContentLayout>
        <div>User 1</div>
      </ContentLayout>
    </div>
  );
};

export default Messages;
