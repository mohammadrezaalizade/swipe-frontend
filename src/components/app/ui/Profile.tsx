import React from "react";
import { status } from "../../../types/user";

interface Props {
  photo: string;
  name: string;
  status: status;
}

const Profile: React.FC<Props> = ({ photo, name, status }) => {
  return (
    <div className="relative w-12 h-12 rounded-lg">
      <img
        src={photo}
        alt={name + "Profile"}
        className="absolute w-full h-full object-cover rounded-lg "
      />
      <span
        className={`w-2 h-2  absolute rounded-full border-[1px] border-white  bottom-0 right-0 ${
          status === "online" ? "bg-green-500" : "bg-gray-400"
        }`}
      />
    </div>
  );
};

export default Profile;
