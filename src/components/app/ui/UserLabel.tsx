import React from "react";
import avatar from "../../../assets/avatars/avatar-male-4.jpg";
import { status } from "../../../types/user";

interface Props {
  profileURL: string;
  status: status;
  name: string;
  lastMessage: string;
}

const UserLabel: React.FC<Props> = ({
  lastMessage,
  name,
  profileURL,
  status,
}) => {
  //If userlabel is active border bottom have to be border-blue-500 if is not border-b-gray-300
  return (
    <div
      className={`flex gap-4 justify-between border-b-2 border-b-gray-300 pb-2`}
    >
      <div className="flex gap-3 items-center">
        <div className="relative w-12 h-12 rounded-lg">
          <img
            src={profileURL}
            alt={name + "Profile"}
            className="absolute w-full h-full object-cover rounded-lg "
          />
          <span
            className={`w-2 h-2  absolute rounded-full border-[1px] border-white  bottom-0 right-0 ${
              status === "online" ? "bg-green-500" : "bg-gray-400"
            }`}
          />
        </div>
        <div className="inline-block w-[200px]">
          <h2 className="text-sm font-medium text-gray-600 truncate overflow-hidden block">
            {name}
          </h2>
          <p className="text-sm font-normal text-gray-500 w-full truncate overflow-hidden block">
            {lastMessage}
          </p>
        </div>
      </div>
      <p className="text-xs font-medium text-gray-600">Today</p>
    </div>
  );
};

export default UserLabel;
