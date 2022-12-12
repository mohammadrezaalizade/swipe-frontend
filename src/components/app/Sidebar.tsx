import React from "react";
import logo from "../../assets/favicon.png";
import { useNavigate } from "react-router-dom";
import {
  ChatBubbleLeftIcon,
  UsersIcon,
  BellIcon,
  Cog6ToothIcon,
} from "@heroicons/react/24/solid";
import { ScreenType } from "../../types/screen";

interface Props {
  cureentScreen: ScreenType;
  setCureentScreen: (data: ScreenType) => void;
}

const Sidebar: React.FC<Props> = ({ cureentScreen, setCureentScreen }) => {
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
          <ChatBubbleLeftIcon
            onClick={() => setCureentScreen("MESSAGES")}
            className={`w-7 h-7 hover:text-blue-500 transition-all duration-200 cursor-pointer  ${
              cureentScreen === "MESSAGES"
                ? "text-blue-500 scale-125"
                : "text-gray-400 scale-100"
            }`}
          />
          <UsersIcon
            onClick={() => setCureentScreen("CONTACTS")}
            className={`w-7 h-7 hover:text-blue-500 transition-all duration-200 cursor-pointer ${
              cureentScreen === "CONTACTS"
                ? "text-blue-500 scale-125"
                : "text-gray-400 scale-100"
            }`}
          />
          <BellIcon
            onClick={() => setCureentScreen("NOTIFICATIONS")}
            className={`w-7 h-7 hover:text-blue-500 transition-all duration-200 cursor-pointer ${
              cureentScreen === "NOTIFICATIONS"
                ? "text-blue-500 scale-125"
                : "text-gray-400 scale-100"
            }`}
          />
        </div>
      </div>
      <div>
        <Cog6ToothIcon
          onClick={() => setCureentScreen("SETTINGS")}
          className={`w-7 h-7 hover:text-blue-500 transition-all duration-200 cursor-pointer ${
            cureentScreen === "SETTINGS"
              ? "text-blue-500 scale-125"
              : "text-gray-400 scale-100"
          }`}
        />
      </div>
    </div>
  );
};

export default Sidebar;
