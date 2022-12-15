import React from "react";
import avatar from "../../../../assets/avatars/avatar-male-1.jpg";
const Contact = () => {
  return (
    <div className="flex gap-3 items-center">
      <img
        src={avatar}
        alt="contact prrofile"
        className="w-9 sm:w-11 h-9 sm:h-11 rounded-full"
      />
      <div className="flex flex-col">
        <h1 className="text-[10px] sm:text-sm font-semibold text-gray-600">
          Mohammad NRZ
        </h1>
        <p className="text-[8px] sm:text-sm text-gray-500 font-medium">
          online
        </p>
      </div>
    </div>
  );
};

export default Contact;
