import React from "react";
import logo from "../../assets/favicon.png";
import { useNavigate } from "react-router-dom";
import {
  ChatBubbleLeftIcon,
  UsersIcon,
  BellIcon,
  Cog6ToothIcon,
} from "@heroicons/react/24/solid";
const Sidebar = () => {
  const navigate = useNavigate();
  return (
    <div className="hidden lg:flex lg:flex-col w-[10vw] flex-[0.5] border-r border-dashed items-center px-3 py-4 justify-between my-2">
      <div className="flex flex-col gap-8">
        <img
          onClick={() => navigate("/")}
          className="min-w-[50px] h-auto object-cover cursor-pointer"
          src={logo}
          alt="Logo"
        />
        <div className="flex flex-col gap-3 items-center">
          <ChatBubbleLeftIcon className="w-7 h-7 text-gray-400 hover:text-blue-500 transition-all duration-200 cursor-pointer" />
          <UsersIcon className="w-7 h-7 text-gray-400 hover:text-blue-500 transition-all duration-200 cursor-pointer" />
          <BellIcon className="w-7 h-7 text-gray-400 hover:text-blue-500 transition-all duration-200 cursor-pointer" />
        </div>
      </div>
      <div>
        <Cog6ToothIcon className="w-7 h-7 text-gray-400 hover:text-blue-500 transition-all duration-200 cursor-pointer" />
      </div>
    </div>
  );
};

export default Sidebar;
