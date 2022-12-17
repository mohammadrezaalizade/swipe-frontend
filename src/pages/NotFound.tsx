import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="w-screen h-screen bg-gray-50 flex flex-col gap-3 items-center justify-center">
      <h1 className="font-bold text-2xl text-gray-600">
        <span className="text-blue-500 underline ">404</span> Page Not Found
      </h1>
      <Link
        className="font-semibold text-blue-500 hover:underline text-lg transition-all duration-200"
        to="/"
      >
        Back to home page
      </Link>
    </div>
  );
};

export default NotFound;
