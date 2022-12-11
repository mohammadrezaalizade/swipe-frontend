import React from "react";
import {
  UserIcon,
  NewspaperIcon,
  ShieldExclamationIcon,
} from "@heroicons/react/20/solid";
import { NotificationType } from "../../../types/notification";

interface Props {
  message: string;
  type: NotificationType;
}

const NotificationLabel: React.FC<Props> = ({ message, type }) => {
  const notificationIcon = () => {
    switch (type) {
      case "NEWS":
        return (
          <NewspaperIcon className="w-10 h-10 text-gray-400 bg-gray-200 p-2 rounded-full" />
        );

      case "SECURITY":
        return (
          <ShieldExclamationIcon className="w-10 h-10 text-gray-400 bg-gray-200 p-2 rounded-full" />
        );
      case "USER":
        return (
          <UserIcon className="w-10 h-10 text-gray-400 bg-gray-200 p-2 rounded-full" />
        );
    }
  };

  return (
    <div className="flex items-center gap-4 border-b-2 border-b-gray-300 pb-2 group hover:border-blue-500 cursor-pointer transition duration-200">
      {notificationIcon()}
      <p className="text-sm font-semibold text-gray-600 truncate">{message}</p>
    </div>
  );
};

export default NotificationLabel;
