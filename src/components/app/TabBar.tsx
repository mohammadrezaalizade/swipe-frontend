import React from "react";
import {
  ChatBubbleLeftIcon,
  UsersIcon,
  BellIcon,
  Cog6ToothIcon,
} from "@heroicons/react/24/solid";
const TabBar = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white shadow-sm p-4 flex justify-between items-center lg:hidden">
      <ChatBubbleLeftIcon className="w-7 h-7 text-gray-400 hover:text-blue-500 transition-all duration-200 cursor-pointer" />
      <UsersIcon className="w-7 h-7 text-gray-400 hover:text-blue-500 transition-all duration-200 cursor-pointer" />
      <BellIcon className="w-7 h-7 text-gray-400 hover:text-blue-500 transition-all duration-200 cursor-pointer" />
      <Cog6ToothIcon className="w-7 h-7 text-gray-400 hover:text-blue-500 transition-all duration-200 cursor-pointer" />
    </div>
  );
};

export default TabBar;
