import React from "react";
import avatar from "../../assets/avatars/avatar-male-6.jpg";
import HeadLine from "./ui/HeadLine";
const Settings = () => {
  return (
    <div className="flex flex-col gap-4 overflow-hidden">
      {/* OWNER INFORMATION */}
      <div className="flex gap-4 items-center">
        <img
          className="w-16 h-16 rounded-full"
          src={avatar}
          alt="Mohammadreza Alizadeh profile"
        />
        <div className="flex flex-col">
          <h1 className="text-gray-600 font-semibold">Mohammadreza Alizadeh</h1>
          <p className="text-gray-500 text-sm">USA, LA</p>
        </div>
      </div>
      <HeadLine title="Settings" />
    </div>
  );
};

export default Settings;
