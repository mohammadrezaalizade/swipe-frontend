import React from "react";
import { useNavigate } from "react-router-dom";
import avatar from "../../../assets/avatars/avatar-male-4.jpg";
import { status } from "../../../types/user";
import Profile from "./Profile";

interface Props {
  profileURL: string;
  status: status;
  name: string;
  lastMessage: string;
  userId:number
}

const UserLabel: React.FC<Props> = ({
  lastMessage,
  name,
  profileURL,
  status,
  userId
}) => {
  const navigate = useNavigate();
  //If userlabel is active border bottom have to be border-blue-500 if is not border-b-gray-300
  const toChatPage = () => {
    navigate("/chat/:1");
  };
  return (
    <div
      onClick={toChatPage}
      className={`flex gap-4 justify-between border-b-2  pb-2 group hover:border-blue-500 cursor-pointer transition duration-200 ${userId === 1 ? "border-b-blue-500" : "border-b-gray-300"}`}
    >
      <div className="flex gap-3 items-center">
        <Profile name={name} photo={profileURL} status={status} />
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
