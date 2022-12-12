import React from "react";
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

const TabBar: React.FC<Props> = ({ cureentScreen, setCureentScreen }) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white shadow-sm p-4 flex justify-between items-center lg:hidden">
      <ChatBubbleLeftIcon
        onClick={() => setCureentScreen("MESSAGES")}
        className={`w-7 h-7  hover:text-blue-500 transition-all duration-200 cursor-pointer ${
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
      <Cog6ToothIcon
        onClick={() => setCureentScreen("SETTINGS")}
        className={`w-7 h-7 hover:text-blue-500 transition-all duration-200 cursor-pointer ${
          cureentScreen === "SETTINGS"
            ? "text-blue-500 scale-125"
            : "text-gray-400 scale-100"
        }`}
      />
    </div>
  );
};

export default TabBar;
