import React from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
const Input = () => {
  return (
    <div className="relative py-6 px-3 flex justify-between items-center gap-4 bg-gray-200/60 rounded-md">
      <MagnifyingGlassIcon className="icon absolute z-50" />
      <input
        type="text"
        placeholder="Search"
        className="absolute h-full w-full bg-transparent outline-none border-none pl-10 pr-6 text-[16px] text-gray-600"
      />
    </div>
  );
};

export default Input;
