import React from "react";
import Input from "./ui/Input";

const Messages = () => {
  return (
    <div className="flex flex-col gap-4">
      <Input />
      <div className="relative  py-2 px-2 flex justify-between items-center gap-4 bg-gray-200/60 rounded-md">
        <button className="h-9 w-full  font-semibold text-blue-500 shadow-sm bg-white rounded-md">
          Direct
        </button>
        <button className="h-9 w-full  font-semibold text-gray-400">
          Groups
        </button>
      </div>
    </div>
  );
};

export default Messages;
