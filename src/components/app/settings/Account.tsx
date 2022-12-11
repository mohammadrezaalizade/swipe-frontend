import React from "react";

const Account = () => {
  return (
    <form className="flex flex-col gap-3 mt-4">
      <div className="flex flex-col group border-0 gap-2 ">
        <label htmlFor="name" className="text-gray-600 font-semibold">
          First Name
        </label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Mohammadreza"
          className="px-3 py-4 h-full w-full rounded-md outline-none text-[16px] text-gray-600 bg-gray-200/60 border-2 border-transparent focus-within:border-blue-500 transition-all duration-200"
        />
      </div>
      <div className="flex flex-col group border-0 gap-2 ">
        <label htmlFor="name" className="text-gray-600 font-semibold">
          Last Name
        </label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Alizadeh"
          className="px-3 py-4 h-full w-full rounded-md outline-none text-[16px] text-gray-600 bg-gray-200/60 border-2 border-transparent focus-within:border-blue-500 transition-all duration-200"
        />
      </div>
      <div className="flex flex-col group border-0 gap-2 ">
        <label htmlFor="name" className="text-gray-600 font-semibold">
          Email Address
        </label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="mohammadrezaalizadeh2002@gmail.com"
          className="px-3 py-4 h-full w-full rounded-md outline-none text-[16px] text-gray-600 bg-gray-200/60 border-2 border-transparent focus-within:border-blue-500 transition-all duration-200"
        />
      </div>
      <div className="flex flex-col group border-0 gap-2 ">
        <label htmlFor="name" className="text-gray-600 font-semibold">
          Password
        </label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="*******"
          className="px-3 py-4 h-full w-full rounded-md outline-none text-[16px] text-gray-600 bg-gray-200/60 border-2 border-transparent focus-within:border-blue-500 transition-all duration-200"
        />
      </div>
      <button className="w-full px-3 py-4 bg-blue-500 hover:bg-blue-500/90 transition duration-200 rounded-md font-semibold text-white mt-5">
        Save settings
      </button>
    </form>
  );
};

export default Account;
