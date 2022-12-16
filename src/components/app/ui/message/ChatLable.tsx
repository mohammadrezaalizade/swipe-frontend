import React from "react";
import avatar from "../../../../assets/avatars/avatar-female-3.jpg";

interface Props {
  isOwner: boolean;
  contact: {
    profileURL: string;
    timestamp: string;
    message: string;
    usename: string;
  };
}

const ChatLable: React.FC<Props> = ({ isOwner, contact }) => {
  return (
    <div
      className="flex gap-2 w-full min-w-[100px]"
    >
      <div className={`flex gap-2 min-w-full md:max-w-sm ${
        isOwner ? "justify-end " : "justify-start"
      }`}>
        {!isOwner && (
          <img
            className="w-10 h-10 rounded-full"
            src={contact.profileURL}
            alt={contact.usename + "profile"}
          />
        )}
        <div
          className={`flex flex-col gap-1 ${
            isOwner ? "items-end" : "items-start"
          }`}
        >
          <p
            className={`px-2 py-3 rounded-lg text-xs shadow-sm font-normal text-gray-600 ${
              isOwner ? "bg-blue-500 text-white" : "bg-white "
            }`}
          >
            {contact.message}
          </p>
          <small className="text-[10px] font-semibold text-gray-500">
            {contact.timestamp}
          </small>
        </div>
      </div>
    </div>
  );
};

export default ChatLable;
