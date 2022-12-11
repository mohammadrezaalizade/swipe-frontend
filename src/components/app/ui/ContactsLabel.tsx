import React from "react";
import Profile from "./Profile";
import { UserIcon } from "@heroicons/react/20/solid";
import { status } from "../../../types/user";

interface Props {
  profileURL: string;
  status: status;
  name: string;
  location: string;
}

const ContactsLabel: React.FC<Props> = ({
  location,
  name,
  profileURL,
  status,
}) => {
  return (
    <div className="flex gap-4 justify-between border-b-2 border-b-gray-300 pb-2  hover:border-blue-500 cursor-pointer transition duration-200 items-center">
      <div className="flex gap-3 items-center">
        <Profile name={name} photo={profileURL} status={status} />
        <div className="inline-block w-[200px]">
          <h2 className="text-sm font-medium text-gray-600 truncate overflow-hidden block">
            {name}
          </h2>
          <p className="text-sm font-normal text-gray-500 w-full truncate overflow-hidden block">
            {location}
          </p>
        </div>
      </div>
      <UserIcon className="icon" />
    </div>
  );
};

export default ContactsLabel;
