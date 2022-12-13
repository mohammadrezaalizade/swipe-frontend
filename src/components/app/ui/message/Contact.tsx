import React from "react";
import avatar from "../../../../assets/avatars/avatar-male-1.jpg";
const Contact = () => {
  return (
    <div className="flex gap-3 items-center">
      <img
        src={avatar}
        alt="contact prrofile"
        className="w-12 h-12 rounded-full"
      />
      <div className="flex flex-col">
        <h1 className="text-sm font-semibold text-gray-600">Mohammad NRZ</h1>
        <p className="text-xs text-gray-500 font-medium">online</p>
      </div>
    </div>
  );
};

export default Contact;
