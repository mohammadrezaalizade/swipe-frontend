import React, { useState } from "react";
import { PaperAirplaneIcon, FaceSmileIcon } from "@heroicons/react/24/solid";
const Footer = () => {
  const [textInputValue, setTextInputValue] = useState("");
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white px-4 py-3 shadow-[0px_-4px_12px_-4px_rgba(0,0,0,0.1)]">
      <div className="relative p-3 flex justify-between items-center gap-4 bg-gray-200/60 rounded-md">
        <FaceSmileIcon className="icon cursor-pointer hover:text-blue-500 z-10" />
        <input
          type="text"
          name=""
          id=""
          placeholder="Type message..."
          className="absolute outline-none border-none bg-transparent w-full mx-10 font-medium text-sm text-gray-600"
          value={textInputValue}
          onChange={(e) => setTextInputValue(e.target.value)}
        />
        {textInputValue.trim().length > 0 && (
          <PaperAirplaneIcon className="icon cursor-pointer hover:text-blue-500 z-10" />
        )}
      </div>
    </div>
  );
};

export default Footer;
